const mongoose = require('mongoose');
const ObjectID = require('mongodb').ObjectID;
const config = require('../config/db-config')
const Comment = require('../models/comment.model');

const connectionString = `mongodb://${config.dbUser}:${config.dbPass}@ds123465.mlab.com:23465/comment-system`;

mongoose.connect(connectionString, {
    useNewUrlParser: true
});

mongoose.connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
})

module.exports = function (router) {

    router.route('/').get((req, res) => {
        Comment.find().sort({
            dateCreated: 'descending'
        }).exec((err, comments) => {
            if (err) {
                res.status(400).send(`Load data failed. Error details : ${err}`);
            } else {
                res.status(200).json(comments);
            }
        });
    });

    router.route('/add').post((req, res) => {
        let comment = new Comment(req.body);
        comment.dateCreated = Date(Date.now()).toString();
        comment.save()
            .then(({ _id }) => {
                res.status(200).send(`comment ${_id} added successfully`);
            })
            .catch((err) => {
                res.status(400).send(`Add failed. Error details : ${err}`);
            });
    });

    router.route('/update/:id').post((req, res) => {
        const details = {
            '_id': new ObjectID(req.params.id)
        };
        Comment.findById(details, (err, comment) => {
            if (!comment) {
                res.status(404).send(`Comment with provided ID (${req.params.id})is not found`);
            } else {
                comment.author = req.body.author;
                comment.text = req.body.text;
                comment.dateCreated = Date(Date.now()).toString();
            }

            comment.save().then(comment => {
                   res.status(200).send(`comment ${comment._id} updated successfully`);
                })
                .catch(err => {
                    res.status(400).send(`Edit failed. Error details : ${err}`);
                });
        });
    });

    router.route('/delete/:id').post((req, res) => {
        const id = req.params.id;
        const details = {
            '_id': new ObjectID(id)
        };

        Comment.find(details).deleteOne((err) => {
            if (err) {
                res.status(400).send(`Delete failed. Error details : ${err}`);
            } else {
                res.status(200).send(`comment ${id} deleted successfully`);
            }
        })
    });
};

mongoose.connection.on('error', (err) => {
    console.log('Mongoose default connection has occurred ' + err + ' error');
});

mongoose.connection.on('disconnected', () => {
    console.log('Mongoose default connection is disconnected');
});

process.on('SIGINT', () => {
    mongoose.connection.close(() => {
        console.log('Mongoose default connection is disconnected due to application termination');
        process.exit(0)
    });
});