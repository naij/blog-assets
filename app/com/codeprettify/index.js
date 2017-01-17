var Magix = require('magix')
var $ = require('jquery')

module.exports = Magix.View.extend({
  ctor: function(e) {
    this.opt = e
  },
  render: function() {
    $('pre').addClass('prettyprint linenums')
    prettyPrint()
  }
})