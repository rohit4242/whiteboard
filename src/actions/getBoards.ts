import db from "@/lib/db";

export const getBoards = async (organizationId: string) => {
  try {
    const response = await db.board.findMany({
      where: {
        organizationId,
      },
    });

    console.log("Here is ok");
    console.log(response);

    return response;
  } catch (error) {
    console.error("Error fetching boards:", error);
  }
};
