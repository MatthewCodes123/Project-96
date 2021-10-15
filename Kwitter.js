function addUser(){
    var username =document.getElementById("user_name").value;
    localStorage.setItem("kwittername", username);
    window.location="kwitter_room.html"
}