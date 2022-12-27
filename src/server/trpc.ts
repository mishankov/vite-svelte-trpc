import { initTRPC, type inferAsyncReturnType } from "@trpc/server";
import type * as trpcExpress from "@trpc/server/adapters/express";
import superjson from "superjson";

import { userList, counter, increaseCounter } from "./test_data.js";

// created for each request
export const createContext = (_options: trpcExpress.CreateExpressContextOptions) => ({}); // no context

type Context = inferAsyncReturnType<typeof createContext>;

export const t = initTRPC.context<Context>().create({ transformer: superjson });

export const appRouter = t.router({
  userById: t.procedure
    // The input is unknown at this time.
    // A client could have sent us anything
    // so we won't assume a certain data type.
    .input((val: unknown) => {
      // If the value is of type string, return it.
      // TypeScript now knows that this value is a string.
      if (typeof val === "string") return val;

      // Uh oh, looks like that input wasn't a string.
      // We will throw an error instead of running the procedure.
      throw new Error(`Invalid input: ${typeof val}`);
    })
    .query((req) => {
      const { input } = req;

      const user = userList.find((u) => u.id === input);

      return user;
  }),

  getCounter: t.procedure
    .query(() => {
      return counter
  }),

  increaseCounter: t.procedure
    .mutation(() => {
      increaseCounter()
      return counter
    })
});

// export type definition of API
export type AppRouter = typeof appRouter;
