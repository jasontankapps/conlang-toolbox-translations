import characters from "./characters";

/*
PLURALITY:
	Some terms will end in _one or _other. They always have a `count` property that can be used if needed.
		dog_one = 1 dog
		dog_other = 0 dogs, 2+ dogs, etc
	Other languages may have their own plurality _endings. Check your i18n specifications.

CONTEXTS:
	Some terms may be used in a specific context.

	dog = Normal use, e.g. "dog"
	dog_filename = Must consist of only characters safe to use in a filename.
		(this is generally anything except \/:*?"<>|), e.g. "dog"
	dog_formal = This is being used as a proper name or otherwise has
		importance. In English, this simply means Capitalizing Most Words,
		e.g. "Dog"
	dog_presentation = This is a user-facing term that is
		"pointing" at...
			* important information
			* a text box
			* a selectable option
			* a toggleable option
			* etc.
		In English, I add a colon on the end of the formal term, e.g. "Dog:"

LEGEND:
	🟥 Headers (important text in the app, possibly placed in the toolbar)
	🔴 button or option text
	🟡 dialog box messages (yes/no prompts, alerts, etc)
	🟨 dialog box headers
	[T:x] toast messages (popups that disappear on their own in `x` seconds)
	🔵 ARIA labels (accessibility messages, not visible to the average user)

	Keys without any of these notes are only shown on-screen in plain text.

	Button text should be kept short. Dialog box text should be clear and concise.
	Text headers should be relatively short and are usually capitalized. Dialog
	box headers should be kept reasonably short. Users should be able to read toast
	messages before `x` seconds have expired.
*/

const common = {

	// 🟥 title, subtitle of the App
	appTitle: "Conlang Toolbox",
	appTitle_filename: "ConlangToolbox",
	appSubtitle: "tools for language invention",

	// 🟥 name of tool
	MorphoSyntax: "MorphoSyntax",

	// 🟥 name of tool - word + generator
	WordGen: "WordGen",
	WordGen_filename: "WordGen",

	// 🟥 name of tool - word + evolve
	WordEvolve: "WordEvolve",
	WordEvolve_filename: "WordEvolve",

	// 🟥 name of tool - declension + conjugation
	Declenjugator: "Declenjugator",
	Declenjugator_filename: "Declenjugator",

	// 🟥 name of tool
	Lexicon: "Lexicon",
	Lexicon_filename: "Lexicon",

	// 🟥 name of tool
	Concepts: "Concepts",

	// 🟥 name of tool
	ExtraChars: "ExtraChars",

	// 🟥 page names
	AppInfo: "App Info",
	AppSettings: "App Settings",
	Main: "Main",

	// 🟥 title of some pages
	Overview: "Overview", 
	Settings: "Settings",
	Input: "Input",
	Output: "Output",
	Info: "Info", // short for "Information"

	// 🔴 title of some buttons
	Cancel: "Cancel",                // abandon the current action
	Clear: "Clear",                  // remove all current information
	Save: "Save",                    // save current information
	Ok: "Ok",                        // general acknowledgement
	Done: "Done",                    // use has finished and does not need to continue
	Close: "Close",                  // close the open modal/dialog/whatever
	Delete: "Delete",                // delete an item
	Edit: "Edit",                    // edit an item
	Help: "Help",                    // show "help" documentation
	AddAndClose: "Add and Close",    // add a new item and close this modal
	AddNew: "Add New",            // add a new item; may imply that the current modal will remain open
	Copy: "Copy",                    // copy something to the clipboard
	Generate: "Generate",            // the tool will create something new
	SaveAsNew: "Save as New",    // save current info as a new document
	CopyToClipboard:
		"Copy to Clipboard",         // the button will copy something to the clipboard

	// This term should be treated as the `presentational` context
	Display: "Display:", // short label indicating the user can select an option to display

	SavedAt: "Saved: {{time}}", // short phrase describing when something was saved

	// Toast and Alert messages
	CopiedToClipboard: "Copied to clipboard",// 🟦1.5 result message
	NothingToCopy: "Nothing to copy",        // 🟦1.5 error message
	CharactersToBeCopied: "Characters to be copied", // 🔵

	Untitled: "[Untitled]", // used as a document title if no title is provided
	fileFormat: "{{title}} - {{date}}.{{extension}}", // safe for use as a filename
	UnableToExport: "UNABLE TO EXPORT: {{error}}", // 🟦10
	FileExported: "{{filename}} exported.", // 🟦5

	// lists of things
	andGlue: ", ", // this is put between items in a list
	andFinal: ", and ", // put between the penultimate and the last item in a list
	joinTwo: "{{one}} and {{two}}", // used when there are only two items in a list

	// Exit the App messages
	ExitAppQHead: "Exit App?", // 🟨
	ExitAppQ: "Do you want to exit the app?", // 🟡
	YesExit: "Yes, Exit!", // 🔴

	// Saving words to the Lexicon from other tools
	saveToLexColumn_one: "{{count}} word saved to $t(Lexicon) under \"{{column}}\"", // 🟦3.5
	saveToLexColumn_other: "{{count}} words saved to $t(Lexicon) under \"{{column}}\"", // 🟦3.5
	SelectAColumn: "Select a column",
	GoToLexicon: "Go to $t(Lexicon)", // 🟦3.5+🔴
	TapWordsToSave: "Tap words you want to save to $t(Lexicon).", // 🟦2.5
	SaveToLexiconMessage: // 🟡
		"Your selected words will be added to the $t(Lexicon) under that column.",

	// Exporting files
	ChooseFormat: "Choose a Format", // 🟨 and 🟥
	ChooseFormat_presentation: "Choose a format:",

	// Types of file exports file file(Docx|Text|Plain|Md|Csv|Json|Xml)
	fileDocx: "Word Document (docx)",
	fileText: "Text File",
	filePlain: "$t(fileText) (plain)",
	fileMd: "$t(fileText) (markdown)",
	fileCsv: "Spreadsheet (csv)",
	fileJson: "JSON File",
	fileXml: "XML File",

	// Titled things
	deleteTitleQ: "Delete \"{{title}}\"?", // 🟨
	loadTitleQ: "Load \"{{title}}\"?", // 🟨
	titleSaved: "\"{{title}}\" saved.", // 🟦2.5
	titleAlreadyExists: "\"{{title}}\" already exists.", // 🟨
	titleLoaded: "\"{{title}}\" loaded.", // 🟦2.5
	titleNotFound: "\"{{title}}\" not found.", // 🟡
	titleDeleted: "\"{{title}}\" deleted.", // 🟦2.5
	titleOverwritten: "\"{{title}}\" overwritten.", // 🟦2.5

	// "It" refers to saved info from WG, WE, or Declenjugation
	YesOverwriteIt: "Yes, Overwrite It", // 🔴

	ClearOverwritePrevSave: "This will clear and overwrite the previous save",
	LoadError: "Load Error", // 🟨
	ManageCustomInfo: "Manage Custom Info", // 🟥
	SaveCurrentInfo: "Save Current Information", // Used by DJ and WE
	NameOfSave: "Name of save",
	NameYourInfo: "Name your custom info",
	Load: "Load", // 🔴
	NoSavedInfo: "No saved info",
	LoadSavedInfo: "Load Saved Info",
	missingTitleMsg: "Missing title.", // 🟡

	SortMethod: "Sort method:",

	cannotUndo: "This cannot be undone.", // 🟡 This action, usually deleting something, cannot be undone.
	areYouSure: "Are you sure?", // 🟡 Do you want to do this action?
	deleteThisCannotUndo: "Are you sure you want to delete this? $t(cannotUndo)", // 🟡
	DeleteEverythingQ: "Delete Everything?", // 🟨

	// in confirmDel, the thing/things being deleted might be...
	//    custom meanings in Concepts
	//    Lexicon items
	//    Character Groups or Transformations in WG and WE
	//    Sound Changes in WE
	//    Syllables in WG
	//    saved Custom Info in WG, WE, Declenjugator, Lexicon, and MorphoSyntax
	//    Lexicon columns and items
	//    Custom Sorts, or one of their relations or equalities
	//    Declenjugator groups, or the separate declensions/etc within one
	confirmDel_one: "Yes, Delete It", // 🔴
	confirmDel_other: "Yes, Delete Them", // 🔴

	// in confirmDelAll, "All" might refer to...
	//    all info in MorphoSyntax or Lexicon
	confirmDelAll: "Yes, Delete All", // 🔴

	// "Info" may refer to saved Custom Info in WG, WE, Declenjugator, Lexicon, or MorphoSyntax
	confirmLoad: "Yes, Load Info", // 🔴

	// "This" gets slotted into 'deleteThing' and may refer to...
	//    Custom Sorts, or one of their relations or equalities
	//    Declenjugator groups, or the separate declensions/etc within one
	This: "This",

	NothingToSave: "Nothing to save.", // 🟦2.5
	Deleted: "Deleted", // 🟦2
	UnsavedInfo: "Unsaved Info", // 🟨

	// 🟡 when deciding not to add a new thing
	MaybeDiscardThing: "Are you sure you want to discard this?",
	// 🟡 when deciding not to edit an existing thing
	MaybeDiscardEdits: "Are you sure you want to discard your edits?",
	YesDiscard: "Yes, Discard", // 🔴
	MaybeClearEntireInput: "$t(areYouSure) This will clear the entire input, and cannot be undone.", // 🟡
	YesClear: "Yes, Clear It", // 🔴 "It" refers to the Input in Declenjugator and WE

	defaultSort: "Default sort", // 🔴 Refers to the default sort method, whatever it may be

	error: "Error",
	emphasizedError: "<$t(error)>", // 🟥

	regexpError: "Error trying to parse \"{{regex}}\"", // 🟨

	Loading: "Loading", // 🟥
	PleaseWait: "Please wait...", // 🟥

	Title: "Title", // 🔵 🟥
	Title_presentation: "Title:", // 🔴
	Description: "Description", // 🟥 🔵
	Description_presentation: "Description:",

	overviewOf: "Overview: {{what}}", // 🟥

	ImportFromLexicon: "Import from Lexicon", // 🔴 🟥 🟨
	LoadPreset: "Load Preset", // 🔴

	// Import from Lexicon (to WG or WE)
	Import: "Import", // 🔴
	ImportFromWhichColumns: "Import from which column(s)?", // 🟨
	optional: "(optional)",
	AddConditions: "Add Conditions $t(optional)",
	WordMustContainX: "Word must contain [x]",
	TypeWordHere: "Type part of word here.",
	WordMustMatchX: "Word must match expression [x]",
	TypeRegExHere: "Type regular expression here.",
	ColXMustHaveY: "Column [x] must contain [y]",
	ColXMustMatchY: "Column [x] must match expression [y]",
	ConditionSaved: "Condition saved.", // 🟦2.5

	// These terms should be treated as the `presentational` context
	TestColumn: "Test column:", // 🟥 the column being tested for a match
	WordsThatContain: "Words that contain:", // 🟥
	WordsThatMatch: "Words that match:", // 🟥
	WordsWithColumn: "Words where the column:", // 🟥

	columnContains: "[{{column}}] contains \"{{test}}\"",
	columnMatches: "[{{column}}] matches /{{test}}/",
	MatchAllConditions: "Match all conditions", // 🟥
	ifMatchAllOff: "If off, this will import words that match any condition.",
	ExitWOImport: "Exit Without Importing?", // 🟨
	SelectOneCol: "Please select at least one column to import from.", // 🟦2.5
	NothingToImport: "Did not find anything to import.", // 🟦4.5
	importSuccess_one: "Imported {{count}} word from $t(Lexicon).", // 🟦3.5
	importSuccess_other: "Imported {{count}} words from $t(Lexicon).",
	yesImport: "Yes, Import", // 🔴

	// EXTRA CHARACTERS
	stoppedCopying: "No longer copying directly to clipboard.", // 🟦2.5
	startedCopying: "Now copying immediately to clipboard.", // 🟦2.5
	copiedCharToClipboard: "Copied {{char}} to clipboard", // 🟦1.5 only one character was copied
	Favorites: "Favorites", // 🔴
	startedFavoriting : "Start favoriting characters", // 🔵
	stoppedFavoriting : "Stop favoriting characters", // 🔵
	startedSaving: "Now saving characters to $t(Favorites)", // 🟦2.5
	stoppedSaving: "No longer saving to $t(Favorites)", // 🟦2.5
	TapToAdd: "Tap characters to add them here",
	ShowNames: "Show full character names", // 🔵
	HideNames: "Hide full character names", // 🔵

	extraHelp: { // Markdown format
		help1p1:[
			"This is a place to find and copy characters that may not be",
			"easily accessible to you on your device's keyboard. The other",
			"buttons can be toggled for additional effects:"
		],
		help1p2:[
			"When active, copies any character you tap directly to the",
			"clipboard. When inactive, copies tapped characters to the",
			"copy-bar below, where you can copy them at your leisure."
		],
		help1p3:[
			"When active, tapping on a character adds or removes it from your",
			"Favorites list. Characters will not be copied to the clipboard",
			"or the copy-bar."
		],
		help1p4:[
			"When active, shows the standard Unicode name of every character.",
			"When inactive, the characters are presented by themselves."
		],
		help2: [
			"Tap a character set below to see the characters in that set."
		],
		help3: [
			"Characters will display below. Tap them to copy them to the",
			"copy-bar above."
		],
	},
	characterInfo: characters,

	// PERMANENT INFO - Title of the permanent sort method in sort settings.
	WGPresetsSorter: "WG Presets Sorter", // 🔴 "WG" stands for "WordGen"

	// The key below is used when someone tries to edit or delete the permanent sort method in sort settings.
	cannotDeleteSorter: "This is used by $t(WordGen) presets. It cannot be modified or deleted.", // 🟡

	regexpInfo: [ // Markdown format
		"To put it as simply as possible, a regular expression is a",
		"sequence of characters that specifies a match pattern in text.",
		"$t(appTitle) uses JavaScript-style regexes without the",
		"surrounding slash characters.",
		"",
		"Fully explaining regular expressions is a topic that's too",
		"complicated for this app to cover, but they are very useful. Here",
		"are some resources where you can learn more about them:",
		"",
		"- [Wikipedia: Regular Expression](https://en.wikipedia.org/wiki/Regular_expression)",
		"- [MDN: Writing a regular expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions#writing_a_regular_expression_pattern)",
		"- [Regular-Expressions.info](https://www.regular-expressions.info) (a tutorial site)",
		"- [Geeks for Geeks: Write Reguar Expressions](https://www.geeksforgeeks.org/write-regular-expressions/)"
	],

};

export default common;
