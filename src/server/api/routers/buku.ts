import { protectedProcedure, createTRPCRouter } from "~/server/api/trpc";

export const bukuRouter = createTRPCRouter({
  semua: protectedProcedure.query(async ({ ctx }) => {
    return await ctx.db.buku.findMany({
      include: {
        rak: true,
      },
    });
  }),
});
