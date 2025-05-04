"use client"
import Link from "next/link";
import React, { useEffect, useState } from 'react'
import { Checkbox } from "@/components/ui/checkbox"
import Loading from "@/app/loading";
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from 'next/navigation'


async function getDetailTODOData(id: number) {
  const response = await fetch(`http://localhost:3000/api/post/${id}`, {
    cache: "no-store",
  })

  const todoDetailData: TODOData = await response.json()
  return todoDetailData
}

export const formSchema = z.object({
  title: z
  .string()
  .min(2, {message: "タイトルは2文字以上で入力して下さい。"}),
  content: z
  .string()
  .min(2, {message: "本文は10文字以上で入力して下さい。"})
  .max(140, {message: "本文は10文字以上で入力して下さい。"})  
})

const TODODetailPage = ({params}: {params: {todoId: number}}) => {
  const [todoDetailData, setTodoDetailData] = useState();
  const [checked, setChecked] = useState(false)
  // const router = useRouter()
  
  useEffect(() => {
    const setUpdateData = async () => {
      const todoDetailData = await getDetailTODOData(params.todoId);
      setTodoDetailData(todoDetailData);
    };
    setUpdateData();
  }, []);

  const handleChecked = (checked: boolean) => {
    return setChecked(!checked)
  }

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id: parseInt(todoDetailData.id),
      title: "",
      content: ""
    }
  })

  async function onSubmit(value: z.infer<typeof formSchema>) {
    const {id, title, content} = value
    updateTodo({id, title, content})
  }

  if (!todoDetailData) {
    return <Loading />
  } else {
    if (!checked) {
      return (
        <div className="mx-auto max-w-4xl p-4">
          <div className="flex items-center space-x-2">
            <Checkbox 
            id="update_flag"
            onClick={() => handleChecked(checked)}
            />
            <label
              htmlFor="update_flag"
              className="text-sm font-medium leading-none"
            >
              編集する
            </label>
          </div>
          <div className="mb-8">
            <h1 className="text-2xl font-bold">{todoDetailData.title}</h1>
          </div>
    
          <div className="mb-8">
            <p className="text-gray-900">{todoDetailData.content}</p>
          </div>
    
          <p className="py-1">作成日:{new Date(todoDetailData.createdAt).toLocaleString()}</p>
          <p className="py-1 mb-3">更新日:{new Date(todoDetailData.updatedAt).toLocaleString()}</p>
    
          <Link href={'/'} className="bg-slate-300 text-black py-2 px-4 rounded-md">Home</Link>
        </div>
      )
    } else {
      return (
        <div className="mx-auto max-w-4xl p-4">
          <Form {...form}>
            <div className="flex items-center space-x-2">
              <Checkbox 
              id="update_flag"
              onClick={() => handleChecked(checked)}
              />
              <label
                htmlFor="update_flag"
                className="text-sm font-medium leading-none"
              >
                編集する
              </label>
            </div>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 w-1/2 py-4">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input placeholder="タイトル" defaultValue={todoDetailData.title} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="content"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>本文</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="投稿内容"
                        defaultValue={todoDetailData.content}
                        className='resize-none'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button className='bg-blue-300' type="submit">更新する</Button>
            </form>
          </Form>
        </div>
      )
      
    }
  }
}

export default TODODetailPage
