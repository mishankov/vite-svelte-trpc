import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import superjson from "superjson";

import type { AppRouter } from "../server/trpc";

export const client = createTRPCProxyClient<AppRouter>({
  links: [httpBatchLink({ url: "/trpc" })],
  transformer: superjson,
});
