import firebase from 'firebase/compat/app';
import { getFirestore } from "firebase/firestore"
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import config from '../config/config';


const Firebase = firebase.initializeApp(config.firebase);

export const Providers = {
    google: new firebase.auth.GoogleAuthProvider()
}

export const uniKey = ()=> {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < 10; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
export const db = getFirestore();
export const auth = firebase.auth();
export default Firebase;