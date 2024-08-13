# Translation Guide

This contains a copy of the translation files for [Conlang Toolbox](https://www.github.com/jasontankapps/conlang-toolbox) for easy access. They are formatted as Typescript modules that export JSON objects compliant with [i18next](https://www.i18next.com/misc/json-format).

## PLURALITY

Some terms will end in `_one` or `_other`. They always have a `{{count}}` that can be used if needed.

>**dog_one** = 1 dog
>
>>`"There is {{count}} dog."`  
>>= "There is 1 dog."
>
>**dog_other** = 0 dogs, 2+ dogs, etc
>
>>`"There are {{count}} dogs."`  
>>= "There are 17 dogs."

Other languages may have their own plurality \_endings. Check your i18n specifications.

---

## CONTEXTS

Some terms may be used in a specific context. This app uses `filename`, `formal`, and `presentation` contexts.

### Normal

>**dogQuestion** = Normal use
>
>>`"dogQuestion": "Is this a dog?"`

### Filename

>**dog_filename** = Must consist of only characters safe to use in a filename (this is generally anything except the backslash `\`, slash `/`, colon `:`, asterisk `*`, question mark `?`, quotation mark `"`, greater-than sign `>`, less-than sign `<`, and vertical bar `|`).
>
>>`"dogQuestion_filename": "Is_this_a_dog"`

### Formal

>**dog_formal** = This is being used as a proper name or otherwise has importance. In English, this simply means Capitalizing Most Words.
>
>>`"dogQuestion_formal": "Is This a Dog?"`

### Presentation

>**dog_presentation** = This is a user-facing term that is "pointing" at...
>
>- important information
>- a text box
>- a selectable option
>- a toggleable option
>- or something similar
>
>In English, I add a colon on the end of the formal term.
>
>>`"dogQuestion_presentation": "Is This a Dog?:"`

**Note:** Some keys are always in `presentation` context, even though they don't use the `_presentation` suffix. This will be noted in its description.

---

## Labels

These symbols indicate *where* in the app a message is used.

>🟥 :: Headers *(important text in the app, possibly placed in the toolbar)*
>
>> Text headers should be relatively short and are usually capitalized.
>
>🔴 :: Button or option text
>
>> Button text should be kept short
>
>🟨 :: Dialog box headers *(yes/no prompts, alerts, etc, are dialog boxes)*
>
>🟡 :: Dialog box messages
>
>> Dialog box text should be clear and concise. Dialog box headers should be kept reasonably short.
>
>**🟦x** :: "Toast" message that stays on screen for `x` seconds before disappearing on its own.
>
>>The average user should be able to read a toast message before `x` seconds have expired.
>>
>> For example, `🟦3.5` indicates a toast message that displays for three and a half seconds before disappearing. A message like *"Good job!"* would be appropriate, but *"Good job! Your next task is to read 30 pages of Hemmigway's biography and prepare a 2-page essay on what you've learned. The paper should be double-spaced in a font no smaller than 12pt."* would be far too long.
>
>🔵 :: ARIA labels *(accessibility messages, not visible to the average user)*

Keys without any of these notes are only shown on-screen in plain text.

---

## Common Terms : common.tsx

These are terms used across the app, or only on "main" app pages, like Settings and About.

| Label | Key | English Translation | Description (if needed) |
| --- | --- | --- | --- |
| 🟥 | appTitle | Conlang Toolbox | Title of the app. |
| 🟥 | appSubtitle | tools for language invention | Subtitle of the app. |
| 🟥 | MorphoSyntax | MorphoSyntax | Title of the MorphoSyntax tool. It is based on the word "morphosyntax the study of the form and meaning of language through the structure of words and sentences. |
| 🟥 | WordGen | WordGen | Title of the WordGen tool. It is a combination of "word" and "generator". |
| 🟥 | WordEvolve | WordEvolve | Title of the WordEvolve tool. It is a combination of "word" and "evolve". |
| 🟥 | Declenjugator | Declenjugator | Title of the Declenjugator tool. It is a combination of "declension" (modifying nouns based on their case) and "conjugation" (modifying verbs based on their tense, aspect and/or mode), along with an -or suffix to indicate it's an object that does something. |
| 🟥 | Lexicon | Lexicon | Title of the Lexicon tool. |
| 🟥 | Concepts | Concepts | Title of the Concepts tool. |
| 🟥 | AppInfo | App Info | Title of the page where you find information about the app. |
| 🟥 | AppSettings | App Settings | Title of the page where you find settings for the entire app. |
| 🟥 | Main | Main | Title of the "About" page, which is also the app startup page. |
| 🟥 | Overview | Overview | Title of several pages which provide a broad overview of a tool. |
| 🟥 | Settings | Settings | Title of several pages where you can find settings for the various tools. |
| 🟥 | Input | Input | Title of several pages where you "input" things into a tool. |
| 🟥 | Output | Output | Title of several pages where a tool presents output. |
| 🟥 | Info | Info | Title of several modals that provide information. |
| 🔴 | Cancel | Cancel | Cancel current operation |
| 🔴 | Clear | Clear | Clear all input or output |
| 🔴 | Save | Save | Save the current information |
| 🔴 | Ok | Ok | General acknowledgement |
| 🔴 | Done | Done | User has finished using this modal or tool |
| 🔴 | Close | Close | Close the modal |
| 🔴 | Help | Help | Get helpful information |
| 🔴 | Delete | Delete | Delete something |
| 🔴 | Edit | Edit | Edit something |
| 🔴 | AddAndClose | Add and Close | Text of button that adds something and closes a modal |
| 🔴 | AddNew | Add New | Text of button that adds a new thing |
| 🔴 | Copy | Copy | Copy information |
| 🔴 | Generate | Generate | Generate some output |
| 🔴 | CopyToClipboard | Copy to Clipboard | Copy something to the clipboard |
| 🔵 | CharactersToBeCopied | Characters to be copied | ARIA label for the input box inside Extra Characters that holds characters to be copied. |
| | Display | Display: | *(presentation context)* A choice of something to display |
| | SavedAt | Saved: {{time}} | Indicates when something was saved. `{{time}}` is replaced with a timestamp. |
| 🟦1.5 | CopiedToClipboard | Copied to clipboard | Displays after anything has been copied to the clipboard. |
| 🟦1.5 | NothingToCopy | Nothing to copy | Displays when the user tries to copy something to the clipboard, but there is nothing to copy. |
| | Untitled | \[Untitled] | This is used as a document title if no title is given. |
| | fileFormat | {{title}} - {{date}}.{{extension}} | This becomes a filename and is used by MorphoSyntax, Declenjugator, and Lexicon for exporting documents. `{{title}}` is user-generated, `{{date}}` is replaced with a datestamp in a format like "Thu Jan 01 1970 and `{{extension}}` will be a common file extension like "docx" or "csv". |
| 🟦10 | UnableToExport | UNABLE TO EXPORT: {{error}} | Displayed when the app is unable to export a document to the user's device. `{{error}}` is a system-generated error message. |
| 🟦5 | FileExported | {{filename}} exported. | Displayed when a file is successfully exported to the user's device. |
| | andGlue |  " | Put between items when the app assembles items into a single sentence. **Note:** The quotation marks are not a part of the message, they are there to indicate it ends with a space. |
| | andFinal |  and " | Put between the penultimate and ultimate items instead of `andGlue`. **Note:** The quotation marks are not a part of the message, they are there to indicate it ends with a space. |
| | joinTwo | {{one}} and {{two}} | Used instead of `andGlue` when there are only two items in a list. |
| 🟨 | ExitAppQHead | Exit App? | Header of a yes/no confirmation dialog when the user hits the device back button and is about to close the app. |
| 🟡 | ExitAppQ | Do you want to exit the app? | Body text of the confirmation dialog above |
| 🔴 | YesExit | Yes, Exit! | The "yes" button on the confirmation dialog above |
| 🟦3.5 | saveToLexColumn_one | {{count}} word saved to $t(Lexicon) under "{{column}}" | Used when words from other tools are added to Lexicon. `{{column}}` is the name of the column the words were saved under. `$t(Lexicon)` is replaced with the `Lexicon` translation above. |
| 🟦3.5 | saveToLexColumn_other | {{count}} words saved to $t(Lexicon) under "{{column}}" | Same as above, but for English plurality rules. |
| 🟨 | SelectAColumn | Select a column | Used in dialogs where the user is attempting to take words from a tool and save them in Lexicon. |
| 🟡 | SaveToLexiconMessage | Your selected words will be added to the $t(Lexicon) under that column. | Used in dialogs where the user is about to send words to the Lexicon to be saved. |
| 🟦3.5 🔴 | GoToLexicon | Go to $t(Lexicon) | Used in a button inside a toast message after the user has successfully saved words from a tool into Lexicon. |
| 🟦2.5 | TapWordsToSave | Tap words you want to save to $t(Lexicon). | Used inside of tools when prompting the user to tap on words on the screen that they wish to save to Lexicon. |
| 🟨 🟥 | ChooseFormat | Choose a Format | Used when the user is about to export a file and they have to choose what file format they will use. |
| 🟨 🟥 | ChooseFormat_presentation | Choose a format: | The *presentation* context of the above. |
| 🔴 | fileDocx | Word Document (docx) | User-selectable option for file export |
| 🔴 | fileText | Text File | User-selectable option for file export |
| 🔴 | filePlain | $t(fileText) (plain) | User-selectable option for file export |
| 🔴 | fileMd | $t(fileText) (markdown) | User-selectable option for file export |
| 🔴 | fileCsv | Spreadsheet (csv) | User-selectable option for file export |
| 🔴 | fileJson | JSON File | User-selectable option for file export |
| 🔴 | fileXml | XML File | User-selectable option for file export |
| 🟦2.5 | thingsDeleted_one | {{things}} deleted | Tells the user that something has been deleted. `{{things}}` will be replaced by a singular thing. This also takes a `{{count}}` property for plurlity. |
| 🟦2.5 | thingsDeleted_other | {{things}} deleted | Same as above, but for English plurality rules. |
| 🟡 | clearOverwriteGeneralThings | This will clear and overwrite {{things}}. | General Things are unknown: may be 0, 1, or any number. `{{things}}` will be provided by the app. |
| 🟥 🔴 | saveGeneralThings | Save {{things}} | General Things are unknown: may be 0, 1, or any number. `{{things}}` will be provided by the app. |
| 🟨 | DeleteEverythingQ | Delete Everything? | Asking to delete something. The dialog text will specify what is being deleted. |
| 🟦2 | thingAdded | {{thing}} added. | General message |
| 🟦2 | thingSaved | {{thing}} saved. | General message |
| 🟦2.5 | thingDeleted | {{thing}} deleted. | General message |
| 🟦2 🟨 | thingEdited | {{thing}} edited. | General message |
| 🔴 🟨 | deleteThing | Delete {{thing}} | General message |
| 🟥 | editThing | Edit {{thing}} | General message |
| 🟥 🔴 | addThing | Add {{thing}} | General message |
| 🔴 | saveThing | Save {{thing}} | General message |
| 🟥 | loadThing | Load {{thing}} | General message |
| 🟨 | missingThing | Missing {{thing}} | General message |
| 🟥 | exportThing | Export {{thing}} | General message |
|  | exportThing_presentation | Export {{thing}}: | *Presentation* context of the above. |
| 🟨 | deleteTitleQ | Delete "{{title}}"? | Message used with user-titled info. |
| 🟨 | loadTitleQ | Load "{{title}}"? | Message used with user-titled info. |
| 🟦2.5 | titleSaved | "{{title}}" saved. | Message used with user-titled info. |
| 🟨 | titleAlreadyExists | "{{title}}" already exists. | Message used with user-titled info. |
| 🟦2.5 | titleLoaded | "{{title}}" loaded. | Message used with user-titled info. |
| 🟡 | titleNotFound | "{{title}}" not found. | Message used with user-titled info. |
| 🟦2.5 | titleDeleted | "{{title}}" deleted. | Message used with user-titled info. |
| 🟦2.5 | titleOverwritten | "{{title}}" overwritten. | Message used with user-titled info. |
| 🔴 | YesOverwriteIt | Yes, Overwrite It | Confirmation button when the user is about to overwrite stored info in WordGen, WordEvolve, or Declenjugator |
|  | prevSave | the previous save | Used as a "general thing" in some of the messages above. |
|  | CurrentInfo | Current Info | Used as a "general thing" in some of the messages above. |
| 🟨 | LoadError | Load Error | Shows up in dialogs explaining that the app was unable to load stored info. |
| 🟥 | ManageCustomInfo | Manage Custom Info | Header for modals where the user is manipulating stored info inside a tool. |
|  | NameYourInfo | Name your custom info | Provided as a hint when the user is prompted to entitle a save. |
| 🔵 | NameOfSave | Name of save | As above, but is the ARIA text for the input. |
| 🔴 | Load | Load | When loading stored information. |
|  | NoSavedInfo | No saved info | A message that shows up in some dialog boxes if the user hasn't saved anything in that tool yet. |
|  | SortMethod | Sort method: | *(presentation context)* Indicates a way to sort the given info. |
| 🟡 | cannotUndo | This cannot be undone. | This action, usually deleting something, cannot be undone. |
| 🟡 | areYouSure | Are you sure? | Do you want to do this action? |
| 🟡 | deleteThisCannotUndo | Are you sure you want to delete this? $t(cannotUndo) | Combines the `cannotDo` message with the common use case where something is about to be deleted. |
| 🔴 | confirmDel_one | Yes, Delete It | The things being deleted might be: 1) custom meanings in Concepts; 2) A column or item in Lexicon; 3) Character Groups or Transformations in WG and WE; 4) Syllables in WG; 5) Sound Changes in WE; 6) A single unit of saved custom info in WG, WE, Declenjugator, Lexicon, or MorphoSyntax; 7) A Custom Sort in Settings, or one of their relations or equalities; 8) a group in Declenjugator, or a single declension or conjugation in a group. |
| 🔴 | confirmDel_other | Yes, Delete Them | The English plural version of the key above. |
| 🔴 | confirmDelAll | Yes, Delete All | Confirmation when deleting all info in MorphoSyntax or Lexicon. |
| 🔴 | confirmLoad | Yes, Load Info | Used to confirm loading Custom Info in WG, WE, Declenjugator, Lexicon, or MorphoSyntax |
|  | This | This | `This` is used by `deleteThing` and may refer to 1) a Custom Sort in Settings, or one of their relations or equalities; 2) a group in Declenjugator, or a single declension or conjugation in a group |
| 🟦2.5 | NothingToSave | Nothing to save. | An attempt was made to save something, but there was no information to save. |
| 🟦2 | Deleted | Deleted | Successful deletion. |
| 🟨 | UnsavedInfo | Unsaved Info | Dialogs regarding exiting or closing something before everything has saved. |
|  | error | Error | Simple translation |
| 🟥 | emphasizedError | \<$t(error)\> | A visually emphasized version of `error`. |
| 🟨 | regexpError | Error trying to parse "{{regex}}" | The user gave a malformed regular expression `{{regex}}` in WG or WE. |
| 🟥 | Loading | Loading | A tool or page is loading. |
| 🟥 | PleaseWait | Please wait... | An additional loading message. |
| 🟡 | MaybeDiscardThing | Are you sure you want to discard this? | When deciding not to add a new thing |
| 🟡 | MaybeDiscardEdits | Are you sure you want to discard your edits? | When deciding not to edit an existing thing |
| 🔴 | YesDiscard | Yes, Discard | Affirmative answer to either of the above two questions. |
| 🟡 | MaybeClearEntireInput | $t(areYouSure) This will clear the entire input, and cannot be undone. | Clearing the entire Input in Declenjugator and WE |
| 🔴 | YesClear | Yes, Clear It | Affirmative answer to the above question. |
| 🔴 | defaultSort | Default sort | Refers to the default sort method (whatever it may be) |
| 🟡 | LexiconNeedsColumns | You need to add columns to the $t(Lexicon) before you can add anything to it. | Error message |
| 🔴 🟥 🟨 | ImportFrom | Import from {{source}} | `{{source}}` is always Lexicon, WordGen or WordEvolve |
| 🔴 | LoadPreset | Load Preset | Load a preset in WE or WG |
| 🔴 | Import | Import | Import from Lexicon (to WG or WE) |
| 🟨 | ImportFromWhichColumns | Import from which column(s)? | Import from Lexicon (to WG or WE) |
| 🟥 | LexiconHasNoColumns | Lexicon Has No Columns | Error message trying to import from an empty Lexicon |
|  | optional | (optional) | Placeholder text for optional text inputs |
|  | AddConditions | Add Conditions $t(optional) | The user can specify conditions that must be met before a specific word can be imported from the Lexicon. |
|  | Condition | Condition | Used in `thingSaved` inside the Import from Lexicon modal |
|  | WordMustContainX | Word must contain \[x\] | A condition |
| 🟥 | WordsThatContain | Words that contain: | *(presentation context)* Prefixes the input box for the above key |
|  | TypeWordHere | Type part of word here. | Placeholder text for the above input |
|  | WordMustMatchX | Word must match expression \[x\] | A condition |
| 🟥 | WordsThatMatch | Words that match: | *(presentation context)* Prefixes the input box for the above key |
|  | TypeRegExHere | Type regular expression here. | Placeholder text for the above input |
|  | ColXMustHaveY | Column \[x\] must contain \[y\] | A condition |
|  | ColXMustMatchY | Column \[x\] must match expression \[y\] | A condition |
| 🟥 | TestColumn | Test column: | *(presentation context)* The column being tested for a match (see the two keys above) |
| 🟥 | WordsWithColumn | Words where the column: | *(presentation context)* Header for displaying the column conditions |
|  | columnContains | \[{{column}}\] contains "{{test}}" | Shows a result of `ColXMustHaveY` where `{{column}}` is the Lexicon column and `{{test}}` is the user-provided string a word must contain. |
|  | columnMatches | \[{{column}}\] matches /{{test}}/ | Same as above, but `{{test}}` is the user-provided regular expression. |
| 🟥 | MatchAllConditions | Match all conditions | Toggle switch label |
|  | ifMatchAllOff | If off, this will import words that match any condition. | Explanatory text for the toggle |
| 🟨 | ExitWOImport | Exit Without Importing? | Exit the importer without actually importing anything. |
| 🟦2.5 | SelectOneCol | Please select at least one column to import from. | Error message where no column was selected for the importer. |
| 🟦4.5 | NothingToImport | Did not find anything to import. | The conditions given resulted in no words being eligible for importing. |
| 🟦3.5 | importSuccess_one | Imported {{count}} word from $t(Lexicon) | Successful import |
| 🟦3.5 | importSuccess_other | Imported {{count}} word from $t(Lexicon) | English plural of the above |
| 🔴 | yesImport | Yes, Import | Proceed with the import |
|  | regexpInfo | *This is an array of strings in Markdown format. See [regexpInfo](#regexpinfo) section below.* | A minimal explanation of how to find information on regular expressions. |
| 🟦2.5 | stoppedCopying | No longer copying directly to clipboard. | Extra Characters |
| 🟦2.5 | startedCopying | Now copying immediately to clipboard. | Extra Characters |
| 🟦1.5 | copiedCharToClipboard | Copied {{char}} to clipboard | Extra Characters: Only one character was copied |
| 🔴 | Favorites | Favorites | Extra Characters |
| 🔵 | startedFavoriting | Start favoriting characters | Extra Characters |
| 🔵 | stoppedFavoriting | Stop favoriting characters | Extra Characters |
| 🟦2.5 | startedSaving | Now saving characters to $t(Favorites) | Extra Characters |
| 🟦2.5 | stoppedSaving | No longer saving to $t(Favorites) | Extra Characters |
|  | TapToAdd | Tap characters to add them here | Extra Characters: placeholder text |
| 🔵 | ShowNames | Show full character names | Extra Characters |
| 🔵 | HideNames | Hide full character names | Extra Characters |
|  | extraHelp.help1p1 | \[ "This is a place to find and copy characters that may not be easily accessible to you on your device's keyboard. The other buttons can be toggled for additional effects:" \] | Help text for Extra Characters. This text appears at the top of the modal, and is followed by the icon for copying to the clipboard. *This is an array of strings in Markdown format.* |
|  | extraHelp.help1p2 | \[ "When active, copies any character you tap directly to the clipboard. When inactive, copies tapped characters to the copy-bar below, where you can copy them at your leisure." \] | Help text for Extra Characters. This text is followed by the icon for favoriting characters. *This is an array of strings in Markdown format.* |
|  | extraHelp.help1p3 | \[ "When active, tapping on a character adds or removes it from your Favorites list. Characters will not be copied to the clipboard or the copy-bar." \] | Help text for Extra Characters. This text is followed by the icon for showing full Unicode names of the characters. *This is an array of strings in Markdown format.* |
|  | extraHelp.help1p4 | \[ "When active, shows the standard Unicode name of every character. When inactive, the characters are presented by themselves." \] | Help text for Extra Characters. This ends the first help section in the modal. *This is an array of strings in Markdown format.* |
|  | extraHelp.help2 | \[ "Tap a character set below to see the characters in that set." \] | Help text for Extra Characters. This text appears between the control buttons and the area where you choose which character set to display. *This is an array of strings in Markdown format.* |
|  | extraHelp.help3 | \[ "Characters will display below. Tap them to copy them to the copy-bar above." \] | Help text for Extra Characters. This text appears between the character set display controls and the characters being displayed. *This is an array of strings in Markdown format.* |
| 🔴 | WGPresetsSorter | WG Presets Sorter | The name of the permanent sort method in sort settings. |
| 🟡 | cannotDeleteSorter | This is used by $t(WordGen) presets. It cannot be modified or deleted. | Error message shown when a user tries to delete the permanent sort method. |

### Extra Characters : characters.tsx

This file is imported into common.tsx, and its properties become properties of the `characterInfo` object within it.

| Label | Key | English Translation | Description (if needed) |
| --- | --- | --- | --- |
| 🔴 | characterInfo.Latin | Latin | The Latin character set |
| 🔴 | characterInfo.IPA | IPA | Characters used in the International Phonetic Alphabet |
| 🔴 | characterInfo.Greek | Greek | The Greek character set |
| 🔴 | characterInfo.Coptic | Coptic | The Coptic character set |
| 🔴 | characterInfo.Cyrillic | Cyrillic | The Cyrillic character set |
| 🔴 | characterInfo.Armenian | Armenian | The Armenian character set |
| 🔴 | characterInfo.Hebrew | Hebrew | The Hebrew character set |
| 🔴 | characterInfo.Arabic | Arabic | The Arabic character set |
| 🔴 | characterInfo.Thai | Thai | The Thai character set |
| 🔴 | characterInfo.Lao | Lao | The Lao character set |
| 🔴 | characterInfo.Hiragana | Hiragana | The Hiragana character set |
| 🔴 | characterInfo.Katakana | Katakana | The Katakana character set |
| 🔴 | characterInfo.Bopomofo | Bopomofo | The Bopomofo character set |

Each character in Extra Characters has an official Unicode name. You can find the list of them in [CHARACTERCODES.md](CHARACTERCODES.md).

### regexpInfo

>\[  
>"To put it as simply as possible, a regular expression is a sequence of characters that specifies a match pattern in text. $t(appTitle) uses JavaScript-style regexes without the surrounding slash characters.",  
>"",  
>"Fully explaining regular expressions is a topic that's too complicated for this app to cover, but they are very useful. Here are some resources where you can learn more about them:",  
>"",  
>"\- \[Wikipedia: Regular Expression\]\(https:/\/en.wikipedia.org/wiki/Regular_expression\)",  
>"\- \[MDN: Writing a regular expression\]\(https:\//developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions#writing_a_regular_expression_pattern\)",  
>"\- \[Regular-Expressions.info\]\(https:\//www.regular-expressions.info\) (a tutorial site)",  
>"\- \[Geeks for Geeks: Write Reguar Expressions\]\(https:/\/www.geeksforgeeks.org/write-regular-expressions/\)"  
>\]

---

## Settings : settings.tsx

| Label | Key | English Translation | Description (if needed) |
| --- | --- | --- | --- |
|  | Data | Data | used by `exportThing` |
| 🟥 🔴 | DisableConfPrompts | Disable Confirmation Prompts |  |
|  | confPromptExplanation | Eliminates yes/no prompts when deleting or overwriting data. | Explanation for the setting above |
| 🟥 🔴 | ChangeTheme | Change Theme |  |
| 🟥 🔴 | SortSettings | Sort Settings |  |
| 🟥 🔴 | ImportAppInfo | Import App Info |  |
|  | ChooseATheme | Choose a Theme |  |
| 🔴 | Default | Default | Theme name |
| 🔴 | Light | Light | Theme name |
| 🔴 | Dark | Dark | Theme name |
| 🔴 | SolarizedLight | Solarized Light | Theme name; "Solarized" is the name of a popular color palette |
| 🔴 | SolarizedDark | Solarized Dark | Theme name; "Solarized" is the name of a popular color palette |
|  | exportAllMsg | \[ "Save this info to a note or file.&nbsp;&nbsp;&nbsp;", "You will be able to use it later to restore your data." \] | *This is an array of strings in Markdown format.* |
| 🔵 | ExportedData | Exported Data |  |
| 🟥 | WhatToExport | What to Export |  |
| 🟡 | nothingImportedMsg | You haven't imported anything yet. |  |
| 🔴 | YesClose | Yes, Close This |  |
| 🟦10 | successImport | Imported new info for {{listing}} | `{{listing}}` will be replaced with a list of tools that received imported data. |
| 🟦10 | alsoOverwrote | ; also completely overwrote storage for {{listing}} | Optionally appended to `successImport`; `{{listing}}` will be replaced with a list of tools that had data overwritten with imported data. |
| 🟦10 | successOverwrote | Completely overwrote storage for {{listing}} | `{{listing}}` will be replaced with a list of tools that had data overwritten with imported data. |
|  | ImportInfo | Import Info |  |
|  | importDescription | Paste your data below. This only accepts data exported through "Export App Info". | The phrase `Export App Info` should be the same text that would be generated if you used the `exportThing` key and replaced `{{thing}}` with the `AppInfo` key. |
| 🔵 | DataToImport | Data to Import |  |
| 🔴 | Reset | Reset |  |
| 🔴 | Analyze | Analyze |  |
| 🟥 | WhatToImport | What to Import |  |
| 🔴 | currentSettings | Current {{tool}} Settings | `{{tool}}` is replaced with "WordGen", "MorphoSyntax", etc. |
| 🔴 | storedSettings | Stored {{tool}} Settings | `{{tool}}` is replaced with "WordGen", "MorphoSyntax", etc. |
| 🔴 | storedDocuments | Stored {{tool}} Documents | `{{tool}}` is replaced with "WordGen", "MorphoSyntax", etc. |
| 🔴 | appSettings | {{tool}} Settings | `{{tool}}` is replaced with "WordGen", "MorphoSyntax", etc. |
| 🔴 | OtherAppSettings | Other App Settings |  |
| 🟦5 | nothingChosenForImportMsg | You did not choose anything to import. |  |
| 🟨 | WARNING | WARNING! | Header for the importing data warning |
| 🟡 | willOverwriteCurrent | This will overwrite all current data in {{listing}}. |  |
| 🟡 | alsoOverwriteStorage | It will ALSO delete and replace stored data for {{listing}}. |  |
| 🟡 | willOverwriteStorage | This will delete and replace stored data for {{listing}}. |  |
| 🟡 | areYouVerySure | Are you SURE you want to do this? |  |
| 🔴 | YesIAmSure | Yes, I Want to Do This | Confirmation button for the importing data warning |
| 🔴 | none | (none) | Indicates no custom sort is being used. |
| 🟥 | ManageSortMethods | Manage Sort Methods |  |
| 🟥 | BasicSort | Basic Sort |  |
| 🔴 🟥 | UseLangBasedSort | Use Language-Based Sort |  |
|  | langSortExplanation | Use a language's rules for sorting instead of using Unicode points. (If this option is disabled, your device does not support language-based sorting.) | Explanation for the `UseLangBasedSort` option |
| 🔴 | SortLanguage | Sort Language: | *(presentation context)* |
|  | Sort | Sort | used in `deleteThing` |
| 🟨 | ThisSort | This Sort | used in `deleteThing` |
| 🔴 | BaseOnly | \[ȁ = Ȁ, a = ȁ\]: Base letters only | *This key and the next three display a representation of the sort option in \[brackets\], followed by its description.* The sort only compares the base letter, ignores case and diacritics |
| 🔴 | Diacritics | \[ȁ = Ȁ, a ≠ ȁ\]: Diacritics | The sort compares the base letter and its diacritics, ignores case |
| 🔴 | UpperLowercase | \[ȁ ≠ Ȁ, a = ȁ\]: Upper/lowercase | The sort compares the base letter and its case, ignores diacritics |
| 🔴 | DiacriticsUpperLowercase | \[ȁ ≠ Ȁ, a ≠ ȁ\]: Diacritics and upper/lowercase | The sort compares the base letter, its case, and its diacritics |
|  | overrideNoteMsg | Note: This can be overriden by a language's sorting rules. |  |
|  | UsingCustomSort | Using Custom Sort: | *(presentation context)* |
| 🟥 | AllCustomSortMethods | All Custom Sort Methods |  |
|  | customAlphabet | custom alphabet |  |
| 🔵 | CustomAlphabet | Custom Alphabet |  |
|  | relation_one | {{count}} relation | A "relation" is the relationship between two characters (e.g. 'A', 'B', and 'C' are before 'D') |
|  | relation_other | {{count}} relations | As above, but the English plural |
|  | equality_one | {{count}} equality | An "equality" is declaring two or more characters equal (e.g. 'A' is equal to 'a') |
|  | equality_other | {{count}} equalities | As above, but the English plural |
| 🟡 | needTitleMsg | You must provide a title before saving. | Error message |
| 🟡 | blankAlphabetProvided | The alphabet provided was blank. | Error message |
| 🟡 | noEnteredInfoMsg | You did not enter any information. | Error message |
| 🟡 | noBaseCharMsg | You must provide a "base" character. | Error message |
| 🟡 | noEqualCharMsg | You must provide some "equal" characters. | Error message |
| 🟡 | noPostPreCharMsg | You must provide some "pre" or "post" characters. | Error message |
| 🔴 | NewCustomSort | New Custom Sort |  |
|  | CustomSort | Custom Sort | Used by `editThing`, `thingDeleted`, `thingSaved`, and `addThing` |
|  | TitleOfSort | Title for this sort |  |
| 🔴 | UnicodeSort | Unicode sort (language-independent) |  |
|  | SortSensitivity | Sort Sensitivity: | *(presentation context)* |
| 🔴 | DefaultSensitivity | Default sensitivity |  |
| 🔴 | UseAlternateAlphabet | Use alternate alphabet |  |
|  | alternateAlphabetExplanation | Items will be sorted according to the order you provide. Characters not in your alphabet will be sorted according to the rules above. |  |
|  | WriteAlphaHere | Write your alphabet here. |  |
|  | AlphabetSeparator | Alphabet separator: | *(presentation context)* |
| 🔴 | NoSeparator | \[abcde\]: No separator | This key and the next four keys display a representation of the option in \[brackets\], followed by its descriptive name |
| 🔴 | Space | \[a b c d e\]: Space |  |
| 🔴 | Comma | \[a,b,c,d,e\]: Comma |  |
| 🔴 | Period | \[a.b.c.d.e\]: Period |  |
| 🔴 | Semicolon | \[a;b;c;d;e\]: Semicolon |  |
|  | Relation | Relation | Used in `addThing`, `thingAdded`, `editThing` and `thingEdited` |
| 🟥 | Relations | Relations |  |
|  | relationMsg | Similar characters that should be sorted separately. |  |
|  | Equality | Equality | Used in `addThing`, `thingAdded`, `editThing` and `thingEdited` |
| 🟥 | Equalities | Equalities |  |
|  | equalityMsg | Characters that should be sorted together as if they were strictly equal. |  |
|  | BaseChar | Base Character: | *(presentation context)* |
|  | BaseEqual | Equal to the Base: | *(presentation context)* |
|  | CharsSeparator | Characters Separator: | *(presentation context)* |
|  | PrePostSeparator | Pre/Post Separator: | *(presentation context)* |
|  | SortedAfterBase | Sorted After the Base: | *(presentation context)* |
|  | SortedBeforeBase | Sorted Before the Base: | *(presentation context)* |
|  | EqualsSeparator | Equalities Separator: | *(presentation context)* |
| 🔵 | Basecharacter | Base character |  |
|  | TheBaseCharacter | The base character | Placeholder text in an input box |
| 🔵 | CharsEqual | Characters equal to the base |  |
|  | CharsToBeEqual | Characters to be equal to the Base. | Placeholder text in an input box |
| 🔵 | CharsPreBase | Characters sorted before the base |  |
|  | charsPreBaseMsg | End with the one just before the Base. | Placeholder text in an input box |
| 🔵 | CharsPostBase | Characters sorted after the base |  |
|  | charsPostBaseMsg | Start with the one just after the Base. | Placeholder text in an input box |

---

## App Info : appInfo.tsx

| Label | Key | English Translation | Description (if needed) |
| --- | --- | --- | --- |
| 🟥 | CreditsAcknowledgements | Credits and Acknowledgements |  |
|  | credit1 | \[ "App icon is based on \[Toolbox by Maxicons\]\(https:/\/thenounproject.com/term/toolbox/2586725/\) from the Noun Project" \] | *This is an array of strings in Markdown format.* |
|  | credit2 | \[ "$t(common:WordGen) and $t(common:WordEvolve) are heavily inspired by \[Gen\]\(http:/\/www.zompist.com/gen.html\) and \[SCA²\]\(http:/\/www.zompist.com/sca2.html\) by Mark Rosenfelder" \] | *This is an array of strings in Markdown format.* |
|  | credit3 | \[ "$t(common:MorphoSyntax) is based on an outline presented throughout \_Describing Morphosyntax: A Guide for Field Linguists\_ by Thomas E. Paine, and it also uses some foreign-language examples presented therein" \] | *This is an array of strings in Markdown format.* |
| 🟥 | BugReports | Bug Reports |  |
|  | bugReportMsg | \[ "Please report bugs and errors to \[the Github repository\]\(https:\//github.com/jasontankapps/conlang-toolbox/issues\) and incude an error log." \] | *This is an array of strings in Markdown format.* |
| 🔴 | GetErrLog | Get Error Log |  |
| 🟨 | EntireState | Entire State | 'State' refers to the info saved by the app that is used to display info, create info, etc. |
| 🟨 | DebugInfo | Debug Info |  |
| 🔴 | CopyLogs | Copy Logs | 'Logs' refer to hidden reports/notes that the app sometimes makes when it encounters an error. |
| 🔴 | ClearLogs | Clear Logs | 'Logs' refer to hidden reports/notes that the app sometimes makes when it encounters an error. |
| 🟡 | logDeletionMsg | Logs normally delete themselves after 90 days. Deleting logs cannot be undone. | 'Logs' refer to hidden reports/notes that the app sometimes makes when it encounters an error. |
| 🔴 | DelThemNow | Delete Them Now | "Them" refers to the logs. |
| 🟦3.5 | logsClearedMsg | Logs have been cleared. |  |
| 🟥 | Changelog | Changelog | A list of changes made to the app |
| 🔴 | HideOlderChanges | Hide Older Changes |  |
| 🔴 | ShowOlderChanges | Show Older Changes |  |
|  | changeLog | *See description* | This is a special object containing multiple properties. Each property is an array of strings in Markdown format. They describe the various changes to the app. |

---

## Concepts : concepts.tsx

| Label | Key | English Translation | Description (if needed) |
| --- | --- | --- | --- |
| 🔴 | Stop | Stop |  |
| 🔴 | Swadesh100 | Swadesh 100 | Name of a list |
| 🔴 | Swadesh207 | Swadesh 207 | Name of a list |
| 🔴 | SwadeshYakhontov | Swadesh-Yakhontov | Name of a list |
| 🔴 | SwadeshWoodward | Swadesh-Woodward | Name of a list |
| 🔴 | Dolgopolsky | Dolgopolsky | Name of a list |
| 🔴 | LeipzigJakarta | Leipzig-Jakarta | Name of a list |
| 🔴 | ASJP | ASJP | Name of a list |
| 🔴 | Landau200 | Landau 200 | Name of a list |
| 🟡 | addToColumnMsg | Your selected meanings will be added to the $t(common:Lexicon) under that column. |  |
| 🟦5 | tapToLinkMsg | Tap meanings you want to link, in the order you wish to link them. |  |
| 🟡 | meaningsStillSelected_other | You have {{count}} meanings still selected. Do you want to link them? | `{{count}}` will **NEVER** be 0 or 1. |
| 🟨 | StopLinking | Stop Linking? |  |
| 🔴 | YesSaveThem | Yes, Save Them | "Them" refers to the meanings being linked together |
| 🔴 | NoDiscardThem | No, Discard Them | "Them" refers to the meanings being linked together |
|  | Combination | Combination | The combination of meanings; used by `thingSaved` |
| 🟦2.5 | tapToSaveMsg | Tap meanings you want to save to $t(common:Lexicon) |  |
|  | SelectedMeanings_one | Selected meaning | Fills the `{{what}}` role in `saveToLexColumn` |
|  | SelectedMeanings_other | Selected meanings | As above, but for English plurals |
| 🟦3 | tapToUnlinkMsg | Tap combinations you want to delete, then tap the Unlink button again. |  |
| 🟨 | delMeanings_one | Delete {{count}} meaning? | English singular |
| 🟨 | delMeanings_other | Delete {{count}} meanings? | English plural |
| 🟡 | delMeaningsMessage_one | The selected meaning will be removed. $t(common:cannotUndo) | English singular |
| 🟡 | delMeaningsMessage_other | The selected meanings will be removed. $t(common:cannotUndo) | English plural |
| 🔴 | MyCombinations | My Combinations |  |
| 🔴 | AllMeanings | All Meanings | Used in `saveGeneralThings` |
| 🔴 | SelectedMeanings | the Selected Meanings | Used in `saveGeneralThings` |
| 🟥 | CurrentCombo | Current Combination: | *(presentation context)* |

### info

The `info` key has multiple subkeys. They are all arrays of strings in Markdown format.

#### info.basic

>\[  
>"Presented here are a number of lists of basic concepts. Each list was originaly created for the purposes of historical-comparative linguistics.",  
>"",  
>"They are included in this app because they may serve you as a useful source of meanings to start a conlang with. Remember: you can combine multiple meanings into a single word!",  
>\],

#### info.controlLexicon

>\[ "Use the \"lexicon\" button to quickly save meanings to the $t(common:Lexicon)." \],

#### info.controlJoin

>\[ "Use the \"join\" button to create compound meanings." \],

#### info.controlUnjoin

>\[ "Use the \"unjoin\" button to delete compound meanings." \],

#### info.theLists

>\[  
>"## Swadesh Lists",  
>"",  
>"Originally assembled by Morris Swadesh, this list of concepts was chosen for their universal, culturally independent availability in as many languages as possible. However, he relied more on his intuition than on a rigorous set of criteria. \*\*$t(Swadesh100)\*\* is his final list from 1971. The \*\*$t(Swadesh207)\*\* is adapted from his original list from 1952. \*\*$t(SwadeshYakhontov)\*\* is a subset of the 207 assembled by Sergei Yakhontov. And the \*\*$t(SwadeshWoodward) Sign List\*\* was assembled by James Woodward to take into account the ways sign languages behave.",  
>"",  
>"## $t(Dolgopolsky) List",  
>"",  
>"Compiled by Aharon Dolgopolsky in 1964, this lists the 15 lexical items that are the least likely to be replaced by other words as a language evolves. It was based on a study of 140 languages from across Eurasia, only.",  
>"",  
>"## $t(LeipzigJakarta) List",  
>"",  
>"Similar to the Dolgopolsky list, this is a list of words judged to be the most resistant to borrowing. Experts on 41 languages from across the world were given a uniform vocabulary list and asked to provide the words for each item in the language on which they were an expert, as well as information on how strong the evidence that each word was borrowed was. The 100 concepts that were found in most languages and were most resistant to borrowing formed the Leipzig-Jakarta list.",  
>"",  
>"## $t(ASJP) List",  
>"",  
>"The \*\*Automated Similarity Judgment Program\*\* is a collaborative project applying computational approaches to comparative linguistics using a database of word lists. It uses a 40-word list to evaluate the similarity of words with the same meaning from different languages.",  
>"",  
>"## $t(Landau200)",  
>"",  
>"The \*\*Basic 200 List\*\* is a subset of the \*\*Landau Core Vocabulary (LCV)\*\* developed by James Landau. It is Part I of the entire LCV. This list consists of 200 basic concepts that basically all anthropic cultures will have and have words for. This list makes many semantic distinctions that are not made in English (e.g \"leaf (on plant)\" vs. \"leaf (fallen off)\"), and some that are not made in any \"Standard Average European\" language (e.g. \"river (flowing into the sea)\" vs. \"river (flowing into another river)\").",  
>]

### The concepts list

You can find the master list of concepts in [CONCEPTS.md](CONCEPTS.md).

---
