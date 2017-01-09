(function () {
  function returnJSON (s) {
    return (new Function('return ' + s))()
  }
  
  var scripts = document.getElementsByTagName('script')
  var script = scripts[scripts.length - 1]
  var bootConfig = returnJSON(script.getAttribute('boot-config'))

  // KISSY包配置和Magix启动
  KISSY.use('magix/magix, magix/router, io', function (S, Magix, Router, Ajax) {
    S.config({
      packages: [
        {
          name: 'app',
          path: bootConfig.cdn,
          debug: bootConfig.debug
        }
      ]
    })

    Magix.start({
      nativeHistory: true,
      appRoot: bootConfig.cdn,
      iniFile: 'app/ini',
      extensions: [
        'app/extview',
        'app/vclick'
      ]
    })
  })
}())