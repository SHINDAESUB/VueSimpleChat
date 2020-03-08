import firebase from 'firebase'
import 'firebase/firestore'

 var config = {
    apiKey: "AIzaSyAry04aiSs3SPtInDDPmFBmVNafrFNa3Hg",
    authDomain: "simplechat-1dbe9.firebaseapp.com",
    databaseURL: "https://simplechat-1dbe9.firebaseio.com",
    projectId: "simplechat-1dbe9",
    storageBucket: "simplechat-1dbe9.appspot.com",
    messagingSenderId: "792996372116",
    appId: "1:792996372116:web:888acc5c6c78e0cdbbde81",
    measurementId: "G-7ZL3H3SS9S"
  };

let app=firebase.initializeApp(config); //firebase app을 초기화
export const db =app.firestore()        //cloud firestore 나타냄