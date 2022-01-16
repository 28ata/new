// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
      apiKey: "AIzaSyCjYAL8zmXy19TmD5YPUQMwaUIJCqmSFnM",
      authDomain: "kwitter-project-cb0b7.firebaseapp.com",
      projectId: "kwitter-project-cb0b7",
      storageBucket: "kwitter-project-cb0b7.appspot.com",
      messagingSenderId: "193107514910",
      appId: "1:193107514910:web:188b98869d21a0deed800f",
      measurementId: "G-T08ES1JDZF"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);

  user_name=localStorage.getItem("User_name");
  document.getElementById("user_Name").innerHTML = "Welcome " + user_name;
  
  function addRoom(){
        room_name = document.getElementById("room_name").value;
        firebase.database().ref("/").child(room_name).update({
              purpose:"adding room name"
        });
        localStorage.setItem("room_name", room_name);
        window.location = "htmlhtmlhtml.html";
  }
  
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
         Room_names = childKey;
        //Start code
        console.log("room name-" + Room_names);
        row = "<div class='room_name'  id=" + Room_names + " onclick='RedirectToRoomName(this.id)'>#" + Room_names + "</div> <hr>";
        document.getElementById("output").innerHTML += row;
         
        //End code
        });});}
  getData();
  function RedirectToRoomName(name){
        console.log(name);
        localStorage.setItem("room_name", name);
        window.location = "htmlhtmlhtml.html";
  }
  function send(){
        msg = document.getElementById("msg").value;
        firebase.database().ref(room_name).push({
              name:user_name,
              message:msg,
              like:0
        });
        document.getElementById("msg").value = "";
  }
  function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("html.html");
    }
    
  