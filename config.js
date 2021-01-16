import firebase from 'firebase'

require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyDCtd72Eyr9Ki4LqrsiIMWIfzCB9fpHJ98",
  authDomain: "book-santa-81389.firebaseapp.com",
  projectId: "book-santa-81389",
  storageBucket: "book-santa-81389.appspot.com",
  messagingSenderId: "239932323048",
  appId: "1:239932323048:web:badf21d5a67b51a035c55d"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();