const express = require('express');
require('dotenv').config();
const colors = require('colors');
const connectDB = require('./config/db_config');
const app = express();
const PORT = process.env.PORT || 5000;

// DB Connection
connectDB();

// body Pareser
app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.get('/', (req,res)=>{
  res.json({
    message : "WELCOME TO THE TASK TRACKER API",
  });
});

// todo routes
app.use('/api/todo', require('./routes/todo/todoRoutes'));

app.listen(PORT, ()=>{
  console.log(`Server is running at PORT : ${PORT}`.bgBlue.white);
})