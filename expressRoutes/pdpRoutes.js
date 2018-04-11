// pdpRoutes.js

var express = require('express');
var app = express();
var pdpRoutes = express.Router();

// require item model in our routes module
var pdp = ('../models/pdp');

//define store route
pdpRoutes.route('/add').post(function (req, res){
    var pdp = new pdp(req.body);
    pdp.save().then(item => {
        res.status(200).json({'pdp': 'pdp agregado con exito'});
    })
    .catch(err => {
        res.status(400).send("no fe posible guardar en la base de datos");
    });
});

//define get data(index or listing) route
pdpRoutes.route('/').get(function (req, res){
    pdp.find(function (err, pdps){
        if(err){
            console.log(err);
        }
        else{
            res.json(pdps);
        }
    });
});

//defined update route
pdpRoutes.route('/update/:id').post(function (req, res){
    pdp.findById(req.params.id, function (err, pdp){
        if(!pdp){
            return next(new Error('no se pudo abrir el documento'));
        }
        else{
            pdp.kapital = req.body.kapital;
            pdp.honorarium = req.body.honorarium;

            pdp.save().then(pdp => {
                res.json('Se actualizo con exito');
            })
            .catch(err => {
                res.status(400).send("no se pudo actualizar los datos en la base de datos");
            });
        }
    });
});

//defined delete remove destroy route
pdpRoutes.route('/delete/:id').get(function (req, res) {
    pdp.findByIdAndRemove({_id: req.params.id}, function(err, pdp){
        if(err) res.json(err);
        else res.json('se borro con exito');
    });
});

module.exports = pdpRoutes;