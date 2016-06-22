import firebase from 'firebase';

// Initialize Firebase
var config = {
 apiKey: "AIzaSyAdQLs71IQej2DTKn7XIsV8XRrA60aRbIE",
 authDomain: "cook-todo-app.firebaseapp.com",
 databaseURL: "https://cook-todo-app.firebaseio.com",
 storageBucket: "cook-todo-app.appspot.com",
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
  app: {
    name: 'Todo App',
    version: '1.0.0'
  },
  isRunning: true,
  user: {
    name: 'George',
    age: 23
  }
});

// var notesRef = firebaseRef.child('notes');
//
// notesRef.on('child_added', (snapshot) => {
//   console.log('child_added', snapshot.key, snapshot.val());
// });
//
// notesRef.on('child_changed', (snapshot) => {
//   console.log('child_changed', snapshot.key, snapshot.val());
// });
//
// notesRef.on('child_removed', (snapshot) => {
//   console.log('child_removed', snapshot.key, snapshot.val());
// });
//
// var newNoteRef = notesRef.push({
//   text: 'Do some stuff!'
// });

//create var ref to todos array
var todosRef = firebaseRef.child('todos');

//child add - print key
todosRef.on('child_added', (snapshot) => {
   console.log('child_added', snapshot.key, snapshot.val());
 });

//add two todos - push - refresh - test
var todoRef1 = todosRef.push({
   text: 'Do some stuff!'
 });

 var todoRef2 = todosRef.push({
    text: 'Do something else!'
  });
