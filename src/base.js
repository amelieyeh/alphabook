import firebase from 'firebase';
import Rebase from 're-base';

const app = firebase.initializeApp({
  apiKey: "AIzaSyAjatMJL2LRt9hubpytwxXPJj5a2h6hzX8",
  authDomain: "alphabook-23181.firebaseapp.com",
  databaseURL: "https://alphabook-23181.firebaseio.com",
});

const base = Rebase.createClass(app.database());

export default base;
