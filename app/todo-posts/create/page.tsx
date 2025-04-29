'use client'
import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Textarea } from '@/components/ui/textarea'
// import { useRouter } from 'next/navigation'
import { postTODO } from '@/app/actions/postTODOAction'

export const formSchema = z.object({
  title: z
  .string()
  .min(2, {message: "タイトルは2文字以上で入力して下さい。"}),
  content: z
  .string()
  .min(2, {message: "本文は10文字以上で入力して下さい。"})
  .max(140, {message: "本文は10文字以上で入力して下さい。"})  
})

const CreateTodoPage = () => {
  // const router = useRouter()

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      content: ""
    }
  })

  async function onSubmit(value: z.infer<typeof formSchema>) {
    const {title, content} = value
    postTODO({title, content})
    // try {
    //   await fetch("http://localhost:3000/api/post", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({title, content}),
    //   })
    //   router.push("/")
    //   router.refresh()
    // } catch (err) {
    //   console.error(err)
    // }
  }
  
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 w-1/2 px-7 py-4">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="タイトル" {...field} />
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
                  placeholder='投稿内容'
                  className='resize-none'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className='bg-blue-300' type="submit">Submit</Button>
      </form>
    </Form>
  )
}

export default CreateTodoPage
