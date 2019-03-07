const mongoose = require('mongoose');
const ObjectID = require('mongodb').ObjectID;
const config = require('../config/db-config')
const Comment = require('../models/comment.model');

const connectionString = `mongodb://${config.dbUser}:${config.dbPass}@ds123465.mlab.com:23465/comment-system`;

mongoose.connect(connectionString, {
    useNewUrlParser: true
});

mongoose.connection.once('open', function () {
    console.log('MongoDB database connection established successfully');
})

module.exports = function (router) {

    router.route('/').get(function (req, res) {
        Comment.find(function (err, comments) {
            if (err) {
                console.log(err);
            } else {
                res.json(comments);
            }
        });
    });

    router.route('/:id').get(function (req, res) {
        let id = req.params.id;
        const details = {
            '_id': new ObjectID(id)
        };
        Comment.findById(details, function (err, comment) {
            res.json(comment);
        });
    });

    router.route('/add').post(function (req, res) {
        let comment = new Comment(req.body);
        comment.date = Date(Date.now()).toString();
        comment.save()
            .then(comment => {
                res.status(200).json({
                    'comment': 'comment added successfully'
                });
            })
            .catch(err => {
                res.status(400).send('Adding new comment failed');
            });
    });

    router.route('/update/:id').post(function (req, res) {
        const details = {
            '_id': new ObjectID(req.params.id)
        };
        Comment.findById(details, function (err, todo) {
            if (!todo) {
                res.status(404).send('data is not found');
            } else
                todo.todo_description = req.body.todo_description;
            todo.todo_responsible = req.body.todo_responsible;
            todo.todo_priority = req.body.todo_priority;
            todo.todo_completed = req.body.todo_completed;

            todo.save().then(todo => {
                    res.json('Todo updated');
                })
                .catch(err => {
                    res.status(400).send('Update not possible');
                });
        });
    });

    router.route('/delete/:id').delete(function (req, res) {
        const id = req.params.id;
        const details = {
            '_id': new ObjectID(id)
        };

        Comment.find(details).remove((err, item) => {
            if (err) {
                res.send('Deleting comment: ' + id + 'failed');
            } else {
                res.send('Comment ' + id + 'is deleted!');
            }
        })
    });
};

mongoose.connection.on('error', function (err) {
    console.log('Mongoose default connection has occurred ' + err + ' error');
});

mongoose.connection.on('disconnected', function () {
    console.log('Mongoose default connection is disconnected');
});

process.on('SIGINT', function () {
    mongoose.connection.close(function () {
        console.log('Mongoose default connection is disconnected due to application termination');
        process.exit(0)
    });
});