import Router from "koa-router";

import fooRoutes from "./fooRoutes";

export default (router: Router) => {
  router.use(
    "/foo",
    async (ctx, next) => {
      await next();
    },
    fooRoutes.routes(),
    fooRoutes.allowedMethods()
  );
  return router;
};
