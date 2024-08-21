const wgwe = {

	// WordGen and WordEvolve common terms

	CharGroup: "Character Group",
	CharGroups: "Character Groups",
	DeleteAll: "Delete All", // 🟨
	delAllCharGroups_one:
		"This will delete the current character group, and cannot be undone.", // 🟡
	delAllCharGroups_other:
		"This will delete all {{count}} current character groups, and cannot be undone.", // 🟡
	delAllTransforms_one:
		"This will delete the current transformation, and cannot be undone.", // 🟡
	delAllTransforms_other:
		"This will delete all {{count}} current transformations, and cannot be undone.", // 🟡
	importCharGroups_one: "Imported {{count}} Character Group.", // 🟦2.5
	importCharGroups_other: "Imported {{count}} Character Groups.", // 🟦2.5
	importOverwriteCG:
		"If any current character group has the same label as an incoming"
		+ " character group,the current character group will be overwritten."
		+ " Do you want to continue?", // 🟡

	Transformation: "Transformation",
	Transformations: "Transformations",
	DescOfTheTransformation: "Description of the transformation",
	DescOfTheTransformation_formal: "Description of the transformation",
	DescOfTheTransformation_presentation: "Transformation Description:",

	noSearchMsg: "No search expression present", // 🟡
	searchExpression: "search expression",
	searchExpression_formal: "Search Expression",
	searchExpression_presentation: "Search Expression:",
	replacementExpression: "replacement expression",
	replacementExpression_formal: "Replacement Expression",
	replacementExpression_presentation: "Replacement Expression:",

	CharacterGroupsTab: "Character Groups Tab", // 🟥
	TransformationsTab: "Transformations Tab", // 🟥
	OutputTab: "Output Tab", // 🟥
	OutputOptions: "Output Options", // 🟥

	cantMakeLabelMsg: "Unable to suggest a unique label from the given descrption.", // 🟦4
	noTitleMsg: "No title present", // 🟡
	noLabelMsg: "No label present", // 🟡
	duplicateLabel: "There is already a label \"{{label}}\"", // 🟡
	invalidLabel: "You cannot use \"{{label}}\" as a label", // 🟡
	noRunMsg: "No run present", // 🟡

	TitleOrDesc: "Title or description", // 🔵
	TitleOrDesc_presentation: "Title/Description:", // 🟥
	ShortLabel: "Short Label", // 🔵
	ShortLabel_presentation: "Short Label:", // 🟥
	OneCharOnly: "1 character only",
	Suggest: "Suggest", // 🔴 suggest a 1-character label for this character group
	LettersCharacters: "Letters, Characters", // 🔵
	LettersCharacters_presentation: "Letters/Characters:", // 🟥
	enterCharsInGroupHere: "Enter characters in Character Group here",
	WhatToChange: "what to change",
	WhatItChangesTo: "what it changes into",

};

export default wgwe;
