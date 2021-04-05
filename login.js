// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDJkKAb-DzRQimNmpf-oauZxfmqtpYqsvE",
    authDomain: "rpi-first-project.firebaseapp.com",
    databaseURL: "https://rpi-first-project-default-rtdb.firebaseio.com",
    projectId: "rpi-first-project",
    storageBucket: "rpi-first-project.appspot.com",
    messagingSenderId: "500606150148",
    appId: "1:500606150148:web:47e96edb5d940a4b927751"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var count =1
 
function submitted(){
    
    
    let email= document.querySelector("#email").value;
    let password= document.querySelector("#password").value;
    
    if(count ==1){
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    console.log("logged in (inside login.js)")
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    //alert(errorMessage);
    alert("you are not authorize!")
  });      // just for showing errors

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User

      var uid = user.uid;
      // ...
      window.location.assign("index.html");
      console.log("authourization success");
    } else {
      // User is signed out
      // ...
      window.location.assign("login.html");
      console.log("fail");
      
    }
  });
}}
count= 2;