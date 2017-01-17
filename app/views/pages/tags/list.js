var Magix = require('magix')

module.exports = Magix.View.extend({
  tmpl: '@list.html',
  ctor: function() {
    this.observe(['tag'])
  },
  render: function() {
    var me = this
    var tag = me.param('tag')

    if (tag) {
      me.request().all([{
        name: 'article_list_by_tag',
        params: {
          tag: tag
        }
      }], function(e, MesModel) {
        var data = MesModel.get('data')

        me.data = {
          tag: tag,
          list: data
        }
        me.setView()
      })
    } else {
      me.request().all([{
        name: 'article_tag_group'
      }], function(e, MesModel) {
        var data = MesModel.get('data')

        me.data = {
          tag: '',
          list: data
        }
        me.setView()
      })
    }
  },
  filters: {
    format: function(value) {
      value = value.replace(/<[^>]+>/g, '')
      value = value.substring(0, 300) + ' ... ...'
      return value
    }
  }
})