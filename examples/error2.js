export class MyObject {
  constructor() {}
}

export class MyArray extends MyObject {
  constructor() {
    this.test = 1
  }

  static test() {
    return 'three'
  }

  one() {
    return 'hi'
  }
}