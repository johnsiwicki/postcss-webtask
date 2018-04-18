const postcss = require('postcss');
const cssvariables = require('postcss-css-variables');
const pFor = require('postcss-for');


module.exports = function(context, cb) {
  const mycss = context.body.email;
  
  var output = postcss([
		cssvariables(/*options*/),
		pFor()
	])
	.process(mycss)
	.css;
	
  cb(null, {output});

};