import { Application } from "@oak/oak";
import { router } from "./router.ts";

const app = new Application();
app.use(router.allowedMethods());
app.use(router.routes());

app.listen({ port: 8080, hostname: "0.0.0.0" });
