var util = require('util');
module.exports = y;

function y() {
  var err = new Error();
  Error.captureStackTrace(err, arguments.callee);
  var stack = err.stack.split('\n');
  var stackSize = y.settings && y.settings.stackSize || 1;
  for (var i=1; i<=stackSize && i<stack.length; i++) {
    console.log('\u001b[36m%s|%s\u001b[39m',
                new Date().toJSON(), stack[i].trim());
  }

  var depth = y.settings && y.settings.depth || 2;
  for (var i=0; i<arguments.length; i++){
    var type =  Object.prototype.toString.call(arguments[i]);
    console.log('\u001b[4m%s\u001b[24m', type);
    console.log(util.inspect(arguments[i], true, depth, true));
  }
}

y.set = function (settings) {
  settings = settings || {};
  y.settings = y.settings || {};
  y.settings.depth = settings.depth || y.settings.depth;
  y.settings.stackSize = settings.stackSize || y.settings.stackSize;
  return y;
};
