const express=require('express');
const errorHandler = require('./middleware/errorHandler');
const connectDb  = require('./config/dbConnection');
const dotenv=require('dotenv').config();

const PORT=process.env.PORT || 5000;


connectDb()
const app=express();
app.use(express.json());
app.use('/api/contacts',require("./routes/contactRoutes"));
app.use(errorHandler);

app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
})

//   "name":"Dipesh",
//   "email":"p@gmail.com",
//   "phone":"8928634625"