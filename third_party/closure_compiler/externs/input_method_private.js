// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// This file was generated by:
//   tools/json_schema_compiler/compiler.py.
// NOTE: The format of types has changed. 'FooType' is now
//   'chrome.inputMethodPrivate.FooType'.
// Please run the closure compiler before committing changes.
// See https://chromium.googlesource.com/chromium/src/+/main/docs/closure_compilation.md

/** @fileoverview Externs generated from namespace: inputMethodPrivate */

/** @const */
chrome.inputMethodPrivate = {};

/**
 * @enum {string}
 */
chrome.inputMethodPrivate.MenuItemStyle = {
  CHECK: 'check',
  RADIO: 'radio',
  SEPARATOR: 'separator',
};

/**
 * A menu item used by an input method to interact with the user from the language menu.
 * @typedef {{
 *   id: string,
 *   label: (string|undefined),
 *   style: (!chrome.inputMethodPrivate.MenuItemStyle|undefined),
 *   visible: (boolean|undefined),
 *   checked: (boolean|undefined),
 *   enabled: (boolean|undefined)
 * }}
 */
chrome.inputMethodPrivate.MenuItem;

/**
 * @enum {string}
 */
chrome.inputMethodPrivate.UnderlineStyle = {
  UNDERLINE: 'underline',
  DOUBLE_UNDERLINE: 'doubleUnderline',
  NO_UNDERLINE: 'noUnderline',
};

/**
 * @enum {string}
 */
chrome.inputMethodPrivate.FocusReason = {
  MOUSE: 'mouse',
  TOUCH: 'touch',
  PEN: 'pen',
  OTHER: 'other',
};

/**
 * @enum {string}
 */
chrome.inputMethodPrivate.InputModeType = {
  NO_KEYBOARD: 'noKeyboard',
  TEXT: 'text',
  TEL: 'tel',
  URL: 'url',
  EMAIL: 'email',
  NUMERIC: 'numeric',
  DECIMAL: 'decimal',
  SEARCH: 'search',
};

/**
 * @enum {string}
 */
chrome.inputMethodPrivate.InputContextType = {
  TEXT: 'text',
  SEARCH: 'search',
  TEL: 'tel',
  URL: 'url',
  EMAIL: 'email',
  NUMBER: 'number',
  PASSWORD: 'password',
  NULL: 'null',
};

/**
 * @enum {string}
 */
chrome.inputMethodPrivate.AutoCapitalizeType = {
  OFF: 'off',
  CHARACTERS: 'characters',
  WORDS: 'words',
  SENTENCES: 'sentences',
};

/**
 * Describes an input Context
 * @typedef {{
 *   contextID: number,
 *   type: !chrome.inputMethodPrivate.InputContextType,
 *   mode: !chrome.inputMethodPrivate.InputModeType,
 *   autoCorrect: boolean,
 *   autoComplete: boolean,
 *   autoCapitalize: !chrome.inputMethodPrivate.AutoCapitalizeType,
 *   spellCheck: boolean,
 *   shouldDoLearning: boolean,
 *   focusReason: !chrome.inputMethodPrivate.FocusReason,
 *   hasBeenPassword: boolean,
 *   appKey: (string|undefined)
 * }}
 */
chrome.inputMethodPrivate.InputContext;

/**
 * User preference settings for a specific input method. Japanese input methods are not included because they are managed separately by Mozc module.
 * @typedef {{
 *   enableCompletion: (boolean|undefined),
 *   enableDoubleSpacePeriod: (boolean|undefined),
 *   enableGestureTyping: (boolean|undefined),
 *   enablePrediction: (boolean|undefined),
 *   enableSoundOnKeypress: (boolean|undefined),
 *   physicalKeyboardAutoCorrectionLevel: (number|undefined),
 *   physicalKeyboardEnableCapitalization: (boolean|undefined),
 *   virtualKeyboardAutoCorrectionLevel: (number|undefined),
 *   virtualKeyboardEnableCapitalization: (boolean|undefined),
 *   xkbLayout: (string|undefined),
 *   koreanEnableSyllableInput: (boolean|undefined),
 *   koreanKeyboardLayout: (string|undefined),
 *   koreanShowHangulCandidate: (boolean|undefined),
 *   pinyinChinesePunctuation: (boolean|undefined),
 *   pinyinDefaultChinese: (boolean|undefined),
 *   pinyinEnableFuzzy: (boolean|undefined),
 *   pinyinEnableLowerPaging: (boolean|undefined),
 *   pinyinEnableUpperPaging: (boolean|undefined),
 *   pinyinFullWidthCharacter: (boolean|undefined),
 *   pinyinFuzzyConfig: ({
 *     an_ang: (boolean|undefined),
 *     c_ch: (boolean|undefined),
 *     en_eng: (boolean|undefined),
 *     f_h: (boolean|undefined),
 *     ian_iang: (boolean|undefined),
 *     in_ing: (boolean|undefined),
 *     k_g: (boolean|undefined),
 *     l_n: (boolean|undefined),
 *     r_l: (boolean|undefined),
 *     s_sh: (boolean|undefined),
 *     uan_uang: (boolean|undefined),
 *     z_zh: (boolean|undefined)
 *   }|undefined),
 *   zhuyinKeyboardLayout: (string|undefined),
 *   zhuyinPageSize: (number|undefined),
 *   zhuyinSelectKeys: (string|undefined)
 * }}
 */
chrome.inputMethodPrivate.InputMethodSettings;

/**
 * Gets configurations for input methods.
 * @param {function({
 *   isPhysicalKeyboardAutocorrectEnabled: boolean,
 *   isImeMenuActivated: boolean
 * }): void} callback Callback which is called with the config object.
 */
chrome.inputMethodPrivate.getInputMethodConfig = function(callback) {};

/**
 * Gets all enabled input methods, sorted in ascending order of their localized
 * full display names, according to the lexicographical order defined by the
 * current system locale aka. display language.
 * @param {function(!Array<{
 *   id: string,
 *   name: string,
 *   indicator: string
 * }>): void} callback Callback which is called with the input method objects.
 */
chrome.inputMethodPrivate.getInputMethods = function(callback) {};

/**
 * Gets the current input method.
 * @param {function(string): void} callback Callback which is called with the
 *     current input method.
 */
chrome.inputMethodPrivate.getCurrentInputMethod = function(callback) {};

/**
 * Sets the current input method.
 * @param {string} inputMethodId The input method ID to be set as current input
 *     method.
 * @param {function(): void=} callback Callback which is called once the current
 *     input method is set. If unsuccessful $(ref:runtime.lastError) is set.
 */
chrome.inputMethodPrivate.setCurrentInputMethod = function(inputMethodId, callback) {};

/**
 * Fetches a list of all the words currently in the dictionary.
 * @param {function(!Array<string>): void} callback Callback which is called
 *     once the list of dictionary words are ready.
 */
chrome.inputMethodPrivate.fetchAllDictionaryWords = function(callback) {};

/**
 * Adds a single word to be stored in the dictionary.
 * @param {string} word A new word to add to the dictionary.
 * @param {function(): void=} callback Callback which is called once the word is
 *     added. If unsuccessful $(ref:runtime.lastError) is set.
 */
chrome.inputMethodPrivate.addWordToDictionary = function(word, callback) {};

/**
 * Gets whether the encrypt sync is enabled.
 * @param {function(boolean): void=} callback Callback which is called to
 *     provide the result.
 */
chrome.inputMethodPrivate.getEncryptSyncEnabled = function(callback) {};

/**
 * Sets the XKB layout for the given input method.
 * @param {string} xkb_name The XKB layout name.
 * @param {function(): void=} callback Callback which is called when the layout
 *     is set.
 */
chrome.inputMethodPrivate.setXkbLayout = function(xkb_name, callback) {};

/**
 * Commits the text currently being composed without moving the selected text
 * range. This is a no-op if the context is incorrect.
 * @param {{
 *   contextID: number
 * }} parameters
 * @param {function(): void=} callback Called when the operation completes.
 */
chrome.inputMethodPrivate.finishComposingText = function(parameters, callback) {};

/**
 * Sets the selection range
 * @param {{
 *   contextID: number,
 *   selectionStart: (number|undefined),
 *   selectionEnd: (number|undefined)
 * }} parameters
 * @param {function(boolean): void=} callback Called when the operation
 *     completes with a boolean indicating if the text was accepted or not.
 */
chrome.inputMethodPrivate.setSelectionRange = function(parameters, callback) {};

/**
 * Fires the input.ime.onMenuItemActivated event.
 * @param {string} engineID ID of the engine to use.
 * @param {string} name Name of the MenuItem which was activated
 */
chrome.inputMethodPrivate.notifyImeMenuItemActivated = function(engineID, name) {};

/**
 * Shows the input view window. If the input view window is already shown, this
 * function will do nothing.
 * @param {function(): void=} callback Called when the operation completes.
 */
chrome.inputMethodPrivate.showInputView = function(callback) {};

/**
 * Hides the input view window. If the input view window is already hidden, this
 * function will do nothing.
 * @param {function(): void=} callback Called when the operation completes.
 */
chrome.inputMethodPrivate.hideInputView = function(callback) {};

/**
 * Opens the options page for the input method extension. If the input method
 * does not have options, this function will do nothing.
 * @param {string} inputMethodId ID of the input method to open options for.
 */
chrome.inputMethodPrivate.openOptionsPage = function(inputMethodId) {};

/**
 * Gets the composition bounds
 * @param {function(!Array<{
 *   x: number,
 *   y: number,
 *   w: number,
 *   h: number
 * }>): void} callback Callback which is called to provide the result
 */
chrome.inputMethodPrivate.getCompositionBounds = function(callback) {};

/**
 * Gets the surrounding text of the current selection. WARNING: This could
 * return a stale cache that doesn't reflect reality, due to async between IMF
 * and TextInputClient.
 * @param {number} beforeLength The number of characters before the current
 *     selection.
 * @param {number} afterLength The number of characters after the current
 *     selection.
 * @param {function({
 *   before: string,
 *   selected: string,
 *   after: string
 * }): void} callback Callback which is called to provide the result
 */
chrome.inputMethodPrivate.getSurroundingText = function(beforeLength, afterLength, callback) {};

/**
 * Gets the current values of all settings for a particular input method
 * @param {string} engineID The ID of the engine (e.g. 'zh-t-i0-pinyin',
 *     'xkb:us::eng')
 * @param {function((!chrome.inputMethodPrivate.InputMethodSettings|undefined)): void}
 *     callback Callback to receive the settings
 */
chrome.inputMethodPrivate.getSettings = function(engineID, callback) {};

/**
 * Sets the value of all settings for a particular input method
 * @param {string} engineID The ID of the engine (e.g. 'zh-t-i0-pinyin',
 *     'xkb:us::eng')
 * @param {!chrome.inputMethodPrivate.InputMethodSettings} settings The settings
 *     to set
 * @param {function(): void=} callback Callback to notify that the new value has
 *     been set
 */
chrome.inputMethodPrivate.setSettings = function(engineID, settings, callback) {};

/**
 * (Deprecated) Set the composition range. If this extension does not own the
 * active IME, this fails. Use setComposingRange instead.
 * @param {{
 *   contextID: number,
 *   selectionBefore: number,
 *   selectionAfter: number,
 *   segments: (!Array<{
 *     start: number,
 *     end: number,
 *     style: !chrome.inputMethodPrivate.UnderlineStyle
 *   }>|undefined)
 * }} parameters
 * @param {function(boolean): void=} callback Called when the operation
 *     completes with a boolean indicating if the text was accepted or not. On
 *     failure, $(ref:runtime.lastError) is set.
 */
chrome.inputMethodPrivate.setCompositionRange = function(parameters, callback) {};

/**
 * Sets the composing range. If this extension does not own the active IME, this
 * fails.
 * @param {{
 *   contextID: number,
 *   start: number,
 *   end: number,
 *   segments: (!Array<{
 *     start: number,
 *     end: number,
 *     style: !chrome.inputMethodPrivate.UnderlineStyle
 *   }>|undefined)
 * }} parameters
 * @param {function(): void=} callback Called when the operation is complete. On
 *     failure, $(ref:runtime.lastError) is set.
 */
chrome.inputMethodPrivate.setComposingRange = function(parameters, callback) {};

/**
 * Get the autocorrected word's bounds. Returns an empty range if there is no
 * autocorrected word.
 * @param {{
 *   contextID: number
 * }} parameters
 * @param {function({
 *   start: number,
 *   end: number
 * }): void} callback Called with the bounds of the autocorrect word when the
 *     operation completes. On failure, $(ref:runtime.lastError) is set.
 */
chrome.inputMethodPrivate.getAutocorrectRange = function(parameters, callback) {};

/**
 * Get the screen coordinates of the autocorrected word's bounds.
 * @param {{
 *   contextID: number
 * }} parameters
 * @param {function({
 *   x: number,
 *   y: number,
 *   width: number,
 *   height: number
 * }): void} callback Called with screen coordinates of the autocorrect word
 *     when the operation completes. On failure, $(ref:runtime.lastError) is
 *     set.
 */
chrome.inputMethodPrivate.getAutocorrectCharacterBounds = function(parameters, callback) {};

/**
 * Set the autocorrect range and autocorrect word. If this extension does not
 * own the active IME, this fails.
 * @param {{
 *   contextID: number,
 *   autocorrectString: string,
 *   selectionStart: number,
 *   selectionEnd: number
 * }} parameters
 * @param {function(): void=} callback Called when the operation completes. On
 *     failure, chrome.runtime.lastError is set.
 */
chrome.inputMethodPrivate.setAutocorrectRange = function(parameters, callback) {};

/**
 * Resets the current engine to its initial state. Fires an OnReset event.
 */
chrome.inputMethodPrivate.reset = function() {};

/**
 * Called after a word has been autocorrected to show some UI for autocorrect.
 * @param {{
 *   contextID: number,
 *   typedWord: string,
 *   correctedWord: string,
 *   startIndex: number
 * }} parameters
 */
chrome.inputMethodPrivate.onAutocorrect = function(parameters) {};

/**
 * Get the bounds of the current text field
 * @param {{
 *   contextID: number
 * }} parameters
 * @param {function({
 *   x: number,
 *   y: number,
 *   width: number,
 *   height: number
 * }): void} callback Called with screen coordinates of the text field when the
 *     operation completes. On failure, $(ref:runtime.lastError) is set.
 */
chrome.inputMethodPrivate.getTextFieldBounds = function(
    parameters, callback) {};

/**
 * Fired when the input method is changed.
 * @type {!ChromeEvent}
 */
chrome.inputMethodPrivate.onChanged;

/**
 * Fired when the composition bounds or cursor bounds are changed.
 * @type {!ChromeEvent}
 */
chrome.inputMethodPrivate.onCompositionBoundsChanged;

/**
 * Fired when the custom spelling dictionary is loaded.
 * @type {!ChromeEvent}
 */
chrome.inputMethodPrivate.onDictionaryLoaded;

/**
 * Fired when words are added or removed from the custom spelling dictionary.
 * @type {!ChromeEvent}
 */
chrome.inputMethodPrivate.onDictionaryChanged;

/**
 * Fired when the IME menu is activated or deactivated.
 * @type {!ChromeEvent}
 */
chrome.inputMethodPrivate.onImeMenuActivationChanged;

/**
 * Fired when the input method or the list of active input method IDs is
 * changed.
 * @type {!ChromeEvent}
 */
chrome.inputMethodPrivate.onImeMenuListChanged;

/**
 * Fired when the input.ime.setMenuItems or input.ime.updateMenuItems API is
 * called.
 * @type {!ChromeEvent}
 */
chrome.inputMethodPrivate.onImeMenuItemsChanged;

/**
 * This event is sent when focus enters a text box. It is sent to all extensions
 * that are listening to this event, and enabled by the user.
 * @type {!ChromeEvent}
 */
chrome.inputMethodPrivate.onFocus;

/**
 * This event is sent when a touch occurs in a text field
 * @type {!ChromeEvent}
 */
chrome.inputMethodPrivate.onTouch;

/**
 * This event is sent when the settings for any input method changed. It is sent
 * to all extensions that are listening to this event, and enabled by the user.
 * @type {!ChromeEvent}
 */
chrome.inputMethodPrivate.onSettingsChanged;

/**
 * This event is sent when the screen is being mirrored or the desktop is being
 * cast.
 * @type {!ChromeEvent}
 */
chrome.inputMethodPrivate.onScreenProjectionChanged;

/**
 * This event is sent when a new set of suggestions has been generated
 * @type {!ChromeEvent}
 */
chrome.inputMethodPrivate.onSuggestionsChanged;

/**
 * This event is sent when input method options are changed.
 * @type {!ChromeEvent}
 */
chrome.inputMethodPrivate.onInputMethodOptionsChanged;
