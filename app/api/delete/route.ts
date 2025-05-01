import { prisma } from "@/lib/prismaClient";
// import { NextResponse } from "next/server";

export async function DELETE(
  todoId: number
) {
  await prisma.todo.delete({
    where: {
    id: todoId,
    }
  })

  // return NextResponse.json(todoDetailData)
}