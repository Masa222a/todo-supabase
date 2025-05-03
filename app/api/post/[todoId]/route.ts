import { prisma } from "@/lib/prismaClient";
import { NextResponse } from "next/server";

export async function GET(
  req: Request, 
  {params}: {params: {todoId: string}}
) {
  const todoId = params.todoId
  const todoDetailData = await prisma.todo.findUnique({
    where: {
    id: parseInt(todoId),
  }})
  return NextResponse.json(todoDetailData)
}

export async function DELETE(
  req: Request, 
  {params}: {params: {todoId: string}}
) {
  const id = Number(params.todoId)
  const todo = await prisma.todo.delete({
    where: {
    id: id,
    }
  })

  return NextResponse.json(todo)
}

export async function UPDATE(
  req: Request, 
  {params}: {params: {todoId: string}},
  updateTodo: TODOData
) {
  const id = Number(params.todoId)
  const todo = await prisma.todo.update({
    where: {
    id: id,
    },
    data: {
      title: updateTodo.title,
      content: updateTodo.content
    }
  })

  return NextResponse.json(todo)
}