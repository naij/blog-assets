define("app/models/manager",["app/models/service"],function(a,e,i){var r=a("app/models/service");r.add([{name:"article_list",url:"/api/article/list.json"},{name:"article_detail",url:"/api/article/detail.json"},{name:"article_list_by_tag",url:"/api/article/bytag.json"},{name:"archive",url:"/api/article/archive.json"},{name:"article_tag_group",url:"/api/article/taggroup.json"}]),i.exports=r});