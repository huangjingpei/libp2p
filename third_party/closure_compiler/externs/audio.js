// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// This file was generated by:
//   tools/json_schema_compiler/compiler.py.
// NOTE: The format of types has changed. 'FooType' is now
//   'chrome.audio.FooType'.
// Please run the closure compiler before committing changes.
// See https://chromium.googlesource.com/chromium/src/+/master/docs/closure_compilation.md

/** @fileoverview Externs generated from namespace: audio */

/** @const */
chrome.audio = {};

/**
 * @enum {string}
 * @see https://developer.chrome.com/extensions/audio#type-StreamType
 */
chrome.audio.StreamType = {
  INPUT: 'INPUT',
  OUTPUT: 'OUTPUT',
};

/**
 * @enum {string}
 * @see https://developer.chrome.com/extensions/audio#type-DeviceType
 */
chrome.audio.DeviceType = {
  HEADPHONE: 'HEADPHONE',
  MIC: 'MIC',
  USB: 'USB',
  BLUETOOTH: 'BLUETOOTH',
  HDMI: 'HDMI',
  INTERNAL_SPEAKER: 'INTERNAL_SPEAKER',
  INTERNAL_MIC: 'INTERNAL_MIC',
  FRONT_MIC: 'FRONT_MIC',
  REAR_MIC: 'REAR_MIC',
  KEYBOARD_MIC: 'KEYBOARD_MIC',
  HOTWORD: 'HOTWORD',
  LINEOUT: 'LINEOUT',
  POST_MIX_LOOPBACK: 'POST_MIX_LOOPBACK',
  POST_DSP_LOOPBACK: 'POST_DSP_LOOPBACK',
  ALSA_LOOPBACK: 'ALSA_LOOPBACK',
  OTHER: 'OTHER',
};

/**
 * @typedef {{
 *   id: string,
 *   name: string,
 *   isActive: boolean,
 *   isMuted: boolean,
 *   volume: number
 * }}
 * @see https://developer.chrome.com/extensions/audio#type-OutputDeviceInfo
 */
chrome.audio.OutputDeviceInfo;

/**
 * @typedef {{
 *   id: string,
 *   name: string,
 *   isActive: boolean,
 *   isMuted: boolean,
 *   gain: number
 * }}
 * @see https://developer.chrome.com/extensions/audio#type-InputDeviceInfo
 */
chrome.audio.InputDeviceInfo;

/**
 * @typedef {{
 *   id: string,
 *   streamType: !chrome.audio.StreamType,
 *   deviceType: !chrome.audio.DeviceType,
 *   displayName: string,
 *   deviceName: string,
 *   isActive: boolean,
 *   level: number,
 *   stableDeviceId: (string|undefined)
 * }}
 * @see https://developer.chrome.com/extensions/audio#type-AudioDeviceInfo
 */
chrome.audio.AudioDeviceInfo;

/**
 * @typedef {{
 *   streamTypes: (!Array<!chrome.audio.StreamType>|undefined),
 *   isActive: (boolean|undefined)
 * }}
 * @see https://developer.chrome.com/extensions/audio#type-DeviceFilter
 */
chrome.audio.DeviceFilter;

/**
 * @typedef {{
 *   isMuted: (boolean|undefined),
 *   volume: (number|undefined),
 *   gain: (number|undefined),
 *   level: (number|undefined)
 * }}
 * @see https://developer.chrome.com/extensions/audio#type-DeviceProperties
 */
chrome.audio.DeviceProperties;

/**
 * @typedef {{
 *   input: (!Array<string>|undefined),
 *   output: (!Array<string>|undefined)
 * }}
 * @see https://developer.chrome.com/extensions/audio#type-DeviceIdLists
 */
chrome.audio.DeviceIdLists;

/**
 * @typedef {{
 *   streamType: !chrome.audio.StreamType,
 *   isMuted: boolean
 * }}
 * @see https://developer.chrome.com/extensions/audio#type-MuteChangedEvent
 */
chrome.audio.MuteChangedEvent;

/**
 * @typedef {{
 *   deviceId: string,
 *   level: number
 * }}
 * @see https://developer.chrome.com/extensions/audio#type-LevelChangedEvent
 */
chrome.audio.LevelChangedEvent;

/**
 * Gets a list of audio devices filtered based on |filter|.
 * @param {?chrome.audio.DeviceFilter|undefined} filter Device properties by
 *     which to filter the list of returned     audio devices. If the filter is
 *     not set or set to <code>{}</code>,     returned device list will contain
 *     all available audio devices.
 * @param {function(!Array<!chrome.audio.AudioDeviceInfo>): void} callback
 *     Reports the requested list of audio devices.
 * @see https://developer.chrome.com/extensions/audio#method-getDevices
 */
chrome.audio.getDevices = function(filter, callback) {};

/**
 * Sets lists of active input and/or output devices.
 * @param {(!chrome.audio.DeviceIdLists|!Array<string>)} ids <p>Specifies IDs of
 *     devices that should be active. If either the     input or output list is
 *     not set, devices in that category are     unaffected.     </p>     <p>It
 *     is an error to pass in a non-existent device ID.</p>     <p><b>NOTE:</b>
 *     While the method signature allows device IDs to be     passed as a list
 *     of strings, this method of setting active devices     is deprecated and
 *     should not be relied upon to work. Please use     $(ref:DeviceIdLists)
 *     instead.     </p>
 * @param {function(): void} callback
 * @see https://developer.chrome.com/extensions/audio#method-setActiveDevices
 */
chrome.audio.setActiveDevices = function(ids, callback) {};

/**
 * Sets the properties for the input or output device.
 * @param {string} id
 * @param {!chrome.audio.DeviceProperties} properties
 * @param {function(): void} callback
 * @see https://developer.chrome.com/extensions/audio#method-setProperties
 */
chrome.audio.setProperties = function(id, properties, callback) {};

/**
 * Gets the system-wide mute state for the specified stream type.
 * @param {!chrome.audio.StreamType} streamType Stream type for which mute state
 *     should be fetched.
 * @param {function(boolean): void} callback Callback reporting whether mute is
 *     set or not for specified stream type.
 * @see https://developer.chrome.com/extensions/audio#method-getMute
 */
chrome.audio.getMute = function(streamType, callback) {};

/**
 * Sets mute state for a stream type. The mute state will apply to all audio
 * devices with the specified audio stream type.
 * @param {!chrome.audio.StreamType} streamType Stream type for which mute state
 *     should be set.
 * @param {boolean} isMuted New mute value.
 * @param {function(): void=} callback
 * @see https://developer.chrome.com/extensions/audio#method-setMute
 */
chrome.audio.setMute = function(streamType, isMuted, callback) {};

/**
 * Gets the information of all audio output and input devices.
 * @param {function(!Array<!chrome.audio.OutputDeviceInfo>, !Array<!chrome.audio.InputDeviceInfo>): void}
 *     callback
 * @deprecated Use $(ref:getDevices) instead.
 * @see https://developer.chrome.com/extensions/audio#method-getInfo
 */
chrome.audio.getInfo = function(callback) {};

/**
 * Fired when sound level changes for an active audio device.
 * @type {!ChromeEvent}
 * @see https://developer.chrome.com/extensions/audio#event-onLevelChanged
 */
chrome.audio.onLevelChanged;

/**
 * Fired when the mute state of the audio input or output changes. Note that
 * mute state is system-wide and the new value applies to every audio device
 * with specified stream type.
 * @type {!ChromeEvent}
 * @see https://developer.chrome.com/extensions/audio#event-onMuteChanged
 */
chrome.audio.onMuteChanged;

/**
 * Fired when audio devices change, either new devices being added, or existing
 * devices being removed.
 * @type {!ChromeEvent}
 * @see https://developer.chrome.com/extensions/audio#event-onDeviceListChanged
 */
chrome.audio.onDeviceListChanged;

/**
 * Fired when anything changes to the audio device configuration.
 * @type {!ChromeEvent}
 * @see https://developer.chrome.com/extensions/audio#event-onDeviceChanged
 */
chrome.audio.onDeviceChanged;
