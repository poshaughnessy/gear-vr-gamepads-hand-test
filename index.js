AFRAME.registerComponent('gamepad-test', {
  schema: {},
  init: function () {
    
    var outputElement = document.getElementById('output');
    var gamepads = navigator.getGamepads();

    console.log('Gamepads', gamepads);

    outputElement.setAttribute('text', JSON.stringify(gamepads));
    
  }
});