angular
  .module('components.auth', [
    'ui.router',
    'firebase'
  ])
  .config(function ($firebaseRefProvider) {
    var config = {
      apiKey: 'AIzaSyDEvB8bumPgXXqJVb-vG00RiOEqdAehiGw',
      authDomain: 'contacts-manager-c6719.firebaseapp.com',
      databaseURL: 'https://contacts-manager-c6719.firebaseio.com',
      storageBucket: 'contacts-manager-c6719.appspot.com',
      messagingSenderId: '652446250506'
    };
    $firebaseRefProvider
      .registerUrl({
        default: config.databaseURL,
        contacts: config.databaseURL + '/contacts'
      })
    firebase.initializeApp(config);
  });
