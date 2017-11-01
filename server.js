var express = require('express');
var app = express();
var history = require('connect-history-api-fallback');

app.use(history());
app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/dist'));

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
