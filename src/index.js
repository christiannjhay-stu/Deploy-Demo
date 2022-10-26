 // Import the functions you need from the SDKs you need
 import './App.css';
 import {
   initializeApp
 } from 'firebase/app'

 import {
   getAuth
 } from "firebase/auth"
 import {
   collection,
   getFirestore,
   getDocs
 } from "firebase/firestore"

 const firebaseConfig = {
   apiKey: "AIzaSyCtl3h7GkR1EHVhy2pS9orpn4NyJHwKll4",
   authDomain: "music-instruments-3fc5b.firebaseapp.com",

   databaseURL: "https://music-instruments-3fc5b-default-rtdb.firebaseio.com",
   projectId: "music-instruments-3fc5b",
   storageBucket: "music-instruments-3fc5b.appspot.com",
   messagingSenderId: "1062191669650",
   appId: "1:1062191669650:web:e65c342d231ba8520ca14b",
   measurementId: "G-NE1MLRD94E"
 };

 // Initialize Firebase app
 const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);

 // init services
 const db = getFirestore()

 //collection ref
 const colRef = collection(db, 'users')

 //get collection data
 getDocs(colRef)
   .then((snapshot) => {
     var users = []
     snapshot.docs.forEach((doc) => {
       users.push({
         ...doc.data(),
         id: doc.id
       })
     })
     console.log(users)

     //JSON.stringify();

     //DISPLAY FUNCTION
     var x = 0;
     for (var i = 0; i < 5; i++) {

       var Price = users[i].price;
       var Name = users[i].userName;
       var imgUrl = users[i].userImage;
       //CREATE A DIV
       function addElement() {

         // create a new div element
         const newDiv = document.createElement("div");
         newDiv.setAttribute("id", "Div" + x);

         // and give it some content
         const newContent = document.createTextNode("₱" + Price + "  ");
         const newContent2 = document.createTextNode(Name + " ");

         // add the text node to the newly created div
         newDiv.appendChild(newContent);
         newDiv.appendChild(newContent2);
         console.log(Price);

        //DISPLAY IMAGE
         var img = document.createElement('img');
         img.setAttribute('height', '300px');
         img.setAttribute('width', '250px');
         img.src = imgUrl;
         newDiv.appendChild(img);

         // add the newly created element and its content into the DOM
         const currentDiv = document.getElementById("Div" + x);
         document.body.insertBefore(newDiv, currentDiv);
         x++
       }
       addElement.call();
     }

   })
   .catch(err => {
     console.log(err.message)
   })