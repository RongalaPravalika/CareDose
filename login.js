// Import the functions you need from the SDKs you need//
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";

import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD7vTQ_U__JmVJGF5hZPhHXn47ofElEZvI",
    authDomain: "loginexample-5b078.firebaseapp.com",
    projectId: "loginexample-5b078",
    storageBucket: "loginexample-5b078.firebasestorage.app",
    messagingSenderId: "713829237319",
    appId: "1:713829237319:web:0fb7043027af098beb2762"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app);



const submit = document.getElementById('submit');
submit.addEventListener("click", function (event) {
    event.preventDefault()
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            alert("Logging in...")
            window.location.href="webpage.html"
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage)
            // ..
        });

        
})
