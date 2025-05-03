import Link from "next/link";
import React from 'react'
import { Checkbox } from "@/components/ui/checkbox"

async function getDetailTODOData(id: number) {
  const response = await fetch(`http://localhost:3000/api/post/${id}`, {
    cache: "no-store",
  })

  const todoDetailData: TODOData = await response.json()
  return todoDetailData  
}

const TODODetailPage = async ({params}: {params: {todoId: number}}) => {
  const todoDetailData = await getDetailTODOData(params.todoId)
  const {title, content, createdAt, updatedAt} = todoDetailData

  return (
    <div className="mx-auto max-w-4xl p-4">
      <div className="flex items-center space-x-2">
        <Checkbox id="terms2" />
        <label
          htmlFor="terms2"
          className="text-sm font-medium leading-none"
        >
          編集する
        </label>
      </div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold">{title}</h1>
      </div>

      <div className="mb-8">
        <p className="text-gray-900">{content}</p>
      </div>

      <p className="py-1">作成日:{new Date(createdAt).toLocaleString()}</p>
      <p className="py-1 mb-3">更新日:{new Date(updatedAt).toLocaleString()}</p>

      <Link href={'/'} className="bg-slate-300 text-black py-2 px-4 rounded-md">Home</Link>
    </div>
  )
}

export default TODODetailPage
