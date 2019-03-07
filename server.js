const express = require('express');
const bodyParser = require('body-parser');
const useCommentsRoutes = require('./routes');
const cors = require('cors');
const PORT = 8000;

const router = express.Router();
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));

useCommentsRoutes(router)
app.use('/api/comments', router);

app.listen(PORT, function () {
    console.log('Server is running on Port: ' + PORT);
});