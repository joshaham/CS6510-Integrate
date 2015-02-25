// -*- mode: java; c-basic-offset: 2; -*-
// Copyright 2012 Massachusetts Institute of Technology. All rights reserved.

/**
 * @license
 * @fileoverview Color blocks yail generators for Blockly, modified for MIT App Inventor.
 * @author mckinney@mit.edu (Andrew F. McKinney)
 */

'use strict';

goog.provide('Blockly.JavaScript.text');

Blockly.JavaScript['text'] = function() {
  // Text value.
  var code = Blockly.JavaScript.quote_(this.getFieldValue('TEXT'));
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['text_join'] = function() {
  // Create a string made up of elements of any type..
  var code = Blockly.JavaScript.YAIL_CALL_YAIL_PRIMITIVE + "string-append"
      + Blockly.JavaScript.YAIL_SPACER;
  code = code + Blockly.JavaScript.YAIL_OPEN_COMBINATION
      + Blockly.JavaScript.YAIL_LIST_CONSTRUCTOR + Blockly.JavaScript.YAIL_SPACER;

  for(var i=0;i<this.itemCount_;i++) {
    var argument = Blockly.JavaScript.valueToCode(this, 'ADD' + i, Blockly.JavaScript.ORDER_NONE) || "\"\"";
    code += argument + Blockly.JavaScript.YAIL_SPACER;
  }
  code += Blockly.JavaScript.YAIL_CLOSE_COMBINATION;
  code = code + Blockly.JavaScript.YAIL_SPACER + Blockly.JavaScript.YAIL_QUOTE
      + Blockly.JavaScript.YAIL_OPEN_COMBINATION;
  for(var i=0;i<this.itemCount_;i++) {
    code += "text" + Blockly.JavaScript.YAIL_SPACER;
  }
  code += Blockly.JavaScript.YAIL_CLOSE_COMBINATION + Blockly.JavaScript.YAIL_SPACER;
  code = code + Blockly.JavaScript.YAIL_DOUBLE_QUOTE + "join"
      + Blockly.JavaScript.YAIL_DOUBLE_QUOTE + Blockly.JavaScript.YAIL_CLOSE_COMBINATION;
  return [ code, Blockly.JavaScript.ORDER_ATOMIC ];
};

Blockly.JavaScript['text_length'] = function() {
  // // String length
  var argument = Blockly.JavaScript.valueToCode(this, 'VALUE', Blockly.JavaScript.ORDER_NONE) || "\"\"";
  var code = Blockly.JavaScript.YAIL_CALL_YAIL_PRIMITIVE + "string-length"
      + Blockly.JavaScript.YAIL_SPACER;
  code = code + Blockly.JavaScript.YAIL_OPEN_COMBINATION
      + Blockly.JavaScript.YAIL_LIST_CONSTRUCTOR + Blockly.JavaScript.YAIL_SPACER
      + argument + Blockly.JavaScript.YAIL_CLOSE_COMBINATION;
  code = code + Blockly.JavaScript.YAIL_SPACER + Blockly.JavaScript.YAIL_QUOTE
      + Blockly.JavaScript.YAIL_OPEN_COMBINATION + "text"
      + Blockly.JavaScript.YAIL_CLOSE_COMBINATION + Blockly.JavaScript.YAIL_SPACER;
  code = code + Blockly.JavaScript.YAIL_DOUBLE_QUOTE + "length"
      + Blockly.JavaScript.YAIL_DOUBLE_QUOTE + Blockly.JavaScript.YAIL_CLOSE_COMBINATION;
  return [ code, Blockly.JavaScript.ORDER_ATOMIC ];
};

Blockly.JavaScript['text_isEmpty'] = function() {
  // Is the string null?
  var argument = Blockly.JavaScript.valueToCode(this, 'VALUE', Blockly.JavaScript.ORDER_NONE) || "\"\"";
  var code = Blockly.JavaScript.YAIL_CALL_YAIL_PRIMITIVE + "string-empty?"
      + Blockly.JavaScript.YAIL_SPACER;
  code = code + Blockly.JavaScript.YAIL_OPEN_COMBINATION
      + Blockly.JavaScript.YAIL_LIST_CONSTRUCTOR + Blockly.JavaScript.YAIL_SPACER
      + argument + Blockly.JavaScript.YAIL_CLOSE_COMBINATION;
  code = code + Blockly.JavaScript.YAIL_SPACER + Blockly.JavaScript.YAIL_QUOTE
      + Blockly.JavaScript.YAIL_OPEN_COMBINATION + "text"
      + Blockly.JavaScript.YAIL_CLOSE_COMBINATION + Blockly.JavaScript.YAIL_SPACER;
  code = code + Blockly.JavaScript.YAIL_DOUBLE_QUOTE + "is text empty?"
      + Blockly.JavaScript.YAIL_DOUBLE_QUOTE + Blockly.JavaScript.YAIL_CLOSE_COMBINATION;
  return [ code, Blockly.JavaScript.ORDER_ATOMIC ];
};

Blockly.JavaScript['text_compare'] = function() {
  // Basic compare operators
  var mode = this.getFieldValue('OP');
  var prim = Blockly.JavaScript.text_compare.OPERATORS[mode];
  var operator1 = prim[0];
  var operator2 = prim[1];
  var order = prim[2];
  var argument0 = Blockly.JavaScript.valueToCode(this, 'TEXT1', order) || "\"\"";
  var argument1 = Blockly.JavaScript.valueToCode(this, 'TEXT2', order) || "\"\"";
  var code = Blockly.JavaScript.YAIL_CALL_YAIL_PRIMITIVE + operator1
      + Blockly.JavaScript.YAIL_SPACER;
  code = code + Blockly.JavaScript.YAIL_OPEN_COMBINATION
      + Blockly.JavaScript.YAIL_LIST_CONSTRUCTOR + Blockly.JavaScript.YAIL_SPACER
      + argument0 + Blockly.JavaScript.YAIL_SPACER + argument1
      + Blockly.JavaScript.YAIL_CLOSE_COMBINATION;
  code = code + Blockly.JavaScript.YAIL_SPACER + Blockly.JavaScript.YAIL_QUOTE
      + Blockly.JavaScript.YAIL_OPEN_COMBINATION + "text text"
      + Blockly.JavaScript.YAIL_CLOSE_COMBINATION + Blockly.JavaScript.YAIL_SPACER;
  code = code + Blockly.JavaScript.YAIL_DOUBLE_QUOTE + operator2
      + Blockly.JavaScript.YAIL_DOUBLE_QUOTE + Blockly.JavaScript.YAIL_CLOSE_COMBINATION;
  return [ code, Blockly.JavaScript.ORDER_ATOMIC ];
};

Blockly.JavaScript['text_compare'].OPERATORS = {
  LT: ['string<?', 'text<', Blockly.JavaScript.ORDER_NONE],
  GT: ['string>?', 'text>', Blockly.JavaScript.ORDER_NONE],
  EQUAL: ['string=?', 'text=', Blockly.JavaScript.ORDER_NONE]
};

Blockly.JavaScript['text_trim'] = function() {
  // String trim
  var argument = Blockly.JavaScript.valueToCode(this, 'TEXT', Blockly.JavaScript.ORDER_NONE) || "\"\"";
  var code = Blockly.JavaScript.YAIL_CALL_YAIL_PRIMITIVE + "string-trim"
      + Blockly.JavaScript.YAIL_SPACER;
  code = code + Blockly.JavaScript.YAIL_OPEN_COMBINATION
      + Blockly.JavaScript.YAIL_LIST_CONSTRUCTOR + Blockly.JavaScript.YAIL_SPACER
      + argument + Blockly.JavaScript.YAIL_CLOSE_COMBINATION;
  code = code + Blockly.JavaScript.YAIL_SPACER + Blockly.JavaScript.YAIL_QUOTE
      + Blockly.JavaScript.YAIL_OPEN_COMBINATION + "text"
      + Blockly.JavaScript.YAIL_CLOSE_COMBINATION + Blockly.JavaScript.YAIL_SPACER;
  code = code + Blockly.JavaScript.YAIL_DOUBLE_QUOTE + "trim"
      + Blockly.JavaScript.YAIL_DOUBLE_QUOTE + Blockly.JavaScript.YAIL_CLOSE_COMBINATION;
  return [ code, Blockly.JavaScript.ORDER_ATOMIC ];
};

Blockly.JavaScript['text_changeCase'] = function() {
  // String change case.
  var mode = this.getFieldValue('OP');
  var tuple = Blockly.JavaScript.text_changeCase.OPERATORS[mode];
  var operator1 = tuple[0];
  var operator2 = tuple[1];
  var order = tuple[2];
  var argument = Blockly.JavaScript.valueToCode(this, 'TEXT', order) || "\"\"";
  var code = Blockly.JavaScript.YAIL_CALL_YAIL_PRIMITIVE + operator1
      + Blockly.JavaScript.YAIL_SPACER;
  code = code + Blockly.JavaScript.YAIL_OPEN_COMBINATION
      + Blockly.JavaScript.YAIL_LIST_CONSTRUCTOR + Blockly.JavaScript.YAIL_SPACER
      + argument + Blockly.JavaScript.YAIL_CLOSE_COMBINATION;
  code = code + Blockly.JavaScript.YAIL_SPACER + Blockly.JavaScript.YAIL_QUOTE
      + Blockly.JavaScript.YAIL_OPEN_COMBINATION + "text"
      + Blockly.JavaScript.YAIL_CLOSE_COMBINATION + Blockly.JavaScript.YAIL_SPACER;
  code = code + Blockly.JavaScript.YAIL_DOUBLE_QUOTE + operator2
      + Blockly.JavaScript.YAIL_DOUBLE_QUOTE + Blockly.JavaScript.YAIL_CLOSE_COMBINATION;
  return [ code, Blockly.JavaScript.ORDER_ATOMIC ];
};

Blockly.JavaScript['text_changeCase'].OPERATORS = {
  UPCASE: ['string-to-upper-case', 'upcase', Blockly.JavaScript.ORDER_NONE],
  DOWNCASE: ['string-to-lower-case', 'downcase', Blockly.JavaScript.ORDER_NONE]
};

Blockly.JavaScript.text_starts_at = function() {
  // String starts at
  var argument0 = Blockly.JavaScript.valueToCode(this, 'TEXT', Blockly.JavaScript.ORDER_NONE) || "\"\"";
  var argument1 = Blockly.JavaScript.valueToCode(this, 'PIECE', Blockly.JavaScript.ORDER_NONE) || "\"\"";
  var code = Blockly.JavaScript.YAIL_CALL_YAIL_PRIMITIVE + "string-starts-at"
      + Blockly.JavaScript.YAIL_SPACER;
  code = code + Blockly.JavaScript.YAIL_OPEN_COMBINATION
      + Blockly.JavaScript.YAIL_LIST_CONSTRUCTOR + Blockly.JavaScript.YAIL_SPACER
      + argument0 + Blockly.JavaScript.YAIL_SPACER + argument1
      + Blockly.JavaScript.YAIL_CLOSE_COMBINATION;
  code = code + Blockly.JavaScript.YAIL_SPACER + Blockly.JavaScript.YAIL_QUOTE
      + Blockly.JavaScript.YAIL_OPEN_COMBINATION + "text text"
      + Blockly.JavaScript.YAIL_CLOSE_COMBINATION + Blockly.JavaScript.YAIL_SPACER;
  code = code + Blockly.JavaScript.YAIL_DOUBLE_QUOTE + "starts at"
      + Blockly.JavaScript.YAIL_DOUBLE_QUOTE + Blockly.JavaScript.YAIL_CLOSE_COMBINATION;
  return [ code, Blockly.JavaScript.ORDER_ATOMIC ];
};

Blockly.JavaScript['text_contains'] = function() {
  // String contains.
  var argument0 = Blockly.JavaScript.valueToCode(this, 'TEXT', Blockly.JavaScript.ORDER_NONE) || "\"\"";
  var argument1 = Blockly.JavaScript.valueToCode(this, 'PIECE', Blockly.JavaScript.ORDER_NONE) || "\"\"";
  var code = Blockly.JavaScript.YAIL_CALL_YAIL_PRIMITIVE + "string-contains"
      + Blockly.JavaScript.YAIL_SPACER;
  code = code + Blockly.JavaScript.YAIL_OPEN_COMBINATION
      + Blockly.JavaScript.YAIL_LIST_CONSTRUCTOR + Blockly.JavaScript.YAIL_SPACER
      + argument0 + Blockly.JavaScript.YAIL_SPACER + argument1
      + Blockly.JavaScript.YAIL_CLOSE_COMBINATION;
  code = code + Blockly.JavaScript.YAIL_SPACER + Blockly.JavaScript.YAIL_QUOTE
      + Blockly.JavaScript.YAIL_OPEN_COMBINATION + "text text"
      + Blockly.JavaScript.YAIL_CLOSE_COMBINATION + Blockly.JavaScript.YAIL_SPACER;
  code = code + Blockly.JavaScript.YAIL_DOUBLE_QUOTE + "contains"
      + Blockly.JavaScript.YAIL_DOUBLE_QUOTE + Blockly.JavaScript.YAIL_CLOSE_COMBINATION;
  return [ code, Blockly.JavaScript.ORDER_ATOMIC ];
};

Blockly.JavaScript['text_split'] = function() {
  // String split operations.
  // Note that the type of arg2 might be text or list, depending on the dropdown selection
  var mode = this.getFieldValue('OP');
  var tuple = Blockly.JavaScript.text_split.OPERATORS[mode];
  var operator1 = tuple[0];
  var operator2 = tuple[1];
  var order = tuple[2];
  var arg2Type = tuple[3];
  var argument0 = Blockly.JavaScript.valueToCode(this, 'TEXT', Blockly.JavaScript.ORDER_NONE) || "\"\"";
  var argument1 = Blockly.JavaScript.valueToCode(this, 'AT', Blockly.JavaScript.ORDER_NONE) || 1;
  var code = Blockly.JavaScript.YAIL_CALL_YAIL_PRIMITIVE + operator1
      + Blockly.JavaScript.YAIL_SPACER;
  code = code + Blockly.JavaScript.YAIL_OPEN_COMBINATION
      + Blockly.JavaScript.YAIL_LIST_CONSTRUCTOR + Blockly.JavaScript.YAIL_SPACER
      + argument0 + Blockly.JavaScript.YAIL_SPACER + argument1
      + Blockly.JavaScript.YAIL_CLOSE_COMBINATION;
  code = code + Blockly.JavaScript.YAIL_SPACER + Blockly.JavaScript.YAIL_QUOTE
      + Blockly.JavaScript.YAIL_OPEN_COMBINATION + "text" +  Blockly.JavaScript.YAIL_SPACER + arg2Type
      + Blockly.JavaScript.YAIL_CLOSE_COMBINATION + Blockly.JavaScript.YAIL_SPACER;
  code = code + Blockly.JavaScript.YAIL_DOUBLE_QUOTE + operator2
      + Blockly.JavaScript.YAIL_DOUBLE_QUOTE + Blockly.JavaScript.YAIL_CLOSE_COMBINATION;
  return [ code, order ];
};

Blockly.JavaScript['text_split'].OPERATORS = {
  SPLITATFIRST : [ 'string-split-at-first', 'split at first',
      Blockly.JavaScript.ORDER_ATOMIC, 'text' ],
  SPLITATFIRSTOFANY : [ 'string-split-at-first-of-any',
      'split at first of any', Blockly.JavaScript.ORDER_ATOMIC, 'list' ],
  SPLIT : [ 'string-split', 'split', Blockly.JavaScript.ORDER_ATOMIC, 'text' ],
  SPLITATANY : [ 'string-split-at-any', 'split at any', Blockly.JavaScript.ORDER_ATOMIC, 'list' ]
};

Blockly.JavaScript['text_split_at_spaces'] = function() {
  // split at spaces
  var argument = Blockly.JavaScript.valueToCode(this, 'TEXT', Blockly.JavaScript.ORDER_NONE) || "\"\"";
  var code = Blockly.JavaScript.YAIL_CALL_YAIL_PRIMITIVE + "string-split-at-spaces"
      + Blockly.JavaScript.YAIL_SPACER;
  code = code + Blockly.JavaScript.YAIL_OPEN_COMBINATION
      + Blockly.JavaScript.YAIL_LIST_CONSTRUCTOR + Blockly.JavaScript.YAIL_SPACER
      + argument + Blockly.JavaScript.YAIL_CLOSE_COMBINATION;
  code = code + Blockly.JavaScript.YAIL_SPACER + Blockly.JavaScript.YAIL_QUOTE
      + Blockly.JavaScript.YAIL_OPEN_COMBINATION + "text"
      + Blockly.JavaScript.YAIL_CLOSE_COMBINATION + Blockly.JavaScript.YAIL_SPACER;
  code = code + Blockly.JavaScript.YAIL_DOUBLE_QUOTE + "split at spaces"
      + Blockly.JavaScript.YAIL_DOUBLE_QUOTE + Blockly.JavaScript.YAIL_CLOSE_COMBINATION;
  return [ code, Blockly.JavaScript.ORDER_ATOMIC ];
};

Blockly.JavaScript['text_segment'] = function() {
  // Create string segment
  var argument0 = Blockly.JavaScript.valueToCode(this, 'TEXT', Blockly.JavaScript.ORDER_NONE) || "\"\"";
  var argument1 = Blockly.JavaScript.valueToCode(this, 'START', Blockly.JavaScript.ORDER_NONE) || 1;
  var argument2 = Blockly.JavaScript.valueToCode(this, 'LENGTH', Blockly.JavaScript.ORDER_NONE) || 1;
  var code = Blockly.JavaScript.YAIL_CALL_YAIL_PRIMITIVE + "string-substring"
      + Blockly.JavaScript.YAIL_SPACER;
  code = code + Blockly.JavaScript.YAIL_OPEN_COMBINATION
      + Blockly.JavaScript.YAIL_LIST_CONSTRUCTOR + Blockly.JavaScript.YAIL_SPACER
      + argument0 + Blockly.JavaScript.YAIL_SPACER + argument1
      + Blockly.JavaScript.YAIL_SPACER + argument2
      + Blockly.JavaScript.YAIL_CLOSE_COMBINATION;
  code = code + Blockly.JavaScript.YAIL_SPACER + Blockly.JavaScript.YAIL_QUOTE
      + Blockly.JavaScript.YAIL_OPEN_COMBINATION + "text number number"
      + Blockly.JavaScript.YAIL_CLOSE_COMBINATION + Blockly.JavaScript.YAIL_SPACER;
  code = code + Blockly.JavaScript.YAIL_DOUBLE_QUOTE + "segment"
      + Blockly.JavaScript.YAIL_DOUBLE_QUOTE + Blockly.JavaScript.YAIL_CLOSE_COMBINATION;
  return [ code, Blockly.JavaScript.ORDER_ATOMIC ];
};

Blockly.JavaScript['text_replace_all'] = function() {
  // String replace with segment
  var argument0 = Blockly.JavaScript.valueToCode(this, 'TEXT', Blockly.JavaScript.ORDER_NONE) || "\"\"";
  var argument1 = Blockly.JavaScript.valueToCode(this, 'SEGMENT', Blockly.JavaScript.ORDER_NONE) || "\"\"";
  var argument2 = Blockly.JavaScript.valueToCode(this, 'REPLACEMENT', Blockly.JavaScript.ORDER_NONE) || "\"\"";
  var code = Blockly.JavaScript.YAIL_CALL_YAIL_PRIMITIVE + "string-replace-all"
      + Blockly.JavaScript.YAIL_SPACER;
  code = code + Blockly.JavaScript.YAIL_OPEN_COMBINATION
      + Blockly.JavaScript.YAIL_LIST_CONSTRUCTOR + Blockly.JavaScript.YAIL_SPACER
      + argument0 + Blockly.JavaScript.YAIL_SPACER + argument1
      + Blockly.JavaScript.YAIL_SPACER + argument2
      + Blockly.JavaScript.YAIL_CLOSE_COMBINATION;
  code = code + Blockly.JavaScript.YAIL_SPACER + Blockly.JavaScript.YAIL_QUOTE
      + Blockly.JavaScript.YAIL_OPEN_COMBINATION + "text text text"
      + Blockly.JavaScript.YAIL_CLOSE_COMBINATION + Blockly.JavaScript.YAIL_SPACER;
  code = code + Blockly.JavaScript.YAIL_DOUBLE_QUOTE + "replace all"
      + Blockly.JavaScript.YAIL_DOUBLE_QUOTE + Blockly.JavaScript.YAIL_CLOSE_COMBINATION;
  return [ code, Blockly.JavaScript.ORDER_ATOMIC ];
};

Blockly.JavaScript['obsufcated_text'] = function() {
  // Deobsfucate the TEXT input argument
  var setupObsfucation = function(input, confounder) {
    // The algorithm below is also implemented in scheme in runtime.scm
    // If you change it here, you have to change it there!
    // Note: This algorithm is like xor, if applied to its output
    // it regenerates it input.
    var acc = [];
    // First make sure the confounder is long enough...
    while (confounder.length < input.length) {
      confounder += confounder;
    }
    for (var i = 0; i < input.length; i++) {
      var c = (input.charCodeAt(i) ^ confounder.charCodeAt(i)) & 0xFF;
      var b = (c ^ input.length - i) & 0xFF;
      var b2 = ((c >> 8) ^ i) & 0xFF;
      acc.push(String.fromCharCode((b2 << 8 | b) & 0xFF));
    }
    return acc.join('');
  }
  var input = this.getFieldValue('TEXT');
  var argument = Blockly.JavaScript.quote_(setupObsfucation(input, this.confounder));
  var code = Blockly.JavaScript.YAIL_CALL_YAIL_PRIMITIVE + "text-deobsfucate"
      + Blockly.JavaScript.YAIL_SPACER;
  code = code + Blockly.JavaScript.YAIL_OPEN_COMBINATION
      + Blockly.JavaScript.YAIL_LIST_CONSTRUCTOR + Blockly.JavaScript.YAIL_SPACER
      + argument + Blockly.JavaScript.YAIL_SPACER
      + Blockly.JavaScript.quote_(this.confounder) + Blockly.JavaScript.YAIL_CLOSE_COMBINATION;
  code = code + Blockly.JavaScript.YAIL_SPACER + Blockly.JavaScript.YAIL_QUOTE
      + Blockly.JavaScript.YAIL_OPEN_COMBINATION + "text text"
      + Blockly.JavaScript.YAIL_CLOSE_COMBINATION + Blockly.JavaScript.YAIL_SPACER;
  code = code + Blockly.JavaScript.YAIL_DOUBLE_QUOTE + "deobsfucate text"
      + Blockly.JavaScript.YAIL_DOUBLE_QUOTE + Blockly.JavaScript.YAIL_CLOSE_COMBINATION;
  return [ code, Blockly.JavaScript.ORDER_ATOMIC ];
};
