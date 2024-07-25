'use server'
import db from "@/lib/db";

export const getBoardByID = async (id: string) => {
  const board = await db.board.findUnique({
    where: {
      id,
    },
  });

  return board;
};
