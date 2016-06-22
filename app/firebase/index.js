import firebase from 'firebase';

try {
  // Initialize Firebase
  var config = {
   apiKey: "AIzaSyAdQLs71IQej2DTKn7XIsV8XRrA60aRbIE",
   authDomain: "cook-todo-app.firebaseapp.com",
   databaseURL: "https://cook-todo-app.firebaseio.com",
   storageBucket: "cook-todo-app.appspot.com",
  };

  firebase.initializeApp(config);
} catch(e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
