//Game Data Object for homebrew rules

//Spell book for built in spells
const spellBook = {
	"Acid splash": "You create an acidic bubble at a point within range, where it explodes in a 5-foot-radius Sphere. Each creature in that Sphere must succeed on a Dexterity saving throw or take 1d6 Acid damage.<br><strong>Cantrip Upgrade.</strong> The damage increases by 1d6 when you reach levels 5 (2d6), 11 (3d6), and 17 (4d6).",
	"Blur": "Your body becomes blurred. For the duration, any creature has Disadvantage on attack rolls against you. An attacker is immune to this effect if it perceives you with Blindsight or Truesight.",
	"Control winds": "You take control of the air in a 100-foot cube that you can see within range. Choose one of the following effects when you cast the spell. The effect lasts for the spell's duration, unless you use your action on a later turn to switch to a different effect. You can also use your action to temporarily halt the effect or to restart one you’ve halted.<br>Gusts. A wind picks up within the cube, continually blowing in a horizontal direction you designate. You choose the intensity of the wind: calm, moderate, or strong. If the wind is moderate or strong, ranged weapon attacks that enter or leave the cube or pass through it have disadvantage on their attack rolls. If the wind is strong, any creature moving against the wind must spend 1 extra foot of movement for each foot moved.<br>Downdraft. You cause a sustained blast of strong wind to blow downward from the top of the cube. Ranged weapon attacks that pass through the cube or that are made against targets within it have disadvantage on their attack rolls. A creature must make a Strength saving throw if it flies into the cube for the first time on a turn or starts its turn there flying. On a failed save, the creature is knocked prone.<br>Updraft. You cause a sustained updraft within the cube, rising upward from the cube’s bottom side. Creatures that end a fall within the cube take only half damage from the fall. When a creature in the cube makes a vertical jump, the creature can jump up to 10 feet higher than normal.",
	"Daylight": "For the duration, sunlight spreads from a point within range and fills a 60-foot-radius Sphere. The sunlight’s area is Bright Light and sheds Dim Light for an additional 60 feet.<br>Alternatively, you cast the spell on an object that isn’t being worn or carried, causing the sunlight to fill a 60-foot Emanation originating from that object. Covering that object with something opaque, such as a bowl or helm, blocks the sunlight.<br>If any of this spell’s area overlaps with an area of Darkness created by a spell of level 3 or lower, that other spell is dispelled.",
	"Divine the omens": "You entreat spirits of the universe to seek the fate or path of a particular creature within the patterns of the world. By examining the alignment of the stars, char marks upon animal bones, or the physical placement of cast shells, you decipher cosmic guidance.<br>Any creature that acts directly against the portents you uncover must make a Wisdom saving throw against your Spell Save DC to avoid falling out of harmony with destiny. A creature that observes you performing the divination rites has advantage on this saving throw. If a creature successfully resists or realizes the nature of the omen, it must still spend an action and make a successful <i>Intelligence</i> (Investigation) check against your Spell Save DC to find a path forward without suffering minor misfortune or losing their bearing.<br>Resonances<br>The ambient magic of certain environments empowers the spirits answering your call. If you perform this invocation in one of the following areas, the effective spell slot level used to cast it increases by the listed amount (even if this pushes the level past your Proficiency Bonus or highest available spell slot):<br>Clear View of the Night Sky: The spell slot level increases by +1.<br>High Peak or Sacred Mountain: The spell slot level increases by +2.<br>An Ancestral Shrine or Spiritual Nexus: The spell slot level increases by +2.<br><strong>Upcasting</strong><br>Upcasting Benefits (Empowerments)When you cast this spell using a spell slot of 2nd level or higher, you can apply one or more of the following Empowerments for every level above 1st:<br>Hasten Rites (1 Level): The casting time of this spell becomes 1 action.<br>Instantly Swift (2 Levels): The casting time of this spell becomes 1 bonus action.<br>Enduring Portent (1 Level): The duration of the insight gained increases to 10 hours.<br>Unmistakable Omen (1 Level): The DC for the Wisdom saving throw and Intelligence (Investigation) check increases by +2 for every level spent this way.<br>Fated Path (1 Level): You can read the omens for one additional creature for every level spent this way.",
    "Dominion of water": "You touch a pool of liquid water and entreat the water spirits to clear its surface. The ripples smooth out, transforming the pool into a magical mirror that reflects the reflection and immediate surroundings of another specific body of water you have seen before. You can see and hear through this distant water as if you were looking out from just beneath its surface, though you cannot interact with the environment or cast spells through it. Any creature near the target body of water can make a <i>Wisdom</i> (Perception) check against your Spell Save DC to notice a strange ripple or face in the water.<br><strong>Resonances</strong><br>The ambient magic of certain environments empowers the spirits answering your call. If you perform this invocation in one of the following areas, the effective spell slot level used to cast it increases by the listed amount (even if this pushes the level past your Proficiency Bonus or highest available spell slot):<br>Submerged or Swimming in Water: The spell slot level increases by +1.<br>Heavy Rain or Monsoon: The spell slot level increases by +1.<br>The Shadowlands or a Corrupted Font: The spell slot level increases by +2.<br><strong>Upcasting Benefits</strong> (Empowerments) When you cast this spell using a spell slot of 3rd level or higher, you can apply one or more of the following Empowerments for every level above 2nd:<br>Hasten Rites (1 Level): The casting time of this spell becomes 1 action.<br>Instantly Swift (2 Levels): The casting time of this spell becomes 1 bonus action.<br>Enduring Eye (1 Level): The duration of the scrying effect increases to 1 hour.<br>Clear Reflection (1 Level): The DC for creatures to notice your scrying increases by +2 for every level spent this way.<br>Deep Echoes (1 Level): You can scry on a body of water you have only heard described, rather than one you have personally seen.",
	"Druidcraft": "Whispering to the spirits of nature, you create one of the following effects within range.<br>Weather Sensor. You create a Tiny, harmless sensory effect that predicts what the weather will be at your location for the next 24 hours. The effect might manifest as a golden orb for clear skies, a cloud for rain, falling snowflakes for snow, and so on. This effect persists for 1 round.<br>Bloom. You instantly make a flower blossom, a seed pod open, or a leaf bud bloom.<br>Sensory Effect. You create a harmless sensory effect, such as falling leaves, spectral dancing fairies, a gentle breeze, the sound of an animal, or the faint odor of skunk. The effect must fit in a 5-foot Cube.<br>Fire Play. You light or snuff out a candle, a torch, or a campfire.",
    "Entangle": "Grasping plants sprout from the ground in a 20-foot square within range. For the duration, these plants turn the ground in the area into Difficult Terrain. They disappear when the spell ends.<br>Each creature (other than you) in the area when you cast the spell must succeed on a Strength saving throw or have the Restrained condition until the spell ends. A Restrained creature can take an action to make a Strength (Athletics) check against your spell save DC. On a success, it frees itself from the grasping plants and is no longer Restrained by them.",
    "Gust of wind": "A Line of strong wind 60 feet long and 10 feet wide blasts from you in a direction you choose for the duration. Each creature in the Line must succeed on a Strength saving throw or be pushed 15 feet away from you in a direction following the Line. A creature that ends its turn in the Line must make the same save.<br>Any creature in the Line must spend 2 feet of movement for every 1 foot it moves when moving closer to you.<br>The gust disperses gas or vapor, and it extinguishes candles and similar unprotected flames in the area. It causes protected flames, such as those of lanterns, to dance wildly and has a 50 percent chance to extinguish them.<br>As a Bonus Action on your later turns, you can change the direction in which the Line blasts from you.",
	"Hold person": "Choose a Humanoid that you can see within range. The target must succeed on a Wisdom saving throw or have the Paralyzed condition for the duration. At the end of each of its turns, the target repeats the save, ending the spell on itself on a success.<br><strong>Using a Higher-Level Spell Slot.</strong> You can target one additional Humanoid for each spell slot level above 2.",
	"Lesser restoration": "You touch a creature and end one condition on it: Blinded, Deafened, Paralyzed, or Poisoned.",
	"Light": "You touch one Large or smaller object that isn't being worn or carried by someone else. Until the spell ends, the object sheds Bright Light in a 20-foot radius and Dim Light for an additional 20 feet. The light can be colored as you like.<br>Covering the object with something opaque blocks the light. The spell ends if you cast it again.",
	"Magic missile": "You create three glowing darts of magical force. Each dart strikes a creature of your choice that you can see within range. A dart deals 1d4 + 1 Force damage to its target. The darts all strike simultaneously, and you can direct them to hit one creature or several.<br><strong>Using a Higher-Level Spell Slot.</strong> The spell creates one more dart for each spell slot level above 1.",
	"Polymorph": "You attempt to transform a creature that you can see within range into a Beast. The target must succeed on a <i>Wisdom</i> saving throw or shape-shift into Beast form for the duration. That form can be any Beast you choose that has a Challenge Rating equal to or less than the target's (or the target’s level if it doesn’t have a Challenge Rating). The target’s game statistics are replaced by the stat block of the chosen Beast, but the target retains its alignment, personality, creature type, Hit Points, and Hit Point Dice.<br>The target gains a number of Temporary Hit Points equal to the Hit Points of the Beast form. These Temporary Hit Points vanish if any remain when the spell ends. The spell ends early on the target if it has no Temporary Hit Points left.<br>The target is limited in the actions it can perform by the anatomy of its new form, and it can’t speak or cast spells.<br>The target’s gear melds into the new form. The creature can’t use or otherwise benefit from any of that equipment.",
	"Shape water": "You choose an area of water that you can see within range and that fits within a 5-foot cube. You manipulate it in one of the following ways:<br><br>You instantaneously move or otherwise change the flow of the water as you direct, up to 5 feet in any direction. This movement doesn't have enough force to cause damage.<br>You cause the water to form into simple shapes and animate at your direction. This change lasts for 1 hour.<br>You change the water’s color or opacity. The water must be changed in the same way throughout. This change lasts for 1 hour.<br>You freeze the water, provided that there are no creatures in it. The water unfreezes in 1 hour.<br><br>If you cast this spell multiple times, you can have no more than two of its non-instantaneous effects active at a time, and you can dismiss such an effect as an action.",
	"Spike growth": "The ground in a 20-foot-radius Sphere centered on a point within range sprouts hard spikes and thorns. The area becomes Difficult Terrain for the duration. When a creature moves into or within the area, it takes 2d4 Piercing damage for every 5 feet it travels.<br>The transformation of the ground is camouflaged to look natural. Any creature that can’t see the area when the spell is cast must take a Search action and succeed on a Wisdom (Perception or Survival) check against your spell save DC to recognize the terrain as hazardous before entering it.",
    "Thaumaturgy": "You manifest a minor wonder, a sign of supernatural power, within 30 feet (booming voice, flickering flames, tremors).",
	"Tidal wave": "You conjure up a wave of water that crashes down on an area within range. The area can be up to 30 feet long, up to 10 feet wide, and up to 10 feet tall. Each creature in that area must make a Dexterity saving throw. On a failed save, a creature takes 4d8 bludgeoning damage and is knocked prone. On a successful save, a creature takes half as much damage and isn’t knocked prone. The water then spreads out across the ground in all directions, extinguishing unprotected flames in its area and within 30 feet of it, and then it vanishes.",
	"Token of memory": "You entreat spirits of wind to create an illusion of an inanimate object no larger than 5 feet in any dimension. The illusion possesses all sensory qualities of the object (appearance, texture, the feel of weight, sounds, smell, and taste). It cannot actually function as the object it appears to be, however, as it has no mass.Any creature that encounters the illusion must make a Wisdom saving throw against your Spell Save DC to realize it is not real. A creature that observes the illusion when it is being created has advantage on this saving throw. If a creature realizes the illusory nature of the object, it must still spend an action and make a successful <i>Intelligence</i> (Investigation) check against your Spell Save DC to perceive anything the illusion is obscuring.<br><strong>Resonances</strong><br>The ambient magic of certain environments empowers the spirits answering your call. If you perform this invocation in one of the following areas, the effective spell slot level used to cast it increases by the listed amount (even if this pushes the level past your Proficiency Bonus or highest available spell slot):<br>Dim Light or Darkness: The spell slot level increases by +1.<br>Night of a New Moon: The spell slot level increases by +2.<br>The Feywild or a Spirit Realm Echo: The spell slot level increases by +2.<br><strong>Upcasting Benefits</strong> (Empowerments)When you cast this spell using a spell slot of 2nd level or higher, you can apply one or more of the following Empowerments for every level above 1st:<br>Hasten Rites (1 Level): The casting time of this spell becomes 1 action.<br>Instantly Swift (2 Levels): The casting time of this spell becomes 1 bonus action.<br>Enduring Trick (1 Level): The duration of the spell increases to 10 hours.<br>Subtle Illusion (1 Level): The DC for the Wisdom saving throw and <i>Intelligence</i> (Investigation) check increases by +2 for every level spent this way.<br>Fractured Mirror (1 Level): You create one additional copy of the object for every level spent this way.",
	"Watery sphere": "You conjure up a sphere of water with a 5-foot radius at a point you can see within range. The sphere can hover but no more than 10 feet off the ground. The sphere remains for the spell's duration.<br>Any creature in the sphere's space must make a Strength saving throw. On a successful save, a creature is ejected from that space to the nearest unoccupied space of the creature’s choice outside the sphere. A Huge or larger creature succeeds on the saving throw automatically, and a Large or smaller creature can choose to fail it. On a failed save, a creature is restrained by the sphere and is engulfed by the water. At the end of each of its turns, a restrained target can repeat the saving throw, ending the effect on itself on a success.<br>The sphere can restrain as many as four Medium or smaller creatures or one Large creature. If the sphere restrains a creature that causes it to exceed this capacity, a random creature that was already restrained by the sphere falls out of it and lands prone in a space within 5 feet of it.<br>As an action, you can move the sphere up to 30 feet in a straight line. If it moves over a pit, a cliff, or other drop-off, it safely descends until it is hovering 10 feet above the ground. Any creature restrained by the sphere moves with it. You can ram the sphere into creatures, forcing them to make the saving throw.<br>When the spell ends, the sphere falls to the ground and extinguishes all normal flames within 30 feet of it. Any creature restrained by the sphere is knocked prone in the space where it falls. The water then vanishes.",
	"Web": "You conjure a mass of sticky webbing at a point within range. The webs fill a 20-foot Cube there for the duration. The webs are Difficult Terrain, and the area within them is Lightly Obscured.<br>If the webs aren't anchored between two solid masses (such as walls or trees) or layered across a floor, wall, or ceiling, the web collapses on itself, and the spell ends at the start of your next turn. Webs layered over a flat surface have a depth of 5 feet.<br>The first time a creature enters the webs on a turn or starts its turn there, it must succeed on a Dexterity saving throw or have the Restrained condition while in the webs or until it breaks free.<br>A creature Restrained by the webs can take an action to make a <i>Strength</i> (Athletics) check against your spell save DC. If it succeeds, it is no longer Restrained.<br>The webs are flammable. Any 5-foot Cube of webs exposed to fire burns away in 1 round, dealing 2d4 Fire damage to any creature that starts its turn in the fire."
};

const gameData = {
	nations: {
		"Aberrant Empire": {
			desc: "an H.R. Giger and agony inspired nation",
        		mechanics: "<strong>Flesh-Bound Telepathy:</strong> You can speak telepathically to any creature you can see within 30 feet of you. The creature must understand at least one language.",
			allowedRaces: ["Aberrant", "Ahooling", "Archfiend", "Bat Yokai"]
		},
    		"Beast Commune": {
			desc: "a tribal themed theocracy",
        		mechanics: "<strong>Primal Faith:</strong> You gain proficiency in the Religion skill.",
			allowedRaces: ["Aarakocra", "Adrumolari", "Animal Yokai", "Anseri", "Alsied", "Armand", "Aven", "Avoral", "Bariaur", "Bearfolk", "Boarfolk", "Bugbear"]
		},
    		"Elder Branch": {
			desc: "A plant-based people with a duty to gather knowledge.",
        	mechanics: "<strong>Ancient Heritage:</strong> You learn one additional language of your choice.",
			allowedRaces: ["Place Holder"]
		},
    		"Gilded Scales": {
			desc: "A magocracy.",
        	mechanics: "<strong>Draconic Magic:</strong> You learn the Thaumaturgy cantrip.",
			allowedRaces: ["Ankylier", "Axok"]
		},
    		"Human Union": {
			desc: "a victorian industrial revolution captilist communist nation",
        		mechanics: "<strong>Industrial Training:</strong> You gain proficiency with Firearms.",
			allowedRaces: ["Aasimar", "Asherati", "Autognome", "Automaton", "Aventi", "Azer", "Bhuka", "Bladeling", "Brownie"]
		},
    		"Insectoid Horde": {
			desc: "a espionage focused nation with a lot of bioluminescence",
        		mechanics: "<strong>Vermin Chemistry:</strong> You gain proficiency with the Poisoner's Kit.", 
			allowedRaces: ["Antec", "Arachne"]
		}
	}, //Close Nations and boons
	races: {
		"Aarakocra": {
			source: "Mordenkainen Presents: Monsters of the Multiverse",
            		desc: "Avian humanoids that soar through the skies, native to the rugged terrain of the Beast Commune.",
			stats: {Dexterity: 2, Wisdom: 1},			
mechanics: "<strong>Type:</strong> Humanoid.<br><strong>Size:</strong> Medium.<br><strong>Speed:</strong> 30 feet, Flight 50 feet (No medium/heavy armor).<br><strong>Talons:</strong> 1d4 Slashing damage + Strength modifier.<br><strong>Wind Caller:</strong> At 3rd level, cast <span class='spell-tooltip' data-spell='Gust of wind'>Gust of wind</span> without components once per long rest.<br><strong>Languages:</strong> You can speak, read, and write Common, Aven, and Auran.",
			subraces: {} 
		}, //Closed Aarakockra race
		"Aasimar": { 
			source: "Mordenkainen Presents: Monsters of the Multiverse",
            		desc: "Mortals carrying a spark of the Upper Planes within their souls, often manifesting as champions of light.",
			stats: {Charisma: 2},
			mechanics: "<strong>Type:</strong> Humanoid.<br><strong>Size:</strong> Medium or small.<br><strong>Speed:</strong> 30 feet.<br><strong>Darkvision:</strong> 60 feet.<br><strong>Celestial Resistance:</strong> Resistance to necrotic damage and radiant damage.<br><strong>Healing Hands:</strong> As an action, you can touch a creature and roll a number of d4s equal to your proficiency bonus. The creature regains a number of hit points equal to the total rolled. Once you use this trait, you can't use it again until you finish a long rest.<br><strong>Light Bearer:</strong> You know the <br><span class='spell-tooltip' data-spell='Light'>Light</span> cantrip. <i>Charisma</i> is your spellcasting ability for it.<br><strong>Languages:</strong> You can speak, read, and write Common and Celestial.",
			subraces: {
				"Fallen": { source: "Mordenkainen Presents: Monsters of the Multiverse", desc: "An aasimar that has been touched by dark forces or left the path of righteousness becomes a fallen aasimar, their inner light replaced by shadow.", stats: {Strength: 1}, mechanics: "<strong>Necrotic Shroud:</strong>Starting at 3rd level, you can use your action to unleash the divine energy within yourself, causing your eyes to turn into pools of darkness and two skeletal, ghostly, flightless wings to sprout from your back. The instant you transform, other creatures within 10 feet of you that can see you must each succeed on a <i>Charisma</i> saving throw (DC 8 + your proficiency bonus  + your <i>Charisma</i> modifier) or become frightened of you until the end of your next turn.<br>Your transformation lasts for 1 minute or until you end it as a bonus action. During it, once on each of your turn, you can deal extra necrotic damage to one target when you deal damage to it with an attack or a spell. The extra necrotic damage equals your level.<br>Once you use this trait, you can't use it again until you finish a long rest."}, 
				"Protector": {source: "Mordenkainen Presents: Monsters of the Multiverse", desc: "Protector aasimar are charged by the powers of good to guard the weak, to strike at evil wherever it arises, and to stand vigilant against the darkness.", stats: {Wisdom: 1}, mechanics: "<strong>Radiant Soul:</strong> Starting at 3rd level, you can use your action to unleash the divine energy within yourself, causing your eyes to glimmer and two luminous, incorporeal wings to sprout from your back.<br>Your transformation lasts for 1 minute or until you end it as a bonus action. During it, you have a flying speed of 30 feet, and once on each of your turns, you can deal extra radiant damage to one target when you deal damage to it with an attack or a spell. The extra radiant damage equals your level.<br>Once you use this trait, you can't use it again until you finish a long rest."}, 
				"Scourge": {source: "Mordenkainen Presents: Monsters of the Multiverse", desc: "Scourge aasimar are imbued with a divine energy that blazes intensely within them. It feeds a powerful desire to destroy evil—a desire that is, at its best, unflinching.", stats: {Constitution: 1}, mechanics: "<strong>Radiant Consumption:</strong> Starting at 3rd level, you can use your action to unleash the divine energy within yourself, causing a searing light to radiate from you, pour out of your eyes and mouth, and threaten to char you.<br>Your transformation lasts for 1 minute or until you end it as a bonus action. During it, you shed bright light in a 10 foot radius and dim light for an additional 10 feet, and at the end of each of your turns, you and each creature within 10 feet of you take radiant damage equal to half your level (rounded up). In addition, once on each of your turns, you can deal extra radiant damage to one target when you deal damage to it with an attack or a spell. The extra radiant Damage equals your level.<br>Once you use this trait, you can't use it again until you finish a long rest."}, 
				"Variant": {source: "Dungeon Masters Guide.", desc: "A variant aasimar found in the Dungeon Master's Guide with alternative legacy spellcasting options.", stats: {Wisdom: 1}, mechanics: "<strong>Celestial Legacy:</strong> You know the <strong>Light:</strong> cantrip <span class='spell-tooltip' data-spell='Light'>Light</span>. Once you reach 3rd level, you can cast the <span class='spell-tooltip' data-spell='Lesser restoration'>Lesser restoration</span> spell once with this trait, and you regain the ability to do so when you finish a long rest. Once you reach 5th level, you can cast the <span class='spell-tooltip' data-spell='Daylight'>Daylight</span> spell once with this trait as a 3rd level spell, and you regain the ability to do so when you finish a long rest. <i>Charisma</i> is your spellcasting ability for these spells."}
			} //Closed Subraces
		}, //Closed Aasimar Race
		"Adrumolari": { 
			source: "Bespoke Bestiary.",
			desc: "A typical Adrumolari appears as a humanoid version of something like a cross between a mole and an armadill. The fact these proud people frequently keep both as pets and guard animals does nothing to dispel the appearance. Standing five to six feet tall, armored with a flexible ridged shell and thick claws even a peaceful Adrumolari appears ready for combat.",
			stats: {Constitution: 2},
			mechanics: "<strong>Type:</strong> Humanoid.<br><strong>Size:</strong> Medium.<br><strong>Speed:</strong> 20 feet.<br><strong>Darkvision:</strong> 120 feet<br><strong>Elemental Nature:</strong You count as both a humanoid and an elemental for the purpose of spells and abilities<br><strong>Armored Shell:</strong> You have an armored shell. While not wearing armor, your armor class is 13 + your Dexterity modifier.<br><strong>Claws:</strong> You have naturally sharp claws, which you can use to make unarmed strikes. If you hit with them, you deal slashing damage equal to 1d6 + your Strength modifier.<br><strong>Sunlight Sensitivity:</strong> While in sunlight, you have disadvantage on attack rolls, as well as Peception checks that rely on sight.<br><strong>Languages:</strong> You can speak, read, and write common, and terran.",
			subraces: {
				"Armored One": {source: "Bespoke Bestiary.", desc: "The armored ones are raised from birth to leverage their claws and shell in concert with armor and weaponry.", stats: {Strength: 1}, mechanics: "<strong>Adrumolori Weapon Training:</strong> You have proficiency with flails, mauls, pikes, and war picks<br><strong>Powerful Build:</strong> You count as one size larger when determining your carrying capacity and the wieght you can push, drag, or lift.<br><strong>Savage attack:</strong> When you score a critical hit with a melee weapon attack, you can roll one of the weapon's damage dice one additional time and add it to the extra damage of the critical hit."}, 
				"Dredge Priest": {source: "Bespoke Bestiary.", desc: "Dredge priests are those adrumolari blessed by passing earth elementals with a natural affinity toward earthen magics.", stats: {Wisdom: 1}, mechanics: "<strong>Blessing of the Great Crystal:<strong> You know the <span class='spell-tooltip' data-spell='Acid splash'>Acid splash</span> cantrip. When you reach 3rd level, you can cast the <span class='spell-tooltip' data-spell='Magic missile'>Magic missile</span> spell as a 2nd level spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the <span class='spell-tooltip' data-spell='Hold person'>Hold person</span> spell once with this trait and regain the ability to do so when you finish a long rest. <i>Wisdom</i> is your spellcasting ability for these spells.<br><strong>Earthen Gift:</strong> As an action, you can touch a creature and cause it to regain a number of hit points equal to your level. Once you use this trait, you must complete a long rest before using it again."} 
			} //Closed Subraces
		}, //Closed Adrumolari Race
		"Animal Yokai": {
			source: "Adventures in Rokugan",
			desc: "place holder",
			stats: {"+2 to any one ability score, +1 to any other ability score": true},
			mechanics: "<strong>Type:</strong> Fey<br><strong>Size:</strong> Your size varies based on the form you take. See True Form.<br><strong>Speed:</strong> 30 feet<br><strong>Innate Shapeshifting:</strong> you have two forms: your mortal form and your yokai form. After you complete a short rest, you can switch between these forms. Your mortal form appears to be human (or with the GM's permission, another species of your choice) in all anatomical ways, save for the occasional tail poking out from a robe that quickly vanishes when inspected more closely. In mortal form, your size is that of the species you chose.<br>Your yokai form is determined by your lineage: choose fox, or otter, below. When you transform into your yokai form, you can choose for any or all of your items to be safely stored within senkyo, returning to you when you change back into your mortal form.<br><strong>Language:</strong> see backgrounds on page (124).",
			subraces: {
				"Fox": {source: "Adventures in Rokugan", desc: "Kitsune are fox spirits natural born tricksters. Some like to travel and enojoy, aiding or deceiving mortals as their particular personality and beliefs dictate or even take up permanent residence there, for mortal company can be a pleasant change from the rivalries of courts of chikushudo and sakkaku.<br>Thes kitsune sometimes marry or fall in love with mortals, and some descendants of such unions favor their spiritual heritage, possessing their fox ancestors' abilities. Potentially revealing of a kitsune's guise are their tails, which sometimes reappear even when the kitsune takes human form. Kitsune gain additional tails throughout their lives, and the oldest and most powerful. kitsune have nine tails.", mechanics: "<strong>Illusory tricks:</strong> You can cast <span class='spell-tooltip' data-spell='Token of memory'>Token of memory</span> once without expending a spell slot. When you cast it using this trait while in your true form, the spell is treated as if it were cast using a spell slot with a level equal to your Proficiency Bonus.Additionally, if you are in an area of high environmental resonance, the effective spell slot level increases based on the severity of the resonance (detailed in the Token of Memory resonance section).Once you cast this spell using this trait, you cannot do so again until you finish a long rest, or until you spend at least 1 uninterrupted hour within the Feywild (or a highly spiritual echo plane).<br><strong>True form:</strong> Your true form is a fox spirit. Each time you transform into your true form, you become a beast that is small or medium (your choice). Your walking speed becomes 35 feet. You have advantage on <i>Wisdom</i> (Perception) checks that rely on hearing or smell. You cannot wield weapons in this form, and you get access to a bite action that deals 1d4 piercing damage."}, 
				"Otter": {source: "Adventures in Rokugan", desc: "On occasion, when approaching a stream or pond, an exceptionally attractive rafter may offer to ford a traveler across the waters. Upon reaching the maximum depth, both raft and ferry person inevitably vanish, leaving one soaked, tinny laughter echoing off the trees. This is but one of the tricks the kawauso are said to play: shapeshifting otters that are fascinated by human beings and seemingly live to test the limits of their patience.", mechanics: "<strong>True Form:</strong> Your true form is an otter spirit. Each time you transform into your true form, you become a beast that is small or medium (your choice). Your walking speed becomes 20 feet, and you gain a swimming speed of 30 feet. While swimming, you do not provoke opportunity attacks when you move out of an enemy's reach. You cannot wield weapons in this form, and you gain a bite action that deals 1d4 piercing damage.<br><strong>Watery Wayfarer:</strong> You can perform the <span class='spell-tooltip' data-spell='Dominion of water'>Dominion of water</span> spell once without expending a spell slot. When you cast it using this trait while in your true form, the spell is treated as if it were cast using a spell slot with a level equal to your Proficiency Bonus. Additionally, if you are in an area of high environmental resonance, the effective spell slot level increases based on the severity of the resonance (detailed in the Dominion of Water resonance section). Once you cast this spell using this trait, you cannot do so again until you finish a long rest, or spend at least 1 hour swimming in the ocean."}
			} //Closed Subraces 
		}, //Closed Animal Yokai Race
		"Ankylier": {
			source: "Dr Dhrolin's Dictionary of Dinosaurs",
			desc: "The Ankylier are a race of heavily armoured, herbivorous humanoids. They have a large and broad appearance, with thick, bony osteoderms covering their back, flanks, limbs, and head which are, in turn, covered in tough scutes. They are so heavily armoured that even their eyelids are reinforced. Their skin is thick, scaly, and gives them a leathery appearance. Ankylier have low brows, large, muscular limbs bulging stomachs, and a thick tail that ends in a heaby, bony club Ankylier familial bonds are strong. Pairs mate for life and eggs are laid individually several years apart, with offspring cared for up until maturity before the next egg is laid. Eggss are usually carried and threaded wire baskets lined with dried plants to create a portable nest. Hatchlings and young children form close attachments with their parents, usually following in their footsteps, figuratively and literally. Children are incorporated into ankylier society as fast as possible, working as apprentices as soonsas they are able. Some other races see this attitude as akin to child labour, but the Ankylier value the safety and contribution of their children very much. While parents offer harsh criticism, they also provide great praise when deserved.",
			stats: {"+3 Constitution, or +2 Constitution and +1 Strength": true},
			mechanics: "<strong>Type:</strong> You are a humanoid. You are also considered a dinosaur for any prerequisite or effect that requires you to be a dinosaur.<br><strong>Size: Medium.</strong><br><strong>Speed:</strong> 25 feet.<br><strong>Musclebound:</strong> You count as a large creature for determining your carrying weight you can maneuver.<br><strong>Clubbed tail:</strong> When you attack, you may replace any of your attacks with a tail attack. This is a melee weapon attack that you are proficient with and uses your <i>Strenght</i> modifier bludgeoning damage. From level 10 onwards, you can add your proficiency bonus to the damage.<br><strong>Metalworker:</strong> You have proficiency with smith's tools and medium armour. You can create a single shield, simple weapon, or medium armour over the course of a long rest, provided you have access to materials and a forge. If you use this time to create an item in this manner, you only gain the benefits of a short rest.<br><strong>Osteoderms:</strong> you have thick, bony osteoderms in your skin. You gain +3 to your AC, but cannot add your <i>Dexterity</i> modifier to your AC. Alternatively, you may have an unarmoured AC of 17, but cannot add your <i>Dexterity</i> modifier to your AC (we suggest agreeing which of thes you use with your DM.).<br><strong>Languages:</strong> You know Common, Draconic, and another language of your choice in addition to any other languages you know.",
			subraces: {} 
		}, //Closed Ankylier Race
		"Anseri": {
			source: "Historia",
			desc: "They are not graceful or majestic, but they will not allow themselves to be easily subdued, responding to any offense or aggression suffered with twice the strength. The Anseri do not actively look for danger, but despite not being the most feared or respected avians, they will always react with ardor to tense situations. Their webbed legs do not allow them to grasp objects or wield weapons, but they prove decisive in water, where the Anseri are more comfortable than on dry land.",
			stats: {Constitution: 1},
			mechanics: "<strong>Type:</strong> Humanoid.<br><strong>Size:</strong> Medium.<br><strong>Speed:</strong> Your base speed is 15, your flying speed is 30, and your swimming speed is 35.<br><strong>Clumsy:</strong> You have disadvantage on Stealth (<i>Dexterity</i>) checks to move silently on dry land.<br><strong>Orientation:</strong> You always know which direction is North.<br><strong>Fiery Spirit:</strong> If you are hit by an opponent, you can use your reaction to gain advantage on attack rolls against that opponent until the end of their next turn.<br><strong>Wings:</strong> You can use your wings for simple interactions with objects but cannot handle or hold them. Flying with wings requires concentration and you fall if you use them in any other way. If you perform the Dash action while in flight, your flying speed is doubled for the turn.<br><strong>Pecking:</strong> You may use your beak to make unarmed attacks, dealing piercing damage instead of bludgeoning damage.<br><strong>Prehensile legs:</strong> You have developed prehensile hind legs that you can use to grasp objects in a simple way; that is, you can handle them, but are not treated as being proficient with any weapon, tool, or action, that would require the use of two legs simultaneously. An avian needs at least one free leg to be able to stand still on the ground or hang from something.<br><strong>Webbed leg:</strong> You cannot use your legs to grasp objects, but rather use your beak on your long, articulated neck or your wings. On any turn that you take the Dash action while swimming, you may double your movement.<br><strong>Instinct of Familia, Migrator (Prey):</strong> I am looking for the best environment for me, I shy away from hostile environments.",
			subraces: {
				"Duck": {source: "Historia", desc: "Ducks, like many Anseri, know well that they do not have an intimidating presence. For some of them who dream of having the proud profile of an Eagle, and above all their cruel talons, being born Ducks is a great disappointment. For others, however, it is an opportunity: Ducks are intelligent, resourceful, courageous (in their own way) and lovers of novelties. Hardly out of the place in urban or rural environments, they find wild areas and especially the high mountains particularly hostile. However, they do not shy away from challenges, and tend to be very self confident. Chatty and sociable, Ducks are excellent orators, and they express their passions for speech in very different ways. Some end up being so in love with the sound of their voice that they become vainglorious and self centered while others cultivate this inclination by pursuing careers in diplomacy, theater, storytelling, tutoring, or even auctioneering.", stats: {Intelligence: 2}, mechanics: "<strong>Size:</strong> Small.<br><strong>Imprinting:</strong> Choose any one skill. You gain proficiency with that skill (linked to a childhood memory).<br><strong>Resolute:</strong> Once a day, you may re-roll a saving throw and keep the second result.<br><strong>Instinct of Species, Candid:</strong I say what I think frankly."}, 
				"Goose": {source: "Historia", desc: "Many underestimate the Geese for their less martial aspect, but one should be very careful not to make such an error. These Anseri are fearless, aggressive and determined, animated by unshakable, loyal, chivalrous ideals and capable of putting far more dangerous creatures in their place. The regular Avian army is chock full of geese perfectly trained and made even more fearful by their innate ability to work with great coordination when gathered in groups of individuals who share the same goal and moral code. A military career is the obvious choice for many Geese, but those who choose a different profession often undertake one that allows them to write a lot. Despite not being extraordinarily imaginative (there are very few Geese novelists), these meticulous and careful creatures are considered excellent scribes and very reliable secretaries. These Anseri do not fear responsibility and are loyal to their duty, often serving their lord well into old age.", stats: {Strength: 2}, mechanics: "<strong>Size:</strong> Small.<br><strong>Calligrapher:</strong> You have expertise with calligrapher's tools.<br><strong>Courage:</strong> You have advantage when making saving throws against fear effects.<br><strong>Instinct of Species, Loyal:</strong> I always keep my word."},
				"Pelican": {source: "Historia", desc: "Pelicans know they are strong, and do not hesitate to put this force to the service of the weakest. They have a great spirit of sacrifice; they do not fear the judgment of others and are willing to do the right thing even when it could bring them harm. Their altruistic and fearless temperament makes them the backbone of any rescue or protection service of the community: Pelicans are born protectors, and they will fight with merit, without ever exceeding in zeal or violence. However, these brave avians do not always have a good relationship with regulations, especially with those that they perceive as being unfair, and have the tendency to do as they please if put in front of rigid and, in their eyes, unreasonable laws. These anseri are also skilled sailors and have an innate harmony with the weather, which they can read like no other, managing to evaluate with confidence whether they will face a storm or calm weather. Many captains are willing to pay substantial wages to secure a pelican boatswain, and success often smiles upon expeditions that sail with one of them on board.", stats: {Constitution: 2}, mechanics: "<strong>Size:</strong> Small<br><strong>Sack Beak:</strong> You can carry up to a third of your weight and a third of your size in the pouch of your beak.<br><strong>Sailor:</strong> You always understand the evolution of the weather in maritime areas and have the ability to find the best currents and the best time to venture.<br><strong>Instinct of species, Defender:</strong> I defend anyone who is unable to defend themselves."}, 
				"Swan": {source: "Historia", desc: "Countless ballads immortalize the long neck, the scarlet beak and the white plumage (or sometimes blacker than a moonless night) that distinguish the Swans, and they, with great dignity, bask in this poetic aura without embarrassment. These Anseri are extremely vain and aware of the charm they exert on others. The most desired courtesans and the most elusive con artists are Swans, and although their tendency towards manipulation is well known, powerful nobles and common merchants alike continue to fall prey to their plots. Swans are social for the same reasons that Fox kin are, but unlike them they also have a constant need to be fondled, revered and confirmed in their being irresistible. Nothing scares a swan more than growing old (what a tragedy to lose the regal bearing that nature and youth had given them!) or seriously falling in love with someone: when a swan binds to a partner, they become very devoted, caring and faithful, often totally changing their life, even when it means abandoning ease and prestige.", stats: {Charisma: 2}, mechanics: "<strong>Size:</strong> Small<br><strong>Beauty:</strong> If you would drop to or If you are reduced to 0 hit points but are not killed instantly, you may stay at 1 hit point. This ability can be used again after finishing a long rest.<br><strong>Instinct of species, Noble:</strong> I can fly higher than ordinary people."}
			} //Closed Subraces
		}, //Closed Anseri Race
		"Antec": {
			source: "Homebrew",
			desc: "Antecs are outgoing and positive; they undertake adventures with open minds, but will remain subdued around people they do not trust.<br>Antecs have a chitinous exoskeleton, ranging from khaki to rust red. Their heads are heart-shaped with two large compound eyes and small mandibles. The Antec's abdomen has a small hump at the top of their back which contains most of their vital organs. Connected to their abdomen is a small round thorax. Arcane spellcasters receive yellow, purple, or blue markings on their back, Divine spellcasters receive white, gold, or the most favored color of their god, and primal spellcasters receive green, red, or deep blue markings. These markings are permanent and are similar to tribal tattoos. They possess the height of an average human, but weigh less.",
			stats: {Constitution: 2, Wisdom: 1},
			mechanics: "<strong>Type:</strong> Humanoid<br><strong>Size:</strong> Medium<br><strong>Speed:</strong> 30 feet.<br><strong>Skill proficiencies:</strong> Athletics and Survival.<br><strong>Nimble Feet:</strong> You can move through nonmagical difficult terrain without expending extra movement.<br><strong>Chitin Crafters:</strong> When using a weapon crafted with chitin you receive +1 to damage rolls, and when wearing chitin-based armor you receive a +1 to AC.<br><strong>Compound Eyes:</strong> Your large compound eyes allow you to perceive shifts in reality. You have advantage on saving throws and <i>Intelligence</i> (Investigation) checks made to discern illusions.<br><strong>Chitin Armor:</strong> Your chitinous exoskeleton gives you resistance to acid damage.<br><strong>Languages:</strong> You can speak, read, and write Common and Insectoid.",
			subraces: {} 
		}, //Closed Antec Race
		"Ahooling": {
			source: "Underworld Races & Classes",
			desc: "Ahoolings are not considerable in size, though they tend to be very lean and well-muscled. Each bears marks of what it may grow into as the ahooling ages, but the creatures are remarkably adaptive and their bodies evolve to suit their behaviors and environments. Still, they all bear some similar traits: long, piercing fangs that peek out from their mouths, bodies covered in fine, vestigial wings that jut out of their shoulders, taloned hands, and large ears that rise from their narrow skulls in short triangular folds of flesh. The irises of ahoolings are predominantly yellow—the eyes of nocturnal predators.<br>The core of their being demands a diehard approach to life from the ahool, and even their lesser cousins, the ahoolings, lead brutal, hardscrabble lives. They collect trophy fetishes, though only the strongest wear them openly; duels for assuming the spoils of victory from another are commonplace. Ahoolings treasure the drinking of blood; the more types of creatures one can legitimately claim to have drained heightens their social status. Thus the most respected of the beastmen are either fierce combatants or purveyors of their most valued cultural tradition: vino sanguinis (blood wine). While few in number, ahooling moss caverns (which are located on the floor of a cave rather than on the ceiling, unlike the ahool's moss gardens) are always ruled over by a native who has traveled the underworld and returned ascended, a full ahool. When found by their more bestial cousins, these conclaves are quickly subsumed, whittled down until only the toughest ahoolings remain. Their warriors are as much hunters as anything else, but the lesser beastmen show greater reverence for the arts and magic, allowing for their settlements to survive hidden from their stronger cousins.",
			stats: {Constitution: 2, Wisdom: 1},
			mechanics: "<strong>Type:</strong> Humanoid<br><strong>Size:</strong> Medium<br><strong>Speed:</strong> 25 feet.<br><strong>Ahooling wings:</strong> By flapping your vestigial wings, you can slow your descent to 60 feet per round. You do not take falling damage and land on your feet. If you are incapacitated, paralyzed, or petrified before reaching the ground, you begin falling normally. To use this ability, you cannot be wearing medium or heavy armor.<br><strong>Bite:</strong> You can use your bite as a simple melee weapon with which you have proficiency. Your bite has the finesse and light properties, a reach of 5 ft., and deals 1d6 points of piercing damage.<br><strong>Light Blindness:</strong> Abrupt exposure to bright light blinds you for 1 round.<br><strong>Minor Blood Thirst:</strong> Ahoolings must drink the blood of others to fuel their metabolism. Every week, you must consume one gallon of blood per hit die or suffer from level 1 exhaustion. For every additional day without feeding, you increase the exhaustion level by 1. This exhaustion cannot be removed by any means apart from consuming blood equal to one gallon per exhaustion level incurred. If an ahooling manages to drink one gallon of blood, they reduce their exhaustion level by 1. A medium-sized, healthy humanoid generally is assumed to have about 1-2 gallons of blood, though extraction of a whole gallon of blood is fatal to a single individual. Medium creatures drained of more than 0.5 gallons of blood suffer from 1 level of exhaustion. For the purpose of this ability, assume creatures to have twice as much blood per size category above medium, and half as much per size category below medium.<br><strong>Radiance Vulnerability:</strong> You are vulnerable to radiant damage due to your dark heritage.<br><strong>Sunlight Sensitivity:</strong> While in sunlight, you have disadvantage on attack rolls as well as on <i>Wisdom</i> (Perception) checks that rely on sight.<br><strong>Superior Darkvision:</strong> 120 ft.<br><strong>Underworld Resistances:</strong> You are accustomed to the harsh conditions of the underworld. You gain your choice of either cold or thunder resistance.<br><strong>Languages:</strong> You can speak, read, and write Infernal and Common, and generally can understand the basics of Draconic.",
			subraces: {
				"Aquatic Fledgling": {source: "Underworld Races & Classes PDF", desc: "Ahoolings that bear the heritage of ahool spawned from the demons near aquatic realms develop differently than their airborne counterparts; they do not receive wings, but are well suited to water.", mechanics: "<strong>Born Swimmer:</strong You have proficiency in the Athletics skill and gain advantage on all <i>Strength</i> (Athletics) checks made to swim. When you reach 5th level, you gain a swim speed equal to your base speed.<br><strong>Change shape:</strong> At 3rd level, you can use <span class='spell-tooltip' data-spell='Polymorph'>Polymorph</span>, except you can only target yourself and you can only assume the form of a swarm of insects (Jellyfish in the case of most aquatic fledglings) for 1 hour. You must take a long rest to use this ability again.<br><strong>Gills:</strong> Aquatic Fledglings are at no risk of suffocation from being underwater, but can survive out of water only for 24 hours before they start to drown: You are immediately subject to the suffocation rules after this period. You require enough water to fully immerse yourself in it and spend at least 10 minutes inside the water to reset this time."}, 
				"Terrestrial Fledgling": {source: "Underworld Races & Classes PDF", desc: "Not every ahooling evolves to take to the air or the water; some scamper along the walls and squeeze into the minute cracks of the endless caves, living as rat kings of the underworld.", mechanics: "<strong>Born Climber:</strong> You have proficiency in the Athletics skill and gain advantage on all <i>Strength</i> (Athletics) checks made to climb. Once you hit level 3, you gain a climb speed equal to your base speed.<br><strong>Change Shape:</strong> At 3rd level, you can use <span class='spell-tooltip' data-spell='Polymorph'>Polymorph</span>, except you can only target yourself and you can only assume the form of a swarm of eyes (type: aberration) for 1 hour. You must take a long rest to use this ability again<br><strong>Ground control (Recharge 5-6):</strong> At 5th level, you can use your action to touch the floor of any subterranean cave, unworked stone or rock to make it ripple at your command. The terrain in a 5 by 30 ft. line originating from you becomes difficult terrain. When you use ground control, all creatures in the area must succeed on a <i>Dexterity</i> saving throw or fall prone. The DC for this saving throw is equal to 8 + your proficiency bonus + your <i>Constitution</i> modifier."}, 
				"Vampiric Fledgling": {source: "Underworld Races & Classes PDF", desc: "The most feared (and common) type of ahooling is the vampiric fledgling; feared for their powerful predatory instincts and their propensity for blood.", mechanics: "<strong>Blood Thirst:</strong> Vampiric fledglings must drink the blood of others to fuel their metabolism more so than other ahoolings. Once per long rest, you must consume one gallon of blood per hit die or suffer from 1 level of exhaustion. For every additional day without meeting the requirement, you increase the exhaustion level by 1. If an ahooling manages to drink one gallon of blood, they reduce their exhaustion level by 1. This exhaustion cannot be alleviated by any means apart from consuming blood equal to one gallon per exhaustion level incurred.<br><strong>Change Shape:</strong> At 3rd level, you can use <span class='spell-tooltip' data-spell='Polymorph'>Polymorph</span>, except you can only target yourself and you can only assume the form of a swarm of bats for 1 hour. You must take a long rest to use this ability again.<br><strong>Flight of the Vampire:</strong> At 5th level, your wings develop further. You have a flying speed of 35 feet.<br><strong>Vampiric Bite:</strong> As a reaction to hitting a living (non-construct, non-undead) creature with a bite attack, you may regain a number of hit points equal to 1d8 + your <i>Constitution</i> modifier hit points. This ability recharges on a short or long rest."}
			} //Closed Subraces 
		},
		"Alsied": { 
			source: "Midgard Heroes PDF",
			desc: "Alseid are graceful woodland cousins to centaurs, blending the torsos of elves with the lower bodies of nimble deer. Because they rarely venture far from their wooded glades, some call them grove nymphs, although they're certainly more closely related to elves than nymphs. Alseid see the forest as an individual and a friend. They are suspicious of outsiders who do not share this view. Lost travelers who demonstrate deep respect for the forest may spot a distant alseid's white tail and chase after it as it bounces toward a road that leads out of the forest. Disrespectful strangers may follow the same tail to their doom.<br>Alseid have antlers growing from their foreheads. Antlers grow very slowly, branching every 10 years for the first century of life (so an alseid with six points per antler should be between 60 and 70 years old). Further points only develop with the blessing of the forest. No 14 point imperial alseid are known to exist but many tribes are governed by princes with 13 points, indicating that they've done a great service.",
			stats: {Constitution: 2, Wisdom: 1},
			mechanics: "<strong>Type:</strong> Monstrosity.<br><strong>Size:</strong> Medium.<br><strong>Speed:</strong> 40 feet.<br><strong>Darkvision:</strong> 60 feet.<br><strong>Alseid Weapon Training:</strong> You have proficiency with spears and shortbows.<br><strong>Light Hooves:</strong> You have proficiency in the Stealth skill.<br><strong>Quadruped:</strong> The mundane details of the structures of humanoids can present considerable obstacles for you. You have to squeeze when moving through trapdoors, manholes, and similar structures even when a Medium Humanoid wouldn't have to squeeze. In addition, ladders, stairs, and similar structures are difficult terrain for you.<br><strong>Woodfriend:</strong> When in a forest, you leave no tracks and can automatically discern true north.<br><strong>Languages:</strong> You can speak, read, and write Common and Elvish.",
			subraces: {}
		}, //Closed Alsied Race
		"Arachne": { 
			Source: "Homebrew",
			desc: "Most Arachne are solitary by nature and prefer living on their own, whether on the fringes of the city or the depths of the wilderness. Most Arachne are seen with fear and disgust and have become accustomed to hostile treatment by strangers and travelers, developing a darker, more cynical world view. Arachne are half humanoid spider hybrids, with their lower body resembling that of a large eight legged spider, belonging to their arachne parent, the upper body resembling their non arachne parent, whether they be human, elf, dwarf, or another. Arachne stand at roughly 7 feet tall on average. Their spider's half retains the attributes of the species of spider they belong to. Commonly found arachne subspecies include wolf spiders, jumping spiders, and widow spiders. Arachne are much more likely to be female at birth, giving the impression that all arachne are female, when in reality male arachne are simply much rarer and smaller.",
			stats: {Wisdom: 1},
			mechanics: "<strong>Type:</strong> Monstrosity.<br><strong>Size:</strong> Medium.<br><strong>Speed:</strong> 35 feet walking, 20 feet climbing.<br><strong>Darkvision:</strong> 60 feet.<br><strong>Carapace:</strong> You are vulnerable to bludgeoning damage but resistant to piercing damage.<br><strong>Web Spinner:</strong> You may cast the spell <span class='spell-tooltip' data-spell='Web'>Web</span> once per long rest at its lowest level without expending a spell slot. <i>Wisdom</i> is your spellcasting ability for this spell. You are immune to its effect.<br><strong>Hunting/Foraging:</strong> you have proficiency in the Survival skill.<br><strong>Languages:</strong> you can speak, read, and write, Common and Insectoid.",
			subraces: {
				"Jumping": {source: "Homebrew", desc: "Write your first subrace description here.", stats: {Dexterity: 2}, mechanics: "<strong>Speed Demon:</strong> You may add an additional 1d4 to your initiative roll.<br><strong>Natural Jumper:</strong> When making a high or long jump, you may use your <i>Dexterity</i> modifier instead of your <i>Strength</i> modifier. Your jumping distance is also multiplied by 3. You do not need a running start for jumps."}, 
				"Widow": {source: "Homebrew", desc: "Write your first subrace description here.", stats: {Charisma: 2}, mechanics: "<strong>Natural Charm:</strong> You have proficiency with the Pesuasion skill.<br><strong>Superior Darkvision:</strong> 120 feet instead of 60 feet."}, 
				"Wolf": {source: "Homebrew", desc: "Write your first subrace description here.", stats: {Strength: 2}, mechanics: "<strong>Athleticism:</strong> Proficiency with the Athletics Skill<br><strong>Ferocity:</strong> Once per turn you may increase the damage of one melee attack by 1d4."}
			} //Closed Subraces
		}, //Closed Arachne Race
		"Archfiend": {
			source: "Anime 5e",
			desc: "Towering up to 30 feet tall and weighing up to an incredible 15 tons, an archfiend can be a terrifying sight to behold for those unaccustomed to their harsh appearance. Their thick, leathery skin ranges in hues on the blue, black, and brown spectrum and is pulled taught over rippling muscles that emphasizes their incredible power. Many archfiends carve out their subterranean homes themselves using their innate tunneling abilities. As a greater demon from the meterial plane. Archfiends can exert minor magical control over their minor brethren to carry out their bidding.",
			stats: {Strength: 4, Charisma: -1},
			mechanics: "<strong>Type:</strong> Fiend.<br><strong>Speed:</strong> 120 feet.<br><strong>Tunneling:</strong> Powerful muscles and an intimate connection with the earth allows gives you a tunneling speed of up to 1 foot per round which is equivelent to 600 feet per hour. They aren't known for their craftmenship, though; their tunnel designs are crude and functional, rather than carefully sculpted.<br><strong>Conversion:</strong> Archfiend grow in power when injured, gaining 1 point to spend on attributes for every 10 damage received (ie. when hit points are reduced by 10). Damage that is avoided due to the archfiends protected attribute and thus the damage does not reduce hit points is ignored and not considered by the conversion attribute. Archfiends usually allocate these points during combat to attributes that augment their class features.<br><strong>Huge Build:</strong> Due to your size archfiends receive several bonus's and detriments.<br>you have advantage on all strength based checks.<br>You deal an extra 4 damage on strength based damage.<br>you recieve 4 less damage from non magical bludgeoning, piercing and slashing damage.<br>You recieve -4 to your AC.<br>You have a -4 to all attack rolls.<br><strong>Mind Control:</strong> This attribute allows you to mentally dominate other demons, typically for a duration of 1 minute or one dramatic scene (or earlier if the target breaks free from control). You can give extremely basic, non-aggressive suggestions such as (turn around), (run away), (scream), etc.<br>Mind control requires an attack action to use, if used on an unwilling target it rquires a successful <i>Intelligence</i> saving throw. If failed, the target is under your control until they have an opportunity to break the connection. A target that breaks the mind control 3 times in one day is immune to further attempts by you until the following day.<br><strong>Vulnerabilities:</strong> you are vulnerable to lightning damage.<br><strong>Languages:</strong> You can speak, read, and write common and abyssal.",
			subraces: {
				"Terrestrial": {desc: "Choose this option if you do not want to pick the other subrace options and play a vanilla archfiend."},
				"Aerial": {source: "Anime 5e", desc: "Leathery wings sprout from your back giving you the ability to soar through the air.", removes: ["Conversion"], mechanics: "<strong>Flight:</strong> Your wings give you a fly speed of 90."}
			} //Closed Subraces
		}, //Closed Archfiend race
		"Armand": {
			source: "Darksun update",
			desc: "The Armand finding knowledge and experience to be much more valuable than possessions they rarely stay in one plae for long they travel in family groups going from place to place and getting as much knowledge and experience as they can before they move on. The typical armand stands between 3.5 to 4 feet tall and weighs roughly 150 pounds. They are solidly built humanoids, with thick plated skin.",
			stats: {Constitution: 2},
			mechanics: "<strong>Type:</strong> Humanoid.<br><strong>Size:</strong> Small.<br><strong>Speed:</strong> 25 feet.<br><strong>Natural Armor:</strong> Because of your armor plating you gain a +1 to your AC.<br><strong>Claws:</strong> You are never unarmed. You are proficient with your claws, which are melee weapons that deal 1d4 slashing damage.<br><strong>Languages:</strong> You can speak, read, and write common and one more language of your choosing.",
			subraces: {
				"Desert Warden": {source: "Darksun update", desc: "As a desert warden armand, your fram is slightly bulkier than that of your prairie bretheren. The harsh desert climate and rocky terrain has thickened your muscles and adapted your body to the rigors of heat and the dangers of climbing.", stats: {Strength: 1}, mechanics: "<strong>Slow fall:</strong> You may use your reaction when falling to dig your claws into a wall with arm's reach to slow your descent. You take falling damage as if the fall was 20 feet shorter.<br><strong>Damage resistance.</strong> You have resistance to fire damage."},
				"Prairie Seeker": {source: "Darksun update", desc: "As a prairie seeker armand, you have developed skills to navigat the world safely. the rolling prairies are often without landmarks for navigation and you have honed your tribe across the featureless verdant landscape.", stats: {Wisdom: 1}, mechanics: "<strong>Celestial navigation:</strong> As long as you can see the sky, you have advantage on <i>Wisdom</i> (Survival) checks made to navigate.<br><strong>Cantrip:</strong> You know one cantrip of your choice form the druid spell list. <i>Wisdom</i> is your spellcasting ability for the spell."}
			} //Closed Subraces
		}, //Closed Armand race
		"Asherati": {
			source: "Darksun Update",
			desc: "Asherati are greate hunters although rather quite they have a strong sense of community. An asherati appears as a humanoid with smooth skin the color of rust. An asherati can make their skin glow as if with an inner fire, giving ogg a piercing illumination. An asherati has no body hair and eyes the color of ivory. A typical asherati stands 5 to 6 feet tall and weighs about 170 pounds.",
			stats: {Dexterity: 2, Wisdom: 1},
			mechanics: "<strong>Type:</strong> Humanoid.<br><strong>Size:</strong> Medium.<br><strong>Speed:</strong> 30 feet.<br><strong>Thick skin:</strong> Your skin is thick almost chitinous you gain a +1 bonus to AC.<br><strong>Natural dryness:</strong> You only require 1/4 the amount of water then the average person.<br><strong>Body lamp:</strong> you are able to make your skin glow. When you do it produces 60 feet of bright light and 120 feet of dim light beyond that. Once per day, as a bonus action you are able to make your skin blindingly bright. All creatures within 30 feet of you and can see must make a DC = 8 + Proficiency modifier + Charisma mod.<br><strong>Sandswim:</strong> Asherati are able to swim through sand , loose earth and ash as if it were water. you have swim speed equal to your walking speed. You are able to sense objects out to 60 ft, but cannot read, identify individuals, or any other sort of fine perception. You can breath normally under the sand, but this ability does not help you breathing in other mediums or for holding your breath.<br><strong>Heat endurance:</strong> you have advantage against fire based effects. You also ignore the effects of scorching tempuratures.<br><strong>Water Vulnerability:</strong> you have disadvantage on all attack rolls, ability checks and saving throws when completely wet. when fully submerged in water you start drowning immediatly.",
			subraces: {}
		}, //Closed Asherati Race
		"Autognome": {
			source: "The Astral Adventurer’s Guide",
			desc: "Autognomes are mechanical beings built by rock ghomes. Sometimes, because of a malfunction or a unique circumstance, an autognome becomes separated from its creator and strikes out on its own. An autognome bears a resemblance to its creator, and most autognomes are programmed to speak and understand gnomish. The internal components used in an autognome's manufacture can vary wildly; one autognome might have an actual beating heart in its chest cavity, while another might be powered by sardust or intricate clockwork gears. Roll on the autognome history table or choose an entry that you like to identify what event set you on the path to adventure. If nothing on the table appeals to you, work with your DM to create an origin story for your character.<br>Like gnomes, autognomes can live for centuries, typically up to 500 years.",
			stats: {"+2 to any one ability score, +1 to any other ability score or +1 to three different ability scores": true},
			mechanics: "<strong>Type:</strong> Construct.<br><strong>Size:</strong> Small.<br><strong>Speed:</strong> 30 feet.<br><strong>Armored Casing:</strong> You are encased in thin metal or some other durable material. While you aren't wearing armor your base AC is 13 + <i>Dexterity</i> modifier.<br><strong>Built for success:</strong> You can add a d4 to one attack roll, ability check, or saving throw you make, and you can do so after seeing the d20 roll but before the effects of the roll are resolved. You can use this trait a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.<br><strong>Healing Machine:</strong> If the mending spell is cast on you, you can spend a Hit Die, roll it, and regain a number of hit points equal to the roll plus your <i>Constitution</i> modifier (minimum of 1 hit point).<br>In addition, your creator designed you to benefit from several spells that preserve life but that normally don't affect constructs: cure wounds, healing word, mass cure wounds, mass healing word, and spare the dying.<br><strong>Mechanical nature:</strong> You have resistance to poison damage and immunity to disease, and you have advantage on saving throws against being paralyzed or poisoned. You don't need to eat, drink, or breathe.<br><strong>Sentry's rest:</strong> When you take a long rest, you spend at least 6 hours in an inactive, motionless state, instead of sleeping. In this state, you appear inert, but you remain conscious.<br><strong>Specialized Design:</strong> You gain two tool proficiencies of your choice, selected from the Player's Handbook.<br><strong>Languages:</strong> You can speak, read, and write Common and one other language that you and your DM agree is appropriate.",
			subraces: {}
		}, //Closed Autognome
		"Automaton": {
			source: "Steampunk Compendium PDF",
			desc: "Made of gears, metal, and cogs held together by magic, the clockwork automoton are beings constructed out of thick porcelain, metal, and metal filaments around a skeletal frame of metal, and unknown fibers acting as a muscular system. A network of tubes run through the automoton's body, filled with a blood like fluid designed to lubricate and nourish their gears. Automotons are sexless and genderless, though their bodies may have been designed with masculine or feminine features, these are considered by the automaton to be little more than aesthetic aspects. All automatons naturally seem reserved, stoic, and pensive, hiding an array of emotions behind their minorly inexpressive metallic faces. Their faces ewere not designed to display facial expressions merely replicate talking. So it can seem like they are distant to the conversation.",
			stats: {Constitution: 1},
			mechanics: "<strong>Type:</strong> Construct.<br><strong>Size:</strong> Medium.<br><strong>Speed:</strong> 30 feet.<br><strong>Living Construct:</strong> Even though you were constructed, you are a living creature. You are immune to disease. You do not need to eat or breathe, but you can ingest food and drink if you wish. Instead of sleeping, you enter an inactive state for 4 hours each day. You do not dream in this state; you are fully aware of your surroundings and notice approaching enemies and other events as normal.<br><strong>Composite plating:</strong> Your construction incorporates metal sheeting, granting you a +1 to AC.<br><strong>Electrical conductivity:</strong> Lightning attacks are a gamble when you're struck by them. When you take lightning damage, you may make a <i>Constitution</i> saving throw. the DC is either 10 or half the damage taken rounded down, whichever is higher. If you succeed, you can spend your reaction to fling some of the energy back, causing the target to make a <i>Dexterity</i> saving throw. The DC is 8 + your proficiency + your <i>Constitution</i> modifier. If they fail the save, they take half of the damage you took, if they succeed they take no damage and you have disadvantage on attacks until the end of your next turn. This ability recharges after a rest.<br><strong>Languages:</strong> you can speak, read, and write, common and one other language that you share with your creator.",
			subraces: {
				"Guardian": {source: "Steampunk Compendium PDF", desc: "Guardian automatons were built to protect and serve others, always wishing to keep everyone safe and fend off those who would harm weaker beings.", stats: {strength: 1}, mechanics: "<strong>Military grade:</strong> You gain proficiency in your choice of either Athletics, Intimidation, or Survival."},
				"Dancer": {source: "Steampunk Compendium PDF", desc: "Built to entertain, these automatons are agile, small, and quick on their feet. Their purpose was to make all those around them adore their performance, be it dancing or otherwise.", stats: {Dexterity: 1}, mechanics: "<strong>Center stage:</strong> You gain proficiency in your choice of Deception, Performance, or Sleight of Hand."},
				"Mystical": {source: "Steampunk Compendium PDF", desc: "Using the magic inside them to their full potential these automatons were built to assist and contain great magical powers and work with highly adept teachers.", stats: {"+1 to any one mental ability score": true}, mechanics: "<strong>Pushing limits:</strong> You gain proficiency in your choice of Arcana, History, Perception, or Persuasion."},
				"Medical": {source: "Steampunk Compendium PDF", desc: "Made to help people who are injured, thes are well known for their medical prowess. They instinctively know how to treat minor injury, but still require training for conditions that are more severe.", stats: {Wisdom: 1}, mechanics: "<strong>Rest easy:</strong> You have proficiency in the Medicine skill (if you already have proficiency in medicine from another source you gain expertise in it).<br><strong>Bilingual:</strong> you can speak an additional language of your choice."}
			} //Closed Subraces
		}, //Closed Automaton race
		"Aven": {
			source: "Planeshift Amonkhet",
			desc: "Aven delight in flying above their foes, using their superior mobility to confound and outpace their opponents. They love soaring through the sky as well. Aven have human like bodies, arms, and legs, along with birdlike wings and heads.",
			stats: {Dexterity: 2},
			mechanics: "<strong>Type:</strong> Humanoid.<br><strong>Size:</strong> Medium.<br><strong>Speed:</strong> 25 feet walking, 30 feet flying (No medium/heavy armor).<br><strong>Languages:</strong> you can speak, read, and write common and aven.",
			subraces: {
				"Ibis-headed": {source: "Planeshift Amonkhet", desc: "A majority of ibis-headed aven are drawn to the teachings of spellcasting. They take great pride in all their qualities, quick wit, self confidence, cunning and spellcasting prowess.", stats: {Intelligence: 2}, mechanics: "<strong>Studious:</strong> You can add half your proficiency bonus, rounded down, to any <i>intelligence</i> check you make that doesn't already include your proficiency bonus."},
				"Hawk-headed": {source: "Planeshift Amonkhet", desc: "place holder.", stats: {Wisdom: 2}, mechanics: "<strong>Hawkeyed:</strong> You have proficiency in the Perception skill. In addition, attacking at long range doesn't impose disadvantage on your ranged weapon attack rolls."},
				"Parrot-headed": {source: "Homebrew", desc: "place holder.", stats: {Charisma: 2}, mechanics: "<strong>Performer:</strong> you have proficiency with the performance skill.<br><strong>Mimicry:</strong> You can prepare 1 spell from any list of 3rd level or lower and must contain verbal components. You must spend 3 days copying the spell from someone who has the spell prepared."}
			} //Closed Subraces
		}, //Closed Aven race
		"Aventi": {
			source: "Homebrew Update.",
			desc: "Aventi are a very proud people, sometimes to the extent of being considered prickly about such things as their honor. They are quick to take insult but are very particular about their own honarable behavior. Aventi culture is very tradition bound and ordered. This snese of tradition is expressed as the twelve virtues honor, loyalty, bravery, piety, civility, strength, perserverence, dedication, humility, respect, peacefulness, and obligation (especially to family). Aventi have a personal regiment that they follow strictly everyday. Aventi are little different from humans in appearance. Aventi usually stand from 5 to little over 6 feet in height and weigh from 125 to 250 pounds, with men noticeably taller and heavier than women. Aventi coloration tends towards a very pale, almost bluish skin to a lighter tan, with blue and green eyes and hair that ranges between a light brown to a very pale blond. The calves and forearms of aventi feature small swimming fins that fold almost flat when they leave the wate.",
			stats: {"+1 to three stats of your choice": true},
			mechanics: "<strong>Type:</strong> Humanoid.<br><strong>Size:</strong> Medium.<br><strong>Speed:</strong> 30 feet walking and swimming.<br><strong>Amphibious:</strong> You can breath air and water.<br><strong>Innate spellcasting:</strong> You have spellcasting in your veins you gain access to three spells, you can use this trait equal to your <i>Charisma</i> modifier. <i>Charisma</i> is your spellcasting ability for these spells.<br>At level 1 you gain access to the <span class='spell-tooltip' data-spell='Shape water'>Shape water</span> spell.<br>At 3rd level you gain access to the <span class='spell-tooltip' data-spell='Tidal wave'>Tidal wave</span> spell.<br>At 5th level you gain access to the <span class='spell-tooltip' data-spell='Watery sphere'>Watery sphere</span> spell.<br><strong>Languages:</strong> You can speak, read, and write Common and Sylvan.",
			subraces: {}
		}, //Closed Aventi race
		"Avoral": {
			source: "Homebrew Updates.",
			desc: "The avoral are guardians of good they commonly fly overhead cities watching over the people and attacking evil doers, avoral are a friendly people loving to be around people but can seem distant because their attention is usually on something far away. An avoral's bones are strong but hollow, so even the largest specimens weigh no more than 120 pounds. An avoral is about 7 feet tall, each of an avoral's wings has a small hand at the midpoint. When the wings are folded, these appendages are about where human hands woud be and can do nearly anything hands can do.<br>An avoral's visual acuity is virtually unmatched: it can see detail on objects up to 10 miles away and is said to be able to descern the color of a creature's eyes at 200 paces.",
			stats: {Wisdom: 2, Dexterity: 1},
			mechanics: "<strong>Type:</strong> Humanoid.<br><strong>Size:</strong> Medium.<br><strong>Speed:</strong> 35 foot walking, 30 foot flying.<br><strong>Darkvision:</strong> 60 feet.<br><strong>Hawk eyes:</strong> You have advantage on Perception checks.<br><strong>Innate spellcasting:</strong> As an avoral you gain access to some spells. You can use this trait once before needing a long rest.<br>At level 1 you gain access to the <span class='spell-tooltip' data-spell='Magic missile'>Magic missile</span> spell.<br>At 3rd level you gain access to the spell <span class='spell-tooltip' data-spell='Blur'>Blur</span>.<br>At 5th level you gain access to the spell <span class='spell-tooltip' data-spell='Control winds'>Control winds</span>.<br><strong>Languages:</strong> you can speak, read, and write Common and celestial.",
			subraces: {}
		}, //Closed Avoral race
		"Axok": {
			source: "The Book of Lost Magicka PDF",
			desc: "These shark headed individuals form intimate communities based not on location but companionship, patchwork families woven through choice rather than blood, and powerful hearts inherently connected to the water axok recognize the value in the bonds they forge for themselves. Though they are generally known as gentle giants, axok are a diverse people, as different and varied as the waters of the world. Axok tend to be broad shouldered with large dorsal fins, granting them a distinctive silhouette one you're alwasy happy to see. As oceanfolk, their skin can range between dull blues and greys, and some children have patterns that may fade or change as they mature. Axok have gills that run along both sides of their neck towards their collarbones. Though they will often linger close to the water, more nad more axok have migrated to land, forming bonds of their own and taking part in dungeon faring adventurtes and dragon slaying quests.",
			stats: {Dexterity: 2},
			mechanics: "<strong>Type:</strong> Humanoid.<br><strong>Size:</strong> Medium.<br><strong>Speed:</strong> 25 feet walking, 40 feet swimming.<br><strong>Aquatic nature:</strong> You are able to breathe in both air and water.<br><strong>Rough skin:</strong> You have a base AC of 11 + <i>Dexterity</i> modifiier.<br><strong>Fierce Bite:</strong> Your jaws can have up to a dozen rows of teeth, all with the ability to grow back almost as soon as they are lost. Your teeth can be used as natural weapons. As an attack action on your turn, you can make a melee attack with yout teeth against a creature withing 5 feet of you. On a hit, the target takes 2d6 + your <i>Strength</i> modifier piercing damage. Once used, this ability may only be used again after completing a long rest.<br><strong>Languages:</strong> You can speak, read, and write Common and Aquan.",
			subraces: {
				"Blunt": {source: "The Book of Lost Magicka PDF", desc: "As blunt axok, your tracking skills are unmatched. Experienced and persistent, blunt axok have developed unique hunting techniques that improve their ability to locate their foes.", stats: {Intelligence: 1}, mechanics: "<strong>Electrosensitivity:</strong> You gain proficiency in Perception. As a bonus action, you may use blindsight to perceive within 15 feet of you. This ability lasts until your next turn. Once used, this ability may only be used again after completing a long rest."},
				"Somnal": {source: "The Book of Lost Magicka PDF", desc: "As a somnal axok, you reside in temperate waters rather than the cool environments others prefer. You are drawn to the heat, even resting in deep waters near hydrothermal vents.", stats: {Constitution: 1}, mechanics: "<strong>Volcanic Habitat:</strong> Having lived your whole life in hot climates, you have grown accustomed to the heat. You have resistance to fire damage."},
				"Magnificent": {source: "The Book of Lost Magicka PDF", desc: "As magnificent axok, you are toothier than most of your kind with resilience to match. You have endured the harships of the sea and trained your body for battle rather than still waters.", stats: {Strength: 1}, mechanics: "<strong>Blood frenzy:</strong> You instinctually respond to the smell of blood. You may use a bonus action to enter a frenzied state. Until your next turn, you have advantage on attacks against enemies that have taken damage, and your bite attack increases to 2d8 + your <i>Strength</i> modifier piercing damage. Once used, this ability may only be used again after completing a long rest."}
			} //Closed Subraces
		}, //Closed Axok race
		"Azer": {
			source: "Homebrew Update",
			desc: "Azers were originally form the elemental plane of fire but fled when the efreeti tried to kill their kind after they finished the city of bronze because of this azers are jealous people and don't like to take jobs for fear of the past to repeat. Azers resemble male dwarves except for their brass colored skin, and hair and beard of flames.",
			stats: {Intelligence: 2, Constitution: 1},
			mechanics: "<strong>Type:</strong> Elemental.<br><strong>Size:</strong> Medium.<br><strong>Speed:</strong> 25 feet.<br><strong>Darkvision:</strong> 60 feet.<br><strong>Tough:</strong> As a reaction you can add your <i>Constitution</i> modifier to your AC once a day this increases to twice a day at Level 10.<br><strong>Denizens of the fire plane:</strong> Resistance to fire and poison damage.<br><strong>Illumination:</strong> Your head is wreathed in flames that shed bright light in a 10 foot radius and dim light for an additional 10 feet. This gives you disadvantage on stealth checks to hid in dim or dark areas.<br><strong>Flames of war:</strong> You are proficient with Warhammers, Warpicks, and shields.<br><strong>Languages:</strong> You can speak, read, and write Common and Primordial.",
			subraces: {}
		}, //Closed Azer race
        "Bariaur": {
            source: "Homebrew Update",
            desc: "The Bariaur are generally peaceful but can be very competitive with others this can be mistaken for pettiness or pride bu they leave the compitition more friendly then they enter they do not fear death, battle or even the most monstrous creatures. Honor driven in most cases it is a special moment whn a bariaur sets aside his quest for a few moments or hours of sport and racing with his companions. they bond heavily to those closest to them willing to travel across the most dangerous planes to be at the bed of their sick friends. The markets and bazaars are filled with bariaur as they are great salesmen. The bariaur often reminds one of centaurs, with their goat bodies topped by human torsos and arms. However, their faces display somewhat bestial features, and curiously both male and females can be found sporting a pair of curling ram's horns. Bariaur can be especially fussy about their appearances, taking ample care to dye and shave their pelts into intricate patterns. Strict herbivores, bariaur revel in feasts of fruits and other vegetation accompanying strong drinks.",
            stats: {Charisma: 2, Strength: 1},
            mechanics: "<strong>Type:</strong>Monstrosity.<br><strong>Size:</strong> Medium.<br><strong>Speed:</strong> 40 feet.<br><strong>Darkvision:</strong> 60 feet.<br><strong>Natural weapons:</strong> You have a pair of ram horns on your head, on your turn you make an attack action using these horns that deals 1d4 bludgeoning damage, if you attack with your horns you can use a bonus action to try and knock the creature prone.<br><strong>Hard headed:</strong> You have advantage on all <i>Wisdom</i> and <i>Charisma</i> saving throws against magic.<br><strong>Ram:</strong> When you use the dash action during your turn, you may make a melee attack with your horns as a bonus action. This attack deals an additional 1d4 points of bludgeoning damage.<br><strong>Sharp senses:</strong> You have proficiency in the Perception skill.<br><strong>Sure footed:</strong> You have advantage on <i>Strength</i> and <i>Dexterity</i> saving throws made against effects that would knock you prone. You also have no problems navigating ladders.<br><strong>Languages:</strong> You can speak, read, and write Common and one other language of your choice.",
            subraces: {}
        }, //Closed Bariaur race
        "Bat Yokai": {
            source: "Adventures in Rokugan",
            desc: "The shapeshifting bat yokai are more prevelent during the night, and are associated with the realm of dreams, and they have the power to traverse that ever shifting realm.",
            stats: {"+2 to any one ability score, +1 to any other ability score": true},
            mechanics: "<strong>Type:</strong> Fey<br><strong>Size:</strong> Your size varies based on the form you take. See True Form.<br><strong>Speed:</strong> 30 feet<br><strong>Innate Shapeshifting:</strong> you have two forms: your mortal form and your yokai form. After you complete a short rest, you can switch between these forms. Your mortal form appears to be human (or with the GM's permission, another species of your choice) in all anatomical ways, save for the occasional tail poking out from a robe that quickly vanishes when inspected more closely. In mortal form, your size is that of the species you chose.<br>Your yokai form is determined by your lineage: choose fox, or otter, below. When you transform into your yokai form, you can choose for any or all of your items to be safely stored within senkyo, returning to you when you change back into your mortal form.<br><strong>Dreamwalker:</strong> When you take a long rest, you can journey into the realm of dreams to gain hints of what is to be, performing <span class='spell-tooltip' data-spell='Divine the omens'>Divine the omens</span> spell once without expending a spell slot. When you cast it using this trait while in your true form, the spell is treated as if it were cast using a spell slot with a level equal to your Proficiency Bonus.Additionally, if you are in an area of high environmental resonance, the effective spell slot level increases based on the severity of the resonance (detailed in the Divine the omens resonance section).Once you cast this spell using this trait, you cannot do so again until you finish a long rest.<br><strong>True form</strong> Your true form is a bat spirit. Each time you transfomr into your true form, you become a beast that is Tiny or Small (your choice). Your walking speed becomes 5 feet and you gain a flying speed of 40 feet. You have advantage on <i>Wisdom</i> Perception checks that rely on hearing and 60 feet of Blindsight as long as you can hear. You also gain access to a bite attack that deals 1d4 piercing damage.<br><strong>Language:</strong> see backgrounds on page (124).",
            subraces: {}
        }, //Closed Bat Yokai race"
        "Bearfolk": {
            source: "Midgard Heroes Handbook",
            desc: "Bearfolk are massive people of iron resolve and deep nobility, resembling bears that walk upright rather than all fours. Hailing from colder climates, bearfolk put their trust in family and tribe to stand against the world. In defiance of ther brutish appearance, they are deeply spiritual and artistic.<br>Bearfolk are broad shouldered, bipedal humanoids. Although they strongly resemble upright bears, they have longer legs than any bear and their massive hands are more like a human's hand than a bear's paw. They lack the bear's sharp claws, but they're as dextrous as any human craftsman. Their muscles develop early in life, and most bearfolk look it. Their physiques tend toward great bulk beneath shaggy fur. Even the slenderest bearfolk are quite strong. They're covered in shaggy fur that can have a range of colors. The most common are black and brown, often with a lighter frosting or tip on the chest, shoulders, and upper back. Coppery red, honey colored and even pure white fur occur rarely. The color gives a clue to the particular bearfolk's heritage, but not an exact indicator. As they age, bearfolk tend to go silvery around the muzzle.",
            stats: {Strength: 2},
            mechanics: "<strong>Type:</strong> Humanoid.<br><strong>Size:</strong> Medium.<br><strong>Speed:</strong> 30 feet.<br><strong>Bite:</strong> Your powerful jaws are natural weapons, which you can use to make unarmed strikes. If it hits, you deal 1d6 + your <i>Strength</i> modifier piercing damage.<br><strong>Natural armor:</strong> Your hide is thick and tough, granting you a naturtal AC of 13 + <i>Dexterity</i> modifier.<br><strong>Powerful build:</strong> You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift.<br><strong>Ursine talent:</strong> You have proficiency in the Athletics and Perception skills.<br><strong>Languages:</strong> You can speak, read, and write Common, and either gnoll or an exotic language of your choice. ",
            subraces: {
                "Grizzlehide": {source: "Midgard Heroes Handbook", desc: "As a grizzlehide bearfolk, you are thicker and hardier than your cousins. Grizzlehide fur ranges from black to golden, often with light gray or blonde tips. Tough and ferosious grizzlehides are the original bearfolk stock.", stats: {Constitution: 1}, mechanics: "<strong>Bear hug:</strong> When you take the attack action, you can make an unarmed strike as a bonus action. If you hit, you can grapple the target in addition to dealing damage to it. You can use this ability a number of times equal to your <i>Constitution</i> modifier (minimum of 1), and you regain all expended uses when you finish a long rest.<br><strong>Thick coat:</strong> You are resistant to cold damage."},
                "Purifier": {source: "Midgard Heroes Handbook", desc: "As a purifier, you are slighter of build, with reddish or pale fur and with a strong affinity for nature. Purifiers often serve as spiritual anchors in their communities. Purifiers are a recent branch of the bearfolk race.", stats: {Wisdom: 1}, mechanics: "<strong>Nature's gift:</strong> Youknow one cantrip of your choice from the druid spell list. <i>Wisdom</i> is your spellcasting ability for it.<br><strong>Stalwart will:</strong> When you make an <i>Intelligence</i>, <i>Wisdom</i>, or <i>Charisma</i> saving throw, you can roll a d4 and add the result to your total. You can do this after the roll but before any effects occur. Once you use this feature, you can't use it again until you finish a short or long rest."}
           } //Closed Subraces
        }, //Closed Bearfolk race
        "Bhuka": {
            source: "Homebrew Update",
            desc: "A bhuka never approaches strangers but observers from hiding as long as possible while gaugeing the newcomers' intent. Even if they do not make contact, a bhuka reveals nothing of their kin or settlement and is very cautious in their dealings. Bhukas are slightly built with sand colored skin and brick red, tightly curled hair. Their large ears, networked with veins, fold flat against the head to retain heat in colder climates and keep out debris. A frill of skin about the neck contains numerous spines that can lift the frill and rais it for cooling. The face of a bhuka is flat, with slit like nostrils protected by flaps of skin. A bhuka's eyes have long lashes to keep out sand and dust, and the skin sroounding them is darker than the rest of the face.",
            stats: {Dexterity: 2, Strength: 1},
            mechanics: "<strong>Type:</strong> Humanoid.<br><strong>Size:</strong> Medium.<br><strong>Speed:</strong> 30 feet.<br><strong>Desert survivor:</strong> Your kind is used to living in harsh enironments, you have proficiency with the Survival skill.<br><strong>Sure feet:</strong> Your large splayed feet allow you to ignore nonmagical difficult terrain.<br><strong>Languages:</strong> You can speak, read, and write Common and Goblin.",
            subraces: {}
        }, //Closed Bhuka race
        "Bladeling": {
            source: "Homebrew Update",
            desc: "Bladelings are very combative, any disagreement is solved through fighting because of this the bladelings are often hired as as bodyguards. Bladelings are humanoid beings with skin of a dull metallic hue, spotted with patches of metallic spines. Their eyes gleam like shards of purple ice, and their blood is black and oily.",
            stats: {Wisdom: 2, Strength: 1},
            mechanics: "<strong>Type:</strong> Humanoid.<br><strong>Size:</strong> Medium.<br><strong>Speed:</strong> 30 feet.<br><strong>Darkvision:</strong> 60 feet.<br><strong>Metal like skin:</strong> Your skin is like metal granting you resistance against acid damage.<br><strong>Body barbs:</strong> Any creature that makes an unarmed attack or tries to grapple you takes 1d4 piercing damage.<br><strong>Razor storm:</strong> You can use your action to expel shrapnel like bits of your skin in a 15 foot cone. Each creature in the area must make a <i>Dexterity</i> saving throw. The DC for this saving throw equals 8 + your proficiency bonus. A creaturte takes 2d6 piercing damage on a failed save, and half as much damage on a successfull one. The damage increases to 3d6 at level 6, 4d6 at level 11 and 5d6 at level 16. After you use this attack, you can't use it again until you complete a short or long rest.<br><strong>Languages:</strong> You can speak, read, and write Common and one other language of your choice.",
            subraces: {}
        }, //Closed Bladeling race
        "Boarfolk": {
            source: "Tome of Horrors",
            desc: "Placeholder.",
            stats: {Strength: 2, Charisma: 1},
            mechanics: "<strong>Type:</strong> Humanoid.<br><strong>Size:</strong> Medium.<br><strong>Speed:</strong> 30 feet.<br><strong>Darkvision:</strong> 60 feet.<br><strong>Beasts of burden:</strong> You are considered to be one size larger for the purposes of determining your carrying capacity.<br><strong>Created race:</strong> You have advantage on saving throws against spells or effects which would alter your form. In addition, you have proficiency in one skill and tool of your choice.<br><strong>Keen scent:</strong> you have advantage on <i>Wisdom</i> (Perception) checks based on scent.<br><strong>Tusks:</strong> You have forward, upthrust tusks that allow you to make a gore attack. You are proficient with your tusks. They are melee weapons that deal 1d8 piercing damage and you cannot be disarmed of them.<br><strong>Languages:</strong> You can speak, read, and write Common and Gnoll.",
            subraces: {}
        }, //Closed Boarfolk race
        "Brownie": {
            source: "Tome of Horros",
            desc: "Placeholder.",
            stats: {Dexterity: 2, Charisma: 1},
            mechanics: "<strong>Type:</strong> Fey.<br><strong>Size:</strong> Small.<br><strong>Speed:</strong> 25 feet.<br><strong>Faeriefolk:</strong> You cannot be put to sleep or aged by magic.<br><strong>Slight:</strong> Your small size gives you a +1 bonus to your AC, and you have proficiency in the Stealth skill.<br><strong>Fey magic:</strong> You know the <span class='spell-tooltip' data-spell='Druidcraft'>Druidcraft</span> cantrip. Once you reach 3rd level, you can cast the <span class='spell-tooltip' data-spell='Entangle'>Entangle</span> spell once per day. Once you reach level 5, you can also cast the <span class='spell-tooltip' data-spell='Spike growth'>Spike growth</span> spell once per day. <i>Charisma</i> is your spellcasting ability for these spells.<br><strong>Languages:</strong> You can speak, read, and write Common and Sylvan.",
            subraces: {}
        }, //Closed Brownie race
        "Bugbear": {
            source: "Mordenkainen Presents: Monsters of the Multiverse",
            desc: "When they're not in battle, bugbears spend much of their time resting or dozing. They don't engage in crafting or agriculture to any great extent, or otherwise produce anything of value. They bully weaker creatures into doing their bidding, so they can take it easy. When a superior force tries to intimidate bugbears into service, they will try to escape rather than perform the work or confront the fore. Even when subsumed into a goblinoid host and drawn into war, bugbears must often be roused from naps and bribed to get them to do their duties. Bugbears feature in the nightmare tales of many races, great, hairy beasts that creep through the shadows as quiet as cats. If you walk alone in the woods, a bugbear will reach out of the bushes and strangle you. If you stray too far from the house at night, bugbears will scoop you up to decour you in their den. If a bugbear cats off your head, your soul stays trapped inside, and the bugbears use your head to magically command all whom you once knew.",
            stats: {Strength: 2, Dexterity: 1},
            mechanics: "<strong>Type:</strong> Humanoid.<br><strong>Size:</strong> Medium.<br><strong>Speed:</strong> 30 feet.<br><strong>Darkvision:</strong> 60 feet.<br><strong>Fey ancestry:</strong> You have advantage on saving throws you make to avoid or end the charmed condition on yourself.<br><strong>Long limbed:</strong> When you make a melee attack on your turn, your reach forit is 5 feet greater than normal.<br><strong>Powerful build:</strong> You count as one size large when determining your carrying capacity and the weight you can push, drag, or lift.<br><strong>Sneaky:</strong> You are proficient in the Stealth skill. In addition, without squeezing, you can move through and stop in a space large enough for a small creature.<br><strong>Surprise attack:</strong> If you surprise a creature and hit it with an attack on your first turn in combat, the attack deals an extra 2d6 damage to it. You can use this trait only once per combat.<br><strong>Languages:</strong> You can speak, read, and write Common and Goblin.",
            subraces: {}
        }, //Closed Bugbear race
    }, //Closed races
		universalSubraces: {
        	"Aberrant": { 
            		source: "Corpus Malicious PDF",
			desc: "You are one of the most bizarre creatures to walk the land. You look like a humanoid but you have aberration blood running through your veins.",
			stats: {Intelligence: 1, Wisdom: -1},
			mechanics: "<strong>Type:</strong> Aberration.<br><strong>Darkvision: 60 feet.</strong><br><strong>Aberrant Lucidity:</strong> The aberration blood in your veins grants you a lucidity about whichever environment you are in, both socially and physically. You gain advantage on your <i>Wisdom</I> (Insight) checks and your <i>Wisdom</i> (Perception) rolls.<br><strong>Madness will not die:</strong> If you die, your soul leaves your body, but your blood does not. When your consciousness abandons you, the aberration within you takes over. It can use your character to do anything it wants until your soul is brought back by spells like revivify, resurrection, wish or true resurrection. The motives of the aberration are at the GM's discretion and is only known by the GM.<br><strong>Shattered Mind:</strong> The whispers you hear and the maddening dreams you see distort your mind, your thoughts and your ability to focus. You are immune to being frightened, but you have disadvantage on ability checks to remember names, historic information, etc.<br><strong>Submitting to madness:</strong> You can choose to bring forth the madness within you. The sentient blood of yours takes control, twists your physical appearance and grants you new powers. When you choose to unleash the madness within, your appearance changes and you look more similar to an aberration. For example, dark purple or pale green veins become visible on your skin, which may also turn a cloudier color, you may develop a foul stench. You can talk to your GM to determine in what way your appearance becomes more aberrant.<br>Your submission to madness lasts for 1 minute. Since this is a very painful process for your mortal body, although you gain unique powers during the submission, you also suffer 2 levels of exhaustion at the end of the duration. When you set the aberration within you free, you gain the following benefits.<br>Because of your aberrant appearance, you have disadvantage on your <i>Charisma</i> (Deception) and <i>Charisma</i> (Persuausion) checks and gain advantage on your <i>Charisma</i> (Intimidation) checks.<br>You gain the ability to breath underwater.<br>You start to talk and understand Deep Speech and you cannot talk in a language other than Deep Speech even if you do not know it normally. This does not affect your spellcasting, meaning that you can still cast spells that have a verbal component.<br>You can cas the crown of tyranny spell once. The DC of the spell equals 8 + your proficiency bonus + your <i>Intelligence</i> modifier.'<br>'You can use your action to summon an ooze like aberration that is connected to your body. It is a reflection of the sentient blood within you, an Aberrant visage (p.232). As you grow in power, it becomes more powerful as well. You can call forth an aberrant visage of CR 1/4 at 1st level, of CR 1 at 5th level, CR 2 at 9th level, of CR 3 at 13th level and of CR 4 at 17th level. You can use your bonus action to dismiss the aberration, or it is dismissed automatically when the duration of your Submitting to Madness ends or its hit points drop to 0.",
            		allowedNations: ["Aberrant Empire"] //Only available if they picked these nations
        	}, //Closed subrace
        	"Archaeon": { 
            		source: "Book of Monstrous Might", 
            		desc: "The archaeon can trace their heritage back to powerful good outsiders. Angelic blood flows through the veins of each and every archaeon, and grants them power. Archaeon tend to have golden or handsom features.", 
			stats: {Charisma: 1},
            		mechanics: "<strong>Darkvision:</strong> 60 Feet.<br><strong>Skills:</strong> Proficiency in Performance.<br><strong>Righteous Aura:</strong> Instilling the Same Confidence in their allies as their greater angelic kin, you can spend a use of your memeory of a thousand lifetimes ability and five it to an ally of your choice.<br><strong>Celestine:</strong> You have resistance to necrotic and radiant damage.<br><strong>Lightbringer:</strong> You know the <span class='spell-tooltip' data-spell='Light'>Light</span> cantrip. <i>Charisma</i> is your spellcasting ability.<br><strong>Healing hands:</strong> At 5th level as an action, you can touch a creature and cause it to regain a number of hit points equal to your level. Once you use this ability, you can't use it again until you finish a long rest.<br><strong>Languages:</strong> You can speak, read, and write, Common and Celestial.",
            		allowedNations: ["Beast Commune"] // Only available if they picked Beast Commune
       		}
	}, // closed Universal subraces
	backgrounds: {
		"Acolyte": { source: "Players Hand Book", desc: "You devoted yourself to service in a temple, either nestled in a town or secluded in a sacred grove. There you performed rites in honor of a god or pantheon. You served under a priest and studied religion. Thanks to your priest’s instruction and your own devotion, you also learned how to channel a modicum of divine power in service to your place of worship and the people who prayed there.", mechanics: "Shelter of the Faithful, Insight & Religion skills" },
		"Soldier": { source: "Players Hand Book", desc: "A veteran trained in tactical battlefield maneuvers.", mechanics: "Military Rank feature, Athletics & Intimidation skills" },
		"Criminal": { source: "Players Hand Book", desc: "An outlaw thriving in dark alleys and underground syndicates.", mechanics: "Criminal Contact network, Stealth & Deception skills" }, 
		"Noble": { source: "Player Hand Book", desc: "a noble", mechanics: "Stuff"}, 
		"Sage": { source: "Players Hand Book", desc: "a sage", mechanics: "Things"},
	},
	classes: {
        	"Artificer": { source: "Tasha’s Cauldron of Everything", desc: "Artificers use ingenuity and magic to unlock extraordinary capabilities in objects.", stats: {}, mechanics: "Infusions, Spellcasting feature." },
		"Barbarian": { source: "Players Hand Book", desc: "A fierce warrior whose fury fuels their abilites.", stats: {}, mechanics: "Rage, Unarmored defense" },
		"Bard": { source: "Players Hand Book", desc: "An artist whose works pluck the magical threads of the weave to devistating effect.", stats: {}, mechanics: "Spellcasting feature, Bardic insperation." },
		"Cleric": { source: "Players Hand Book", desc: "A priestly champion who wields divine magic in service of a higher power.", stats: {}, mechanics: "Spellcasting feature, Channel Divinity." },
		"Druid": { source: "Players Hand Book", desc: "A priest of the Wilds, wielding the powers of nature and adopting beast forms.", stats: {}, mechanics: "Spellcasting feature, Wildshape." },
		"Fighter": { source: "Players Hand Book", desc: "A master of martial weapons, armor, and combat tactics.", mechanics: "Fighting Style choice, Second Wind recovery feature" },
		"Monk": { source: "Players Hand Book", desc: "A master of martial arts, harnessing the energy of the body in pursuit of physical and spiritual perfection.", stats: {}, mechanics: "Unarmored defense, Ki channeling." },
		"Paladin": { source: "Players Hand Book", desc: "A holy warrior bound to a sacred oath.", stats: {}, mechanics: "Spellcasting feature, Smite." },
		"Ranger": { source: "Players Hand Book", desc: "A warrior who uses martial prowess and nature magic to combat threats on the edges of the wild.", stats: {}, mechanics: "Favored enemy/terrain, Spellcasting feature" },
		"Rogue": { source: "Players Hand Book", desc: "A individual who uses stealth and trickery to overcome obstacles and enemies.", stats: {}, mechanics: "Expertise, Sneak attack." },
		"Sorcerer": { source: "Players Hand Book", desc: "A spellcaster who draws on inherent magic from a gift or bloodline.", stats: {}, mechanics: "Spellcasting feature, Sorcery points." },
		"Warlock": { source: "Players Hand Book", desc: "A wielder of magic that is derived from a bargain with an otherworldly patron.", stats: {}, mechanics: "Spellcasting feature, Eldritch invocations." },
        "Wizard": { source: "Players Hand Book", desc: "An arcane scholarly caster manipulating fabric of reality.", mechanics: "Spellcasting feature, Arcane Recovery option" }
    }
};

//Object to temporarily hold the user's active choice
let characterDraft = {
	nation: "",
	race: "",
	subrace: "",
	background: "",
	class: ""
};

let currentStep = "nation";

// Global view switching
function switchView(viewId) {
    const allViews = document.querySelectorAll('.view');
    allViews.forEach(view => view.classList.add('hidden'));
    document.getElementById(viewId).classList.remove('hidden');
    if (viewId === 'alchemy-view') {
        renderAlchemyShelf();
    }

    const box = document.getElementById('global-spell-box');
    if (box) box.classList.remove('visible');
}

// Side Panel Inspector Engine (MUST BE ABOVE RENDERING LOOPS)
function inspectOption(step, name, description, mechanics) {
    let sourceText = "Homebrew / Custom Setting"; // Default fallback text

    try {
        if (step === "nation") {
            sourceText = gameData.nations[name].source || "Dormegantu Core Setting";
        } else if (step === "race") {
            sourceText = gameData.races[name].source || "Setting Core Rules";
        } else if (step === "subrace") {
            const parentRace = characterDraft.race;
            
            // Check if it's a specific subrace first
            if (gameData.races[parentRace] && gameData.races[parentRace].subraces[name]) {
                sourceText = gameData.races[parentRace].subraces[name].source || gameData.races[parentRace].source;
            } 
            // Fallback: Check if it's a universal subrace
            else if (gameData.universalSubraces && gameData.universalSubraces[name]) {
                sourceText = gameData.universalSubraces[name].source || "Universal Bloodline";
            }
        } else if (step === "background") {
            sourceText = gameData.backgrounds[name].source || "Players Hand Book";
        } else if (step === "class") {
            sourceText = gameData.classes[name].source || "Players Hand Book";
        }
    } catch (e) {
        // Fallback protection if a custom property name typo happens later
        sourceText = "Homebrew / Expansion Source";
    }

    // Update Title element
    document.getElementById('preview-title').innerText = name;
    
    // Inject custom source badge and description text fields smoothly
    document.getElementById('preview-blurb').innerHTML = `
        <div style="font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #e4a853; margin-bottom: 8px; font-weight: bold;">
             Source: ${sourceText}
        </div>
        <em style="display: block; margin-top: 5px; color: #aaa;">"${description}"</em>
    `;
    
    // Update Mechanics box
    document.getElementById('preview-features').innerHTML = `
        <strong> Features & Benefits:</strong>
        <p style="margin-top: 8px; line-height: 1.4; font-size: 14px;">${mechanics}</p>
    `;
    
    // Core confirmation action button
    document.getElementById('preview-actions').innerHTML = `
        <button class="confirm-choice-btn" onclick="advanceBuilder('${step}', '${name}')">Confirm Selection ✓</button>
    `;
}
// Clear panel between choices
function clearInspector() {
    document.getElementById('preview-title').innerText = "Inspect an Option";
    document.getElementById('preview-blurb').innerText = "Click any option on the left to read its lore, racial traits, or class abilities before making your final selection.";
    document.getElementById('preview-features').innerHTML = "";
    document.getElementById('preview-actions').innerHTML = "";
    const box = document.getElementById('global-spell-box');
    if (box) box.classList.remove('visible');
}

// 3. STEP PROGRESSION LOGIC FRAMEWORK
function advanceBuilder(step, selection) {
    characterDraft[step] = selection;
    clearInspector();

    if (step === "nation") {
        currentStep = "race";
        renderRaceOptions();
    } else if (step === "race") {
        // 1. Grab the specific subraces for the selected race
        const specificSubraces = gameData.races[selection].subraces || {};
        
        // 2. Filter the universal subraces based on the player's chosen nation
        const filteredUniversal = {};
        const playerNation = characterDraft.nation;

        Object.keys(gameData.universalSubraces).forEach(subraceName => {
            const subraceData = gameData.universalSubraces[subraceName];
            
            // If allowedNations exists and isn't empty, check if it includes the player's nation
            if (subraceData.allowedNations && subraceData.allowedNations.length > 0) {
                if (subraceData.allowedNations.includes(playerNation)) {
                    filteredUniversal[subraceName] = subraceData;
                }
            } else {
                // If allowedNations is missing or empty, it is completely unrestricted
                filteredUniversal[subraceName] = subraceData;
            }
        });
        
        // 3. Combine the specific race subraces and the filtered universal subraces
        const combinedSubraces = { ...specificSubraces, ...filteredUniversal };

        // 4. Advance to the subrace screen using our filtered, combined list
        if (Object.keys(combinedSubraces).length > 0) {
            currentStep = "subrace";
            renderSubraceOptions(combinedSubraces);
        } else {
            characterDraft.subrace = "None";
            currentStep = "background";
            renderBackgroundOptions();
        }
    } else if (step === "subrace") {
        currentStep = "background";
        renderBackgroundOptions();
    } else if (step === "background") {
        currentStep = "class";
        renderClassOptions();
    } else if (step === "class") {
        showSummary();
    }
}

// 4. RENDERING LOOPS (Calls inspectOption safely)
function renderNationOptions() {
    document.getElementById('step-title').innerText = "Step 1: Choose Your Nation";
    
    // SHOW the randomizer button at the start
    const randomBtn = document.getElementById('random-btn');
    if (randomBtn) randomBtn.classList.remove('hidden');

    const grid = document.getElementById('options-grid');
    grid.innerHTML = "";
    Object.keys(gameData.nations).forEach(name => {
        const item = gameData.nations[name];
        const div = document.createElement('div');
        div.className = "option-card";
        div.innerHTML = `<strong>${name}</strong>`;
        div.onclick = () => inspectOption("nation", name, item.desc, item.mechanics);
        grid.appendChild(div);
    });
}

function renderRaceOptions() {
    document.getElementById('step-title').innerText = "Step 2: Choose Your Race";
    
    // HIDE the randomizer button once a nation is picked
    const randomBtn = document.getElementById('random-btn');
    if (randomBtn) randomBtn.classList.add('hidden');

    const grid = document.getElementById('options-grid');
    grid.innerHTML = "";
    const allowedRaces = gameData.nations[characterDraft.nation].allowedRaces;
    allowedRaces.forEach(name => {
        const item = gameData.races[name];
        if (!item) return;
        const div = document.createElement('div');
        div.className = "option-card";
        div.innerHTML = `<strong>${name}</strong>`;
        div.onclick = () => inspectOption("race", name, item.desc, item.mechanics);
        grid.appendChild(div);
    });
}
function renderSubraceOptions(combinedSubraces) {
    document.getElementById('step-title').innerText = "Step 3: Choose Your Subrace";
    const grid = document.getElementById('options-grid');
    grid.innerHTML = "";

    // 1. DYNAMIC CHECK: Look at the player's chosen race in the database
    const chosenRace = characterDraft.race;
    const nativeSubraces = gameData.races[chosenRace].subraces || {};

    // 2. ONLY inject the "None" card if the base race has NO native subraces!
    if (Object.keys(nativeSubraces).length === 0) {
        const noneDiv = document.createElement('div');
        noneDiv.className = "option-card";
        noneDiv.innerHTML = `<strong>None (Standard Ancestry)</strong>`;
        noneDiv.onclick = () => inspectOption(
            "subrace", 
            "None", 
            "You reject external alterations or secondary strains, remaining dedicated entirely to your core ancestry traits.", 
            "No additional subrace features are added to your dossier."
        );
        grid.appendChild(noneDiv);
    }

    // 3. RENDER THE REST OF YOUR COMBINED SUBRACES AS USUAL
    Object.keys(combinedSubraces).forEach(name => {
        const item = combinedSubraces[name];
        const div = document.createElement('div');
        div.className = "option-card";
        div.innerHTML = `<strong>${name}</strong>`;
        
        const desc = item.desc || "A unique offshoot strain of this ancestral lineage.";
        const mech = item.mechanics || "Grants minor distinct thematic visual identifiers.";
        
        div.onclick = () => inspectOption("subrace", name, desc, mech);
        grid.appendChild(div);
    });
}

function renderBackgroundOptions() {
    document.getElementById('step-title').innerText = "Step 4: Choose Your Background";
    const grid = document.getElementById('options-grid');
    grid.innerHTML = "";
    Object.keys(gameData.backgrounds).forEach(name => {
        const item = gameData.backgrounds[name];
        const div = document.createElement('div');
        div.className = "option-card";
        div.innerHTML = `<strong>${name}</strong>`;
        div.onclick = () => inspectOption("background", name, item.desc, item.mechanics);
        grid.appendChild(div);
    });
}

function renderClassOptions() {
    document.getElementById('step-title').innerText = "Step 5: Choose Your Class";
    const grid = document.getElementById('options-grid');
    grid.innerHTML = "";
    Object.keys(gameData.classes).forEach(name => {
        const item = gameData.classes[name];
        const div = document.createElement('div');
        div.className = "option-card";
        div.innerHTML = `<strong>${name}</strong>`;
        div.onclick = () => inspectOption("class", name, item.desc, item.mechanics);
        grid.appendChild(div);
    });
}

function showSummary() {
    switchView('summary-view');
    const container = document.getElementById('summary-card');
    
    // 1. Fetch data blocks based on choices
    const nationData = gameData.nations[characterDraft.nation] || { mechanics: "", stats: {} };
    const raceData = gameData.races[characterDraft.race] || { mechanics: "", stats: {} };
    
    let subraceData = { mechanics: "", stats: {} };
    if (characterDraft.subrace !== "None") {
        if (gameData.races[characterDraft.race]?.subraces?.[characterDraft.subrace]) {
            subraceData = gameData.races[characterDraft.race].subraces[characterDraft.subrace];
        } else if (gameData.universalSubraces?.[characterDraft.subrace]) {
            subraceData = gameData.universalSubraces[characterDraft.subrace];
        }
    }
    
    const bgData = gameData.backgrounds[characterDraft.background] || { mechanics: "", stats: {} };
    const classData = gameData.classes[characterDraft.class] || { mechanics: "", stats: {} };

    // OBJECT-BASED ABILITY SCORE TALLYING ENGINE
    let scores = { Strength: 0, Dexterity: 0, Constitution: 0, Intelligence: 0, Wisdom: 0, Charisma: 0 };
    let flexibleChoices = [];

    // Collect all active stat blocks into a single array to process safely
    const activeStatBlocks = [
        nationData.stats, 
        raceData.stats, 
        subraceData.stats, 
        bgData.stats, 
        classData.stats
    ];

    // Loop through each active object and add up the raw numbers
    activeStatBlocks.forEach(statObj => {
        if (!statObj || typeof statObj !== 'object') return;
        
        Object.keys(statObj).forEach(key => {
            const stringKey = String(key);

            // 1. Check for standard absolute stats (Strength, Dexterity, etc.)
            if (scores.hasOwnProperty(stringKey)) {
                // Ignore boolean values like 'true' if accidentally typed for core stats
                if (typeof statObj[stringKey] !== 'boolean') {
                    scores[stringKey] += (Number(statObj[stringKey]) || 0);
                }
            } 
            // 2. Check for flexible choice descriptions (like "to any one ability score")
            else if (stringKey.toLowerCase().includes("to any")) {
                const val = statObj[stringKey];
                
                // If the value is a number, print the sign. If it is a boolean, print a clean list entry!
                if (typeof val === 'number') {
                    const sign = val >= 0 ? "+" : "";
                    flexibleChoices.push(`${sign}${val} ${stringKey}`);
                } else {
                    // Strips out "+true" entirely and leaves the text.
                    flexibleChoices.push(`${stringKey}`);
                }
            }
            // 3. Check for choices containing "or". Injects the text choice exactly as written!
            else if (stringKey.toLowerCase().includes(" or ")) {
                flexibleChoices.push(stringKey); 
            }
        });
    });

    // Format calculated stats into a clean text line (e.g., "+2 Constitution, +1 Intelligence")
     let combinedStatsArray = [];
    Object.keys(scores).forEach(stat => {
        if (scores[stat] !== 0) {
            const sign = scores[stat] > 0 ? "+" : ""; 
            combinedStatsArray.push(`${sign}${scores[stat]} ${stat}`);
        }
    });

    // Merge standard numeric score adjustments with flexible text choices strings
    const allFinalStats = combinedStatsArray.concat(flexibleChoices);
    let statsTextLine = allFinalStats.join(", ");

    // RE-RENDERING THE CLASSIC IN-LINE LAYOUT
    let combinedRaceTitle = characterDraft.race;
    if (characterDraft.subrace !== "None") {
        combinedRaceTitle = `${characterDraft.subrace} ${characterDraft.race}`;
    }

    // 1. DYNAMIC TRAIT REMOVAL SYSTEM
    // Start with the default cleaned body (removing original duplicate Ability Score texts)
    let finalRaceBody = raceData.mechanics.replace(/<strong>Ability Score:<\/strong>.*?(<br>|$)/gi, "");

    // Check if the chosen subrace instructs us to remove baseline features
    if (subraceData.removes && Array.isArray(subraceData.removes)) {
        subraceData.removes.forEach(featureName => {
            // This RegExp finds strings starting with <strong>Feature Name:</strong> 
            // and grabs all text up until the next feature break tag (<br>).
            const cleanPattern = new RegExp(`<strong>${featureName}:</strong>.*?(<br>|$)`, "gi");
            finalRaceBody = finalRaceBody.replace(cleanPattern, "");
        });
    }

    // 2. Output formatted dossier list into your HTML container view sheet
    container.innerHTML = `
        <div style="background:#1a1510; padding:25px; border:2px solid #8b5a2b; border-radius:6px; line-height:1.6; text-align:left; box-shadow: inset 0 0 15px rgba(0,0,0,0.6);">
            <h3 style="color:#e4a853; margin-top:0; border-bottom:1px solid #8b5a2b; padding-bottom:8px; font-family:Georgia, serif; text-transform:uppercase; letter-spacing:1px;"> Character Dossier</h3>
            
            <p style="margin: 12px 0;"><strong style="color:#e4a853; font-size:16px;"> Ancestry:</strong> ${combinedRaceTitle}</p>
            
            <p style="margin: 12px 0;"><strong style="color:#e4a853; font-size:16px;"> Nation:</strong> ${characterDraft.nation}<br>
               <span style="color:#bfa88f; font-size:14px; padding-left:15px; display:inline-block;"> ${nationData.mechanics}</span></p>
               
            <!-- Merged Race Details Section -->
            <p style="margin: 12px 0;"><strong style="color:#e4a853; font-size:16px;"> Race Details:</strong><br>
               ${statsTextLine ? `<span style="color:#bfa88f; font-size:14px; padding-left:15px; display:inline-block;"> <strong>Ability Score Adjustments:</strong> ${statsTextLine}</span><br>` : ''}
               <span style="color:#bfa88f; font-size:14px; padding-left:15px; display:inline-block;"> ${finalRaceBody}</span>
               ${subraceData.mechanics ? `<br><span style="color:#bfa88f; font-size:14px; padding-left:15px; display:inline-block;"> ${subraceData.mechanics}</span>` : ''}
            </p>
               
            <p style="margin: 12px 0;"><strong style="color:#e4a853; font-size:16px;"> Background:</strong> ${characterDraft.background}<br>
               <span style="color:#bfa88f; font-size:14px; padding-left:15px; display:inline-block;"> ${bgData.mechanics}</span></p>
               
            <p style="margin: 12px 0 0 0;"><strong style="color:#e4a853; font-size:16px;"> Class:</strong> ${characterDraft.class}<br>
               <span style="color:#bfa88f; font-size:14px; padding-left:15px; display:inline-block;"> ${classData.mechanics}</span></p>
        </div>
    `;
}
function generateRandomCharacter() {
    // 1. Pick a random Nation
    const nations = Object.keys(gameData.nations);
    const randomNation = nations[Math.floor(Math.random() * nations.length)];
    
    // 2. Pick a random Allowed Race based on that nation
    const allowedRaces = gameData.nations[randomNation].allowedRaces;
    const randomRace = allowedRaces[Math.floor(Math.random() * allowedRaces.length)];
    
    // 3. Compile the exact same filtered subraces list the manual builder uses
    const specificSubraces = gameData.races[randomRace].subraces || {};
    const filteredUniversal = {};
    
    Object.keys(gameData.universalSubraces).forEach(subraceName => {
        const subraceData = gameData.universalSubraces[subraceName];
        if (subraceData.allowedNations && subraceData.allowedNations.length > 0) {
            if (subraceData.allowedNations.includes(randomNation)) {
                filteredUniversal[subraceName] = subraceData;
            }
        } else {
            filteredUniversal[subraceName] = subraceData;
        }
    });
    
    const combinedSubraces = { ...specificSubraces, ...filteredUniversal };
    
    // 4. Determine Subrace selection safely
    let randomSubrace = "None";
    const subraceKeys = Object.keys(combinedSubraces);
    if (subraceKeys.length > 0) {
        randomSubrace = subraceKeys[Math.floor(Math.random() * subraceKeys.length)];
    }
    
    // 5. Pick random Background and Class
    const randomBg = Object.keys(gameData.backgrounds)[Math.floor(Math.random() * Object.keys(gameData.backgrounds).length)];
    const randomCls = Object.keys(gameData.classes)[Math.floor(Math.random() * Object.keys(gameData.classes).length)];

    // 6. Push to state array and output summary sheet layout
    characterDraft = { 
        nation: randomNation, 
        race: randomRace, 
        subrace: randomSubrace, 
        background: randomBg, 
        class: randomCls 
    };
    showSummary();
}

function restartBuilder() {
    characterDraft = { nation: "", race: "", subrace: "", background: "", class: "" };
    currentStep = "nation";
    clearInspector();
    switchView('builder-view');
    renderNationOptions();
}

// 6. INITIALIZATION EXECUTION TRIGGER
document.addEventListener('mouseover', function(e) {
    if (e.target.classList.contains('spell-tooltip')) {
        const spellName = e.target.getAttribute('data-spell');
        const spellDescription = spellBook[spellName];

        if (spellDescription) {
            const box = document.getElementById('global-spell-box');
            box.innerHTML = `<strong> ${spellName}:</strong><br><p style="margin:6px 0 0 0;">${spellDescription}</p>`;
            
            // 1. Unhide it instantly so the browser can calculate sizing rules
            box.classList.add('visible');

            // 2. Measure our structural limits
            const linkRect = e.target.getBoundingClientRect();
            const boxWidth = box.offsetWidth || 320;
            const boxHeight = box.offsetHeight || 150;
            const padding = 15; // Safe padding distance away from browser window borders

            // 3. Establish standard ideal location coordinates (Centered right above your link text)
            let leftPosition = linkRect.left + (linkRect.width / 2) - (boxWidth / 2);
            let topPosition = linkRect.top - boxHeight - 10;

            // --- HORIZONTAL BOUNDS PROTECTION ---
            if (leftPosition < padding) {
                leftPosition = padding;
            }
            if (leftPosition + boxWidth > window.innerWidth - padding) {
                leftPosition = window.innerWidth - boxWidth - padding;
            }

            // --- VERTICAL BOUNDS PROTECTION ---
            if (topPosition < padding) {
                topPosition = linkRect.bottom + 10;
            }
            if (topPosition + boxHeight > window.innerHeight - padding) {
                topPosition = window.innerHeight - boxHeight - padding;
            }

            // 4. Anchor style coordinates directly onto window sheet layout
            box.style.left = leftPosition + 'px';
            box.style.top = topPosition + 'px';
        }
    }
});

document.addEventListener('mouseout', function(e) {
    const box = document.getElementById('global-spell-box');
    const movingTo = e.relatedTarget;
    
    // 1. Safety Check: If moving from the link INTO the box, or moving INSIDE the box, freeze state!
    if (box && box.contains(movingTo)) return;
    if (e.target.closest('#global-spell-box') && (movingTo && (movingTo.classList.contains('spell-tooltip') || box.contains(movingTo)))) return;

    // 2. Global Clear: If leaving the link or leaving the spell-box entirely, turn it off instantly
    if (e.target.classList.contains('spell-tooltip') || e.target.closest('#global-spell-box')) {
        if (box) box.classList.remove('visible');
    }
});

// Kickoff Engine Initialization Frame
renderNationOptions();