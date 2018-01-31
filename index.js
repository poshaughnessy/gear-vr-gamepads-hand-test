AFRAME.registerComponent('gamepad-test', {
  schema: {
    output: {default: '#output'}
  },
  init: function () {
    
    this.el.addEventListener('click', function() {
      var outputElement = document.querySelector(this.data.output);
      var gamepads = navigator.getGamepads();

      console.log('Gamepads', gamepads);

      outputElement.setAttribute('text', JSON.stringify(gamepads));
    
    });

  }
});

AFRAME.registerComponent('instructions', {
  schema: {},
  init: function() {
    var scene = document.querySelector('a-scene');
    if (scene.hasLoaded) {
      this.updateInstructions();
    }
    scene.addEventListener('loaded', this.updateInstructions);
  },
  updateInstructions: function() {
    this.el.setAttribute('text', 'Now "click" the button');
  }
});