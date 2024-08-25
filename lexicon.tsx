const lexicon = {
	// Lexicon
	beginDeleteMode:
		"Tap on items to mark them for deletion. Finish deleting by tapping"
		+ " the top floating button. Cancel by tapping the bottom floating"
		+ " button.",
	delItems_one: "Delete {{count}} Item?", // 🟨
	delItems_other: "Delete {{count}} Items?",
	delItemsSuccess_one: "Deleted {{count}} item.", // 🟦2.5
	delItemsSuccess_other: "Deleted {{count}} items.",

	noInfoProvided: "You did not type any information into any text field.", // 🟡

	MergeSelected: "Merge selected items", // 🔵

	LexiconTitle: "$t(common:Lexicon) $t(common:Title)",
	LexiconTitle_presentation: "$t(common:Lexicon) $t(common:Title)",
		// presentation context will pull Title_presentation by default
	lexTitleHelperText: "Usually the language name.",
	lexDescriptionHelperText: "A short description of this lexicon.",

	lexItems_one: "{{count}} Item", // 🟥
	lexItems_other: "{{count}} Items",
	lexitems_one: "{{count}} item",
	lexitems_other: "{{count}} items",

	LexiconStorage: "$t(common:Lexicon) Storage", // 🟥
	ClearLexicon: "Clear $t(common:Lexicon)", // 🔴
	SavedLexicon: "Saved $t(common:Lexicon)",
	LexiconSorting: "$t(common:Lexicon) Sorting", // 🟥
	sortLexDescription:
		"The Lexicon will be sorted in the order you choose. It alphabetically"
		+ " sorts by the first column in the list. If two items are identical"
		+ " in that column, it will sort them by the next column in the list,"
		+ " and so on.",

	Sort: "Sort",
	Sort_presentation: "Sort:",

	DeleteSelectedLexItems: "Delete selected lexicon items", // 🔵
	DeleteMultipleLexItems: "Delete multiple lexicon items", // 🔵
	CancelDel: "Cancel deleting", // 🔵
	LexCleared: "Lexicon cleared", // 🟦4
	NothingToClear: "Nothing to clear", // 🟦3
	deleteEverythingMessage: // 🟡
		"This will erase everything currently displayed (but not anything"
		+ " previously saved). Are you sure you want to do this?",

	loadLexiconConfirm: // 🟡
		"Are you sure you want to load this? It will overwrite your current"
		+ " lexicon and cannot be reversed.",
	NoSavedLexicons: "No Saved Lexicons", // 🟥
	DeleteStoredLexicon: "Delete Stored Lexicon", // 🟥
	LexiconDeleted: "Lexicon deleted.", // 🟦2.5
	LoadLexicon: "Load Lexicon", // 🟥 🔴
	SaveLexicon: "Save Lexicon", // 🔴
	LexiconSaved: "Lexicon saved.", // 🟦2.5

	LexSavedAsNew: "Lexicon saved as new lexicon!", // 🟦2.5
	needTitleMsg: "You must input a title before saving.", // 🟡
	needLexiconTitleMsg: "Please give your lexicon a title before exporting it.", // 🟡
	needWordsMsg: "Please add words to your lexicon before exporting it.", // 🟡

	AddLexiconItem: "Add Lexicon Item", // 🟥
	AddItem: "Add Item", // 🔴
	EditLexiconItem: "Edit Lexicon Item", // 🟥
	DeleteItem: "Delete Item?", // 🟨
	ItemDeleted: "Item was deleted.", // 🟦2.5
	SaveItem: "Save Item", // 🔴
	Column: "Column", // 🔴
	EditCols: "Edit Columns", // 🟥
	ItemSaved: "Item saved to Lexicon", // 🟦2.5
	ExitWOSave: "Exit Without Saving?", // 🟨
	exitWithoutSavingMsg: "You have unsaved changes. Are you sure you want to exit?", // 🟡
	AddColumn: "Add Column", // 🟥
	ColumnAdded: "Column added", // 🟦2.5

	New: "New", // Default label for a new column
	deleteColumnMsg: "Are you sure you want to delete this column? $t(common:cannotUndo)", // 🟡
	LexOptions: "$t(common:Lexicon) Options", // 🟥
	ShowTitles: "Show Full Column Titles", // 🔴
	cannotDeleteFinalColumnMsg: "Cannot delete: a Lexicon must contain at least ONE column.", // 🟦 5

	// always presentational context:
	SortBlanks: "Sort blank columns:",

	RearrangeColumns: "Rearrange Lexicon Columns", // 🟥
	// The below describe how blank columns will be sorted in the Lexicon
	optionToBeginning: "To Beginning, Always", // 🔴
	optionToEnd: "To End, Always", // 🔴
	optionAlphaFirst: "As Alphabetically First", // 🔴
	optionAlphaLast: "As Alphabetically Last", // 🔴
	// Column Info
	FieldName: "Field Name", // 🔵
	// The following labels should be kept short
	Small: "Small", // (small column size)
	Med: "Med", // (medium column size)
	Large: "Large",  // (large column size)

	Changes: "Changes",
	workingMsg: "Working...",
	TITLE: "TITLE", // Only used in CSV exports

	ExportLex: "Export Lexicon", // 🔴
	ExportLexicon: "Export Lexicon: \"{{title}}\"", // 🟥
	// Types of exports
	exportTextTab: "Text, Tabbed",
	exportTextSemicolon: "Text, Semicolons",
	exportTextNewline: "Text, Newlines",
	exportCSVFile: "CSV File",
	exportCSVFileNoDesc: "CSV File, no title/description",
	fileJson: "JSON File",
	fileXml: "XML File",

	// Initial lexicon column labels
	Word: "Word",
	PartOfSpeech: "Part of Speech",
	Definition: "Definition",

	lexiconMergeInstructions:
		"This will combine the selected Lexicon items into one single Lexicon"
		+ " item. Use the \"How to Merge\" section to choose how the items"
		+ " are merged, and see a preview of the final result in the \"Current"
		+ " Merged Result\" section. This action cannot be undone.",
	HowToMerge: "How to Merge",
	CurrentMerge: "Current merged result:", // presentational context
	CancelMerge: "Cancel Merging", // 🔴
	SaveMerge: "Save and Merge", // 🔴
	MergeItems: "Merge Items", // 🟥 🔵

	merge: {
		first: "Use first non-blank value",
		last: "Use last non-blank value",
		merge: "Merge all non-blank values together",
		firstAll: "Use first value, even if it's blank",
		lastAll: "Use last value, even if it's blank",
		mergeAll: "Merge all values together, including any that are blank",
		blank: "Save nothing, leave blank"
	},

	info: {
		basic: [ // Markdown format
			"This tool is for storing the raw info of your language,",
			"whether that be words or something else. The default setup",
			"includes dictionary-style columns such as \"word\", \"part of",
			"speech\" and \"definition\", but you can add, remove, or",
			"rename columns as you see fit."
		],
		description: [ // Markdown format
			"The beginning of the page has a place where you can title your",
			"collection and give it a short description. You can toggle this",
			"entire section by using the (^) button at the top of the page."
		],
		saveCounterAndSort: [ // Markdown format
			"The save button at the top can be used to store, delete, and",
			"export entire lexicons.",
			"",
			"Below the title and description, you'll find a counter",
			"displaying how many words you have stored in your",
			"$t(common:Lexicon). Next to it is are two sort buttons, where",
			"you can choose which columns will be used to sort your",
			"collection."
		],
		editColumnsEtc: [ // Markdown format
			// Use `DRAG HANDLE` to insert the drag handle icon into the text.
			"The gear icon opens the **Edit Columns** settings. You can",
			"choose whether or not to show the columns' full names, the",
			"method you wish to use to sort the $t(common:Lexicon), and how",
			"blank columns will be handled. Below that you'll find a list of",
			"all current columns. You can edit them, delete them, add more,",
			"or use the `DRAG HANDLE` drag handles to rearrange their order.",
			"",
			"The second row contains the titles of the columns. Beneath them",
			"are input boxes for quickly adding info to the",
			"$t(common:Lexicon). Use the small (+) button to save what",
			"you've typed.",
			"",
			"Under those boxes you'll find the meat of $t(common:Lexicon):",
			"all the items you've stored. They will appear as striped rows.",
			"You can **swipe left** on each one to find **Edit** and",
			"**Delete** buttons."
		],
		mergeButton: [ // Markdown format
			"You can swipe right on a lexicon item to find the",
			"**Merge Items** button. You can use this to mark multiple",
			"entries. Once you've selected at least two, a large paperclip",
			"button will appear at the bottom of the page. Tapping on it will",
			"prompt you to merge the selected items into one entry.",
			"",
			"Several tools in $t(common:appTitle) can export info into",
			"the $t(common:Lexicon). The merge function can be used to merge",
			"all this different info. Here's an example:",
			"",
			"1. You begin by naming columns in the $t(common:Lexicon)",
			"\"original\", \"changed\", and \"definition\".",
			"2. Then, you use $t(common:WordGen) to create a bunch of new",
			"words, which you export to $t(common:Lexicon) under the",
			"\"original\" column.",
			"3. Next, you change those words with $t(common:WordEvolve) and",
			"export the changed words to \"changed\".",
			"4. Then, you visit $t(common:Concepts) and export meanings to",
			"\"definition\".",
			"5. Finally, you swipe and link each \"original\", \"changed\"",
			"and \"definition\" column with each other and merge them into",
			"single entries."
		],
		toolButton: [ // Markdown format
			"At the bottom of the page, you'll find a large tool button. You",
			"can tap on it to pull up a small menu. Tap on the (+) button to",
			"pop up a large form for adding to the $t(common:Lexicon). Tap on",
			"the trash can to enter mass-delete mode, where you can select",
			"multiple entries and delete them all at once."
		],
	}
};

export default lexicon;
