"use client"

import React, { useState } from 'react'
import { z } from 'zod'
import { User } from 'prisma/prisma-client'
import { Form, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { useRouter } from 'next/navigation'
import PostLayout from '@/src/feature/post/PostLayout'
import { ContentTextArea } from '@/src/feature/post/ContentTextArea'
import { Input } from '@/components/ui/input'
import { useForm } from 'react-hook-form'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { useZodForm } from '@/components/ui/form1'

const Schema = z.object({
  content: z.string().min(1).max(500),
})

export type WritePostFormValue = z.infer<typeof Schema>;

type WritePostFormProps = {
  user: User;
  onSubmit: (value: WritePostFormValue) => Promise<string>;
}

const WritePostForm = ({ user, onSubmit }: WritePostFormProps) => {
  const form = useZodForm({
    schema: Schema,
  })

  const router = useRouter();

  // const { register, handleSubmit, formState: { errors } } = useForm();
  // const [data, setData] = useState("");
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // prevent the default form submission
    const values = form.getValues(); // get form values
    const postId = await onSubmit(values);
    router.push(`/post/${postId}`);
  }

  return (
    <PostLayout user={user}>
      <Form {...form}>
        <form onSubmit={handleSubmit}>
          <FormField name="content" control={form.control} render={({ field }) => (
            <FormItem>
              {/* <ContentTextArea {...field}  rows={3}/> */}
              <Textarea
                {...field}
                placeholder="What's on your mind?"/>
            </FormItem>
        )}
          />
          <Button variant='default' size="sm" className='mt-5'>Post</Button>
        </form>
      </Form>
    </PostLayout>
  )
}

export default WritePostForm
