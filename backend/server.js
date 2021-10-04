const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 4000;
const objectRoutes = express.Router();

let Object = require('./objectModel');

app.use(cors());
app.use(bodyParser.json());


mongoose.connect('mongodb://127.0.0.1:27017/objects', { useNewUrlParser: true });
const connection = mongoose.connection;


connection.once('open', function() {
    console.log('Connected to db');
})


objectRoutes.route('/').get(function(req, res) {
    Object.find(function(err, objects) {
        if(err){
            console.log(err);
        }
        else{
            res.json(objects);
        }
    });
});
objectRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    Object.findById(id, function(err, object) {
        res.json(object);
    });
});
objectRoutes.route('/add').post(function(req, res) {
    let object = new Object(req.body);
    object.save()
        .then(object => {
            res.status(200).json({'object':'object added'});
        })
        .catch(err => {
            res.status(400).send('adding object failed');
        });
});
objectRoutes.route('/update/:id').post(function(req, res) {
    Object.findById(req.params.id, function(err, object){
        if (!object)
            res.status(404).send('data not found')
        else
            object.object_text = req.body.object_text;
            object.object_color = req.body.object_color;
            object.object_size =req.body.object_size;

            object.save().then( object => {
                res.json('object updated');
            })
            .catch(err => {
                res.status(400).send('update not possible')
            });
    });
});

app.use('/objects', objectRoutes);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});