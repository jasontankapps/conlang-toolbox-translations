const we = {

	Evolve: "Evolve",

	SoundChange: "Sound Change",
	SoundChanges: "Sound Changes",
	SoundChangesTab: "Sound Changes Tab",

	// takes a `count` for plurality, called by thingsDeleted
	SChange_one: "1 Sound Change",
	SChange_other: "{{count}} Sound Changes",

	ConvertToLowercase: "Convert input to lowercase before evolving", // 🟥 🔴
	SortBeforehand: "Sort input before evolving", // 🟥 🔴
	delAllSC: "This will delete all current sound changes, and cannot be undone.",

	Context: "Context",
	Exception: "Exception",
	// "what" is either "Context" or "Exception", as above
	noUnderscore: "{{what}} must contain one underscore (_)", // 🟡
	multiUnderscore: "{{what}} can only have one underscore (_)", // 🟡
	wordBoundaryError: "{{what}} can only have word-boundaries (#) at the beginning and/or end", // 🟡

	soundChangeDesc: "Description of the sound change",
	soundChangeDesc_presentation: "Sound Change Description:",

	Overview: "Overview: $t(common:WordEvolve)", // 🟥
	WhatIsWE: "What is $t(common:WordEvolve)?", // 🟥

	WordsToEvolve: "Words to Evolve", // 🔵

	InputTab: "$t(common:Input) Tab", // 🟥
	EnterWordsHere: "Enter words here, one per line",

	ClearInput: "Clear Input", // 🟨

	noSoundChangesMsg: "You have no sound changes defined.", // 🟡
	noInputWordsMsg: "You have no input words to evolve.", // 🟡

	soundToChange: "sound to change",
	soundChangesTo: "sound changes into this",
	whereChangeHappens: "where the change happens",
	whereChangeDoesntHappen: "where the change cannot happen",

	InputExpression: "Input Expression", // 🔵
	InputExpression_presentation: "Input Expression:", // 🟥
	OutputExpression: "Output Expression", // 🔵
	OutputExpression_presentation: "Output Expression:", // 🟥
	TransformationDirection: "Transformation Direction:", // presentational context
	atInputUndoOutput: "At input, then undo at output",
	atInputUndoOutput_formal: "At Input, Then Undo At Output",
	atInputAtOutput: "At input and at output",
	atInputAtOutput_formal: "At Input and At Output",
	atInput: "At input only",
	atInput_formal: "At Input Only",
	atOutput: "At output only",
	atOutput_formal: "At Output Only",
	contextExpression_formal: "Context Expression",
	contextExpression_presentation: "Context Expression:",
	exceptionExpression_formal: "Exception Expression",
	exceptionExpression_presentation: "Exception Expression:",
	OutputOnly: "$t(common:Output) only", // 🔴
	OutputAndSCRules: "$t(common:Output) and Sound-Change Rules", // 🔴
	InputThenOutput: "$t(common:Input), then $t(common:Output)", // 🔴
	OutputThenInput: "$t(common:Output), then $t(common:Input)", // 🔴

	// used by clearOverwriteGeneralThings
	allThings: "all current character groups, transformations and sound changes",


	// PRESETS

	GrassmannLaw: "Grassmann's Law",
	RukiRule: "Ruki Rule",
	DahlLaw: "Dahl's Law",
	IngvaeonicNasalSpirantLaw: "Ingvaeonic Nasal Spirant Law",
	GrimLaw: "Grim's Law",
	GreatEnglishVowelShift: "Great English Vowel Shift",
	HighGermanConsonantShift: "High German Consonant Shift",

	UnvoicedConsonants: "Unvoiced Consonants",
	VoicedConsonants: "Voiced Consonants",
	Vowels: "Vowels",
	NewVowels: "New Vowels",

	info: {
		input: [ // Markdown format
			"This tab has one purpose: determining which words you want to",
			"change.",
			"",
			"The easiest way is to copy-paste a list of words, each on a line",
			"by itself. Or, you can use the **Import from Lexicon** button to",
			"pull in words stored in the **$t(common:Lexicon)**.",
			"",
			"Use the **$t(common:Clear)** button to empty all words from",
			"$t(common:Input)."
		],

		charGroups: [ // Markdown format
			"This is where you define groups of characters representing",
			"sounds. You can reference these character groups in",
			"**Transformations** and **Sound Changes** to fine-tune the way",
			"your language evolves.",
			"",
			"Click the (+) button to add a new character group. When you",
			"make a character group, you must give it a _description_ and",
			"a one-character _label_. The description is for your own",
			"benefit, while the label will be used to refer to this",
			"character group in the other tabs. The label can be any single",
			"character except for these: **^$\\()[]{}.*+?|**. The",
			"letters/characters in your character group are called a _run_."
		],

		// `anything` in backticks will be replaced with the icon for a drag hande
		transformations: [ // Markdown format
			"There may be cases when you need to modify the input words",
			"before you evolve them. A common reason would be to turn a",
			"group of characters (such as \"sh\", \"th\", or \"ng\" in",
			"English) into a single character that can be targeted more",
			"easily.",
			"",
			"When you make a new _transformation_, you provide an _input",
			"expression_, a _transformation direction_, an _output",
			"expression_, and, optionally, a _transformation description_",
			"for your own benefit.",
			"",
			"The _transformation direction_ is either \"At input then undo at",
			"output\", \"At input and at output\", \"At input only\", or \"At",
			"output only\", and they determine how the two expressions are",
			"used.",
			"",
			"**At input only:** Before anything else happens, input words",
			"are searched, and any instances of the _input expression_ are",
			"replaced with the _output expression_. **Regular expressions**",
			"(see the **Sound Changes Tab**'s help section) and %Group",
			"references are allowed in the _input expression_ only. (A %Group",
			"reference is something like **%G** to indicate any character in",
			"character group G's run, or **!%G** to indicate any character",
			"_not_ in that run.)",
			"",
			"**At output only:** After all **sound changes** are processed,",
			"any instances of the _input expression_ are replaced with the",
			"_output expression_. Regular expressions and %Group references",
			"are allowed in the _input expression_ only.",
			"",
			"**At input then undo at output:** Before anything else happens,",
			"input words are searched, and any instances of the _input",
			"expression_ are replaced with the _output expression_. After all",
			"**sound changes** are processed, any instances of the _output",
			"expression_ are replaced with the _input expression_.",
			"",
			"Regular expressions are not allowed, but non-negative %Group",
			"references are allowed if and only if both input and output have",
			"them. In that case, something special happens: when the",
			"transformation matches a character in a character group, it will",
			"note what position that character is in the character group's",
			"run. It will then look at the other expression's character group",
			"and pick out the character in the same position.",
			"",
			"For example: If %S is being replaced with %Z, and those",
			"character groups have runs \"ptk\" and \"bdg\", \"p\" will be",
			"replaced with \"b\", \"t\" will be replaced with \"d\", and",
			"\"k\" will be replaced by \"g\". If the first character group",
			"has more letters than the second, the second character group's",
			"run will be repeated until it's long enough to find a match.",
			"",
			"NOTE: If you have unequal numbers of %Group references in the",
			"search and replacement expressions, errors may occur.",
			"",
			"**At input and at output:** As _At input then undo at output_,",
			"but the _input expression_ is replaced with the _output",
			"expression_ before AND after the **sound changes** are",
			"processed.",
			"",
			"Click the (+) button to add a new transformation. The first",
			"transformation in the list will be run first, the second",
			"transformation second, and so on down the list. This may cause",
			"unintended effects as previous transformations mutate the",
			"original word, so you can reorganize your transformations by",
			"using the `DRAG HANDLE` drag handles."
		],

		soundChangesBlocks: {
			//    "important" info is put in a box.
			//    "unimportant" info is put on its own in a way that meshes
			//                   well with important info
			//     use only ONE of the following:
			//        simple
			//        reversed
			//        important + unimportant + complex
			//BlockFormat: {
			//	serif: true, // Makes the content use a serif font (default false)
			//	arrow: "->", // This text here will be replaced with an arrow character
			//                   pointing in the correct direction (default "->")
			//	simple: [array of strings] in the format important, unimportant, important, ...
			//	reversed: [array of strings] in the format unimportant, important, unimportant...
			//	important: "!" string, marks the boundaries of "important" info (default "!")
			//	unimportant: "$" string, marks the boundaries of "unimportant" info (default "$")
			//	complex: [array of strings] in the format "Some !important! and
			//              $unimportant$ stuff with regular stuff."
			//}
			//
			// insert a formatted block into the text with `nameOfBlock`
			// `anything else` will be replaced with the icon for a drag hande
			block1: {
				arrow: "->",
				simple: ["s", "->", "z", "/", "d_", "!", "_h"]
			},
			block2: {
				arrow: "->",
				simple: ["s", "->", "z", "/", "#_"]
			},
		},
		soundChanges: [ // Markdown format
			"This is where you determine how your words evolve. The display",
			"follows basic standard phonological rules for describing sound",
			"changes:",
			"",
			"`block1`",
			"",
			"The above means that \"s\" changes to \"z\" after a \"d\", but",
			"not when it's before an \"h\".",
			"",
			"The first box is the _search expression_, the second is the",
			"_replacement expression_, the third is the _context expression_,",
			"and the last is the _exception expression_.",
			"",
			"The _search expression_ can include plain text or **regular",
			"expressions** (see the end of this section for more info). It",
			"can also contain %Group references. (A %Group reference is",
			"something like **%G** to indicate any character in character",
			"group C's run, or **!%G** to indicate any character that is",
			"_not_ in that run.)",
			"",
			"The _replacement expression_ should be plain text. However, it",
			"can include non-negative %Group references **if and only if**",
			"the _search expression_ does, too. In that case, something",
			"special happens: when the evolver matches a character in a",
			"character group, it will note what position that character is in",
			"the character group's run. It will then look at",
			"_replacement_ character group and pick out the character in the",
			"same position. For example: If %S is being replaced with %Z, and",
			"those character groups have runs \"ptk\" and \"bdg\", \"p\" will",
			"be replaced with \"b\", \"t\" will be replaced with \"d\", and",
			"\"k\" will be replaced by \"g\". (If the first character group",
			"has more letters than the second, the second character group's",
			"run will be repeated until it's long enough to find a match.)",
			"**NOTE:** If you have unequal numbers of %Group references in",
			"the _search expression_ and _replacement expression_, errors",
			"may occur.",
			"",
			"The _context expression_ describes where in the word the _search",
			"expression_ must be before it can be changed into the",
			"_replacement expression_. The _exception expression_ is similar,",
			"but it describes where in the world a match **can't** be made.",
			"(The _exception expression_ is optional.)",
			"",
			"There are two characters in a _context expression_ and",
			"_exception expression_ that have special functions. The",
			"underscore **_** represents where the _replacement expression_",
			"is being matched. You **must** include an underscore. The hash",
			"symbol **#** represents the beginning or end of a word. For",
			"example: if you want to turn \"s\" into \"z\" at the beginning",
			"of a word, you could create the following:",
			"",
			"`block2`",
			"",
			"If you have no special rules for where in a word a replacement",
			"can happen, just make a _context expression_ that's only a",
			"single underscore.",
			"",
			"Click the (+) button to add a new sound change. The first sound",
			"change in the list will be run first, the second sound change",
			"second, and so on down the list. This may cause unintended",
			"effects, so you can reorganize your sound change to avoid any",
			"such effects by using the `DRAG HANDLE` drag handles."
		],

		outputMain: [ // Markdown format
			"This is where the magic happens. Click the **Generate** button",
			"and the evolver will process all your input words and present",
			"your output in the space below.",
		],
		outputSettings: [ // Markdown format
			"Click on the gear icon to open a list of options. The first is",
			"a drop-down menu where you can select what to output. The",
			"choices are **Output Only**, **Output and Sound-Change Rules**,",
			"**Input then Output** and **Output then Input**.",
			"",
			"Choosing **Output Only** will display a simple list of evolved",
			"words.",
			"",
			"**Output and Sound-Change Rules** displays the most complex",
			"output. For every word, it will print the input word, an arrow,",
			"and then the evolved word. Below that, it will print an",
			"indented list of the **Sound Changes** that evolved the word,",
			"in the format [rule] [arrow] [evolved word]. (If a sound change",
			"didn't affect that word, then it will be omitted from this",
			"list.)",
			"",
			"**Input then Output**, as you might guess, prints a list in",
			"the format [input word] [arrow] [evolved word]. **Output then",
			"Input** is the same, but the evolved word comes first.",
			"",
			"The second option under the gear icon determines the style of",
			"arrow that is displayed with the output."
		],
		outputLexicon: [ // Markdown format
			"Once you've evolved words, you can save them to the",
			"**$t(common:Lexicon)**. Click the book button and the evolved",
			"words will light up. Tap on words you wish to save. When you've",
			"selected all the words you want, tap the book button again and",
			"you'll be given a pop-up where you can choose which",
			"**$t(common:Lexicon)** column to import them into."
		],

		overview: [ // Markdown format
			"This tool is designed to take a list of words and transform them",
			"into (possibly) new forms. The idea is to mimic the way natural",
			"languages change over time.",
			"",
			"This is the most basic use case:",
			"- Decide on how your language will evolve over time.",
			"- Identify which parts will change, such as vowels and consonants.",
			"- Note the environment in which the sound change takes place.",
			"(For example, a vowel may change only if it's preceded by a nasal",
			"consonant.)",
			"",
			"The **$t(common:Input)** tab holds the words you wish to change.",
			"**Character Groups** can hold categories of sounds that will",
			"change in the same way. **Transformations** is a place where you",
			"can define complex transformations that may be needed to",
			"simplify your sound changes. (For example, you may want to",
			"simplify multi-letter sounds into a single character.) The",
			"**Sound Changes** tab is where you define the various changes",
			"you want to make, and the **$t(common:Output)** tab is where you",
			"can see the results."
		]

	}

};

export default we;
