require('./css/test.scss');
//require('./index.jade');

//var html = require("pug!./index.pug");

var template = require("pug!./index.pug");

var locals = { /* ... */ };

var html = template(locals);
