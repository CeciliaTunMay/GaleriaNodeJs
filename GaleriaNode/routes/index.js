var express = require('express');
var router = express.Router();

//Código a insertar
var fileUpload = require('express-fileupload');
var bodyParser = require('body-parser');
router.use(fileUpload());
var mysql = require('mysql');
var db = require('../models/conexion');

/* GET home page. */
router.get('/', function (req, res, next) {
  db.query("SELECT * FROM imagenes", function (err, resultados) {
    if (err) throw err;
    res.render('index', { title: 'Galería', imagenes: resultados })
  });
});

router.post('/AgregarImagen', function(req, res, next) {

  if(!req.files){return res.status(400).send("No hay archivo");}
  let archivoASubir = req.files.imagen;
  archivoASubir.mv('public/images/' + req.files.imagen.name, function(err, resultados){
    if (err)
      return res.status(500).send(err);
  });

  var imagen = {
    nombre:req.body.nombre,
    descripcion:req.body.descripcion,
    imagen:req.files.imagen.name
  }

  console.log(imagen);

  db.query("INSERT INTO imagenes SET ?", imagen, function(err, resultados){

    console.log(resultados);

    res.redirect('/');

  });

});

module.exports = router;
