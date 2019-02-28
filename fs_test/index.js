const fs = require('fs');

// fs.unlinkSync('./tmp');

// fs.readFile('./tmp/test.js', function(err, data) {
//     // 读取文件失败/错误
//     if (err) {
//         throw err;
//     }
//     // 读取文件成功
//     console.log(data);
// });

// fs.writeFile('./tmp/test.js', 'console.log(123)', function(err) {
//     // ...
// });

// fs.mkdir('./newdir', function(err) {
//     if (err) {
//         throw err;
//     }
//     console.log('make dir success.');
// });

// fs.readdir('./tmp', function(err, files) {
//     if (err) {
//         throw err;
//     }
//     // files是一个数组
//     // 每个元素是此目录下的文件或文件夹的名称
//     console.log(files);
//     // [ 'file_test', 'test.js' ]
// });


// // 打开文件
// fs.open('./tmp/test.js', 'r', function(err, fd) {
//     if (err) {
//         throw err;
//     }
//     console.log('open file success.');
//     var buffer = Buffer.alloc(255);
//     // 读取文件
//     fs.read(fd, buffer, 0, 16, 0, function(err, bytesRead, buffer) {
//         if (err) {
//             throw err;
//         }
//         // 打印出buffer中存入的数据
//         console.log(bytesRead, buffer.slice(0, bytesRead).toString());

//         // 关闭文件
//         fs.close(fd, (err) => {
//             console.log(err)
//         });
//     });
// });


// 打开文件
fs.open('./tmp/test.js', `w`, function(err, fd) {
    if (err) {
        throw err;
    }
    console.log('open file success.');
    var buffer = Buffer.alloc(9, 'shiyanlou');
    // 读取文件
    fs.write(fd, buffer, 0, 9, 0, function(err, bytesWritten, buffer) {
        if (err) {
            throw err;
        }

        console.log('write success.');
        // 打印出buffer中存入的数据
        console.log(bytesWritten, buffer.slice(0, bytesWritten).toString());

        // 关闭文件
        fs.close(fd, () => {});
    });
});