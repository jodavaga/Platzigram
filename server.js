//Define la variable que se va usar con Expresss, busca el modulo
var express = require('express');
//se guarda el 'main' de expree en la variable app
var app = express();

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', function (req, res) {
  //cuando entre al index, le muestra al cliente 'Hola Mundo'
  res.render('index');
});

app.get('/signup', function (req, res) {
  res.render('index');
})

app.get('/signin', function (req, res) {
  res.render('index');
})

//Se inicializa el puerto para que escuche por el puerto 3000
app.listen(3000, function (err) {
  if (err) return console.log('Hubo un error'), process.exit(1);

  console.log('Platzigram escuchando en el puerto 3000');
})