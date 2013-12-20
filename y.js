var util = require('util');
module.exports = y;

function y() {
  var err = new Error();
  Error.captureStackTrace(err, arguments.callee);
  var stack = err.stack.split('\n');
  console.log('\u001b[36m' + new Date().toJSON() + stack[1] + '\u001b[39m');

  var depth = y.settings && y.settings.depth || 2;
  for (var i=0; i<arguments.length; i++){
    var type =  Object.prototype.toString.call(arguments[i]);
    console.log('\u001b[4m' + type + '\u001b[24m');
    console.log(util.inspect(arguments[i], true, depth, true));
  }
}

y.set = function (settings) {
  y.settings = settings;
  return y;
};
