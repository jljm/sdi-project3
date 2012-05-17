// SDI Project 3
// Jamal Johnson

// -- Global variables
// Objects
var sword =
{
	name: "Buster Sword",
	damage: 2,
	enchanted: true,
	enchantments:
				[
					"Health Regeneration",
					"+4 Awesomeness"
				],
	getDamage: function()
	{
		return damage;
	}
};

var player =
{
	name: "BlackRose",
	level: 23,
	strength: 2,
	weapon: sword,

	// procedure
	greet: function()
	{
		console.log( "Let's kick some arse!" );
	},

	// mutator
	levelUp: function()
	{
		level = level + 1;
	},

	// accessors
	myName: function()
	{
		return name;
	},

	myLevel: function()
	{
		return level;
	},

	// function
	attack: function()
	{
		var sumDamage = strength + sword.getDamage();
		return sumDamage;
	}
};