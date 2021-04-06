// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "****",
    authDomain: "***",
    databaseURL: "****",
    projectId: "***",
    storageBucket: "****",
    messagingSenderId: "** *",
    appId: " * ***"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
 
function submitted(){
    
    
    let email= document.querySelector("#email").value;
    let password= document.querySelector("#password").value;
    
    
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
      
      console.log("fail");
      
    }
  });
}
