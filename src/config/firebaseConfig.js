import firebase from "firebase/app";
// Required for side-effects
import "firebase/firestore";
import { config } from "./appConfig";

firebase.initializeApp(config.firebase);

export const fireStore = firebase.firestore();