'use strict';

var loadState = {

    preload: function() {
        
        let loadingText = game.add.text(game.world.centerX, game.world.centerY, 'loading...'.toUpperCase(),
            {font: '30px Courier', fill: '#ffffff', boundsAlignH: "center", boundsAlignV: "middle"});

        loadingText.anchor.setTo(0.5, 0.5);

        /* loading all assets */
        game.load.image('player', 'assets/images/player.png');
        game.load.image('enemy', 'assets/images/enemy.png');

        game.load.image('button_play','assets/images/button_play.png');
        game.load.image('button_options','assets/images/button_options.png');
        game.load.image('button_credits','assets/images/button_credits.png');
    },

    create: function() {

        /* calling the menu state */
        setTimeout(function() {
            game.state.start("menu");
        }, 2500);
    }
};