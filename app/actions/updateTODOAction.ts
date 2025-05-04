"use server"

import { z } from "zod"
import { formSchema } from "../todo-posts/create/page"
import { prisma } from "@/lib/prismaClient"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export const updateTODO = async ({
  id, title, content
}: z.infer<typeof formSchema>) => {
  await prisma.todo.update({
    where: {
      id: id,
    },
    data: {
      title,
      content
    }
  })

  revalidatePath("/")

  redirect("/")
}
