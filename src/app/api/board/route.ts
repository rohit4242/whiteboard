import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";

import db from "@/lib/db";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { userId } = auth();
    const { organizationId, query } = body.data;

    if (!userId) {
      return new NextResponse("Unauthenticated", { status: 403 });
    }

    if (!organizationId) {
      return new NextResponse("title is required", { status: 400 });
    }

    const board = await db.board.findMany({
      where: {
        organizationId,
      },
    });

    return NextResponse.json(board);
  } catch (error) {
    console.log("[BOARDS_GET]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

// export async function POST(req: Request) {
//   try {
//     const body = await req.json();

//     const { userId } = auth();
//     const { orgId, title } = body.data;

//     if (!userId) {
//       return new NextResponse("Unauthenticated", { status: 403 });
//     }

//     if (!title) {
//       return new NextResponse("title is required", { status: 400 });
//     }

//     const board = await db.board.create({
//       data: {
//         title,
//         organizationId: orgId,
//         userId,
//       },
//     });

//     return NextResponse.json(board);
//   } catch (error) {
//     console.log("[FAVORITE_POST]", error);
//     return new NextResponse("Internal error", { status: 500 });
//   }
// }
