/**    
*  Copyright (c) 2016-2018, Malcom Gilbert    
*  All rights reserved.    
*    
*/
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.error2 = {})));
}(this, function (exports) { 'use strict';

  function createClass(ctor, superClass) {
    if (superClass) {
      ctor.prototype = Object.create(superClass.prototype);
    }
    ctor.prototype.constructor = ctor;
  }
  function MyObject() {}


  createClass(MyArray, MyObject);
    function MyArray() {
      this.test = 1
    }

  exports.MyObject = MyObject;
  exports.MyArray = MyArray;

}));