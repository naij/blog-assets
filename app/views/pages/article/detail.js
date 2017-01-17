var Magix = require('magix')

module.exports = Magix.View.extend({
  tmpl: '@detail.html',
  render: function() {
    var me = this
    var id = me.param('id')

    me.request().all([{
      name: 'article_detail',
      params: {
        id: id
      }
    }], function(e, MesModel) {
      var data = MesModel.get('data')

      me.data = {
        article: data,
        id: id
      }
      me.setView()
    })
  }
})