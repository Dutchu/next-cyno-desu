import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const dogsRouter = createTRPCRouter({

    getAll: publicProcedure.query(({ ctx }) => {
        return ctx.prisma.dog.findMany();
    }),
});
