const firebaseConfig = {
  apiKey: "AIzaSyDNF5prnee-EP0IipRXXrmNOGZwUF_U9Bo",
  authDomain: "kwitter-3aeb0.firebaseapp.com",
  databaseURL: "https://kwitter-3aeb0-default-rtdb.firebaseio.com",
  projectId: "kwitter-3aeb0",
  storageBucket: "kwitter-3aeb0.appspot.com",
  messagingSenderId: "385952745505",
  appId: "1:385952745505:web:b75bc23ff2c791a15c3b60"
};

//const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);


user_name = localStorage.getItem("kwittername");

document.getElementById("username").innerHTML = "Welcome " + user_name + "!";

function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
        document.getElementById("output").innerHTML = ""; snapshot.forEach(
              function (childSnapshot) {
                    childKey = childSnapshot.key;
                    Room_names = childKey;
                    console.log("roomname" + Room_names);
                    div = document.createElement("div");
                    div.innerHTML = Room_names;
                    div.id = Room_names;
                    div.className = "room_name";
                    div.onclick = redirectToRoom;
                    document.getElementById("output").appendChild(div);
                    //End code
              });
  });
}
getData();

function addRoom() {
  room_name = document.getElementById("roomName").value;
  firebase.database().ref("/").child(room_name).update
        ({
              purpose: "adding room name"
        });
  localStorage.setItem("room_name", room_name);
  window.location = "kwitter_page.html";
}

function redirectToRoom(e) {
  rname = e.target.id
  console.log(rname)
  localStorage.setItem("room_name", rname)
  window.location = "kwitter_page.html"
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html"; }