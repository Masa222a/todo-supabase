import { Link } from 'lucide-react'
import React from 'react'


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
      <div className="mb-8">
        <h1 className="text-2xl font-bold">{title}</h1>
      </div>

      <div className="mb-8">
        <p className="text-gray-900">{content}</p>
      </div>

      <Link href={"/"} className="bg-slate-300 text-black font-bold py-2 px-4 rounded-md">戻る</Link>

      <p>作成日:{new Date(createdAt).toLocaleString()}</p>
      <p>更新日:{new Date(updatedAt).toLocaleString()}</p>
    </div>
  )
}

export default TODODetailPage
