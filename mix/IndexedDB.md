#### What is IndexedDB:
- IndexedDB is a way for you to persistently store data inside a user's browser.
Because it lets you create web applications with rich query abilities regardless of network availability,
your applications can work both online and offline.

#### Basic Pattern
The basic pattern that IndexedDB encourages is the following:

- Open a database.
- Create an object store in the database.
- Start a transaction and make a request to do some database operation, like adding or retrieving data.
- Wait for the operation to complete by listening to the right kind of DOM event.
- Do something with the results (which can be found on the request object).

#### Coding example:

```
// initialize IDB object
const idb = global.indexedDB ||
            global.mozIndexedDB ||
            global.webkitIndexedDB ||
            global.msIndexedDB;

// open 
const open = idb.open('db-name', 2);

let db = '';

open.onupgradeneeded = function upgradeNeeded() {
  bd = open.result;
  db.createObjectStore('store-name', { autoIncrement: true });
};
open.onsuccess = function openSuccess() {
  db = open.result;

  const db.transaction('store-name', 'readonly');
  // mode = readonly, readwrite, etc.

  const store = tx.objectStore('store-name');

  const getValue = store.get('key-name');

  getValue.onsuccess = function getValueSuccess() {
    const val = getValue.result;
    console.log('value is: ', val);
  }

  getValue.onerror = function getValueError(e) {
    console.log('Error is: ', e);
  }

  tx.oncomplete = function txComplete() {
    db.close();
  }
}
```

#### Miscellaneous:

```
// delete DB from chrome console
$ indexedDB.deleteDatabase('db-name');
```
