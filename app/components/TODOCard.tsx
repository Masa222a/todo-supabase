import React from 'react'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link";

interface TODODataProps {
  todoData: TODOData
}

const TODOCard = ({todoData}: TODODataProps) => {
  const {id, title, content, createdAt, updatedAt} = todoData
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{content}</p>
        <p>createdAt:{new Date(createdAt).toLocaleString()}  updatedAt:{new Date(updatedAt).toLocaleString()}</p>
      </CardContent>
      <CardFooter>
        <Link href={`/todo-posts/${id}`} className="text-blue-500">Read More</Link>
      </CardFooter>
    </Card>
  )
}

export default TODOCard
