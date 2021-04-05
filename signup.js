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

 
function submitted(){
    let email= document.querySelector("#email").value;
    let password= document.querySelector("#password").value;
firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    // ...
    console.log("User created");
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
    alert(errorMessage);        //printing or poping up the error
    console.log("Error found");
  });
}