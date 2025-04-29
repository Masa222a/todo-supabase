import { prisma } from "@/lib/prismaClient";
import { redirect } from "next/navigation";

export const deleteTODO = async({}) => {
  await prisma.todo.delete({
    where: {
      id: id
    }
  })

  redirect('/')
}