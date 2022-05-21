const firebaseConfig = {
  apiKey: "AIzaSyCPU9NYQch4xqQvI0KLJVc7PYz7XEI16xI",
  authDomain: "kwitter-97b61.firebaseapp.com",
  databaseURL: "https://kwitter-97b61-default-rtdb.firebaseio.com",
  projectId: "kwitter-97b61",
  storageBucket: "kwitter-97b61.appspot.com",
  messagingSenderId: "684100901353",
  appId: "1:684100901353:web:519e6c71e7dad3bb7cd378"
};

  // const app = initializeApp(firebaseConfig);
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
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}