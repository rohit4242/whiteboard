import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";

import db from "@/lib/db";

export async function DELETE({ params }: { params: { boardID: string } }) {
  console.log(params.boardID);
  // try {
  //   console.log(params.boardID)

  //   const { userId } = auth();

  //   if (!userId) {
  //     return new NextResponse("Unauthenticated", { status: 403 });
  //   }

  //   const board = await db.board.delete({
  //     where: {
  //       id: params.boardID,
  //     },
  //   });

  //   return NextResponse.json(board);
  // } catch (error) {
  //   console.log("[BOARD_DELETE]", error);
  //   return new NextResponse("Internal error", { status: 500 });
  // }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { userId } = auth();
    const { boardID } = body.data;

    if (!userId) {
      return new NextResponse("Unauthenticated", { status: 403 });
    }

    if (!boardID) {
      return new NextResponse("Board ID is required", { status: 400 });
    }

    const board = await db.board.findUnique({
      where: {
        id: boardID,
      },
    });

    return NextResponse.json(board);
  } catch (error) {
    console.log("[BOARDS_GET]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
