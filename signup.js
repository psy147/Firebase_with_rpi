// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "****",
    authDomain: "****",
    databaseURL: "***",
    projectId: "***",
    storageBucket: "***",
    messagingSenderId: "****",
    appId: "****"
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
