import db from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { userId } = auth();
    const { orgId, title, autherName } = body.data;

    if (!userId) {
      return new NextResponse("Unauthenticated", { status: 403 });
    }

    if (!title) {
      return new NextResponse("title is required", { status: 400 });
    }

    const board = await db.board.create({
      data: {
        title,
        organizationId: orgId,
        userId,
        authorId: userId,
        authorName: autherName
      },
    });

    return NextResponse.json(board);
  } catch (error) {
    console.log("[FAVORITE_POST]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
