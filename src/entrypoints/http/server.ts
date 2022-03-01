import { createServer as createHTTPServer } from 'http';
import gracefulShutdown from 'http-graceful-shutdown';
import express from 'express';
import helmet from 'helmet';
import { security, registerDiContainer } from './middlewares';
import { config, Logger } from '../../adapters'

const app = express()
const server = createHTTPServer(app)

gracefulShutdown(server);

app.use(helmet({ contentSecurityPolicy: (config.server.nodeEnv === 'production') ? undefined : false }));

app.use(registerDiContainer);
app.use(security);
app.use(express.json());

// app.use('/expense', expenseRoutes);
app.get('/healthcheck', function healthcheckEndpoint(req, res) {
  res.status(200).send('OK');
});
app.use(function(req, res) {
  res.status(404).json({
    error: `${req.method} method is not defined on ${req.path}`,
  });
});

(async () => {
  server.listen(config.server.port, () => {
    Logger.info(`Server started on  ${config.server.port}`)
  });
})();

export default server;

