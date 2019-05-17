'use strict';

var bootState = {

    create: function() {

        /* starting the Arcade Physics system */
        game.physics.startSystem(Phaser.Physics.ARCADE);

        /* calling the load state */
        game.state.start('load');
    }
};