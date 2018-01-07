# declassify
better es6 classes (extending classes without the need for "super()" and treating classes like functions)


### Current Usage:
```
./src/compile.js inputFileName outputFileName copyrightFileName moduleName
```
```
file:package.json
"scripts": {
    "build": "declassify src/index.js build/index.js COPYRIGHT ImmutableLinkedMap",
  },
  "devDependencies": {
    "declassify": "git+https://git@github.com/mjgil-javascript/declassify.git#4194c66",
  },
```

### Fixes these issues:
```
npm run error1
npm run error2
npm run error3
```

```
repl: missing super() call in constructor
  11 | 
  12 | export class List extends Vector {
> 13 |   constructor(test) {
     |   ^
  14 |     return {};
  15 |   }
  16 | 
```

```
repl: 'this' is not allowed before super()
  12 | export class List extends Vector {
  13 |   constructor(test) {
> 14 |     this.test = test;
     |     ^
  15 |     return {};
  16 |   }
  17 | 
```

```
TypeError: Cannot call a class as a function 

or

TypeError: Class constructor LinkedMap cannot be invoked without 'new'
```

```
(repeat of 1 & 2)

/index.js:12
  constructor(test) {}
             ^

ReferenceError: Must call super constructor in derived class before
accessing 'this' or returning from derived constructor
```


### Todo

```
make into command line interface
usage:
  declassify -i [input] -o [output] -c [copyright] -m [minimize/uglify]
    defaults:
      input (required, errors if not found): ./index.js or ./src/index.js
      output (optional, outputs to default if not found): ./build/index.js
      copyright (optional, no copyright if not found): ./LICENSE

add examples directory
add test directory
replace immutablelinkedmap code
add to linkedmap code
add travis file for testing
add more to readme to explain usage and why needed
```
