AFRAME.registerComponent('gamepad-test', {
  schema: {
    output: {default: '#output'}
  },
  init: function () {
    
    var outputElement = document.querySelector(this.data.output);

    this.el.addEventListener('click', function() {
      var gamepads = navigator.getGamepads();

      console.log('Gamepads', gamepads);

      outputElement.setAttribute('text', 'value: Gamepads: ' + JSON.stringify(gamepads));
    
    });

    window.addEventListener('gamepadconnected', function(e) {

      console.log("Gamepad connected at index %d: %s. %d buttons, %d axes.",
        e.gamepad.index, e.gamepad.id,
        e.gamepad.buttons.length, e.gamepad.axes.length);

      outputElement.setAttribute('text', 'value: Gamepad connected: ' + JSON.stringify(e.gamepad));

    });

  }
});

AFRAME.registerComponent('instructions', {
  schema: {},
  init: function() {
    var scene = document.querySelector('a-scene');
    scene.addEventListener('enter-vr', this.updateInstructions.bind(this));
    scene.addEventListener('exit-vr', this.resetInstructions.bind(this));
  },
  updateInstructions: function() {
    this.el.setAttribute('text', 'value: Now click the button;');
  },
  resetInstructions: function() {
    this.el.setAttribute('text', 'value: Enter VR by pressing the goggles icon;');
  }
});