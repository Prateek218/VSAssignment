const substring = `$1const $2 = ($3) =>`
const regex = /([\.]*)function\s*([\w]*)\(([^\)]+)\)/;
const lineReader = require('readline').createInterface({
  input: require('fs').createReadStream('test.txt')
});

lineReader.on('line', function (line) {
const arrowFunction = line.replace(regex, substring)
  console.log('Converted Arrow Function:', arrowFunction );
});