var foo = require('foo');
$.label.text = foo.getData().foobar;

// For Alloy projects, you can also pass in context
// with the Alloy.createController method and retrieve
// it in the controller code.
// var args = arguments[0] || {};
// $.label.text = args.foobar;
