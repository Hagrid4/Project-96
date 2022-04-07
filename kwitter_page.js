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
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";


function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_chat.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       //Start code
       console.log("Room name - " + Room_names);
       row = "<div class='room_name' id=" + Room_names +" onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
       document.getElementById("output").innerHTML += row;
       //End code
      });});}
getData();

function redirectToRoomName(name)
{
      localStorage.setItem("room_name", name);
      window.location = "kwitter_chat.html";
      console.log("name " + name);
}
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter_login.html";
}