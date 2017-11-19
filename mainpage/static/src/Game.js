
/*var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update, render: render });

function preload() {

    

}
*/

Ball.Game = function(game) {};

Ball.Game.prototype = {

    create: function() {

        miDelay=null;
        arrayDialog = [];
        tmpArrayD = 1;
        lngPista = 1000;
        numMeteoritos = 30;
        vida = 100;
        escenario = 1;
        animaciones = 0;
        funAnimacion1 = true;
        funAnimacion2 = true;
        animacion = false;
        controles = true;
        controlNaveV = true;
        escena1 = true;
        dialogProta = false;
        dialogAnta = false;
        dialogoKey = null;
        tmpKey = false;
        lngPista = 1000;
        numMeteoritos = 30;
        vida = 100;
        escenario = EscenarioNave;
        console.log(escenario);
        animaciones = 0;
        funAnimacion1 = true;
        funAnimacion2 = true;
        animacion = false;
        controles = true;
        controlNaveV = true;
        escena1 = true;
        velocidadNave = 200;

        map = null;
        layer= null;
        cursors = null;
        player = null;
        if (escenario==1)   this.inicio();
        else this.juego();
    },


    inicio: function() {
        
    //  Because we're loading CSV map data we have to specify the tile size here or we can't render it
    map = this.game.add.tilemap('map', 16, 16);

    //  Now add in the tileset
    map.addTilesetImage('tiles');
    
    //  Create our layer
    layer = map.createLayer(0);

    //  Resize the world
    layer.resizeWorld();

    //  This isn't totally accurate, but it'll do for now
    map.setCollisionBetween(54, 83);

    //  Un-comment this on to see the collision tiles
    // layer.debug = true;

    //  Player
    player = this.game.add.sprite(48, 48, 'player', 1);
    player.animations.add('left', [8,9], 10, true);
    player.animations.add('right', [1,2], 10, true);
    player.animations.add('up', [11,12,13], 10, true);
    player.animations.add('down', [4,5,6], 10, true);

    this.game.physics.enable(player, Phaser.Physics.ARCADE);

    player.body.setSize(10, 14, 2, 1);

    this.game.camera.follow(player);

    cursors = this.game.input.keyboard.createCursorKeys();

    var help = this.game.add.text(16, 16, 'Arrows to move', { font: '14px Arial', fill: '#ffffff' });
    help.fixedToCamera = true;

},

update: function() {

    this.game.physics.arcade.collide(player, layer);

    player.body.velocity.set(0);

    if (cursors.left.isDown)
    {
        player.body.velocity.x = -100;
        player.play('left');
    }
    else if (cursors.right.isDown)
    {
        player.body.velocity.x = 100;
        player.play('right');
    }
    else if (cursors.up.isDown)
    {
        player.body.velocity.y = -100;
        player.play('up');
    }
    else if (cursors.down.isDown)
    {
        player.body.velocity.y = 100;
        player.play('down');
    }
    else
    {
        player.animations.stop();
    }

},

render: function() {
    // game.debug.body(player);

}
};