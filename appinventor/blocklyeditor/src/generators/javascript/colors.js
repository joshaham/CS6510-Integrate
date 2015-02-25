// -*- mode: java; c-basic-offset: 2; -*-
// Copyright 2012 Massachusetts Institute of Technology. All rights reserved.

/**
 * @license
 * @fileoverview Color blocks yail generators for Blockly, modified for MIT App Inventor.
 * @author mckinney@mit.edu (Andrew F. McKinney)
 */

'use strict';

goog.provide('Blockly.JavaScript.color');

Blockly.JavaScript.color = function() {
  // Convert hex value to numeric value
  var code = -1 * (window.Math.pow(16,6) - window.parseInt("0x" + this.getFieldValue('COLOR').substr(1)));
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['color_black'] = function() {
  return Blockly.JavaScript.color.call(this);
};

Blockly.JavaScript['color_blue'] = function() {
  return Blockly.JavaScript.color.call(this);
};

Blockly.JavaScript['color_cyan'] = function() {
  return Blockly.JavaScript.color.call(this);
};

Blockly.JavaScript['color_dark_gray'] = function() {
  return Blockly.JavaScript.color.call(this);
};

Blockly.JavaScript['color_gray'] = function() {
  return Blockly.JavaScript.color.call(this);
};

Blockly.JavaScript['color_green'] = function() {
  return Blockly.JavaScript.color.call(this);
};

Blockly.JavaScript['color_light_gray'] = function() {
  return Blockly.JavaScript.color.call(this);
};

Blockly.JavaScript['color_magenta'] = function() {
  return Blockly.JavaScript.color.call(this);
};

Blockly.JavaScript['color_pink'] = function() {
  return Blockly.JavaScript.color.call(this);
};

Blockly.JavaScript['color_red'] = function() {
  return Blockly.JavaScript.color.call(this);
};

Blockly.JavaScript['color_white'] = function() {
  return Blockly.JavaScript.color.call(this);
};

Blockly.JavaScript['color_orange'] = function() {
  return Blockly.JavaScript.color.call(this);
};

Blockly.JavaScript['color_yellow'] = function() {
  return Blockly.JavaScript.color.call(this);
};

Blockly.JavaScript['color_make_color'] = function() {
  var blackList = "(call-yail-primitive make-yail-list (*list-for-runtime* 0 0 0)  '( any any any)  \"make a list\")";
  var argument0 = Blockly.JavaScript.valueToCode(this, 'COLORLIST', Blockly.JavaScript.ORDER_NONE) || blackList;
  var code = Blockly.JavaScript.YAIL_CALL_YAIL_PRIMITIVE + "make-color" + Blockly.JavaScript.YAIL_SPACER;
  code += Blockly.JavaScript.YAIL_OPEN_COMBINATION
      + Blockly.JavaScript.YAIL_LIST_CONSTRUCTOR + Blockly.JavaScript.YAIL_SPACER
      + argument0 + Blockly.JavaScript.YAIL_CLOSE_COMBINATION;
  code += Blockly.JavaScript.YAIL_SPACER + Blockly.JavaScript.YAIL_QUOTE
      + Blockly.JavaScript.YAIL_OPEN_COMBINATION + "list"
      + Blockly.JavaScript.YAIL_CLOSE_COMBINATION + Blockly.JavaScript.YAIL_SPACER;
  code += Blockly.JavaScript.YAIL_DOUBLE_QUOTE + "make-color"
      + Blockly.JavaScript.YAIL_DOUBLE_QUOTE + Blockly.JavaScript.YAIL_CLOSE_COMBINATION;
  return [ code, Blockly.JavaScript.ORDER_ATOMIC ];
};

Blockly.JavaScript['color_split_color'] = function() {
  var argument0 = Blockly.JavaScript.valueToCode(this, 'COLOR', Blockly.JavaScript.ORDER_NONE) || -1;
  var code = Blockly.JavaScript.YAIL_CALL_YAIL_PRIMITIVE + "split-color" + Blockly.JavaScript.YAIL_SPACER;
  code += Blockly.JavaScript.YAIL_OPEN_COMBINATION
      + Blockly.JavaScript.YAIL_LIST_CONSTRUCTOR + Blockly.JavaScript.YAIL_SPACER
      + argument0 + Blockly.JavaScript.YAIL_CLOSE_COMBINATION;
  code += Blockly.JavaScript.YAIL_SPACER + Blockly.JavaScript.YAIL_QUOTE
      + Blockly.JavaScript.YAIL_OPEN_COMBINATION + "number"
      + Blockly.JavaScript.YAIL_CLOSE_COMBINATION + Blockly.JavaScript.YAIL_SPACER;
  code += Blockly.JavaScript.YAIL_DOUBLE_QUOTE + "split-color"
      + Blockly.JavaScript.YAIL_DOUBLE_QUOTE + Blockly.JavaScript.YAIL_CLOSE_COMBINATION;
  return [ code, Blockly.JavaScript.ORDER_ATOMIC ];
};
