import Koa from "koa";
import bodyParser from "koa-bodyparser";
import helmet from "koa-helmet";
import Router from "koa-router";
import routes from "./routes";
import bunyan from "bunyan";

const app = new Koa();
const logger = bunyan.createLogger({ name: "server" });
const port = 3003;

// Setup downstream error handling
app.use(async (ctx: Koa.Context, next) => {
  try {
    await next();
  } catch (err) {
    ctx.status = err.status || 500;
    ctx.body = err.message;
    ctx.app.emit("error", err, ctx);
  }
});

// Setup security
app.use(helmet());

// Setup body parsing
app.use(bodyParser());

// Setup API routes
const apiRoutes = new Router({ prefix: "/api" });
routes(apiRoutes);
app.use(apiRoutes.routes());
app.use(apiRoutes.allowedMethods());

/**
 * centralized error handling as recommended
 * @src https://github.com/koajs/koa/wiki/Error-Handling
 */
app.on("error", (error, ctx) => {
  if (!error.statusCode) {
    // Unhandled error. Log the error and exit
    logger.fatal(error);
    process.exit(1);
  }
});

// Start the application
app.listen(port, () => {
  logger.info(`🚀 actions server listening on port ${port}`);
});
