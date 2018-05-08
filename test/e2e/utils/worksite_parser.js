let parse = require('csv-parse/lib/sync');
let fs = require('fs');


module.exports = {
  getWorksiteRecords: function() {
    let path = './core_worksites.csv';
    let contents = fs.readFileSync(path);
    return parse(contents, {delimiter: ',', columns: true});
  }
};
