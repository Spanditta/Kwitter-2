user_name = localStorage.getItem("user_name")
document.getElementById("user_name").innerHTML="Welcome to my Kwitter App, " + user_name + "!"

var firebaseConfig = {
      apiKey: "AIzaSyDuV17DciUNsOnpYPISLWCdDx88T3C8g_4",
      authDomain: "kwitter-2-fc37d.firebaseapp.com",
      projectId: "kwitter-2-fc37d",
      storageBucket: "kwitter-2-fc37d.appspot.com",
      messagingSenderId: "388906552963",
      appId: "1:388906552963:web:93da2db882ce58d5e155b6"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name - " +  Room_name);
row = "<div class = 'room_name' id="+Room_names+" onclick='edirectToRoomName(this.id)' >#" + Room_names +"</div>hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
      
getData();

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({

      });

      localStorage.setItem("room_name", room_name);

      window.location="kwitter_page.html";
}

function redirectToRoomName (name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
          window.location = "kwitter.html";
}