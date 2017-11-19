var velocidad=60;
var prestamoDesarrollo=false;
var NaveNueva = false;
var EscenarioNave = 1;
Ball.Preloader = function(game) {};
Ball.Preloader.prototype = {
	preload: function() {
		this.preloadBg = this.add.sprite((Ball._WIDTH-297)*0.5, (Ball._HEIGHT-145)*0.5, 'preloaderBg');
		this.preloadBar = this.add.sprite((Ball._WIDTH-158)*0.5, (Ball._HEIGHT-50)*0.5, 'preloaderBar');
		this.load.setPreloadSprite(this.preloadBar);

		this.load.image('ball', ball);
		this.load.image('hole', hole);
		this.load.image('element-w',elementw );
		this.load.image('element-h',elementh);
		this.load.image('panel', panel);
		this.load.image('title', title);
		this.load.image('button-pause', button_pause);
		
		this.load.image('screen-bg', screen_bg);
		this.load.image('screen-gameover', screen_gameover);
		this.load.image('screen-gameover2',screen_gameover2);
		this.load.image('ComoJugarDesarrollo',comojugardesarrollo );
		this.load.image('intro', intro);
		this.load.image('banda', banda);
		this.load.image('fabrica', fabrica);
		this.load.image('screen-mainmenu',mainmenu);
		this.load.image('screen-howtoplay', howtoplay);
		this.load.image('border-horizontal',horizontal);
		this.load.image('border-vertical', vertical);
		this.load.image('fondo2', fondo2);
		this.load.image('fondo_carrera',fondo_carrera);
		this.load.image('screen-gameoverc',cx);
		this.load.image('screen-gameoverrenova', gameovervehiculo);
		this.load.image('ComoJugarCarrera', ComoJugarCarrera);
		this.load.image('HasGanadoCarrera',HasGanadoCarrera);
		//this.load.image('fondo_carrera', "{% static 'resources/images/ESCENARIO 2.png' %}");
	
		this.load.image('fondo_carrera', fondo_carrera);
		this.load.image('back',back);
		this.load.image('menu',menu);
		this.load.image('planetaRojo',planetaRojo);
		
		//this.game.load.spritesheet('planeta', "{% static 'img/planeta.png', 193, 71);
		this.game.load.spritesheet('planeta', planeta);
		this.game.load.image('planetaSprite',planetaSprite );
		this.load.spritesheet('button-audio', button_audio, 35, 35);
		this.load.spritesheet('button-start', button_start, 146, 51);
		this.load.atlas('botonAtlas', botonAtlas_png, botonAtlas_json);

		this.load.image('prota', prota);
		this.load.image('anta', anta);

		//ilustraciones definitivas
		this.load.image('planeta-cfn',cfn);
		this.load.image('planeta-carrera',carrera);
		this.load.image('planeta-industria',industria);
		this.load.image('planeta-3',planeta3);
		this.load.image('planeta-4',planeta4);
		this.load.image('planeta-5',planeta5);
		
		this.load.image('planeta-6',planeta6);
		this.load.image('planeta-7',planeta7);
		this.load.image('glow-1',glow1);
		this.load.image('roboto',roboto);

		//load fonts
		this.load.bitmapFont('future-earth',future_png,future_font);
		this.load.audio('audio-bounce', [bounce_ogg, bounce_mp3, bounce_m4a]);



		this.game.load.tilemap('map', csv01, null, Phaser.Tilemap.CSV);
        this.game.load.image('tiles', catastrophi_tiles_16);
        this.game.load.spritesheet('player', spaceman, 16, 16);
	},
	create: function() {
		this.game.state.start('MainMenu');
	}
};