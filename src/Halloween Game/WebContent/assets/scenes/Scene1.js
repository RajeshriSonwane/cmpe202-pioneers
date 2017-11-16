
// -- user code here --

/* --- start generated code --- */

// Generated by Phaser Editor 1.4.3 (Phaser v2.6.2)


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
	var _back = this.game.add.sprite(-3, -7, 'back3', null, this);
	_back.scale.setTo(1.56, 1.3);
	
	var _finish = this.game.add.sprite(2726, 195, 'finish1', null, this);
	this.game.physics.arcade.enable(_finish);
	_finish.body.setSize(148.0, 300.0, 89.0, 0.0);
	_finish.body.allowGravity = false;
	
	var _Tree = this.game.add.group(this);
	
	this.game.add.sprite(2017, 439, 'tree1', null, _Tree);
	
	this.game.add.sprite(-72, 190, 'tree2', null, _Tree);
	
	this.game.add.sprite(1486, 1125, 'tree4', null, _Tree);
	
	this.game.add.sprite(1946, 97, 'tree3', null, _Tree);
	
	this.game.add.sprite(955, 102, 'tree2', null, _Tree);
	
	this.game.add.sprite(61, 580, 'tree1', null, _Tree);
	
	this.game.add.sprite(349, 932, 'tree1', null, _Tree);
	
	var _collisionLayer = this.game.add.physicsGroup(Phaser.Physics.ARCADE, this);
	
	var _physics2 = this.game.add.sprite(-54, 1387, 'AtlasV1', 'physics', _collisionLayer);
	_physics2.scale.setTo(0.8075902289744773, -3.3510001705839607);
	_physics2.anchor.setTo(-0.14880000220404732, -0.4443424769810268);
	
	var _physics1 = this.game.add.sprite(953, 1148, 'AtlasV1', 'physics', _collisionLayer);
	_physics1.scale.setTo(0.8, 1.0);
	
	var _physics = this.game.add.sprite(393, 1144, 'AtlasV1', 'physics', _collisionLayer);
	_physics.scale.setTo(0.44400003699497054, 1.4937177174449217);
	
	var _physics3 = this.game.add.sprite(2708, 1030, 'AtlasV1', 'physics', _collisionLayer);
	_physics3.scale.setTo(0.6386533205848693, 2.068446555810479);
	
	var _physics4 = this.game.add.sprite(1404, 868, 'AtlasV1', 'physics', _collisionLayer);
	_physics4.scale.setTo(1.1302942148529032, 2.047899467078761);
	
	var _physics6 = this.game.add.sprite(730, 840, 'AtlasV1', 'physics', _collisionLayer);
	_physics6.scale.setTo(0.20512006403733743, 1.4265660112167005);
	
	var _physics5 = this.game.add.sprite(636, 578, 'AtlasV1', 'physics', _collisionLayer);
	_physics5.scale.setTo(0.6123877362955013, 3.377583160646423);
	
	var _physics7 = this.game.add.sprite(605, 1322, 'AtlasV1', 'physics', _collisionLayer);
	_physics7.scale.setTo(0.6444443630065977, 1.6000018340956303);
	
	var _physics8 = this.game.add.sprite(-7, 809, 'AtlasV1', 'physics', _collisionLayer);
	_physics8.scale.setTo(0.9761124185689639, 3.2113333185122395);
	
	var _physics9 = this.game.add.sprite(999, 739, 'AtlasV1', 'physics', _collisionLayer);
	_physics9.scale.setTo(0.6928000806782338, 2.3330274563489657);
	
	var _physics10 = this.game.add.sprite(2116, 694, 'AtlasV1', 'physics', _collisionLayer);
	_physics10.scale.setTo(0.8417568187977673, -2.5414690419428303);
	
	var _physics11 = this.game.add.sprite(-6, 395, 'AtlasV1', 'physics', _collisionLayer);
	_physics11.scale.setTo(0.9720546739212573, 2.8631467815237066);
	
	var _physics12 = this.game.add.sprite(680, 314, 'AtlasV1', 'physics', _collisionLayer);
	_physics12.scale.setTo(1.0347786915991097, 2.3414656605581334);
	
	var _physics13 = this.game.add.sprite(1357, 239, 'AtlasV1', 'physics', _collisionLayer);
	_physics13.scale.setTo(0.9043584919448429, 3.414638024065599);
	
	var _physics14 = this.game.add.sprite(1350, 239, 'AtlasV1', 'physics', _collisionLayer);
	_physics14.scale.setTo(0.8956637700861431, 3.146344893597781);
	
	var _physics15 = this.game.add.sprite(1962, 329, 'AtlasV1', 'physics', _collisionLayer);
	_physics15.scale.setTo(1.0434734310526717, 3.1463449893339717);
	
	var _physics16 = this.game.add.sprite(2694, 487, 'AtlasV1', 'physics', _collisionLayer);
	_physics16.scale.setTo(0.6950830357239502, 2.3414655107872795);
	
	var _physics17 = this.game.add.sprite(1361, 1332, 'AtlasV1', 'physics', _collisionLayer);
	_physics17.scale.setTo(0.9130532055551968, 3.951224229264541);
	
	var _physics18 = this.game.add.sprite(2090, 938, 'AtlasV1', 'physics', _collisionLayer);
	_physics18.scale.setTo(0.5478764897509486, 2.0731724439301655);
	
	var _physics19 = this.game.add.sprite(1895, 1193, 'AtlasV1', 'physics', _collisionLayer);
	_physics19.scale.setTo(0.8174115563409053, 2.8780517165737884);
	
	var _Platform = this.game.add.group(this);
	_Platform.position.setTo(0, 330);
	
	var _platform3 = this.game.add.sprite(2062, 554, 'AtlasV1', 'platform1', _Platform);
	_platform3.scale.setTo(2.113318346770643, 1.0776418632542955);
	
	var _platform2 = this.game.add.sprite(2563, 685, 'AtlasV1', 'platform6', _Platform);
	_platform2.scale.setTo(0.5, 0.3194392826153279);
	
	var _platform = this.game.add.sprite(958, 811, 'AtlasV1', 'platform3', _Platform);
	_platform.scale.setTo(0.6570785975041205, 0.23593943111070773);
	
	var _platform1 = this.game.add.sprite(383, 805, 'AtlasV1', 'platform4', _Platform);
	_platform1.scale.setTo(0.587999984388022, 0.2760000456237868);
	
	var _platform5 = this.game.add.sprite(700, 466, 'AtlasV1', 'platform1', _Platform);
	_platform5.scale.setTo(0.9402803748608576, 0.741214580142837);
	
	var _platform4 = this.game.add.sprite(1398, 534, 'AtlasV1', 'platform5', _Platform);
	_platform4.scale.setTo(1.4585767852918763, 0.40244667466442235);
	
	var _base1 = this.game.add.sprite(602, 982, 'AtlasV1', 'base1', _Platform);
	_base1.scale.setTo(0.7164406062423461, 2.7672928253925293);
	
	var _base2 = this.game.add.sprite(1360, 984, 'AtlasV1', 'base1', _Platform);
	_base2.scale.setTo(1.0, 2.7233886477994407);
	
	var _platform6 = this.game.add.sprite(1881, 848, 'AtlasV1', 'platform5', _Platform);
	_platform6.scale.setTo(1.1001328129686312, 0.5113206233166867);
	
	var _platform7 = this.game.add.sprite(-9, 455, 'AtlasV1', 'platform2', _Platform);
	_platform7.scale.setTo(1.3, 0.38142983727383134);
	
	var _platform8 = this.game.add.sprite(984, 396, 'AtlasV1', 'platform3', _Platform);
	_platform8.scale.setTo(0.6304842825986473, 0.46252307362415784);
	
	var _platform9 = this.game.add.sprite(2100, 303, 'AtlasV1', 'platform4', _Platform);
	_platform9.scale.setTo(1.106422939364143, 0.7391594497900148);
	
	var _platform10 = this.game.add.sprite(639, -31, 'AtlasV1', 'platform5', _Platform);
	_platform10.scale.setTo(1.5700436443578698, 0.5963589805299243);
	
	var _platform11 = this.game.add.sprite(-7, 53, 'AtlasV1', 'platform2', _Platform);
	_platform11.scale.setTo(1.3, 0.38057236910375103);
	
	var _platform12 = this.game.add.sprite(1317, -109, 'AtlasV1', 'platform3', _Platform);
	_platform12.scale.setTo(0.911966296253701, 0.7238159548275526);
	
	var _platform13 = this.game.add.sprite(556, 169, 'AtlasV1', 'platform1', _Platform);
	_platform13.scale.setTo(2.8279703276636363, 1.4006509853905955);
	
	var _platform14 = this.game.add.sprite(1937, -18, 'AtlasV1', 'platform5', _Platform);
	_platform14.scale.setTo(1.5081787242211269, 0.6075711906748936);
	
	var _base = this.game.add.sprite(0, 981, 'AtlasV1', 'base1', _Platform);
	_base.scale.setTo(0.8721408470651062, 2.7561068586073496);
	
	var _platform15 = this.game.add.sprite(2568, 135, 'AtlasV1', 'platform6', _Platform);
	_platform15.scale.setTo(0.5, 0.3913720439729267);
	
	var _Enemy = this.game.add.physicsGroup(Phaser.Physics.ARCADE, this);
	
	var _enemy3 = this.game.add.sprite(1090, 1065, 'enemy1', 0, _Enemy);
	_enemy3.scale.setTo(-0.23202611126727168, 0.2426229774533215);
	
	var _enemy1 = this.game.add.sprite(2621, 965, 'enemy2', null, _Enemy);
	_enemy1.scale.setTo(-0.22598094249506895, 0.20995701172455944);
	
	var _enemy2 = this.game.add.sprite(1739, 772, 'enemy1', 2, _Enemy);
	_enemy2.scale.setTo(0.19983435357502707, 0.22658118723411508);
	
	var _enemy6 = this.game.add.sprite(1174, 207, 'enemy1', 3, _Enemy);
	_enemy6.scale.setTo(-0.2924914584718459, 0.2730675023771895);
	
	var _enemy4 = this.game.add.sprite(2610, 414, 'enemy2', null, _Enemy);
	_enemy4.scale.setTo(0.24024781026268896, 0.22673101236354873);
	
	var _enemy5 = this.game.add.sprite(872, 498, 'enemy1', 2, _Enemy);
	_enemy5.scale.setTo(0.19314232690017624, 0.24688843908725008);
	
	var _player = this.game.add.sprite(162, 1064, 'player', 0, this);
	_player.anchor.setTo(0.5, 0.0);
	_player.animations.add('walk', [0, 1], 4, true);
	_player.animations.add('jump', [3], 60, false);
	_player.animations.add('idle', [0], 60, false);
	_player.animations.add('attack', [4], 4, false);
	_player.animations.add('die', [5], 60, true);
	this.game.physics.arcade.enable(_player);
	_player.body.setSize(106.94444274902344, 105.083251953125, -12.5, 0.694580078125);
	
	var _collectibles = this.game.add.physicsGroup(Phaser.Physics.ARCADE, this);
	
	var _pumpkin2 = this.game.add.sprite(724, 467, 'pumpkin', null, _collectibles);
	_pumpkin2.scale.setTo(0.4, 0.4);
	
	var _pumpkin1 = this.game.add.sprite(180, 275, 'pumpkin', null, _collectibles);
	_pumpkin1.scale.setTo(0.4, 0.4);
	
	var _pumpkin6 = this.game.add.sprite(2357, 537, 'pumpkin', null, _collectibles);
	_pumpkin6.scale.setTo(0.4, 0.4);
	
	var _pumpkin3 = this.game.add.sprite(1429, 133, 'pumpkin', null, _collectibles);
	_pumpkin3.scale.setTo(0.4, 0.4);
	
	var _pumpkin4 = this.game.add.sprite(1096, 1046, 'pumpkin', null, _collectibles);
	_pumpkin4.scale.setTo(0.4, 0.4);
	
	var _pumpkin5 = this.game.add.sprite(1594, 764, 'pumpkin', null, _collectibles);
	_pumpkin5.scale.setTo(0.4, 0.4);
	
	var _pumpkin = this.game.add.sprite(2779, 930, 'pumpkin', null, _collectibles);
	_pumpkin.scale.setTo(0.4, 0.4);
	
	var _pumpkinscore = this.game.add.sprite(11, 8, 'pumpkin', null, this);
	_pumpkinscore.scale.setTo(0.23499998166427466, 0.20500000684078973);
	_pumpkinscore.fixedToCamera = true;
	
	
	this.position.setTo(0, 5);
	
	// public fields
	
	this.fBack = _back;
	this.fFinish = _finish;
	this.fCollisionLayer = _collisionLayer;
	this.fEnemy = _Enemy;
	this.fEnemy3 = _enemy3;
	this.fEnemy1 = _enemy1;
	this.fEnemy2 = _enemy2;
	this.fEnemy6 = _enemy6;
	this.fEnemy4 = _enemy4;
	this.fEnemy5 = _enemy5;
	this.fPlayer = _player;
	this.fCollectibles = _collectibles;
	this.fPumpkinscore = _pumpkinscore;
	
}

/** @type Phaser.Group */
var Scene1_proto = Object.create(Phaser.Group.prototype);
Scene1.prototype = Scene1_proto;
Scene1.prototype.constructor = Scene1;

/* --- end generated code --- */
// -- user code here --
