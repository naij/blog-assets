var Magix = require('magix')

module.exports = Magix.View.extend({
  tmpl: '@list.html',
  render: function() {
    var me = this

    me.request().all([{
      name: 'archive'
    }], function(e, MesModel) {
      var data = MesModel.get('data')

      me.data = {
        list: data
      }
      me.setView()
    })
  }
})