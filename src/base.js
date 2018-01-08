import firebase from 'firebase';

const base = firebase.initializeApp({
  apiKey: "AIzaSyAjatMJL2LRt9hubpytwxXPJj5a2h6hzX8",
  authDomain: "alphabook-23181.firebaseapp.com",
  databaseURL: "https://alphabook-23181.firebaseio.com",
	projectId: "alphabook-23181",
  storageBucket: "alphabook-23181.appspot.com"
});

export default base;
