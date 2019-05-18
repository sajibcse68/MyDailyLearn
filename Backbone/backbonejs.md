
#### Backbone.js (jeremy Ashkenas)
- "Get your truth out of the DOM" ___ Jermy Ashkenas
- Backbone:
  - Provides client-side app structure
  - Models to represent data
  - Views to hook up models to the DOM
  - Synchorizes data to/from server


#### Model
```js
// create a model class
- var TodoItem = Backbone.Model.extend({});
// create a model instance
- var todoItem = new TodoItem({ description: 'pick up milk', status: 'incomplete'});
// to get an attribute
- todoItem.get('description');      
// set an attribute
- todoItem.set(status: 'complete');                                                 
```
#### View
```js
// create a view class
- var TodoView = Backbone.View.extend({});         
// create a view instance
- var todoView = new TodoVeiw({ model: todoItem });
```
#### Fetching Data from Server
```js
// URL to get JSON data for model
todoItem.url = '/todo';
// RESTful web service (Rails flavor)
var TodoItem = Backbone.Model.extend({urlRoot: '/todos'});
var todoItem = new TodoItem({ id: 1 });
// to load model from server
todoItem.fetch();
 // POST /todos with JSON params
todoItem.save();
// DELETE /todos/1
todoItem.destroy();
```
#### Event
```js
// Listen an event on a model
todoItem.on('event-name', function(){
  alert('event-name happend!');
});

// run the event
todoItem.trigger('event-name');                                     
// backbone build in event, call donothing when any change in model
todoItem.on('change', doThing);                                    
// set without triggering change event
todoItem.set({description: 'demo description'}, {silent: true}); 
// remove an event
todoItem.off('change', doThing);

// format of an event
events: {
  "<event> <selector>": "<method>"
};                                                                    
```
#### Remove view on model destroy
```js
var TodoView = Backbone.View.extend({
initialize: function(){
// without third args render context will be 'window' not will be bound to 'todoView'
    this.model.on('change', this.render, this);
    this.model.on('destroy', this.remove, this);
  }
});
```

#### History save
- pushState off (#todos/1)
    - Backhone.history.start(); 
- pushState on (/todos/1) 
    - Backhone.history.start({ pushState: true });

### Listen collect from view, if any model is added in collect then corresponding view will be called, create a view with that model and add it in DOM
```js
// listen collection
var AppointmentListView = Backbone.View.extend({
  initialize: function(){
	this.collection.on('add', this.addOne, this);  
  },
  render: function(){
    this.collection.forEach(this.addOne, this);
  },
  // creating view with model data and adding it in DOM
  addOne: function(model){
    var appointmentView = new AppointmentView({model: model});
    appointmentView.render();
    this.$el.append(appointmentView.el);
  }
});
```
#### Organized router @codeSchool

```js
var TodoApp = new (Backbone.Router.extend({
	routes: {
		"": "index",
		"/todos/:id": "show"
	},
	initialize: function() {
		this.todoList = new TodoList();
		this.todosVeiw = new TodoListView({collection: this.todolist});
		$('#app').append(this.todosView.el);
	},
	start: function(){
		Backbone.history.start({pushState: true});
	}
	index: function(){
		this.todoList.fetch();
	}
	show: function(){
		this.todoList.focusOnTodoItem(id);
	}
}));
```
#### You'll want to create an instance of the AppointmentView, render it, and replace the contents of #app with its top-level element.

- Lastly, don't forget to fetch data from the server for the appointment.

```js
var AppRouter = Backbone.Router.extend({
  routes: { "appointments/:id": "show" },
  show: function(id){
    var appointment = new Appointment({id: id});
    var appointmentView = new AppointmentView({model: appointment});
    appointmentView.render();
    $('#app').html(appointmentView.el);
    appointment.fetch();
  }
});
```
- First, instead of assigning a Router class to AppRouter, just create the Router instance.
- Next, instead of passing in the appointmentList collection in initialize, create an     instance of AppointmentList and assign it to this.appointmentList.
- Add a start function to the router to start our Backbone history with pushState on.
- Finally, call the router's start function from inside a jQuery ready function to ensure we don't start updating the DOM before it's ready.

```js
var AppRouter = new (Backbone.Router.extend({
  routes: { "appointments/:id": "show", "": "index" },

  initialize: function(options){
    this.appointmentList = new AppointmentList();
  },

  start: function(){
    Backbone.history.start({pushState: true});
  },

  index: function(){
    var appointmentsView = new AppointmentListView({collection: this.appointmentList});
    appointmentsView.render();
    $('#app').html(appointmentsView.el);
    this.appointmentList.fetch();
  },

  show: function(id){
    var appointment = new Appointment({id: id});
    var appointmentView = new AppointmentView({model: appointment});
    appointmentView.render();
    $('#app').html(appointmentView.el);
    appointment.fetch();
  }
}));

$(function(){ AppRouter.start() });
```

## Anatomy of Backbone.js Part 2

### Reviewing how model data is fetched from server

#### Customizing Collections

```js
var TodoItems = Backbone.Collection.extend({
    comparator: function(todo1, todo2){
    // sort by status in reverse order
      return todo1.get('status') < todo2.get('status');
    }
});
var TodoItems = Backbone.Collection.extend({
    comletedCount: function(){
      // returns filtered( only return completed lists) array of models
      return this.where({status: 'complete'}).length;
    }
});
```
#### Real Routes

```js
var TodoRouter = new (Backbone.Router.extend({
  routes: {
    'search/:query': 'search',
    'search/:query/p:page': 'search'
    // 'search/:query(/p:page)': 'search'                  
    // (/p:page)  is optional route
    '*path': 'notFound' // catch all routes
  },
search: function(query, page){
    page = page || 0;
    // ../Hello%20World/ ->../Hello World,
    query = decoradeURIComponent(query)
    console.log(query);
    console.log(page);
  }
}))
// Each regex ((\d+)) capture group becomes a param
TodoRouter.route(/^todos\/(\d+)$/. 'show')
Advanced Regex Routes // need to know
```

#### Varying views

```js
- var TodoView = Backbone.View.extend({
    initialize: function() {
    // view "listen to" a model
      this.listenTo(this.model, 'change', this.render);
    }
})
// stop all listeners for this view
todoView.stopListening();
todoView.remove();

var TodoForm = Backbone.View.extend({
  template: _.template('<form>' +
  '<input name=description value="<%= description  %>" />' +
  '<button>Save</button></form>'),
  events: {
    'click button': 'save'
    // will call 'save' method  on either click or pressing Enter/Return
    'submit': 'save' 
  },
  save: function(e) {
  // prevent the defautl behavior of the form
    e.preventDefault();
    // take the input field value.
    var newDescription = this.$('input[name=description]').val();
    // save() -> POST /todos {descriiption: 'Pickup Kids.'}
    this.model.save({description: newDescription}); 
  }
})
```

#### App organization

- skip links using events

```js
<ul>
<li><a href="/completed" data-internal="true">Show Completed</a></li>
<li><a href="/completed"</a></li>
</ul>

events: {
  'click a[data-internal]': fucntion(e) {
  }
}
```

#### Make read only model

- method = "read", "create", "update", or "delete"
- todoItem.fetch();
- todoItem.save();

```js
  var TodoItem = Backbone.Model.extend({
  sync: function(method, model, options){
    if(method === "read"){
      Backbone.sync(method, model, options);
    } else {
        console.error("You can not " + method + " the TodoItem model");
    }
  }
})
```

- How would we replace a server with localStorage?
  - It's a browser site storage that most browser have
  - set an item
    - localStorage.setItem(<key>, <value>)
  - get an item
    - localStorage.getItem("aniaml")
  - remove an item
    - localStorage.remove()
  - returns "cat"  object syntax
    - lovslStorage["animal"] 

- <script src="backbone-localstorage.js"/>


#### Run project

```sh
$ gulp
```
#### Show gulp command error details

```sh
$ gulp prod
// js debugger
$ debugger         
```
#### The issues with React is that

- It is very new and most existing libraries are not ready.
- React only handles the View part of MVC. You have to use you own components for M and C.
- React is all JS, even CSS is changed via JS ( that will make it very difficult to work with for anyone not programmer)
- I think JSX syntax is just ugly. React is like hand written GWT.
- React has some good ideas but I don't like how it works. Also, it makes it hard to use other libraries like Jquery.
  The thing I like about backbone is it is simple and stable. We can just any existing jquery library with it.
.....
