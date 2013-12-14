pulse.ready(function() {

	//solo un engine por juego
	var engine = new pulse.Engine( { gameWindow: 'canvas', size: { width: 800, height: 600 } } );
	//multiples scenes por juego * solo una puede estar activa *
	var scene = new pulse.Scene();
	//multiples layers por juego
	var layer = new pulse.Layer();

	layer.anchor = { x: 0, y: 0};

	//agregamos el layer a la escena
	scene.addLayer(layer);

	//agregamos la ecena al motor
	engine.scenes.addScene(scene);

	//recordando que solo una ecena puede estar activa activamos la ecena que nos interesa
	engine.scenes.activateScene(scene);

	layer.events.bind('mousedown', function(args) {
		console.log(args);
		console.log(this);

		var ball = new Ball();

		ball.position = { x: args.position.x, y: args.position.y };
		layer.addNode(ball);
	});

	engine.go(30);

});