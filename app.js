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

let test = document.querySelector("height");
    
test.addEventListener("mouseover", function( event ) {   
    // let num = Math.random()* 4;
    // console.log(Math.floor(num))
    // console.log(1)  
    let val = "abc";
    event.target.className = `col-2 pop ${val}`;
    let text = document.createTextNode("POP!");
    let text1 = document.getElementsByClassName('height');
    text.appendChild(text1)
        // for (var i = 0; i < 4 ; i++) {
        //     console.log(val)
        //     if (i = 0 ){
        //         console.log(i)
        //        val = "red";
        //        break;
        //     }else if (i = 1) {
        //         console.log(i)
        //         val = "blue";
        //        break;
        //     }else if (i = 2){
        //         console.log(i)
        //          val = "yellow";
        //        break;
        //     }else if (i = 3){
        //         console.log(i)
        //          val = "gray";
        //        break;
        //     }
        // }
        
  // highlight the mouseenter target
  // reset the color after a short delay
  setTimeout(function() {
    event.target.style.color = "";
  }, 500);
}, false);

// const lev1 = (event) => {
//     event.target.className = "red";
//     let num = Math.random()* 4;
    
//     for (var i = 0; i < 4 ; i++) {
//         if (i = 0 ){
//           return i = "red";
//         }else if (i = 1) {
//            return i = "blue"
//         }else if (i = 2){
//             return i = "yellow"
//         }else if (i = 3){
//             return i = "gray"
//         }
//     }
//     console.log(Math.floor(num))
//     console.log(1)
// }
// const outblue = () => {
//     document.getElementById('round-blue').className = "col-2 offset-1 pop round-yellow";
// }
// const outblue1 = () => {
//     document.getElementById('round-blue1').className = "col-2 pop round-yellow";
// }
// const outblue2 = () => {
//     document.getElementById('round-blue2').className = "col-2 pop round-yellow";
// }
// const outblue3 = () => {
//     document.getElementById('round-blue3').className = "col-2 pop round-yellow";
// }
// const outblue4 = () => {
//     document.getElementById('round-blue4').className = "col-2 pop round-yellow";
// }