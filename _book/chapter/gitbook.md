# gitbook使用笔记

[the installation instructions in the documentation](https://github.com/GitbookIO/gitbook/blob/master/docs/setup.md)

[其他参考教程](http://www.chengweiyang.cn/gitbook/index.html)
## 安装插件
新建`book.json`文件
[配置参考](http://www.css88.com/archives/6622)
## install GitBook is via NPM.
`$ npm install gitbook-cli -g`
## setup
`gitbook init`
## Preview and serve
`gitbook serve`
## build the static website
`gitbook build`

### 使用插件：book.json配置参考
```
{
  "title": "Webpack 中文指南",
  "description": "Webpack 是当下最热门的前端资源模块化管理和打包工具，本书大部分内容翻译自 Webpack 官网。",
  "language": "zh",
  "plugins": [
    "disqus",
    "github",
    "editlink",
    "prism",
    "-highlight",
    "baidu",
    "splitter",
    "sitemap"
  ],
  "pluginsConfig": {
    "disqus": {
      "shortName": "webpack-handbook"
    },
    "github": {
      "url": "https://github.com/zhaoda/webpack-handbook"
    },
    "editlink": {
      "base": "https://github.com/zhaoda/webpack-handbook/blob/master/content",
      "label": "编辑本页"
    },
    "baidu": {
        "token": "a9787f0ab45d5e237bab522431d0a7ec"
    },
    "sitemap": {
        "hostname": "http://zhaoda.net/"
    }
  }
}
```

[GitBook Plugin - ComScore Theme](https://plugins.gitbook.com/plugin/theme-comscore)
```
{
"plugins": [
        "theme-comscore"
    ]
}
```
```
# 下载依赖包
gitbook install ./
```