var Magix = require('magix')

module.exports = Magix.View.extend({
  tmpl: '@footer.html',
  render: function() {
    var me = this
    me.setView()
  }
})