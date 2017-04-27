var fs = require('fs');
var string = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==";
var regex = /^data:.+\/(.+);base64,(.*)$/;

var matches = string.match(regex);
var ext = matches[1];
var data = matches[2];
var buffer = new Buffer(data, 'base64');
var imgName = 'feishuoren';
var path = './image/';

if (fs.existsSync(path)) {
    fs.writeFileSync(path + imgName +'.' + ext, buffer);
}else {
    fs.mkdir(path, function (err) {
        if (err) throw err;
    });
    fs.writeFileSync(path + imgName +'.'+ ext, buffer);
}

