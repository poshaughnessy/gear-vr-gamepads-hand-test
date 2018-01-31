AFRAME.registerComponent('gamepad-test', {
  schema: {
    output: {default: '#output'}
  },
  init: function () {
    
    var data = this.data;

    this.el.addEventListener('click', function() {
      var outputElement = document.querySelector(data.output);
      var gamepads = navigator.getGamepads();

      console.log('Gamepads', gamepads);

      outputElement.setAttribute('text', 'value: ' + JSON.stringify(gamepads));
    
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