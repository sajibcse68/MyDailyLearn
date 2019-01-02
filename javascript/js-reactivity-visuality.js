let data = { price: 5, quantity: 2};
let target, total, salePrice;

class Dep {
  constructor() {
    this.subscribers = [];
  }
  depend() {
    console.log('target: ', target);
    if (target && !this.subscribers.includes(target)) {
      this.subscribers.push(target);
    }
  }
  notify() {
    this.subscribers.forEach(sub => sub());
  }
}

Object.keys(data).forEach(key => {
  let internalValue = data[key];
  const dep = new Dep();
  Object.defineProperty(data, key, {
    get() {
      dep.depend();
      return internalValue;
    },
    set(newVal) {
      internalValue = newVal;
      dep.notify();
    }
  });
});

function watcher(myFunc) {
  target = myFunc;
  target();
  target = null;
}

watcher(() => {
  total = data.price * data.quantity;
});

watcher(() => {
  salePrice = data.price * 0.9;
})



// total;            // 10
// salePrice;        // 4.5

// data.price = 12; // update price

// total;           // 24
// salePrice;       // 10.8
