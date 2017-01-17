var Magix = require('magix')

module.exports = Magix.View.extend({
  tmpl: '@list.html',
  render: function() {
    var me = this
    var type = me.param('type') || 'f2e'

    me.request().all([{
      name: 'article_list',
      params: {
        type: type
      }
    }], function(e, MesModel) {
      var data = MesModel.get('data')

      me.data = {
        list: data
      }
      me.setView()
    })
  },
  filters: {
    format: function(value) {
      value = value.replace(/<[^>]+>/g, '')
      value = value.substring(0, 300) + ' ... ...'
      return value
    }
  }
})