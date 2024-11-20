import { Application } from "@oak/oak";
import { baseUrl } from "../api/endpoints.ts";
import { router } from "./router.ts";

const app = new Application();
app.use(router.allowedMethods());
app.use(router.routes());

app.listen({ port: baseUrl.port, hostname: baseUrl.hostname });
