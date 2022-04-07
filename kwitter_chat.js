const firebaseConfig = {
    apiKey: "AIzaSyASvObcOvBpVCT9Ro6H9DXHX4IWKKHneKc",
    authDomain: "kwitter-project-ad782.firebaseapp.com",
    databaseURL: "https://kwitter-project-ad782-default-rtdb.firebaseio.com",
    projectId: "kwitter-project-ad782",
    storageBucket: "kwitter-project-ad782.appspot.com",
    messagingSenderId: "11623629885",
    appId: "1:11623629885:web:be54df314e1ebaa8871654"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code

//End code
 } });  }); }
getData();

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0,
      })
      document.getElementById("msg").value = "";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}