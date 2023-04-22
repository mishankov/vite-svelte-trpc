import path from "path";
import { fileURLToPath } from "url";

import express from "express";
import * as trpcExpress from "@trpc/server/adapters/express";
import sirv from "sirv";
import compress from "compression";

import { appRouter, createContext } from "./trpc.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const assets = sirv("public", {
  maxAge: 31536000,
  immutable: true,
});

app.use(
  "/trpc",
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
  })
);

app.use(express.static(path.join(__dirname, "public")));
app.use(compress, assets);

const { PORT = 5000 } = process.env;

app.listen(PORT, () => {
  console.log();
  console.log(
    `tRPC running at \x1b[36mhttp://localhost:\x1b[1m${PORT}/\x1b[0m`
  );
});
