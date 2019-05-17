'use strict';

var menuState = {

    create: function() {

        /* display the name of the game */
        let nameText = game.add.text(80, 80, 'My first game'.toUpperCase(),
            {font: '50px Arial', fill: '#ffffff'});

        /* display buttons */
        game.add.button(80, 250, 'button_play', this.buttonPlay, this, 2, 1, 0);
        game.add.button(80, 300, 'button_options', this.buttonOptions, this, 2, 1, 0);
        game.add.button(80, 350, 'button_credits', this.buttonCredits, this, 2, 1, 0);
    },

    buttonPlay: function() {

        game.state.start('play');
    },

    buttonOptions: function() {

        //game.state.start('options');
    },

    buttonCredits: function() {

        //game.state.start('credits');
    },
};