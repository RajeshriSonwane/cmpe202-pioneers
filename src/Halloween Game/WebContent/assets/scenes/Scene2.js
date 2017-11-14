
// -- user code here --

/* --- start generated code --- */

// Generated by Phaser Editor v1.4.2 (Phaser v2.6.2)


/**
 * Scene2.
 * @param {Phaser.Game} aGame A reference to the currently running game.
 * @param {Phaser.Group} aParent The parent Group (or other {@link DisplayObject}) that this group will be added to.    If undefined/unspecified the Group will be added to the {@link Phaser.Game#world Game World}; if null the Group will not be added to any parent.
 * @param {string} aName A name for this group. Not used internally but useful for debugging.
 * @param {boolean} aAddToStage If true this group will be added directly to the Game.Stage instead of Game.World.
 * @param {boolean} aEnableBody If true all Sprites created with {@link #create} or {@link #createMulitple} will have a physics body created on them. Change the body type with {@link #physicsBodyType}.
 * @param {number} aPhysicsBodyType The physics body type to use when physics bodies are automatically added. See {@link #physicsBodyType} for values.
 */
function Scene2(aGame, aParent, aName, aAddToStage, aEnableBody, aPhysicsBodyType) {
	
	Phaser.Group.call(this, aGame, aParent, aName, aAddToStage, aEnableBody, aPhysicsBodyType);
	var _back = this.game.add.tileSprite(2, -4, 1920, 1080, 'back4', null, this);
	_back.scale.setTo(1.56, 1.3);
	
	this.game.add.sprite(2751, 227, 'finish1', null, this);
	
	var _Trees = this.game.add.group(this);
	
	this.game.add.sprite(1270, 750, 'tree1', null, _Trees);
	
	this.game.add.sprite(2396, 101, 'tree1', null, _Trees);
	
	this.game.add.sprite(375, 846, 'tree2', null, _Trees);
	
	this.game.add.sprite(1695, 78, 'tree2', null, _Trees);
	
	var _tree4 = this.game.add.sprite(1231, 335, 'tree3', null, _Trees);
	_tree4.scale.setTo(0.6956982996339168, 0.6297143552596562);
	
	this.game.add.sprite(150, 552, 'tree4', null, _Trees);
	
	this.game.add.sprite(589, 213, 'tree5', null, _Trees);
	
	var _tree7 = this.game.add.sprite(998, 487, 'tree2', null, _Trees);
	_tree7.scale.setTo(0.7387261604858558, 0.7630172834438642);
	
	this.game.add.sprite(1109, 1164, 'tree4', null, _Trees);
	
	var _Enemy = this.game.add.physicsGroup(Phaser.Physics.ARCADE, this);
	_Enemy.renderable = false;
	
	var _enemy4 = this.game.add.sprite(22, 645, 'enemy1', 0, _Enemy);
	_enemy4.scale.setTo(0.32488351978865954, 0.2508318903325017);
	
	var _enemy1 = this.game.add.sprite(400, 346, 'enemy2', null, _Enemy);
	_enemy1.scale.setTo(0.41591689614081323, 0.27488343072142035);
	
	var _enemy3 = this.game.add.sprite(1050, 684, 'enemy1', 1, _Enemy);
	_enemy3.scale.setTo(0.34534128162048316, 0.3124073528366544);
	
	var _enemy7 = this.game.add.sprite(2142, 1018, 'enemy1', 0, _Enemy);
	_enemy7.scale.setTo(0.32488351978865954, 0.2508318903325017);
	
	var _enemy2 = this.game.add.sprite(1778, 623, 'enemy1', 1, _Enemy);
	_enemy2.scale.setTo(0.34534128162048316, 0.3124073528366544);
	
	var _enemy5 = this.game.add.sprite(1085, 17, 'enemy2', null, _Enemy);
	_enemy5.scale.setTo(0.41591689614081323, 0.27488343072142035);
	
	var _enemy8 = this.game.add.sprite(2875, 177, 'enemy1', 1, _Enemy);
	_enemy8.scale.setTo(0.34534128162048316, 0.3124073528366544);
	
	var _enemy6 = this.game.add.sprite(2824, 740, 'enemy1', 0, _Enemy);
	_enemy6.scale.setTo(0.32488351978865954, 0.2508318903325017);
	
	var _enemy9 = this.game.add.sprite(856, 1098, 'enemy2', null, _Enemy);
	_enemy9.scale.setTo(0.41591689614081323, 0.27488343072142035);
	
	var _collectibles = this.game.add.physicsGroup(Phaser.Physics.ARCADE, this);
	
	var _pumpkin = this.game.add.sprite(625, 371, 'pumpkin', null, _collectibles);
	_pumpkin.scale.setTo(0.25, 0.25);
	
	var _pumpkin1 = this.game.add.sprite(802, 737, 'pumpkin', null, _collectibles);
	_pumpkin1.scale.setTo(0.25, 0.25);
	
	var _pumpkin2 = this.game.add.sprite(2148, 331, 'pumpkin', null, _collectibles);
	_pumpkin2.scale.setTo(0.25, 0.25);
	
	var _pumpkin3 = this.game.add.sprite(514, 72, 'pumpkin', null, _collectibles);
	_pumpkin3.scale.setTo(0.25, 0.25);
	
	var _pumpkin4 = this.game.add.sprite(143, 686, 'pumpkin', null, _collectibles);
	_pumpkin4.scale.setTo(0.25, 0.25);
	
	var _pumpkin5 = this.game.add.sprite(2415, 930, 'pumpkin', null, _collectibles);
	_pumpkin5.scale.setTo(0.25, 0.25);
	
	var _pumpkin6 = this.game.add.sprite(1347, 898, 'pumpkin', null, _collectibles);
	_pumpkin6.scale.setTo(0.25, 0.25);
	
	var _pumpkin7 = this.game.add.sprite(1853, 470, 'pumpkin', null, _collectibles);
	_pumpkin7.scale.setTo(0.25, 0.25);
	
	var _pumpkin8 = this.game.add.sprite(1112, 107, 'pumpkin', null, _collectibles);
	_pumpkin8.scale.setTo(0.25, 0.25);
	
	var _pumpkin9 = this.game.add.sprite(529, 984, 'pumpkin', null, _collectibles);
	_pumpkin9.scale.setTo(0.25, 0.25);
	
	var _pumpkin10 = this.game.add.sprite(2834, 448, 'pumpkin', null, _collectibles);
	_pumpkin10.scale.setTo(0.25, 0.25);
	
	var _pumpkin12 = this.game.add.sprite(1874, 904, 'pumpkin', null, _collectibles);
	_pumpkin12.scale.setTo(0.25, 0.25);
	
	var _pumpkin14 = this.game.add.sprite(1647, 212, 'pumpkin', null, _collectibles);
	_pumpkin14.scale.setTo(0.25, 0.25);
	
	var _pumpkin15 = this.game.add.sprite(1740, 193, 'pumpkin', null, _collectibles);
	_pumpkin15.scale.setTo(0.25, 0.25);
	
	var _pumpkin13 = this.game.add.sprite(1565, 208, 'pumpkin', null, _collectibles);
	_pumpkin13.scale.setTo(0.25, 0.25);
	
	var _pumpkin11 = this.game.add.sprite(1245, 412, 'pumpkin', null, _collectibles);
	_pumpkin11.scale.setTo(0.25, 0.25);
	
	var _Platform = this.game.add.group(this);
	
	var _platform = this.game.add.sprite(1, 233, 'AtlasV1', 'platform2', _Platform);
	_platform.scale.setTo(0.6778573338745293, 0.40679545832357716);
	
	var _platform1 = this.game.add.sprite(473, 126, 'AtlasV1', 'platform3', _Platform);
	_platform1.scale.setTo(0.2605838660206705, 0.42728032672455085);
	
	var _platform2 = this.game.add.sprite(2645, 850, 'AtlasV1', 'platform6', _Platform);
	_platform2.scale.setTo(0.4180733391451292, 0.4251174962632454);
	
	var _platform3 = this.game.add.sprite(1161, 953, 'AtlasV1', 'platform5', _Platform);
	_platform3.scale.setTo(1.2802625443825384, 0.6963346152326263);
	
	var _platform4 = this.game.add.sprite(700, 798, 'AtlasV1', 'platform4', _Platform);
	_platform4.scale.setTo(0.6956858152571566, 0.5870022344036645);
	
	this.game.add.sprite(798, 250, 'AtlasV1', 'platform1', _Platform);
	
	this.game.add.sprite(310, 535, 'AtlasV1', 'platform1', _Platform);
	
	this.game.add.sprite(1061, 115, 'AtlasV1', 'platform1', _Platform);
	
	this.game.add.sprite(579, 385, 'AtlasV1', 'platform1', _Platform);
	
	var _base = this.game.add.sprite(-3, 1362, 'AtlasV1', 'base1', _Platform);
	_base.scale.setTo(7.5, 1.0);
	
	var _platform9 = this.game.add.sprite(404, 1041, 'AtlasV1', 'platform5', _Platform);
	_platform9.scale.setTo(0.8882205073613963, 0.6963346152326263);
	
	var _platform10 = this.game.add.sprite(13, 753, 'AtlasV1', 'platform2', _Platform);
	_platform10.scale.setTo(1.0250718171857403, 0.4593795105439774);
	
	var _platform11 = this.game.add.sprite(1210, 460, 'AtlasV1', 'platform3', _Platform);
	_platform11.scale.setTo(0.4457266349378203, 0.5257554804082046);
	
	this.game.add.sprite(983, 590, 'AtlasV1', 'platform1', _Platform);
	
	this.game.add.sprite(1800, 484, 'AtlasV1', 'platform1', _Platform);
	
	this.game.add.sprite(1539, 663, 'AtlasV1', 'platform1', _Platform);
	
	this.game.add.sprite(2484, 254, 'AtlasV1', 'platform1', _Platform);
	
	this.game.add.sprite(2124, 1095, 'AtlasV1', 'platform1', _Platform);
	
	this.game.add.sprite(2362, 955, 'AtlasV1', 'platform1', _Platform);
	
	var _platform18 = this.game.add.sprite(2062, 387, 'AtlasV1', 'platform3', _Platform);
	_platform18.scale.setTo(0.4457266349378203, 0.5257554804082046);
	
	var _platform19 = this.game.add.sprite(1537, 275, 'AtlasV1', 'platform5', _Platform);
	_platform19.scale.setTo(0.8882205073613963, 0.6963346152326263);
	
	var _platform20 = this.game.add.sprite(2642, 494, 'AtlasV1', 'platform6', _Platform);
	_platform20.scale.setTo(0.4180733391451292, 0.4251174962632454);
	
	this.game.add.sprite(1828, 930, 'AtlasV1', 'platform1', _Platform);
	
	this.game.add.sprite(827, 1148, 'AtlasV1', 'platform1', _Platform);
	
	var _collisionLayer = this.game.add.physicsGroup(Phaser.Physics.ARCADE, this);
	
	var _physics = this.game.add.sprite(-6, 1361, 'AtlasV1', 'physics', _collisionLayer);
	_physics.scale.setTo(7.0, 0.7764196437227103);
	
	var _physics1 = this.game.add.sprite(1, 243, 'AtlasV1', 'physics', _collisionLayer);
	_physics1.scale.setTo(0.49281008152683464, 1.670732781544981);
	
	var _physics4 = this.game.add.sprite(614, 444, 'AtlasV1', 'physics', _collisionLayer);
	_physics4.scale.setTo(0.18849615237233974, 1.2235761546826331);
	
	var _physics2 = this.game.add.sprite(479, 136, 'AtlasV1', 'physics', _collisionLayer);
	_physics2.scale.setTo(0.2769485256237805, 1.6707328013190235);
	
	var _physics6 = this.game.add.sprite(1095, 172, 'AtlasV1', 'physics', _collisionLayer);
	_physics6.scale.setTo(0.19574182915200364, 1.670732781544981);
	
	var _physics7 = this.game.add.sprite(16, 762, 'AtlasV1', 'physics', _collisionLayer);
	_physics7.scale.setTo(0.7316887885003348, 1.670732781544981);
	
	var _physics5 = this.game.add.sprite(834, 307, 'AtlasV1', 'physics', _collisionLayer);
	_physics5.scale.setTo(0.18849626112474305, 1.670732781544981);
	
	var _physics8 = this.game.add.sprite(720, 808, 'AtlasV1', 'physics', _collisionLayer);
	_physics8.scale.setTo(0.49281008152683464, 1.670732781544981);
	
	var _physics10 = this.game.add.sprite(2794, 867, 'AtlasV1', 'physics', _collisionLayer);
	_physics10.scale.setTo(0.48087012451991346, 1.670732781544981);
	
	var _physics9 = this.game.add.sprite(1170, 964, 'AtlasV1', 'physics', _collisionLayer);
	_physics9.scale.setTo(0.9661069277347307, 1.670732781544981);
	
	var _physics3 = this.game.add.sprite(339, 593, 'AtlasV1', 'physics', _collisionLayer);
	_physics3.scale.setTo(0.21319699567926176, 1.6707327815690296);
	
	var _physics12 = this.game.add.sprite(2789, 512, 'AtlasV1', 'physics', _collisionLayer);
	_physics12.scale.setTo(0.48087012451991346, 1.670732781544981);
	
	var _physics19 = this.game.add.sprite(1214, 469, 'AtlasV1', 'physics', _collisionLayer);
	_physics19.scale.setTo(0.5040454070001792, 1.670732781544981);
	
	var _physics20 = this.game.add.sprite(1547, 285, 'AtlasV1', 'physics', _collisionLayer);
	_physics20.scale.setTo(0.6447023173801332, 1.670732781544981);
	
	var _physics13 = this.game.add.sprite(2526, 314, 'AtlasV1', 'physics', _collisionLayer);
	_physics13.scale.setTo(0.1657981786072597, 1.670732781544981);
	
	var _physics14 = this.game.add.sprite(1843, 543, 'AtlasV1', 'physics', _collisionLayer);
	_physics14.scale.setTo(0.1657981786072597, 1.670732781544981);
	
	var _physics15 = this.game.add.sprite(1581, 724, 'AtlasV1', 'physics', _collisionLayer);
	_physics15.scale.setTo(0.1657981786072597, 1.670732781544981);
	
	var _physics16 = this.game.add.sprite(868, 1211, 'AtlasV1', 'physics', _collisionLayer);
	_physics16.scale.setTo(0.1657981786072597, 1.670732781544981);
	
	var _physics17 = this.game.add.sprite(1026, 648, 'AtlasV1', 'physics', _collisionLayer);
	_physics17.scale.setTo(0.1657981786072597, 1.670732781544981);
	
	var _physics22 = this.game.add.sprite(2401, 1013, 'AtlasV1', 'physics', _collisionLayer);
	_physics22.scale.setTo(0.1657981786072597, 1.670732781544981);
	
	var _physics11 = this.game.add.sprite(1858, 981, 'AtlasV1', 'physics', _collisionLayer);
	_physics11.scale.setTo(0.21894385677163666, 1.6398577936861323);
	
	var _physics21 = this.game.add.sprite(2165, 1153, 'AtlasV1', 'physics', _collisionLayer);
	_physics21.scale.setTo(0.1657981786072597, 1.670732781544981);
	
	var _physics18 = this.game.add.sprite(415, 1050, 'AtlasV1', 'physics', _collisionLayer);
	_physics18.scale.setTo(0.6480512207924056, 1.670732781544981);
	
	var _physics23 = this.game.add.sprite(2067, 396, 'AtlasV1', 'physics', _collisionLayer);
	_physics23.scale.setTo(0.49635385407062566, 1.670732781544981);
	
	var _player = this.game.add.sprite(89, 111, 'player', 0, this);
	_player.anchor.setTo(0.5, 0.0);
	_player.animations.add('walk', [0, 1], 4, false);
	_player.animations.add('jump', [3], 3, false);
	_player.animations.add('idle', [0], 60, false);
	_player.animations.add('attack', [4, 0], 4, false);
	_player.animations.add('die', [5], 1, true);
	this.game.physics.arcade.enable(_player);
	
	var _pumpkinscore = this.game.add.sprite(18, 9, 'pumpkin', null, this);
	_pumpkinscore.scale.setTo(0.2, 0.2);
	_pumpkinscore.fixedToCamera = true;
	
	
	
	// public fields
	
	this.fEnemy = _Enemy;
	this.fEnemy4 = _enemy4;
	this.fEnemy1 = _enemy1;
	this.fEnemy3 = _enemy3;
	this.fEnemy7 = _enemy7;
	this.fEnemy2 = _enemy2;
	this.fEnemy5 = _enemy5;
	this.fEnemy8 = _enemy8;
	this.fEnemy6 = _enemy6;
	this.fEnemy9 = _enemy9;
	this.fCollectibles = _collectibles;
	this.fCollisionLayer = _collisionLayer;
	this.fPlayer = _player;
	this.fPumpkinscore = _pumpkinscore;
	
}

/** @type Phaser.Group */
var Scene2_proto = Object.create(Phaser.Group.prototype);
Scene2.prototype = Scene2_proto;
Scene2.prototype.constructor = Scene2;

/* --- end generated code --- */
// -- user code here --
