//Dependencies
const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

//Express Config
const app = express();
const PORT = process.env.PORT || 3001;


//setup for data parsing 
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//Router: points our server to a series of routes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

//Start server
app.listen(PORT, function() {
console.log(`API Server is listening on PORT: ${PORT}`);
});