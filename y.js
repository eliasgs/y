var util = require('util');
module.exports = function () {
  var err = new Error();
  Error.captureStackTrace(err, arguments.callee);
  var stack = err.stack.split('\n');
  console.log('\u001b[36m' + stack[1] + '\u001b[39m');

  for (var i=0; i<arguments.length; i++){
    var type =  Object.prototype.toString.call(arguments[i]);
    console.log('\u001b[4m' + type + '\u001b[24m');
    console.log(util.inspect(arguments[i], true, null, true));
  }
};
