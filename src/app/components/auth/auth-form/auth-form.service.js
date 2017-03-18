function AuthService ($firebaseAuth) {
  var auth = $firebaseAuth();
  var authData = null;
  function storeAuthData(response) {
    authData = response;
    return authData;
  }
  this.register = function (user) {
    return auth
      .$createUser(user)
      .then(storeAuthData);
  };
}

angular
  .module('components.auth')
  .service('AuthService', AuthService);
