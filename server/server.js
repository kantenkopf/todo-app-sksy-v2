const express = require('express');
const cors = require('cors');

require('dotenv').config();
require('./helpers/mongodb.helper');

const PORT = process.env.PORT;
const app = express();

app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json());

// static content
app.use('/', express.static(__dirname + "/views/"));

// api route
app.use('/api', require('./routes/api'));

app.listen(PORT, () => {
    console.log(`\nServer listening at: http://localhost:${PORT}\nAPI access via: http://localhost:${PORT}/api\n`);
})

