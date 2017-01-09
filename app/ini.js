KISSY.add('app/ini', function (S, Magix) {
  var Routes = {
    'app/views/default': [
      {path: '/'},
      {path: '/pages/article/list'},
      {path: '/pages/article/detail'},
      {path: '/pages/about/index'},
      {path: '/pages/tags/list'},
      {path: '/pages/archive/list'}
    ]
  }
  return {
    defaultView: 'app/views/default',
    notFoundView: 'app/views/404',
    routes: function (pathname) {
      if (!S.isEmptyObject(Routes)) {
        var s
        S.each(Routes, function(v, k) {
          S.each(v, function(item) {
            if (item.path == pathname) {
              s = k
              return false
            }
          })
          if (s) return false
        })
        if (s) return s
        return this.notFoundView
      }
      return this.defaultView
    }
  }
}, {
  requires: [
    'magix/magix'
  ]
})