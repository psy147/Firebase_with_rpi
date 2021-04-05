

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
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User

      var uid = user.uid;
      // ...
      
      console.log("log in succesfull")
    } else {
      // User is signed out
      // ...
      window.location.assign("login.html")
      console.log("in script.js and not logged in")
            
    }
  });
  
  let dbRef=firebase.database().ref("light");
  function on(){
      dbRef.set(1)
  }
  function off(){
    dbRef.set(0)
}
let temp=firebase.database().ref("Temperature");
let humi=firebase.database().ref("Humidity");
temp.on("value",function(snapshot){     //variable for firebase
    let tempValue = snapshot.val();
    document.querySelector("#tempOutput").innerHTML=tempValue;
})
humi.on("value",function(p1){     //variable for firebase
    let humiValue = p1.val();
    document.querySelector(".humiOutput").innerHTML=humiValue;
})
let pressure = firebase.database().ref("NTPC").child("Plant-A").child("Pressure");            //creating
pressure.set(20);
function signOut() {
  // [START auth_sign_out]
  firebase.auth().signOut().then(() => {
    console.log("Sign-out successful")
  }).catch((error) => {
    var errorMessage = error.message;
    alert(errorMessage);
    console.log("sign out not successful")
  });
  // [END auth_sign_out]
}