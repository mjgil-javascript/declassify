#!/usr/bin/env node

var fs = require('fs')
var es6 = require('es6-transpiler');
var declassify = require('./declassify')
var rollup = require('rollup')

// variables:
//   filename of source code
//   copyright file, years, name
//   output file

if (process.argv.length !== 6) {
  console.error('requires 4 arguements')
  console.error('inputFileName,outputFileName,copyrightFileName,moduleName')
  process.exit(1)
}

// first two [nodeLocation, scriptLocation]
var inputFileName = process.argv[2]
var outputFileName = process.argv[3]
var copyrightFileName = process.argv[4]
var moduleName = process.argv[5]

rollup.rollup({
  entry: inputFileName,
  plugins: [
      {
        transform: function(source) {
          return declassify(source);
        }
      }
    ]
  })
  .catch(function(e) {console.log(e)})
  .then(function (bundle) {
    var copyright = fs.readFileSync(copyrightFileName);

    var bundled = bundle.generate({
      format: 'umd',
      banner: copyright,
      moduleName: moduleName
    }).code;

    var transformResult = es6.run({
      src: bundled,
      disallowUnknownReferences: false,
      environments: ["node", "browser"],
      globals: {
        define: false,
      },
    });

    if (transformResult.errors && transformResult.errors.length > 0) {
      throw new Error(transformResult.errors[0]);
    }

    var transformed = transformResult.src;
    fs.writeFileSync(outputFileName, transformed);

}).catch(function(e) {console.log(e)});