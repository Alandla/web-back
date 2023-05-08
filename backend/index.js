const express = require('express');
const mysql = require('mysql');

const app = express();

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'motdepasse',
  database: 'ma_base_de_donnees'
});

connection.connect(function(error) {
  if (error) {
    console.error('Erreur de connexion à la base de données : ' + error.stack);
    return;
  }

  console.log('Connecté à la base de données MySQL.');
});

app.get('/', function(request, response) {
  connection.query('SELECT * FROM ma_table', function(error, results) {
    if (error) {
      console.error('Erreur lors de la récupération des données : ' + error.stack);
      return;
    }

    response.send('Résultat trouvé');
  });
});

app.listen(3000, function() {
  console.log('Serveur démarré sur le port 3000.');
});
