const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 4000;
const objectRoutes = express.Router();

require("dotenv").config();

const path = require("path")

let Object = require('./objectModel');

app.use(cors());
app.use(bodyParser.json());


const connection = 'mongodb+srv://admin:bestpass@cluster0.jzcp3.mongodb.net/trainingVerify?retryWrites=true&w=majority';

mongoose.connect(connection,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    .then(() => console.log("Database Connected Successfully"))
    .catch(err => console.log(err));

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
            object.objectText = req.body.objectText;
            object.objectColor = req.body.objectColor;
            object.objectSize =req.body.objectSize;

            object.save().then( object => {
                res.json('object updated');
            })
            .catch(err => {
                res.status(400).send('update not possible')
            });
    });
});

objectRoutes.route('/delete/:id').delete(function(req, res) {
    Object.findByIdAndDelete(req.params.id, function(err, object){
        if (!object)
            res.status(404).send('data not found')
        else
            object.objectText = req.body.objectText;
            object.objectColor = req.body.objectColor;
            object.objectSize =req.body.objectSize;

            object.save().then( object => {
                res.json('Deleted object!');
            })
            .catch(err => {
                res.status(400).send('update not possible')
            });
    });
});

app.use('/objects', objectRoutes);

app.use(express.static(path.resolve(__dirname, "client", "build")))

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"))
})

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});