import { Application, Router } from "@oak/oak";
import { cors } from "https://deno.land/x/nhttp@2.0.2/lib/cors.ts";
import { oakCors } from "https://deno.land/x/cors/mod.ts";
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
