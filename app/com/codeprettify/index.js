var Magix = require('magix')
var $ = require('jquery')
var prettify = require('prettify')

module.exports = Magix.View.extend({
  ctor: function(e) {
    this.opt = e
  },
  render: function() {
    $('pre').addClass('prettyprint linenums')
    prettify.prettyPrint()
  }
})