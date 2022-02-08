// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// This file was generated by:
//   tools/json_schema_compiler/compiler.py.
// NOTE: The format of types has changed. 'FooType' is now
//   'chrome.brailleDisplayPrivate.FooType'.
// Please run the closure compiler before committing changes.
// See https://chromium.googlesource.com/chromium/src/+/master/docs/closure_compilation.md

/** @fileoverview Externs generated from namespace: brailleDisplayPrivate */

/** @const */
chrome.brailleDisplayPrivate = {};

/**
 * @enum {string}
 */
chrome.brailleDisplayPrivate.KeyCommand = {
  LINE_UP: 'line_up',
  LINE_DOWN: 'line_down',
  PAN_LEFT: 'pan_left',
  PAN_RIGHT: 'pan_right',
  TOP: 'top',
  BOTTOM: 'bottom',
  ROUTING: 'routing',
  SECONDARY_ROUTING: 'secondary_routing',
  DOTS: 'dots',
  CHORD: 'chord',
  STANDARD_KEY: 'standard_key',
};

/**
 * @typedef {{
 *   command: !chrome.brailleDisplayPrivate.KeyCommand,
 *   displayPosition: (number|undefined),
 *   brailleDots: (number|undefined),
 *   standardKeyCode: (string|undefined),
 *   standardKeyChar: (string|undefined),
 *   spaceKey: (boolean|undefined),
 *   altKey: (boolean|undefined),
 *   shiftKey: (boolean|undefined),
 *   ctrlKey: (boolean|undefined)
 * }}
 */
chrome.brailleDisplayPrivate.KeyEvent;

/**
 * @typedef {{
 *   available: boolean,
 *   textRowCount: (number|undefined),
 *   textColumnCount: (number|undefined),
 *   cellSize: (number|undefined)
 * }}
 */
chrome.brailleDisplayPrivate.DisplayState;

/**
 * Gets the current display state.
 * @param {function(!chrome.brailleDisplayPrivate.DisplayState): void} callback
 */
chrome.brailleDisplayPrivate.getDisplayState = function(callback) {};

/**
 * Write the given dot patterns to the display.  The buffer contains one byte
 * for each braille cell on the display, starting from the leftmost cell. Each
 * byte contains a bit pattern indicating which dots should be raised in the
 * corresponding cell with the low-order bit representing dot 1 and so on until
 * bit 7 which corresponds to dot 8.  If the number of bytes in the buffer is
 * not equal to the display size, the buffer will either be clipped or padded
 * with blank cells on the right. The buffer is a 2D array compressed into 1D.
 * The |columns| and |rows| parameters give the original 2D dimensions of the
 * buffer. To access an element cells[r][c], simply access cells[r * columns +
 * c].
 * @param {ArrayBuffer} cells
 * @param {number} columns
 * @param {number} rows
 */
chrome.brailleDisplayPrivate.writeDots = function(cells, columns, rows) {};

/**
 * Updates the single user-preferred braille device with the given bluetooth
 * device address and starts or restarts the Brltty daemon.
 * @param {string} address
 */
chrome.brailleDisplayPrivate.updateBluetoothBrailleDisplayAddress = function(address) {};

/**
 * Fired when a braille display is connected or disconnected.
 * @type {!ChromeEvent}
 */
chrome.brailleDisplayPrivate.onDisplayStateChanged;

/**
 * Fired when an input event is received from the display.
 * @type {!ChromeEvent}
 */
chrome.brailleDisplayPrivate.onKeyEvent;
