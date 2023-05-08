const express = require('express');
const app = express();

const data = [
  { id: 1, name: "John", age: 30 },
  { id: 2, name: "Jane", age: 25 },
  { id: 3, name: "Bob", age: 40 }
];

app.get('/', function(request, response) {
  response.json(data);
});

app.listen(3000, function() {
  console.log('Serveur démarré sur le port 3000.');
});