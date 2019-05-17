'use strict';

var playState = {

    create: function() {
    	
    	this.player = game.add.sprite(16, 16, 'player');
        game.physics.enable(this.player, Phaser.Physics.ARCADE);

        this.enemy = game.add.sprite(256, 256, 'enemy');
        game.physics.enable(this.enemy, Phaser.Physics.ARCADE);

        this.cursors = game.input.keyboard.createCursorKeys();
    },

    update: function() {
        
        /* check to see if the player overlaps with an enemy */
        game.physics.arcade.overlap(this.player, this.enemy, this.win, null, this);

        this.player.body.velocity.x = 0;
        this.player.body.velocity.y = 0;

        if(this.cursors.left.isDown) {
            this.player.body.velocity.x = -200;
        }
        else if(this.cursors.right.isDown) {
            this.player.body.velocity.x = 200;
        }
        
        if(this.cursors.up.isDown) {
            this.player.body.velocity.y = -200;
        }
        else if(this.cursors.down.isDown) {
            this.player.body.velocity.y = 200;
        }
    },

    render: function() {},

    win: function() {
    	
        game.state.start('win');
    },
};