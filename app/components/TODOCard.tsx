"use client"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link";
import { Button } from '@/components/ui/button';
import { Trash2 } from 'lucide-react';
import { useRouter } from "next/navigation";

interface TODODataProps {
  todoData: TODOData
}

const TODOCard = ({todoData}: TODODataProps) => {
  const {id, title, content, createdAt, updatedAt} = todoData
  const router = useRouter()

  const deleteTodo = async (id: number) => {
    const res = await fetch(
        `http://localhost:3000/api/post/${id}`,
        {
            method: 'DELETE',
        },
    )
    const data = await res.json()
    console.log(data)
    router.refresh()
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{content}</p>
        <p>createdAt:{new Date(createdAt).toLocaleString()}  updatedAt:{new Date(updatedAt).toLocaleString()}</p>
      </CardContent>
      <CardFooter className='relative'>
        <Link href={`/todo-posts/${id}`} className="text-blue-500">Read More</Link>
        <div className="flex flex-col items-center space-y-4 p-8">
          <Button
            onClick={() => deleteTodo(id)}
            variant="destructive" 
            size="sm" 
            className="absolute right-7 bg-red-500 text-black rounded"
          >
          <Trash2 className="mr-2 h-4 w-4" />
            削除
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}

export default TODOCard
