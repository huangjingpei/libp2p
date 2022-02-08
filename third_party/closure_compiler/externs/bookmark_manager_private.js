// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// This file was generated by:
//   tools/json_schema_compiler/compiler.py.
// NOTE: The format of types has changed. 'FooType' is now
//   'chrome.bookmarkManagerPrivate.FooType'.
// Please run the closure compiler before committing changes.
// See https://chromium.googlesource.com/chromium/src/+/master/docs/closure_compilation.md

// IMPORTANT NOTE: Work-around for crbug.com/543822
// s/chrome.bookmarkManagerPrivate.bookmarks.BookmarkTreeNode/chrome.bookmarks.BookmarkTreeNode/

/** @fileoverview Externs generated from namespace: bookmarkManagerPrivate */

/** @const */
chrome.bookmarkManagerPrivate = {};

/**
 * @typedef {{
 *   id: (string|undefined),
 *   parentId: (string|undefined),
 *   title: string,
 *   url: (string|undefined),
 *   children: !Array<!chrome.bookmarkManagerPrivate.BookmarkNodeDataElement>
 * }}
 */
chrome.bookmarkManagerPrivate.BookmarkNodeDataElement;

/**
 * Information about the drag and drop data for use with drag and drop events.
 * @typedef {{
 *   sameProfile: boolean,
 *   elements: !Array<!chrome.bookmarkManagerPrivate.BookmarkNodeDataElement>
 * }}
 */
chrome.bookmarkManagerPrivate.BookmarkNodeData;

/**
 * Copies the given bookmarks into the clipboard.
 * @param {!Array<string>} idList An array of string-valued ids
 * @param {function(): void=} callback
 */
chrome.bookmarkManagerPrivate.copy = function(idList, callback) {};

/**
 * Cuts the given bookmarks into the clipboard.
 * @param {!Array<string>} idList An array of string-valued ids
 * @param {function(): void=} callback
 */
chrome.bookmarkManagerPrivate.cut = function(idList, callback) {};

/**
 * Pastes bookmarks from the clipboard into the parent folder after the last
 * selected node.
 * @param {string} parentId
 * @param {!Array<string>=} selectedIdList An array of string-valued ids for
 *     selected bookmarks.
 * @param {function(): void=} callback
 */
chrome.bookmarkManagerPrivate.paste = function(parentId, selectedIdList, callback) {};

/**
 * Whether there are any bookmarks that can be pasted.
 * @param {string} parentId The ID of the folder to paste into.
 * @param {function(boolean): void} callback
 */
chrome.bookmarkManagerPrivate.canPaste = function(parentId, callback) {};

/**
 * Sorts the children of a given folder.
 * @param {string} parentId The ID of the folder to sort the children of.
 */
chrome.bookmarkManagerPrivate.sortChildren = function(parentId) {};

/**
 * Begins dragging a set of bookmarks.
 * @param {!Array<string>} idList An array of string-valued ids.
 * @param {number} dragNodeIndex The index of the dragged node in |idList|
 * @param {boolean} isFromTouch True if the drag was initiated from touch.
 * @param {number} x The clientX of the dragStart event
 * @param {number} y The clientY of the dragStart event
 */
chrome.bookmarkManagerPrivate.startDrag = function(idList, dragNodeIndex, isFromTouch, x, y) {};

/**
 * Performs the drop action of the drag and drop session.
 * @param {string} parentId The ID of the folder that the drop was made.
 * @param {number=} index The index of the position to drop at. If left out the
 *     dropped items will be placed at the end of the existing children.
 * @param {function(): void=} callback
 */
chrome.bookmarkManagerPrivate.drop = function(parentId, index, callback) {};

/**
 * Retrieves a bookmark hierarchy from the given node.  If the node id is empty,
 * it is the full tree.  If foldersOnly is true, it will only return folders,
 * not actual bookmarks.
 * @param {string} id ID of the root of the tree to pull.  If empty, the entire
 *     tree will be returned.
 * @param {boolean} foldersOnly Pass true to only return folders.
 * @param {function(!Array<!chrome.bookmarks.BookmarkTreeNode>): void}
 *     callback
 */
chrome.bookmarkManagerPrivate.getSubtree = function(id, foldersOnly, callback) {};

/**
 * Recursively removes list of bookmarks nodes.
 * @param {!Array<string>} idList An array of string-valued ids.
 * @param {function(): void=} callback
 */
chrome.bookmarkManagerPrivate.removeTrees = function(idList, callback) {};

/**
 * Performs an undo of the last change to the bookmark model.
 */
chrome.bookmarkManagerPrivate.undo = function() {};

/**
 * Performs a redo of last undone change to the bookmark model.
 */
chrome.bookmarkManagerPrivate.redo = function() {};

/**
 * Fired when dragging bookmarks over the document.
 * @type {!ChromeEvent}
 */
chrome.bookmarkManagerPrivate.onDragEnter;

/**
 * Fired when the drag and drop leaves the document.
 * @type {!ChromeEvent}
 */
chrome.bookmarkManagerPrivate.onDragLeave;

/**
 * Fired when the user drops bookmarks on the document.
 * @type {!ChromeEvent}
 */
chrome.bookmarkManagerPrivate.onDrop;
