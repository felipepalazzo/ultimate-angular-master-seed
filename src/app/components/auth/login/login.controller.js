function LoginController ($state, AuthService) {
  var ctrl = this;
  ctrl.$onInit = function () {
    ctrl.error = null;
    ctrl.user = {
      email: '',
      password: '',
    };
  };
  ctrl.loginUser = function (event) {
    return AuthService
      .login(event.user)
      .then(function (user) {
        $state.go('app');
      }, function (reason) {
        ctrl.error = reason.message;
      })
  };
}

angular
  .module('components.auth')
  .controller('LoginController', LoginController);
