var $ = require('jquery')

var routes = function() {
  var map = {
    'app/views/default': [
      '/',
      '/pages/article/list',
      '/pages/article/detail',
      '/pages/about/index',
      '/pages/tags/list',
      '/pages/archive/list'
    ]
  }

  var s = {}
  $.each(map, function(k, item) {
    $.each(item, function(i, v) {
      s[v] = k
    })
  })
  return s
}()



return {
  defaultPath: '/',
  defaultView: 'app/views/default',
  unmatchView: 'app/views/common/404',
  routes: routes,
  exts: [
    'app/exts',
    'app/vclick'
  ]
}