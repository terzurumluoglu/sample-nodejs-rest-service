const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const routes = require('./routes');
const app = express();
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
const swaggerConfig = require('./swagger');
const port = process.env.PORT || 8080;

app.use('/api/v1', routes);
// app.use('/api/v2', routes);

app.use('/swagger',swaggerUi.serve,swaggerUi.setup(swaggerConfig));

//start http server
app.listen(port);