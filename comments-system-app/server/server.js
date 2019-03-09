const express = require('express');
const bodyParser = require('body-parser');
const useCommentsRoutes = require('./routes');
const cors = require('cors');
const PORT = process.env.PORT || 8000;

const router = express.Router();
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));

useCommentsRoutes(router)
app.use('/api', router);

app.listen(PORT, function () {
    console.log(`Server is running on Port:${PORT}`);
});