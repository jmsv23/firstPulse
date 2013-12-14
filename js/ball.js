
var Ball = pulse.Sprite.extend(	{ 
	init: function(args) {
		args = args || {};
		args.src = 'img/ball.png';
		this.velocity = {x: (Math.random() * 300) - 150, y: (Math.random() * 300) - 150};
		this._super(args);
	},
	update: function(enlapsedMS) {
		var newX = this.position.x + this.velocity.x * (enlapsedMS / 1000);
		var newY = this.position.y + this.velocity.y * (enlapsedMS / 1000);

		if(newX - (this.size.width / 2) <= 0) {
			newX = this.size.width / 2;
			this.velocity.x *= -1;
		}

		if(newY - (this.size.height / 2) <= 0) {
			newY = this.size.height / 2;
			this.velocity.y *= -1;
		}

		this.position.x = newX;
		this.position.y = newY;

		this._super(enlapsedMS);
	}
} );