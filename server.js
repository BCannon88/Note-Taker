//Dependencies
const express = require('express');
const apiRoute = require('./routes/apiRoutes');
const htmlRoute = require('./routes/htmlRoutes');

//Express Config
const app = express();
const PORT = process.env.PORT || 3001;


//setup for data parsing 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));


//Router: points our server to a series of routes
app.use("/api", apiRoute);
app.use("/", htmlRoute);

//Start server
app.listen(PORT, function() {
console.log(`API Server is listening on PORT: ${PORT}`);
});