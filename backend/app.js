import express from 'express';

import initApiRoutes from './src/routes/routes.js';

const appExpress = express();
appExpress.use(express.json())
appExpress.use('/campus', initApiRoutes());

export default appExpress;