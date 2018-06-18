import readDirFiles from 'read-dir-files';

const FILE_SIZE_LIMIT = 300; // KB

var checkSizeOfAllImages = function() {
  return new Promise(resolve => {
    let count = 0;
    readDirFiles.list('static/img', function (err, filenames) {
      if (err) return console.dir(err);
      for (let index in filenames) {
        const filename = filenames[index];
        if (filename.indexOf('.png') ||
            filename.indexOf('.png') ||
            filename.indexOf('.png') ||
            filename.indexOf('.git')) {
          const fs = require('fs'); //Load the filesystem module
          const stats = fs.statSync(filename);
          const fileSize = stats.size / 1024;
          if (fileSize >= FILE_SIZE_LIMIT) {
            count++;
            console.log(`${filename} is over the Limit.`);
          }
        }
      }
      resolve(count);
    });
  });
};

describe('All Image Size Check', function() {
  it(`All Image size should be less than ${FILE_SIZE_LIMIT}K`, function(done) {
    checkSizeOfAllImages()
    .then(function(res){
      expect(res).to.equal(0);
      done();
    })
    .catch(done);
  });
});
