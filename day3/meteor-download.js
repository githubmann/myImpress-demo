'use strict';
//引入fs模块
var fs = require('fs');
//定义一个函数用来处理失败
var fail = function(response) {
  response.statusCode = 404;
  response.end();
};
//定义一个返回文件数据的函数
var dataFile = function() {
  // 写一个函数来生成路径
  var file = fileFromId(this.params.id);

  // 取得文件的大小
  var stat = null;
  try {
    stat = fs.statSync(file);
  } catch (_error) {
    return fail(this.response);
  }

  // The hard-coded attachment filename
  //生成文件名
  var attachmentFilename = 'filename-for-user.zip';

  // Set the headers
  // 设置响应头
  this.response.writeHead(200, {
    //可用Images.find({})  --- .original.size .original.type
    'Content-Type': 'application/zip',
    //attchmentFilename 设置为 .original.name 
    //这个属性最重要，可以设置下载时的名字和后缀
    //attachmentFilename= original.name
    'Content-Disposition': 'attachment; filename=' + attachmentFilename,
    //original.size
    'Content-Length': stat.size
  });

  // Pipe the file contents to the response
  // 将文件留到response中
  fs.createReadStream(file).pipe(this.response);
};
//没有声明该参数则默认运行在客户端和服务蹲
//{where:'server'}声明之运行在服务端
Router.route('/data/:id', dataFile, {where: 'server'});