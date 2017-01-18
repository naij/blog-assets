var script = function() {
  var scripts = document.getElementsByTagName('script')
  return scripts[scripts.length - 1]
}()

var base = function() {
  var src = script.getAttribute('src')
  var base = /(.*\/)(.+\/.+)/.exec(src)[1]
  return base
}()

seajs.config({
  alias: {
    'jquery': 'app/libs/jquery-1.12.1',
    'magix': 'app/libs/magix',
    'pat': 'app/libs/pat',
    'prettify': 'app/libs/prettify'
  },
  base: base,
  charset: 'utf-8'
})

seajs.use(['magix'], function(Magix) {
  Magix.boot({
    ini: 'app/ini'
  })
})
