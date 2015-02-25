// -*- mode: java; c-basic-offset: 2; -*-
// Copyright 2012 Massachusetts Institute of Technology. All rights reserved.

/**
 * @license
 * @fileoverview Logic blocks yail generators for Blockly, modified for MIT App Inventor.
 * @author mckinney@mit.edu (Andrew F. McKinney)
 */

'use strict';

goog.provide('Blockly.JavaScript.logic');

Blockly.JavaScript['logic_boolean'] = function() {
  // Boolean values true and false.
  var code = (this.getFieldValue('BOOL') == 'TRUE') ? Blockly.JavaScript.YAIL_TRUE
      : Blockly.JavaScript.YAIL_FALSE;
  return [ code, Blockly.JavaScript.ORDER_ATOMIC ];
};

Blockly.JavaScript['logic_false'] = function() {
  return Blockly.JavaScript.logic_boolean.call(this);
}

Blockly.JavaScript['logic_negate'] = function() {
  // negate operation
  var argument = Blockly.JavaScript
      .valueToCode(this, 'BOOL', Blockly.JavaScript.ORDER_NONE)
      || Blockly.JavaScript.YAIL_FALSE;
  var code = Blockly.JavaScript.YAIL_CALL_YAIL_PRIMITIVE + "yail-not"
      + Blockly.JavaScript.YAIL_SPACER;
  code = code + Blockly.JavaScript.YAIL_OPEN_COMBINATION
      + Blockly.JavaScript.YAIL_LIST_CONSTRUCTOR + Blockly.JavaScript.YAIL_SPACER
      + argument + Blockly.JavaScript.YAIL_CLOSE_COMBINATION;
  code = code + Blockly.JavaScript.YAIL_SPACER + Blockly.JavaScript.YAIL_QUOTE
      + Blockly.JavaScript.YAIL_OPEN_COMBINATION + "boolean"
      + Blockly.JavaScript.YAIL_CLOSE_COMBINATION + Blockly.JavaScript.YAIL_SPACER;
  code = code + Blockly.JavaScript.YAIL_DOUBLE_QUOTE + "not"
      + Blockly.JavaScript.YAIL_DOUBLE_QUOTE + Blockly.JavaScript.YAIL_CLOSE_COMBINATION;
  return [ code, Blockly.JavaScript.ORDER_ATOMIC ];
};

Blockly.JavaScript['logic_operation'] = function() {
  // The and, or logic operations
  // TODO: (Andrew) Make these take multiple arguments.
  var mode = this.getFieldValue('OP');
  var tuple = Blockly.JavaScript.logic_operation.OPERATORS[mode];
  var operator = tuple[0];
  var order = tuple[1];
  var argument0 = Blockly.JavaScript.valueToCode(this, 'A', order) || Blockly.JavaScript.YAIL_FALSE;
  var argument1 = Blockly.JavaScript.valueToCode(this, 'B', order) || Blockly.JavaScript.YAIL_FALSE;
  var code = Blockly.JavaScript.YAIL_OPEN_COMBINATION + operator
      + Blockly.JavaScript.YAIL_SPACER + argument0 + Blockly.JavaScript.YAIL_SPACER
      + argument1 + Blockly.JavaScript.YAIL_CLOSE_COMBINATION;
  return [ code, Blockly.JavaScript.ORDER_ATOMIC ];
};

Blockly.JavaScript.logic_operation.OPERATORS = {
  AND : [ 'and-delayed', Blockly.JavaScript.ORDER_NONE ],
  OR : [ 'or-delayed', Blockly.JavaScript.ORDER_NONE ]
};

Blockly.JavaScript['logic_or'] = function() {
  return Blockly.JavaScript.logic_operation.call(this);
}

Blockly.JavaScript['logic_compare'] = function() {
  // Basic logic compare operators
  // // TODO: (Hal) handle any type?
  var argument0 = Blockly.JavaScript.valueToCode(this, 'A', Blockly.JavaScript.ORDER_NONE) || Blockly.JavaScript.YAIL_FALSE;
  var argument1 = Blockly.JavaScript.valueToCode(this, 'B', Blockly.JavaScript.ORDER_NONE) || Blockly.JavaScript.YAIL_FALSE;
  var yailCommand = (this.getFieldValue('OP') == "NEQ" ? 'yail-not-equal?' : "yail-equal?" );
  var code = Blockly.JavaScript.YAIL_CALL_YAIL_PRIMITIVE + yailCommand
      + Blockly.JavaScript.YAIL_SPACER;
  code = code + Blockly.JavaScript.YAIL_OPEN_COMBINATION
      + Blockly.JavaScript.YAIL_LIST_CONSTRUCTOR + Blockly.JavaScript.YAIL_SPACER
      + argument0 + Blockly.JavaScript.YAIL_SPACER + argument1
      + Blockly.JavaScript.YAIL_CLOSE_COMBINATION;
  code = code + Blockly.JavaScript.YAIL_SPACER + Blockly.JavaScript.YAIL_QUOTE
      + Blockly.JavaScript.YAIL_OPEN_COMBINATION + "any" + Blockly.JavaScript.YAIL_SPACER
      + "any" + Blockly.JavaScript.YAIL_CLOSE_COMBINATION + Blockly.JavaScript.YAIL_SPACER;
  code = code + Blockly.JavaScript.YAIL_DOUBLE_QUOTE + "="
      + Blockly.JavaScript.YAIL_DOUBLE_QUOTE + Blockly.JavaScript.YAIL_CLOSE_COMBINATION;
  return [ code, Blockly.JavaScript.ORDER_ATOMIC ];
};