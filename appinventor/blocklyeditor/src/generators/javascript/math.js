// -*- mode: java; c-basic-offset: 2; -*-
// Copyright 2012 Massachusetts Institute of Technology. All rights reserved.

/**
 * @license
 * @fileoverview Math blocks yail generators for Blockly, modified for MIT App Inventor.
 * @author mckinney@mit.edu (Andrew F. McKinney)
 */

'use strict';

goog.provide('Blockly.JavaScript.math');

Blockly.JavaScript['math_number'] = function() {
  // Numeric value.
  var code = window.parseFloat(this.getFieldValue('NUM'));
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['math_compare'] = function() {
  // Basic compare operators
  var mode = this.getFieldValue('OP');
  var prim = Blockly.JavaScript.math_compare.OPERATORS[mode];
  var operator1 = prim[0];
  var operator2 = prim[1];
  var order = prim[2];
  var argument0 = Blockly.JavaScript.valueToCode(this, 'A', order) || 0;
  var argument1 = Blockly.JavaScript.valueToCode(this, 'B', order) || 0;
  var code = Blockly.JavaScript.YAIL_CALL_YAIL_PRIMITIVE + operator1
      + Blockly.JavaScript.YAIL_SPACER;
  code = code + Blockly.JavaScript.YAIL_OPEN_COMBINATION
      + Blockly.JavaScript.YAIL_LIST_CONSTRUCTOR + Blockly.JavaScript.YAIL_SPACER
      + argument0 + Blockly.JavaScript.YAIL_SPACER + argument1
      + Blockly.JavaScript.YAIL_CLOSE_COMBINATION;
  code = code + Blockly.JavaScript.YAIL_SPACER + Blockly.JavaScript.YAIL_QUOTE
      + Blockly.JavaScript.YAIL_OPEN_COMBINATION + (mode == "EQ" || mode == "NEQ" ? "any any" : "number number" )
      + Blockly.JavaScript.YAIL_CLOSE_COMBINATION + Blockly.JavaScript.YAIL_SPACER;
  code = code + Blockly.JavaScript.YAIL_DOUBLE_QUOTE + operator2
      + Blockly.JavaScript.YAIL_DOUBLE_QUOTE + Blockly.JavaScript.YAIL_CLOSE_COMBINATION;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript.math_compare.OPERATORS = {
  EQ: ['yail-equal?', '=', Blockly.JavaScript.ORDER_NONE],
  NEQ: ['yail-not-equal?', 'not =', Blockly.JavaScript.ORDER_NONE],
  LT: ['<', '<', Blockly.JavaScript.ORDER_NONE],
  LTE: ['<=', '<=', Blockly.JavaScript.ORDER_NONE],
  GT: ['>', '>', Blockly.JavaScript.ORDER_NONE],
  GTE: ['>=', '>=', Blockly.JavaScript.ORDER_NONE]
};

Blockly.JavaScript['math_arithmetic'] = function(mode,block) {
  // Basic arithmetic operators.
  var tuple = Blockly.JavaScript.math_arithmetic.OPERATORS[mode];
  var operator = tuple[0];
  var order = tuple[1]; 
  var argument0 = Blockly.JavaScript.valueToCode(block, 'A', order) || 0;
  var argument1 = Blockly.JavaScript.valueToCode(block, 'B', order) || 0;
  var code = Blockly.JavaScript.YAIL_CALL_YAIL_PRIMITIVE + operator
      + Blockly.JavaScript.YAIL_SPACER;
  code = code + Blockly.JavaScript.YAIL_OPEN_COMBINATION
      + Blockly.JavaScript.YAIL_LIST_CONSTRUCTOR + Blockly.JavaScript.YAIL_SPACER
      + argument0 + Blockly.JavaScript.YAIL_SPACER + argument1
      + Blockly.JavaScript.YAIL_CLOSE_COMBINATION;
  code = code + Blockly.JavaScript.YAIL_SPACER + Blockly.JavaScript.YAIL_QUOTE
      + Blockly.JavaScript.YAIL_OPEN_COMBINATION;
  code += (mode == "EQ" || mode == "NEQ" ? "any any" : "number number" )
      + Blockly.JavaScript.YAIL_CLOSE_COMBINATION + Blockly.JavaScript.YAIL_SPACER;
  code = code + Blockly.JavaScript.YAIL_DOUBLE_QUOTE + operator
      + Blockly.JavaScript.YAIL_DOUBLE_QUOTE + Blockly.JavaScript.YAIL_CLOSE_COMBINATION;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['math_subtract'] = function() {
  return Blockly.JavaScript.math_arithmetic("MINUS",this);
};

Blockly.JavaScript['math_division'] = function() {
  return Blockly.JavaScript.math_arithmetic("DIVIDE",this);
};

Blockly.JavaScript['math_power'] = function() {
  return Blockly.JavaScript.math_arithmetic("POWER",this);
};

Blockly.JavaScript['math_add'] = function() {
  return Blockly.JavaScript.math_arithmetic_list("ADD",this);
};

Blockly.JavaScript['math_multiply'] = function() {
  return Blockly.JavaScript.math_arithmetic_list("MULTIPLY",this);
};

Blockly.JavaScript['math_arithmetic_list'] = function(mode,block) {
  // Basic arithmetic operators.
  //var mode = this.getFieldValue('OP');
  var tuple = Blockly.JavaScript.math_arithmetic.OPERATORS[mode];
  var operator = tuple[0];
  var order = tuple[1];

  var code = Blockly.JavaScript.YAIL_CALL_YAIL_PRIMITIVE + operator
      + Blockly.JavaScript.YAIL_SPACER;
  code = code + Blockly.JavaScript.YAIL_OPEN_COMBINATION
      + Blockly.JavaScript.YAIL_LIST_CONSTRUCTOR + Blockly.JavaScript.YAIL_SPACER;
  for(var i=0;i<block.itemCount_;i++) {
    var argument = Blockly.JavaScript.valueToCode(block, 'NUM' + i, order) || 0;
    code += argument + Blockly.JavaScript.YAIL_SPACER;
  }
  code += Blockly.JavaScript.YAIL_CLOSE_COMBINATION;
  code = code + Blockly.JavaScript.YAIL_SPACER + Blockly.JavaScript.YAIL_QUOTE
      + Blockly.JavaScript.YAIL_OPEN_COMBINATION;
  for(var i=0;i<block.itemCount_;i++) {
    code += "number" + Blockly.JavaScript.YAIL_SPACER;
  }
  code += Blockly.JavaScript.YAIL_CLOSE_COMBINATION + Blockly.JavaScript.YAIL_SPACER;
  code = code + Blockly.JavaScript.YAIL_DOUBLE_QUOTE + operator
      + Blockly.JavaScript.YAIL_DOUBLE_QUOTE + Blockly.JavaScript.YAIL_CLOSE_COMBINATION;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript.math_arithmetic.OPERATORS = {
  ADD: ['+', Blockly.JavaScript.ORDER_NONE],
  MINUS: ['-', Blockly.JavaScript.ORDER_NONE],
  MULTIPLY: ['*', Blockly.JavaScript.ORDER_NONE],
  DIVIDE: ['/', Blockly.JavaScript.ORDER_NONE],
  POWER: ['expt', Blockly.JavaScript.ORDER_NONE]
};

Blockly.JavaScript['math_single'] = function() {
  // Basic arithmetic operators.
  var mode = this.getFieldValue('OP');
  var tuple = Blockly.JavaScript.math_single.OPERATORS[mode];
  var operator1 = tuple[0];
  var operator2 = tuple[1];
  var order = tuple[2];
  var argument = Blockly.JavaScript.valueToCode(this, 'NUM', order) || 1;
  var code = Blockly.JavaScript.YAIL_CALL_YAIL_PRIMITIVE + operator1
      + Blockly.JavaScript.YAIL_SPACER;
  code = code + Blockly.JavaScript.YAIL_OPEN_COMBINATION
      + Blockly.JavaScript.YAIL_LIST_CONSTRUCTOR + Blockly.JavaScript.YAIL_SPACER
      + argument + Blockly.JavaScript.YAIL_CLOSE_COMBINATION;
  code = code + Blockly.JavaScript.YAIL_SPACER + Blockly.JavaScript.YAIL_QUOTE
      + Blockly.JavaScript.YAIL_OPEN_COMBINATION + "number"
      + Blockly.JavaScript.YAIL_CLOSE_COMBINATION + Blockly.JavaScript.YAIL_SPACER;
  code = code + Blockly.JavaScript.YAIL_DOUBLE_QUOTE + operator2
      + Blockly.JavaScript.YAIL_DOUBLE_QUOTE + Blockly.JavaScript.YAIL_CLOSE_COMBINATION;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript.math_single.OPERATORS = {
  ROOT: ['sqrt', 'sqrt', Blockly.JavaScript.ORDER_NONE],
  ABS: ['abs', 'abs', Blockly.JavaScript.ORDER_NONE],
  NEG: ['-', 'negate', Blockly.JavaScript.ORDER_NONE],
  LN: ['log', 'log', Blockly.JavaScript.ORDER_NONE],
  EXP: ['exp', 'exp', Blockly.JavaScript.ORDER_NONE],
  ROUND: ['yail-round', 'round', Blockly.JavaScript.ORDER_NONE],
  CEILING: ['yail-ceiling', 'ceiling', Blockly.JavaScript.ORDER_NONE],
  FLOOR: ['yail-floor', 'floor', Blockly.JavaScript.ORDER_NONE]
};

Blockly.JavaScript['math_abs'] = function() {
  return Blockly.JavaScript.math_single.call(this);
};

Blockly.JavaScript['math_neg'] = function() {
  return Blockly.JavaScript.math_single.call(this);
};

Blockly.JavaScript['math_round'] = function() {
  return Blockly.JavaScript.math_single.call(this);
};

Blockly.JavaScript['math_ceiling'] = function() {
  return Blockly.JavaScript.math_single.call(this);
};

Blockly.JavaScript['math_floor'] = function() {
  return Blockly.JavaScript.math_single.call(this);
};


Blockly.JavaScript['math_random_int'] = function() {
  // Random integer between [X] and [Y].
  var argument0 = Blockly.JavaScript.valueToCode(this, 'FROM',
    Blockly.JavaScript.ORDER_NONE) || 0;
  var argument1 = Blockly.JavaScript.valueToCode(this, 'TO',
    Blockly.JavaScript.ORDER_NONE) || 0;
  var code = Blockly.JavaScript.YAIL_CALL_YAIL_PRIMITIVE + "random-integer"
      + Blockly.JavaScript.YAIL_SPACER;
  code = code + Blockly.JavaScript.YAIL_OPEN_COMBINATION
      + Blockly.JavaScript.YAIL_LIST_CONSTRUCTOR + Blockly.JavaScript.YAIL_SPACER
      + argument0 + Blockly.JavaScript.YAIL_SPACER + argument1
      + Blockly.JavaScript.YAIL_CLOSE_COMBINATION;
  code = code + Blockly.JavaScript.YAIL_SPACER + Blockly.JavaScript.YAIL_QUOTE
      + Blockly.JavaScript.YAIL_OPEN_COMBINATION + "number number"
      + Blockly.JavaScript.YAIL_CLOSE_COMBINATION + Blockly.JavaScript.YAIL_SPACER;
  code = code + Blockly.JavaScript.YAIL_DOUBLE_QUOTE + "random integer"
      + Blockly.JavaScript.YAIL_DOUBLE_QUOTE + Blockly.JavaScript.YAIL_CLOSE_COMBINATION;
  return [ code, Blockly.JavaScript.ORDER_ATOMIC ];
};

Blockly.JavaScript['math_random_float'] = function() {
  // Random fraction between 0 and 1.
  var code = Blockly.JavaScript.YAIL_CALL_YAIL_PRIMITIVE + "random-fraction"
      + Blockly.JavaScript.YAIL_SPACER;
  code = code + Blockly.JavaScript.YAIL_OPEN_COMBINATION + Blockly.JavaScript.YAIL_LIST_CONSTRUCTOR + 
  Blockly.JavaScript.YAIL_CLOSE_COMBINATION + Blockly.JavaScript.YAIL_SPACER + Blockly.JavaScript.YAIL_QUOTE + 
  Blockly.JavaScript.YAIL_OPEN_COMBINATION;
  code = code + Blockly.JavaScript.YAIL_CLOSE_COMBINATION + Blockly.JavaScript.YAIL_SPACER
      + Blockly.JavaScript.YAIL_DOUBLE_QUOTE + "random fraction"
      + Blockly.JavaScript.YAIL_DOUBLE_QUOTE + Blockly.JavaScript.YAIL_CLOSE_COMBINATION;
  return [ code, Blockly.JavaScript.ORDER_ATOMIC ];
};

Blockly.JavaScript['math_random_set_seed'] = function() {
  // Basic is_a_number.
  var argument = Blockly.JavaScript.valueToCode(this, 'NUM', Blockly.JavaScript.ORDER_NONE) || 0;
  var code = Blockly.JavaScript.YAIL_CALL_YAIL_PRIMITIVE + "random-set-seed"
      + Blockly.JavaScript.YAIL_SPACER;
  code = code + Blockly.JavaScript.YAIL_OPEN_COMBINATION
      + Blockly.JavaScript.YAIL_LIST_CONSTRUCTOR + Blockly.JavaScript.YAIL_SPACER
      + argument + Blockly.JavaScript.YAIL_CLOSE_COMBINATION;
  code = code + Blockly.JavaScript.YAIL_SPACER + Blockly.JavaScript.YAIL_QUOTE
      + Blockly.JavaScript.YAIL_OPEN_COMBINATION + "number"
      + Blockly.JavaScript.YAIL_CLOSE_COMBINATION + Blockly.JavaScript.YAIL_SPACER;
  code = code + Blockly.JavaScript.YAIL_DOUBLE_QUOTE + "random set seed"
      + Blockly.JavaScript.YAIL_DOUBLE_QUOTE + Blockly.JavaScript.YAIL_CLOSE_COMBINATION;
  return code;
};

Blockly.JavaScript['math_on_list'] = function() {
  // Min and Max operators.
  var mode = this.getFieldValue('OP');
  var tuple = Blockly.JavaScript.math_on_list.OPERATORS[mode];
  var operator = tuple[0];
  var order = tuple[1]; 
  var args = "";
  var typeString = "";
  for(var i=0;i<this.itemCount_;i++) {
    args += (Blockly.JavaScript.valueToCode(this, 'NUM' + i, order) || 0) + Blockly.JavaScript.YAIL_SPACER;
    typeString += "number" + Blockly.JavaScript.YAIL_SPACER;
  }
  var code = Blockly.JavaScript.YAIL_CALL_YAIL_PRIMITIVE + operator
      + Blockly.JavaScript.YAIL_SPACER;
  code = code + Blockly.JavaScript.YAIL_OPEN_COMBINATION
      + Blockly.JavaScript.YAIL_LIST_CONSTRUCTOR + Blockly.JavaScript.YAIL_SPACER
      + args//argument0 + Blockly.JavaScript.YAIL_SPACER + argument1
      + Blockly.JavaScript.YAIL_CLOSE_COMBINATION;
  code = code + Blockly.JavaScript.YAIL_SPACER + Blockly.JavaScript.YAIL_QUOTE
      + Blockly.JavaScript.YAIL_OPEN_COMBINATION + typeString
      + Blockly.JavaScript.YAIL_CLOSE_COMBINATION + Blockly.JavaScript.YAIL_SPACER;
  code = code + Blockly.JavaScript.YAIL_DOUBLE_QUOTE + operator
      + Blockly.JavaScript.YAIL_DOUBLE_QUOTE + Blockly.JavaScript.YAIL_CLOSE_COMBINATION;
  return [ code, Blockly.JavaScript.ORDER_ATOMIC ];
};

Blockly.JavaScript.math_on_list.OPERATORS = {
  MIN: ['min', Blockly.JavaScript.ORDER_NONE],
  MAX: ['max', Blockly.JavaScript.ORDER_NONE]
};

Blockly.JavaScript['math_divide'] = function() {
  // divide operators.
  var mode = this.getFieldValue('OP');
  var tuple = Blockly.JavaScript.math_divide.OPERATORS[mode];
  var operator = tuple[0];
  var order = tuple[1]; 
  var argument0 = Blockly.JavaScript.valueToCode(this, 'DIVIDEND', order) || 0;
  var argument1 = Blockly.JavaScript.valueToCode(this, 'DIVISOR', order) || 1;
  var code = Blockly.JavaScript.YAIL_CALL_YAIL_PRIMITIVE + operator
      + Blockly.JavaScript.YAIL_SPACER;
  code = code + Blockly.JavaScript.YAIL_OPEN_COMBINATION
      + Blockly.JavaScript.YAIL_LIST_CONSTRUCTOR + Blockly.JavaScript.YAIL_SPACER
      + argument0 + Blockly.JavaScript.YAIL_SPACER + argument1
      + Blockly.JavaScript.YAIL_CLOSE_COMBINATION;
  code = code + Blockly.JavaScript.YAIL_SPACER + Blockly.JavaScript.YAIL_QUOTE
      + Blockly.JavaScript.YAIL_OPEN_COMBINATION + "number number"
      + Blockly.JavaScript.YAIL_CLOSE_COMBINATION + Blockly.JavaScript.YAIL_SPACER;
  code = code + Blockly.JavaScript.YAIL_DOUBLE_QUOTE + operator
      + Blockly.JavaScript.YAIL_DOUBLE_QUOTE + Blockly.JavaScript.YAIL_CLOSE_COMBINATION;
  return [ code, Blockly.JavaScript.ORDER_ATOMIC ];
};

Blockly.JavaScript.math_divide.OPERATORS = {
  MODULO: ['modulo', Blockly.JavaScript.ORDER_NONE],
  REMAINDER: ['remainder', Blockly.JavaScript.ORDER_NONE],
  QUOTIENT: ['quotient', Blockly.JavaScript.ORDER_NONE]
};

Blockly.JavaScript['math_trig'] = function() {
  // Basic trig operators.
  var mode = this.getFieldValue('OP');
  var tuple = Blockly.JavaScript.math_trig.OPERATORS[mode];
  var operator1 = tuple[1];
  var operator2 = tuple[0];
  var order = tuple[2];
  var argument = Blockly.JavaScript.valueToCode(this, 'NUM', order) || 0;
  var code = Blockly.JavaScript.YAIL_CALL_YAIL_PRIMITIVE + operator1
      + Blockly.JavaScript.YAIL_SPACER;
  code = code + Blockly.JavaScript.YAIL_OPEN_COMBINATION
      + Blockly.JavaScript.YAIL_LIST_CONSTRUCTOR + Blockly.JavaScript.YAIL_SPACER
      + argument + Blockly.JavaScript.YAIL_CLOSE_COMBINATION;
  code = code + Blockly.JavaScript.YAIL_SPACER + Blockly.JavaScript.YAIL_QUOTE
      + Blockly.JavaScript.YAIL_OPEN_COMBINATION + "number"
      + Blockly.JavaScript.YAIL_CLOSE_COMBINATION + Blockly.JavaScript.YAIL_SPACER;
  code = code + Blockly.JavaScript.YAIL_DOUBLE_QUOTE + operator2
      + Blockly.JavaScript.YAIL_DOUBLE_QUOTE + Blockly.JavaScript.YAIL_CLOSE_COMBINATION;
  return [ code, Blockly.JavaScript.ORDER_ATOMIC ];
};

Blockly.JavaScript.math_trig.OPERATORS = {
  SIN: ['sin', 'sin-degrees', Blockly.JavaScript.ORDER_NONE],
  COS: ['cos', 'cos-degrees', Blockly.JavaScript.ORDER_NONE],
  TAN: ['tan', 'tan-degrees', Blockly.JavaScript.ORDER_NONE],
  ASIN: ['asin', 'asin-degrees', Blockly.JavaScript.ORDER_NONE],
  ACOS: ['acos', 'acos-degrees', Blockly.JavaScript.ORDER_NONE],
  ATAN: ['atan', 'atan-degrees', Blockly.JavaScript.ORDER_NONE]
};

Blockly.JavaScript['math_cos'] = function() {
  return Blockly.JavaScript.math_trig.call(this);
};

Blockly.JavaScript['math_tan'] = function() {
  return Blockly.JavaScript.math_trig.call(this);
};

Blockly.JavaScript['math_atan2'] = function() {
  // atan2 operators.
  var argument0 = Blockly.JavaScript.valueToCode(this, 'Y', Blockly.JavaScript.ORDER_NONE) || 1;
  var argument1 = Blockly.JavaScript.valueToCode(this, 'X', Blockly.JavaScript.ORDER_NONE) || 1;
  var code = Blockly.JavaScript.YAIL_CALL_YAIL_PRIMITIVE + "atan2-degrees"
      + Blockly.JavaScript.YAIL_SPACER;
  code = code + Blockly.JavaScript.YAIL_OPEN_COMBINATION
      + Blockly.JavaScript.YAIL_LIST_CONSTRUCTOR + Blockly.JavaScript.YAIL_SPACER
      + argument0 + Blockly.JavaScript.YAIL_SPACER + argument1
      + Blockly.JavaScript.YAIL_CLOSE_COMBINATION;
  code = code + Blockly.JavaScript.YAIL_SPACER + Blockly.JavaScript.YAIL_QUOTE
      + Blockly.JavaScript.YAIL_OPEN_COMBINATION + "number number"
      + Blockly.JavaScript.YAIL_CLOSE_COMBINATION + Blockly.JavaScript.YAIL_SPACER;
  code = code + Blockly.JavaScript.YAIL_DOUBLE_QUOTE + "atan2"
      + Blockly.JavaScript.YAIL_DOUBLE_QUOTE + Blockly.JavaScript.YAIL_CLOSE_COMBINATION;
  return [ code, Blockly.JavaScript.ORDER_ATOMIC ];
};

Blockly.JavaScript['math_convert_angles'] = function() {
  // Basic arithmetic operators.
  var mode = this.getFieldValue('OP');
  var tuple = Blockly.JavaScript.math_convert_angles.OPERATORS[mode];
  var operator1 = tuple[0];
  var operator2 = tuple[1];
  var order = tuple[2];
  var argument = Blockly.JavaScript.valueToCode(this, 'NUM', order) || 0;
  var code = Blockly.JavaScript.YAIL_CALL_YAIL_PRIMITIVE + operator1
      + Blockly.JavaScript.YAIL_SPACER;
  code = code + Blockly.JavaScript.YAIL_OPEN_COMBINATION
      + Blockly.JavaScript.YAIL_LIST_CONSTRUCTOR + Blockly.JavaScript.YAIL_SPACER
      + argument + Blockly.JavaScript.YAIL_CLOSE_COMBINATION;
  code = code + Blockly.JavaScript.YAIL_SPACER + Blockly.JavaScript.YAIL_QUOTE
      + Blockly.JavaScript.YAIL_OPEN_COMBINATION + "number"
      + Blockly.JavaScript.YAIL_CLOSE_COMBINATION + Blockly.JavaScript.YAIL_SPACER;
  code = code + Blockly.JavaScript.YAIL_DOUBLE_QUOTE + operator2
      + Blockly.JavaScript.YAIL_DOUBLE_QUOTE + Blockly.JavaScript.YAIL_CLOSE_COMBINATION;
  return [ code, Blockly.JavaScript.ORDER_ATOMIC ];
};

Blockly.JavaScript.math_convert_angles.OPERATORS = {
  RADIANS_TO_DEGREES: ['radians->degrees', 'convert radians to degrees', Blockly.JavaScript.ORDER_NONE],
  DEGREES_TO_RADIANS: ['degrees->radians', 'convert degrees to radians', Blockly.JavaScript.ORDER_NONE]
};

Blockly.JavaScript['math_format_as_decimal'] = function() {
  // format_as_decimal.
  var argument0 = Blockly.JavaScript.valueToCode(this, 'NUM', Blockly.JavaScript.ORDER_NONE) || 0;
  var argument1 = Blockly.JavaScript.valueToCode(this, 'PLACES', Blockly.JavaScript.ORDER_NONE) || 0;
  var code = Blockly.JavaScript.YAIL_CALL_YAIL_PRIMITIVE + "format-as-decimal"
      + Blockly.JavaScript.YAIL_SPACER;
  code = code + Blockly.JavaScript.YAIL_OPEN_COMBINATION
      + Blockly.JavaScript.YAIL_LIST_CONSTRUCTOR + Blockly.JavaScript.YAIL_SPACER
      + argument0 + Blockly.JavaScript.YAIL_SPACER + argument1
      + Blockly.JavaScript.YAIL_CLOSE_COMBINATION;
  code = code + Blockly.JavaScript.YAIL_SPACER + Blockly.JavaScript.YAIL_QUOTE
      + Blockly.JavaScript.YAIL_OPEN_COMBINATION + "number number"
      + Blockly.JavaScript.YAIL_CLOSE_COMBINATION + Blockly.JavaScript.YAIL_SPACER;
  code = code + Blockly.JavaScript.YAIL_DOUBLE_QUOTE + "format as decimal"
      + Blockly.JavaScript.YAIL_DOUBLE_QUOTE + Blockly.JavaScript.YAIL_CLOSE_COMBINATION;
  return [ code, Blockly.JavaScript.ORDER_ATOMIC ];
};

Blockly.JavaScript['math_is_a_number'] = function() {
  // Basic is_a_number.
  var argument = Blockly.JavaScript.valueToCode(this, 'NUM', Blockly.JavaScript.ORDER_NONE) || Blockly.JavaScript.YAIL_FALSE;
  var code = Blockly.JavaScript.YAIL_CALL_YAIL_PRIMITIVE + "is-number?"
      + Blockly.JavaScript.YAIL_SPACER;
  code = code + Blockly.JavaScript.YAIL_OPEN_COMBINATION
      + Blockly.JavaScript.YAIL_LIST_CONSTRUCTOR + Blockly.JavaScript.YAIL_SPACER
      + argument + Blockly.JavaScript.YAIL_CLOSE_COMBINATION;
  code = code + Blockly.JavaScript.YAIL_SPACER + Blockly.JavaScript.YAIL_QUOTE
      + Blockly.JavaScript.YAIL_OPEN_COMBINATION + "any"
      + Blockly.JavaScript.YAIL_CLOSE_COMBINATION + Blockly.JavaScript.YAIL_SPACER;
  code = code + Blockly.JavaScript.YAIL_DOUBLE_QUOTE + "is a number?"
      + Blockly.JavaScript.YAIL_DOUBLE_QUOTE + Blockly.JavaScript.YAIL_CLOSE_COMBINATION;
  return [ code, Blockly.JavaScript.ORDER_ATOMIC ];
};
