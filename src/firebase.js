import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
    // apiKey: "AIzaSyANfoLDGZsVAl8NwHJUlgLrUynJJMaSsg0",
    // authDomain: "auth-8b1ef.firebaseapp.com",
    // projectId: "auth-8b1ef",
    // storageBucket: "auth-8b1ef.appspot.com",
    // messagingSenderId: "445273762769",
    // appId: "1:445273762769:web:81f403cae7cb5fe3760ef0",

    apiKey: "AIzaSyBeBeYp_3WMZPwTc3xm0DGzOVVwuGUqmOg",
    authDomain: "video-chat-94bc0.firebaseapp.com",
    projectId: "video-chat-94bc0",
    storageBucket: "video-chat-94bc0.appspot.com",
    messagingSenderId: "260388616954",
    appId: "1:260388616954:web:9cf2e74cead5990b38e743",
    // measurementId: "G-S1Y8P7NEP8"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            const name = result.user.displayName;
            const email = result.user.email;
            const profilePic = result.user.photoURL;

            localStorage.setItem("name", name);
            localStorage.setItem("email", email);
            localStorage.setItem("profilePic", profilePic);
        })
        .catch((error) => {
            console.log(error);
        });
};