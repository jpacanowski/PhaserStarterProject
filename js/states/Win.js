'use strict';

var winState = {

    create: function() {

        let loadingText = game.add.text(0, 0, 'YOU WON',
            {font: '50px Arial', fill: '#00ff00', boundsAlignH: "center", boundsAlignV: "middle"});

        loadingText.setTextBounds(0, 0, game.world.width, game.world.height);

        /* instructions on how to start the game */
        let startText = game.add.text(80, game.world.height-80, 'press the "W" key to restart',
            {font: '25px Arial', fill: '#ffffff'});

        /* when the player presses the W key, we call the restart function */
        let wkey = game.input.keyboard.addKey(Phaser.Keyboard.W);

        wkey.onDown.addOnce(this.restart, this);
    },

    restart: function() {
    	
        game.state.start('menu');
    },
};