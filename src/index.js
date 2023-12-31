// Imports
const express = require('express');
const handlebarsConfig = require('./config/handlebarsConfig.js');
const expressConfig = require('./config/expressConfig.js');
const dbConfig = require('./config/dbConfig.js');
const  {PORT} = require('./constants.js');
const routes = require('./router.js');
const {auth} = require('./customMiddleware/auth.js');

//Local variables
const app = express();


//  Configuration
expressConfig(app);
handlebarsConfig(app);
dbConfig();

// Routing
app.use(routes);


app.listen(PORT, () => {
    console.log(`Server is running on htps://localhost:${PORT}`);
})