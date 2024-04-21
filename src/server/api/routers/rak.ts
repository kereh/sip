import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

export const rakRouter = createTRPCRouter({
  jumlah: protectedProcedure.query(async ({ ctx }) => {
    return await ctx.db.rak.count();
  }),
});
