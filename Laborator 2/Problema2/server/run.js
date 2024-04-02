var api = require('./api.js').app;
var users = require('./users.json');

api.get('/', function(request, response) {
  response.json("Node.js backend");
});

api.get('/users', function(request, response) {
  response.json(users);
});

api.put('/users', function(request, response) {
  users.push(request.body);
  response.json('User was saved successfully');
});

api.delete('/users/:index', function(request, response) {
  var index = parseInt(request.params.index);
  users.splice(index, 1);
  response.json('User at index ' + index + ' was deleted');
});

api.listen(3000, function() {
  console.log('CORS-enabled web server is listening on port 3000...');
});