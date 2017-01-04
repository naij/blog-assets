KISSY.add("app/models/modelmanager", function (S, BaseManager, BaseModel) {
  var Manager = BaseManager.create(BaseModel);

  Manager.registerModels([
    // 登录
    {
      name: 'login',
      url: '/api/login.json',
      options: {
        type: 'post'
      }
    },
    // 登出
    {
      name: 'logout',
      url: '/api/logout.json'
    }
  ])

  Manager.registerModels([
    // 获取文章列表
    {
      name: 'article_list',
      url: '/api/article/list.json'
    },
    // 获取文章列表
    {
      name: 'article_detail',
      url: '/api/article/detail.json'
    },
    // 根据标签获取文章列表
    {
      name: 'article_list_by_tag',
      url: '/api/article/bytag.json'
    },
    // 归档
    {
      name: 'archive',
      url: '/api/article/archive.json'
    },
    // 标签集合
    {
      name: 'article_tag_group',
      url: '/api/article/taggroup.json'
    }
  ])

  Manager.registerModels([
    // 标签列表
    {
      name: 'tag_list',
      url: '/api/tag/list.json'
    },
    // 文章列表
    {
      name: 'article_full',
      url: '/api/article/full.json'
    },
    // 文章添加
    {
      name: 'article_create',
      url: '/api/article/create.json',
      options: {
        type: 'post'
      }
    },
    // 文章编辑
    {
      name: 'article_update',
      url: '/api/article/update.json',
      options: {
        type: 'post'
      }
    },
    // 文章删除
    {
      name: 'article_remove',
      url: '/api/article/remove.json',
      options: {
        type: 'post'
      }
    },
    // 图片列表
    {
      name: 'picture_list',
      url: '/api/pic/list.json'
    },
    // 二维码
    {
      name: 'tool_qr',
      url: '/api/tool/qr.json',
      options: {
        type: 'post'
      }
    }
  ]);
  return Manager;
}, {
  requires: [
    "mxext/mmanager",
    "app/models/basemodel"
  ]
});