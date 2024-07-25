import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";

import db from "@/lib/db";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { userId } = auth();
    const { boardId } = body;

    if (!userId) {
      return new NextResponse("Unauthenticated", { status: 403 });
    }

    if (!boardId) {
      return new NextResponse("ID is required", { status: 400 });
    }

    const board = await db.board.update({
      where: {
        id: boardId,
      },
      data: {
        isFavorite: {
          set: true,
        },
      },
    });

    return NextResponse.json(board);
  } catch (error) {
    console.log("[FAVORITE_POST]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
export async function DELETE(req: Request) {
  try {
    const { userId } = auth();

    const body = await req.json();

    const { boardId } = body;

    if (!userId) {
      return new NextResponse("Unauthenticated", { status: 403 });
    }

    const board = await db.board.update({
      where: {
        id: boardId,
      },
      data: {
        isFavorite: {
          set: false,
        },
      },
    });
    return NextResponse.json(board);
  } catch (error) {
    console.log("[FAVORITE_DELETE]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
