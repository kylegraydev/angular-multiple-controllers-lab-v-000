function ContactController() {
  var vm = this

  vm.name = "someone"
  vm.email = "email@home.com"
  vm.phone = "867-5309"


  this.changeName = function() {
    vm.name = 'Something else!'
  }
}

angular
  .module('app')
  .controller('ContactController', ContactController)
