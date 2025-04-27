import { prisma } from "@/lib/prismaClient";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const allTodoPosts = await prisma.todo.findMany()
  return NextResponse.json(allTodoPosts)
}