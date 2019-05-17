// TODO
//import Boot from './states/Boot';
//import Load from './states/Load';
//import Menu from './states/Menu';
//import Play from './states/Play';
//import Win from './states/Win';

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600
};

const game = new Phaser.Game(config);

game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('play', playState);
game.state.add('win', winState);
game.state.start('boot');
