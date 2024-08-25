const dj = {

	Groups: "Groups", // 🟥
	Group: "Group",
	groupsDeleted_one: "{{count}} Group deleted.",
	groupsDeleted_other: "{{count}} Groups deleted.",
	GroupSaved: "Group saved.",
	GroupDeleted: "Group deleted.",
	Type: "Type", // 🟥
	Type_presentation: "Type:",
	Declensions: "Declensions", // 🟥 🔴 group of declensions on-screen
	AddDeclensions: "Add Declension", // 🟥
	EditDeclensions: "Edit Declension", // 🟥
	DeleteDeclensions: "Delete Declension?", // 🟨
	DeclensionSaved: "Declension saved.", // 🟦2.5
	Conjugations: "Conjugations", // 🟥 🔴 group of conjugations on-screen
	AddConjugations: "Add Conjugation", // 🟥
	EditConjugations: "Edit Conjugation", // 🟥
	DeleteConjugations: "Delete Conjugation?", // 🟨
	ConjugationSaved: "Conjugation saved.", // 🟦2.5
	Other: "Other", // 🟥 🔴 group of 'other' type on-screen
	AddOther: "Add Other", // 🟥
	EditOther: "Edit Other", // 🟥
	DeleteOther: "Delete Other?", // 🟨
	OtherSaved: "Other saved.", // 🟦2.5
	Forms: "Forms", // a pluralized version of 'other', mainly used in exports
	errorBadInternalFormatMsg: "Error in exporting: bad format (internal)",
	Equality: "Equality",
	Relation: "Relation",

	WordsToGiveDJ: "Words to send through $t(common:Declenjugator)", // 🔵
	EnterWordsOnePerLine: "Enter words here, one per line",
	delEntireGroup: "This will delete this entire Group, and cannot be undone.", // 🟡
	ClearAllGroups: "Clear All Groups?", // 🟨
	clearEverythingMsg: "This will clear and overwrite all current Groups.", // 🟡

	needTitleOrDescriptionMsg: "You must provide a title or description before saving.", // 🟡
	regExNeedsBothMsg: "If using regular expressions, you must provide both match and replacement expressions.", // 🟡
	needConditionMsg: "You must provide at least one condition (start or end) before saving.", // 🟡
	noMatchExpressionMsg: "You did not enter a match expression.", // 🟡
	AddGroup: "Add Group", // 🟥
	EditGroup: "Edit Group", // 🟥
	TitleInput: "Title or Description of this grouping:",
	TypesBeingAffected: "Type(s) of word this group affects", // 🔵
	TypesBeingAffected_presentation: "Type(s) of word this group affects:",
	exampleAppliesTo: "nouns? verbs? adjectives?",
	UseRegExpToIdStem: "Use regular expressions to identify the stem.",
	SimpleRootFinder: "Simple Root Finder", // 🟥
	Modification: "Modification", // 🟥
	MatchingExpression: "Matching Expression", // 🟥
	MatchingExpression_presentation: "Matching Expression:",
	ReplacementExpression: "Replacement Expression", // 🟥
	ReplacementExpression_presentation: "Replacement Expression:",
	TitleMethod_Declensions: "Title or Description of this declension:", // 🟥
	TitleMethod_Conjugations: "Title or Description of this conjugation:", // 🟥
	TitleMethod_Other: "Title or Description of this method:", // 🟥
	TitleSaved: "Title/Description saved.", // 🟦2.5
	advancedExplanation_Declensions: "Use regular expressions to craft a declension.",
	advancedExplanation_Conjugations: "Use regular expressions to craft a conjugation.",
	advancedExplanation_Other: "Use regular expressions to craft a method.",

	// appliesTo will be a user-generated string
	groupAppliesTo: "; applies to $t(appliesTo)",

	WhatIsDJ: "What is $t(common:Declenjugator)?", // 🟥

	noFormatMsg: "You didn't select a format.", // 🟡
	noDisplayGroupMsg: "Please choose at least one Group to display.", // 🟡 🟦2.5
	UnmatchedWords: "Unmatched Words", // 🟥
	declenjugatorTitle: "Declension/Conjugation Title", // 🟥
	declenjugatorDocumentTitle: "Declensions/Conjugations", // 🟥
	declenjugatorDocumentDescription:
		"A declension/conjugation document exported from $t(common:appTitle).",
	caseMakerInstructions:
		"Tap on terms to add them. Tap them again to remove them. Tap save button when you're finished.",
	Hide: "Hide", // 🔴
	ShowMore: "Show More", // 🔴

	// Always presentational context:
	DisplayAs: "Display as:",

	ChartTopHeaders: "Chart, Top Headers", // 🔴
	ChartSideHeaders: "Chart, Side Headers", // 🔴
	Text: "Text", // 🔴

	UseInput: "Use $t(common:Input)", // 🟥
	showDeclenjugationsInInputMsg: "Display the declensions/conjugations of words in the input.",
	ShowGroupInfo: "Show Group Info", // 🟥
	includeGeneralInfoMsg: "Include general Group information.",
	ShowExamples: "Show Examples", // 🟥
	includeGenericMsg: "Include generic example.",
	SortInput: "Sort $t(common:Input)", // 🟥
	OneMatch: "OneMatch", // 🟥
	oneMatchMsg: "$t(common:Input) words can only match one method",
	ShowUnmatchedWords: "Show Unmatched Words", // 🟥
	showUnmatchedMsg: "Display any words that were not matched by any Group.",

	InputTab: "$t(common:Input) Tab", // 🟥
	GroupsTab: "Groups Tab", // 🟥
	OutputTab: "Output Tab", // 🟥

	RegExp: "Regular Expression", // 🟥

	willClearOverwriteMsg: "This will clear and overwrite the previous save.", // 🟡
	LoadSavedInfo: "Load Saved Info", // 🟥

	Export: "Export", // 🔴
	Example: "Example", // 🟥
	Examples: "Examples", // 🟥
	Prefix: "Prefix", // 🟥
	Suffix: "Suffix", // 🟥
	stem: "stem", // 🟥
	word: "word", // 🟥
	wordBlock: "[word]",
	stemBlock: "[stem]",
	noMatchesMsg: "No words matched this Group.",
	RemoveFromEndOfWordToFindRoot: "Remove from End of Word to Find Root", // 🔵
	RemoveFromEndOfWordToFindRoot_presentation: "Remove from End of Word to Find Root:", // 🟥
	RemoveFromStartOfWordToFindRoot: "Remove from Start of Word to Find Root", // 🔵
	RemoveFromStartOfWordToFindRoot_presentation: "Remove from Start of Word to Find Root:", // 🟥
	UseAdvancedMethod: "Use advanced method", // 🟥
	UseEntireWord: "Use entire word", // 🟥
	modBaseWordNotStemMsg: "This applies your modifications to the base word instead of the stem.",
	// Always presentation context:
	SepMultiWith: "Separate Multiple Conditions With:",
	ChooseSeparator: "Choose Separator", // 🔵
	Space: "[ ] Space", // 🔴
	Comma: "[,] Comma", // 🔴
	Semicolon: "[;] Semicolon", // 🔴
	Slash: "[/] Slash", // 🔴
	wordMarker: "[W]", // small notation that this declension/etc uses the "entire word" option instead of the stem/root

	// Short description describing how a declension or conjugation is found
	// Examples:
	//   matches -ar, -or
	//   matches en-oof
	//   matches /[a-z]d[aeiou]$/
	matchesParameters: "matches {{params}}",

	// The CASES object is an array of objects. Each object has a 'header'
	//   property (a string), a 'content' property (an array, described below),
	//   and an optional 'extended' property (an array, same contents as
	//   'content').
	// The 'content' and 'extended' properties are an array of either strings
	//   or arrays with exactly two strings.
	//
	// The 'header' is presented to the user, along with the items in the
	//   content property. (Items that are arrays only show the first string.)
	//   Tapping on an item will add it to the user's input, along with
	//   a single space. (Items that are array will add the second string
	//   instead of a space.)
	//
	// The 'extended' items will be hidden; the user can toggle to see them,
	//   At which point they appear the same way as 'content' items.
	cases: [
		{
			header: "Modifiers",
			content: [
				[ "non-", "" ],
				[ "high-", "" ],
				[ "low-", "" ],
				"formal",
				"diminutive",
				"augmentative",
				"emphatic"
			]
		},
		{
			header: "Number",
			content: [
				"singular",
				"plural",
				"dual",
				"trial",
				"paucal",
				"definite",
				"indefinite"
			]
		},
		{
			header: "Noun Case",
			content: [
				"male",
				"female",
				"neuter",
				"animate",
				"inanimate"
			]
		},
		{
			header: "Grammatical Case",
			content: [
				"nominative",
				"accusative",
				"genitive",
				"dative",
				"ablative",
				"instrumental",
				"locative"
			],
			extended: [
				"vocative",
				"ergative",
				"absolutive",
				"partitive",
				"abessive",
				"adessive",
				"allative",
				"benefactive",
				"causal",
				"comitative",
				"delative",
				"distributive",
				"elative",
				"essive",
				"illative",
				"inessive",
				"instructive",
				"interrogative",
				"semblative",
				"sociative",
				"sublative",
				"superessive",
				"temporal",
				"terminative",
				"translative",
				"proximal",
				"relative",
				"adverbial",
				"oblique",
				"prepositional"
			]
		},
		{
			header: "Person",
			content: [
				"1st-person",
				"2nd-person",
				"3rd-person",
				"1s",
				"1pl",
				"2s",
				"2pl",
				"3s",
				"3pl"
			]
		},
		{
			header: "Tense",
			content: [
				"past",
				"present",
				"future"
			]
		},
		{
			header: "Aspect",
			content: [
				"perfective",
				"imperfective",
				"perfect",
				"continuative",
				"progressive"
			],
			extended: [
				"pluperfect",
				"habitual",
				"punctual",
				"iterative",
				"completive",
				"inceptive",
				"atelic",
				"telic",
				"static"
			]
		},
		{
			header: "Mode",
			content: [
				"realis",
				"irrealis",
				"conditional",
				"subjunctive",
				"interrogative"
			],
			extended: [
				"optative",
				"deontic",
				"hypothetical",
				"imaginary",
				"potential",
				"evidentiality",
				"validationality",
				"mirativity"
			]
		},
		{
			header: "Valence",
			content: [
				"causative",
				"applicative",
				"reflexive",
				"reciprocal",
				"passive",
				"inverse",
				"anticausative",
				"antipassive"
			]
		}

	],

	info: {
		input: [ // Markdown format
			"This tab has one purpose: determining which words you want to",
			"decline or conjugate. Using this tab is entirely optional.",
			"",
			"The easiest way is to copy-paste a list of words, each on a",
			"line by itself. Or, you can use the **Import From Lexicon**",
			"button to pull in words stored in the **$t(common:Lexicon)**.",
			"",
			"Use the **$t(common:Input)** button to empty all words from",
			"$t(common:Input).",
		],
		groups: [ // Markdown format
			"This is where you define groups of declensions and conjugations.",
			"Most languages treat certain groupings of words differently when",
			"they are declined or conjugated. For instance, English only",
			"declines its pronouns for case and person while Spanish has",
			"different conjugations for verbs depending on if they end in",
			"-ar, -er, or -ir.",
			"",
			"Click the (+) button to add a new Group. When you make a Group,",
			"you must give it a title or description. You can choose to label",
			"this as a _declension_, a _conjugation_ or under _other_ if you",
			"don't want to use those labels Optionally, you can note what",
			"types of words this Group will apply to.",
			"",
			"Next, you will provide instructions on how to find the",
			"\"$t(stem)\" of the word. For example, if you were creating a",
			"conjugation for words ending in -ar, you would put \"ar\" in",
			"the box labelled \"$t(RemoveFromEndOfWordToFindRoot)\".",
			"",
			"Note: You can provide multiple conditions. For instance, putting",
			"\"ar\" in both boxes will match words that begin with ar- _and_",
			"end with -ar. You can also hit the \"$t(UseAdvancedMethod)\"",
			"toggle switch to use **regular expressions** to find a $t(stem).",
			"(See the end of this section for more info on regular",
			"expressions.)",
			"",
			"---",
			"",
			"At the end of the form, you will see an \"$t(common:AddNew)\"",
			"button. Use this to create the Group's individual declensions",
			"or conjugations. For simplicity, we will use the term \"method\"",
			"to mean either.",
			"",
			"First, you give the method a title. There is a small (+) button",
			"next to the input that will open a pop-up with numerous common",
			"declension and conjugation types, if you wish to use it.",
			"",
			"Below that is a toggle \"$t(UseEntireWord)\". If checked, the",
			"method will operate on the entire word instead of just the",
			"$t(stem).",
			"",
			"At the bottom, there are two input boxes around the word",
			"\"$t(stem)\". (This becomes \"$t(word)\" if you check the toggle",
			"above.) If this method would add a prefix, put the prefix in the",
			"box before \"$t(stem)\". If it would use a suffix, put it in the",
			"box after \"$t(stem)\". You can use both boxes for a circumfix",
			"but for infixes and other more complicated changes, you will",
			"need to use the \"advanced method\" and regular expressions.",
			"",
			"---",
			"",
			// `DRAG HANDLE` (or any other text inside backticks) will be
			//    replaced with the drag handle icon
			"Once your Groups are made, they will show up on the screen.",
			"Swipe left on them to find $t(common:Edit) and $t(common:Delete)",
			"buttons. You can also use the `DRAG HANDLE` drag handles to",
			"rearrange their order. (Note: you can't rearrange across types",
			"dragging a \"conjugation\" into the \"other\" or \"declension\"",
			"areas, for example. If you want to change its type, swipe left",
			"and choose the $t(common:Edit) button.)",
			"",
			"Here's an example of possible methods you could make for a",
			"Spanish-type conjugation:",
		],
		// This section is presented with the 'title' property as a header and
		//   the 'content' is an array of Markdown-formatted strings.
		groupsExample: [
			// This first object describe a Declenjugation group.
			{
				title: "Group",
				content: [ // Markdown format (list)
					"- **$t(common:Title)**: Conjugations (A)",
					"- **Type**: _conjugation_",
					"- **Remove from Start of Word**: (blank)",
					"- **Remove from End of Word**: ar",
				],
			},
			// This second object describes a set of conjugations.
			{
				title: "Conjugations",
				content: [ // Markdown format (list)
					"- **1st-person singular present**: $t(stem)[o]",
					"- **2nd-person singular present**: $t(stem)[as]",
					"- **3rd-person singular present**: $t(stem)[a]",
					"- **1st-person plural present**: $t(stem)[amos]",
					"- **3rd-person plural present**: $t(stem)[an]",
				],
			}
		],
		output: [ // Markdown format
			"This is where you can find the results of your work. At the top",
			"of the page, you can choose how you want the information to",
			"display, and choose if you want to display declensions",
			"conjugations, and/or other. If you want to decline/conjugate",
			"words you put in the **$t(common:Input)** tab be sure to switch",
			"the toggle on. It will open up a new set of options you can use",
			"to fine-tune the results.",
			"",
			"Click on $t(common:Generate) to display your info, or click on",
			"$t(Export) to export your info to a file. **Note**: when",
			"displaying a chart in the app, it may clip off the edge of the",
			"screen. If this happens, you can drag the chart left and right",
			"to scroll the hidden areas into view.",
		],
		overview: [ // Markdown format
			"This tool is for creating **declensions** and **conjugations**.",
			"",
			"A declension is, at its most basic, modifying a word to show its",
			"role in a sentence. $t(Declensions) may apply to nouns",
			"pronouns, adjectives, adverbs, and articles to indicate number",
			"(singular, dual, plural, etc), case (nominative",
			"accusative, genitive, dative, etc), gender (male, female",
			"inanimate, etc), and other grammatical categories. ",
			"",
			"A conjugation is much like a declension, but it modifies verbs.",
			"Like declensions, they can indicate number gender, and case, but",
			"they also often include person (I, you they, etc), tense (past,",
			"present, future, etc), aspect (perfect, imperfect, etc),",
			"mood/mode, politeness, and numerous other verb qualities.",
		],
	}

};

export default dj;
