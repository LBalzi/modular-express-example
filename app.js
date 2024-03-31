// Import Express and set up the app
const express = require('express');
const app = express();
const errorHandlers = require('./errorHandlers'); // Importing error handlers module
const helpers = require("./helpers");
var routes = require('./routes');

app.use('/', routes);

app.use(errorHandlers.handle404Error);
app.use(errorHandlers.handleGlobalErrors);

app.use(helpers.reverseString);
app.use(helpers.shortenString);


/*
* 404 and Global Error Handlers
*/

// Turn on Express server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
})

module.exports = router;
