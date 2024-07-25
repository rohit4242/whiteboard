import db from "@/lib/db";

export const getFavorite = async (orgId: string) => {
  const favorite = await db.board.findMany({
    where: {
      id: orgId,
      isFavorite: true
    },

  });


  return favorite;
};
