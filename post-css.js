const postcss = require('postcss');
const cssvariables = require('postcss-css-variables');

module.exports = function(context, cb) {
  const mycss = context.body.email;
  
  var output = postcss([
		cssvariables(/*options*/)
	])
	.process(mycss)
	.css;
	
  cb(null, {output});

};