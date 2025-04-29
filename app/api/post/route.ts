import { prisma } from "@/lib/prismaClient";
import { NextResponse } from "next/server";

export async function GET() {
  const allTodoPosts = await prisma.todo.findMany()
  return NextResponse.json(allTodoPosts)
}

// export async function POST(req: Request) {
//   const {title, content} = await req.json()
//   const post = await prisma.todo.create({
//     data: {
//       title,
//       content
//     }
//   })
//   return NextResponse.json(post)
// }