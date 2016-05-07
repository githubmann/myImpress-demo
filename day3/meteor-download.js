'use strict';

var fs = Npm.require('fs');

var fail = function(response) {
  response.statusCode = 404;
  response.end();
};
//定义一个返回文件数据的函数
var dataFile = function() {

  var file = fileFromId(this.params.id);

  // 
  var stat = null;
  try {
    stat = fs.statSync(file);
  } catch (_error) {
    return fail(this.response);
  }

  // The hard-coded attachment filename
  var attachmentFilename = 'filename-for-user.zip';

  // Set the headers
  this.response.writeHead(200, {
    'Content-Type': 'application/zip',
    'Content-Disposition': 'attachment; filename=' + attachmentFilename,
    'Content-Length': stat.size
  });

  // Pipe the file contents to the response
  fs.createReadStream(file).pipe(this.response);
};

Router.route('/data/:id', dataFile, {where: 'server'});