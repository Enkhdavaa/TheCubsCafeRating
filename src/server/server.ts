import { Application, Router } from "@oak/oak";
import { oakCors } from "https://deno.land/x/cors@v1.2.2/mod.ts";
import { baseUrl } from "../api/endpoints.ts";

const router = new Router();

router.get("/getRates", (ctx) => {
  console.log(ctx.request.body);
  ctx.response.body = { test: 23 };
});

router.get("/getTops", (ctx) => {
  console.log(ctx.request.body);
  ctx.response.body = "getTops";
});

router.post("/rateCafeProduct", (ctx) => {
  console.log(ctx.request.body);
  ctx.response.body = "rateCafeProduct";
});

const app = new Application();
app.use(
  oakCors({
    origin: "http://localhost:5173",
  })
);
app.use(router.allowedMethods());
app.use(router.routes());

app.listen({ port: baseUrl.port, hostname: baseUrl.hostname });
