
// -- user code here --

/* --- start generated code --- */

// Generated by Phaser Editor v1.4.2 (Phaser v2.6.2)


/**
 * Scene1.
 * @param {Phaser.Game} aGame A reference to the currently running game.
 * @param {Phaser.Group} aParent The parent Group (or other {@link DisplayObject}) that this group will be added to.    If undefined/unspecified the Group will be added to the {@link Phaser.Game#world Game World}; if null the Group will not be added to any parent.
 * @param {string} aName A name for this group. Not used internally but useful for debugging.
 * @param {boolean} aAddToStage If true this group will be added directly to the Game.Stage instead of Game.World.
 * @param {boolean} aEnableBody If true all Sprites created with {@link #create} or {@link #createMulitple} will have a physics body created on them. Change the body type with {@link #physicsBodyType}.
 * @param {number} aPhysicsBodyType The physics body type to use when physics bodies are automatically added. See {@link #physicsBodyType} for values.
 */
function Scene1(aGame, aParent, aName, aAddToStage, aEnableBody, aPhysicsBodyType) {
	
	Phaser.Group.call(this, aGame, aParent, aName, aAddToStage, aEnableBody, aPhysicsBodyType);
	var _collisionLayer = this.game.add.physicsGroup(Phaser.Physics.ARCADE, this);
	
	this.game.add.tileSprite(288, 607, 640, 25, 'tiles', 'physics', _collisionLayer);
	
	var _BG = this.game.add.sprite(-18, -27, 'BG', null, this);
	_BG.scale.setTo(1.2388787593597599, 1.1360282940928768);
	
	this.game.add.sprite(288, 598, 'tiles', '13', this);
	
	this.game.add.tileSprite(416, 598, 384, 93, 'tiles', '14', this);
	
	this.game.add.sprite(800, 598, 'tiles', '15', this);
	
	var _player = this.game.add.sprite(517, 273, 'player', 0, this);
	_player.scale.setTo(0.12684006182971486, 0.1481977196399811);
	this.game.physics.arcade.enable(_player);
	
	
	
	// public fields
	
	this.fCollisionLayer = _collisionLayer;
	this.fBG = _BG;
	this.fPlayer = _player;
	
}

/** @type Phaser.Group */
var Scene1_proto = Object.create(Phaser.Group.prototype);
Scene1.prototype = Scene1_proto;
Scene1.prototype.constructor = Scene1;

/* --- end generated code --- */

// you can insert code here

