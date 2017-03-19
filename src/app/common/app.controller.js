function AppController (AuthService, $state) {
  var ctrl = this;
  ctrl.user = AuthService.getUser();
}
