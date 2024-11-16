import { Application, Router } from "@oak/oak";
import { oakCors } from "https://deno.land/x/cors@v1.2.2/mod.ts";
import { baseUrl } from "../api/endpoints.ts";
import { router } from "./router.ts";

const app = new Application();
app.use(
  oakCors({
    origin: "http://localhost:5173",
  })
);
app.use(router.allowedMethods());
app.use(router.routes());

app.listen({ port: baseUrl.port, hostname: baseUrl.hostname });
