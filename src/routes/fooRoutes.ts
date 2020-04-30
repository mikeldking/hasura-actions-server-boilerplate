import * as Koa from "koa";
import Router from "koa-router";
import { IHasuraActionRequestBody } from "../types/hasuraTypes";

const router = new Router();

router.post("/foo_action", async (ctx: Koa.Context) => {
  try {
    const {
      input: { userId, name, description },
    } = ctx.request.body as IHasuraActionRequestBody<any>;

    // Place business logic here

    ctx.status = 200;
    ctx.body = {
      successful: true,
    };
  } catch (error) {
    ctx.status = 400;
    let errorBody = {
      message: error.message,
    };
    if (error.response) {
      errorBody = Object.assign(errorBody, { ...error.response });
    }
    ctx.body = errorBody;
  }
});

export default router;
