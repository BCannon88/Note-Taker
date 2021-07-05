//Dependencies
const express = require('express');
const apiRoute = require('./routes/apiRoutes');
const htmlRoute = require('./routes/htmlRoutes');


const app = express();
const PORT = process.env.PORT || 3001;



app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));


//Router
app.use("/api", apiRoute);
app.use("/", htmlRoute);


app.listen(PORT, function() {
console.log(`API Server is listening on PORT: ${PORT}`);
});