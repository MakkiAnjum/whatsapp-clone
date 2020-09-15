import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC83KWh2ugBejXWM8ZhZ1iNK3NCo06jr5A",
    authDomain: "whatsapp-clone-c45c2.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-c45c2.firebaseio.com",
    projectId: "whatsapp-clone-c45c2",
    storageBucket: "whatsapp-clone-c45c2.appspot.com",
    messagingSenderId: "1058912520042",
    appId: "1:1058912520042:web:5a2d09cf1be9a141a48713"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db 