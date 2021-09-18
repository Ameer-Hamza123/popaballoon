const firebaseConfig = {
    apiKey: "AIzaSyCsm7jobCefrNM-WsG39xSBgn-zO6JpanA",
    authDomain: "pop-a-balloon-game-df9c8.firebaseapp.com",
    projectId: "pop-a-balloon-game-df9c8",
    storageBucket: "pop-a-balloon-game-df9c8.appspot.com",
    messagingSenderId: "986262012275",
    appId: "1:986262012275:web:a422b85ccb4eda1fed8506",
    measurementId: "G-D2NH1GZPR9"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const firestore = firebase.firestore();

function signin() {
    const email = document.getElementById("emailin").value;
    const password = document.getElementById("passwordin").value;
    auth.signInWithEmailAndPassword(email, password)
        .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
        });
}

function logout() {
    auth.signOut();
}

function signup() {
    const email = document.getElementById("emailup").value;
    const password = document.getElementById("passwordup").value;
    console.log(email, password);
    auth.createUserWithEmailAndPassword(email, password)
        .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
        });
}

auth.onAuthStateChanged((user) => {
    if (user) {
        firestore.collection('users').doc(user.uid).set({
            email: user.email,
            lastLoggedInAt: new Date()
        })
            .then(() => {
                console.log("Document written");
            })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });
        document.getElementById("user").innerHTML = user.email;
        document.getElementById("register").style.display = "none";
        document.getElementById("login").style.display = "none";
        document.getElementById("game").style.display = "none";
        document.getElementById("home").style.display = "block";
    } else {
        document.getElementById("login").style.display = "block";
        document.getElementById("register").style.display = "none";
        document.getElementById("home").style.display = "none";
        document.getElementById("game").style.display = "none";
    }
});

const makeaccount = () => {
    document.getElementById("login").style.display = "none";
        document.getElementById("register").style.display = "block";
        document.getElementById("home").style.display = "none";
        document.getElementById("game").style.display = "none";
}
const already = () => {
    document.getElementById("login").style.display = "block";
    document.getElementById("register").style.display = "none";
    document.getElementById("home").style.display = "none";
    document.getElementById("game").style.display = "none";
}
const startgame = () => {
    document.getElementById("login").style.display = "none";
    document.getElementById("register").style.display = "none";
    document.getElementById("home").style.display = "none";
    document.getElementById("game").style.display = "block";
    document.getElementById("Level-2").style.display = "none";
    document.getElementById("Level-3").style.display = "none";
    document.getElementById("Level-4").style.display = "none";
    document.getElementById("Level-5").style.display = "none";
    document.getElementById("Level-6").style.display = "none";
    document.getElementById("Level-7").style.display = "none";
    document.getElementById("Level-8").style.display = "none";
    document.getElementById("Level-9").style.display = "none";
    document.getElementById("Level-10").style.display = "none";

    
}

let test = document.querySelector(".main-balls");
    
test.addEventListener("mouseover", function( event ) {  
        let val = "abc";
        let score;
        setTimeout(function() {
        if (event.target.className === "col-2 pop blue height"){
             score += 10;
             console.log(score)
            }else {
                location.reload();
            }
            if (event.target.className === "col-2 pop blue height" ){
            event.target.className = `col-2 pop ${val}`;
            }else if (event.target.className === "col-2 pop yellow height") {
                event.target.className = `col-2 pop ${val}`;
            }else if (event.target.className === "col-2 pop red height") {
                event.target.className = `col-2 pop ${val}`;
            }else if (event.target.className === "col-2 pop gray height") {
                event.target.className = `col-2 pop ${val}`;
            }

  }, 2000);
}, false);
