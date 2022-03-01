import * as trpc from '@trpc/server';
import { z } from 'zod';

export const appRouter = trpc
  .router()
  .query('getUser', {
    async resolve(req) {
      return { id: "hello", name: 'Bilbo' };
    },
  })
  .mutation('createUser', {
    // validate input with Zod
    input: z.object({ name: z.string().min(5) }),
    async resolve(req) {
      // use your ORM of choice
      return  {
        data: req.input,
      }
    },
  });

// export type definition of API
export type AppRouter = typeof appRouter;