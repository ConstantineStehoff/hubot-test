'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _api = require('./api');

var _api2 = _interopRequireDefault(_api);

var _yahooFinance = require('yahoo-finance');

var _yahooFinance2 = _interopRequireDefault(_yahooFinance);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var jsonParser = _bodyParser2.default.json();

app.get('/healthCheck', _api2.default.healthCheck);
app.post('/echo', jsonParser, _api2.default.echo);
app.post('/createStream', jsonParser, _api2.default.createStream);
app.get('/readStream/:id', jsonParser, _api2.default.readStream);
app.get('/readMessages/:id', jsonParser, _api2.default.readMessages);
app.post('/sendMessages/:id', jsonParser, _api2.default.sendMessages);
app.get('/getStock/:symbol', jsonParser, _api2.default.getStock);

app.listen(4000, function () {
  console.log('*************************************************');
  console.log('** Bolt the Bot is Active! **');
  console.log('*************************************************');
});