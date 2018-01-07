class LinkedMap {
  constructor(test) {
    if (!(this instanceof LinkedMap)) {
      return new LinkedMap(test)
    }
    this.test = test;
  }

  toString() {
    return '[LinkedMap]';
  }
}

var test = LinkedMap(1)