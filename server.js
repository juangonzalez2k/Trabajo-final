const express = require('express');
//const cors = require('cors');

const router = require("./app/routes/customer.routes")

const app = express();


//app.use(cors());

app.use(express.json());
app.use('/api/customers', router);

//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true }));

//const db = require('./app/models/customer.model');
//const res = require('express/lib/response');

/*
app.get('/', (req, res)=> {
    res.json({ message: "Welcome to customer aplication" });
});
*/

const PORT = process.env.PORT || 8080;

app.listen(PORT, ()=> {
    console.log(" Server is running on Port ${PORT}. ");
});

