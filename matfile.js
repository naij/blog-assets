var fs = require('fs')
var path = require('path')
var combineTool = require('magix-combine')
var mat   = require('mat')
var proxy = require('mat-proxy')
var less  = require('mat-less')

combineTool.config({
  prefix: 'mx',
  tmplFolder: './',
  tmplCommand: /<%[\s\S]+?%>/g,
  loaderType: 'cmd'
})
//分析js 打包view
var analyse = function() {
  return function* combine(next) {
    yield next

    if (/sea\.js|prettify\.js|boot\.js|\.json/.test(this.path)) return

    var body = this.body.toString()

    if (body == 'Not Found') {
      throw new Error('路径：' + this.path + ' 对应的文件没有找到')
    }
    // 对source进行加工，变成amd里面define的包裹格式
    if (!/define\s*\(\s*['"]\s*[\w\W]+['"]/.test(body) || /define\.amd/.test(body)) {
      var file = path.join(__dirname, this.path)
      body = yield combineTool.processContent(path.join(__dirname, this.path), '', body)
    }

    this.body = body
  }
}

// 预编译less
mat.task('less', function () {
  mat.url([/.*\.css/])
    .rewrite([
      [/\.css/g, '.less']
    ])
    .use(less({
      sourceMap: {sourceMapFileInline: true}
    }))
})

mat.task('combine', function() {
  mat.url([/.js/])
    .use(analyse())
})

mat.task('pushState', function () {
  mat.url([/^((?!\.(css|less|js|html|ico|swf)).)*$/])
    .rewrite([
      [/(\/.*)+/, 'index.html']
    ])
})

mat.task('default', ['less', 'combine', 'pushState'], function () {
  mat.url([/\.json/])
    .use(proxy({
      proxyPass: '127.0.0.1:7001'
    }))
})