var Magix = require('magix')
var $ = require('jquery')

module.exports = Magix.View.extend({
  ctor: function(e) {
    this.opt = e
  },
  render: function() {
    var me = this
    var $el = $('#' + me.id)
    var id = me.opt.id
    var cnt= document.createElement('div')
    cnt.setAttribute('data-thread-key', id)
    cnt.setAttribute('data-url', window.location.href)
    DUOSHUO.EmbedThread(cnt)
    $el.append(cnt)
  }
})