define("app/views/pages/archive/list",["magix"],function(i,e,t){var a=i("magix");t.exports=a.View.extend({tmpl:'<div class="wrap-hd clearfix"><div class="title-bar"><h2 class="title">\u5f52\u6863</h2></div></div><dl class="archive">{{#for(item in list)}}<dt>{{item.ym}}</dt><dd><ul>{{#for(subitem in item.list)}}<li><a href="/pages/article/detail?id={{subitem.id}}&type={{subitem.type}}">{{subitem.title}}</a></li>{{/for}}</ul></dd>{{/for}}</dl>',render:function(){var i=this;i.request().all([{name:"archive"}],function(e,t){var a=t.get("data");i.data={list:a},i.setView()})}})});