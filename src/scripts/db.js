// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue } from 'firebase/database';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyABL6CXQfFvxD-k3iRQcyOFnzlCEc0CYSM',
  authDomain: 'carehelp-8b522.firebaseapp.com',
  databaseURL: 'https://carehelp-8b522-default-rtdb.firebaseio.com',
  projectId: 'carehelp-8b522',
  storageBucket: 'carehelp-8b522.appspot.com',
  messagingSenderId: '1001335201481',
  appId: '1:1001335201481:web:d574e13a7b470a64a33718',
  databaseURL: 'https://carehelp-8b522-default-rtdb.firebaseio.com/',
};

// Initialize Firebase and DB
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

let events = {};
const eventsRef = ref(db, 'events/');
onValue(eventsRef, (snapshot) => {
  const data = snapshot.val();
  events = data;
});

export var getEvents = function () {
  return events;
};
