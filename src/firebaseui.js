import firebase from 'firebase';

// Initialize Firebase with its configs here
// Initialize Firebase
const config = {
  apiKey: 'AIzaSyAwQj2-_ieRCXMEgF_drDQfYA-cdK4d_HM',
  authDomain: 'auth-workshop-5a4ce.firebaseapp.com',
  databaseURL: 'https://auth-workshop-5a4ce.firebaseio.com',
  storageBucket: 'auth-workshop-5a4ce.appspot.com',
};
firebase.initializeApp(config);

// Initialize the FirebaseUI Widget using Firebase here
const ui = new window.firebaseui.auth.AuthUI(firebase.auth());

export function start(callback) {
  // FirebaseUI configs here here
  // FirebaseUI config.
  const uiConfig = {
  //  'signInSuccessUrl': '', // Provides a redirect URL after signing in
    signInOptions: [
      // Leave the lines as is for the providers you want to offer your users.
      // Make sure to enable them on your console
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccess: (currentUser) => {
        callback(currentUser);
        return false;
      },
    },
  };
  // Put ui.start... here:
  // The start method will wait until the DOM is loaded.
  // Acts on the <div id="firebaseui-auth-container" /> tag
  ui.start('#firebaseui-auth-container', uiConfig);
}
