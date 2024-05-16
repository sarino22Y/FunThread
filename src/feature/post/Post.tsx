import { PostHome } from '@/src/query/post.query'
import React from 'react'
import PostLayout from './PostLayout'
import Link from 'next/link'

 type PostProps = {
    post: PostHome
 }

const Post = ({post} : PostProps) => {     
  return (
    <PostLayout user={post.user} postId={post.id} createdAt={post.createdAt}>
        <Link href={`/posts/${post.id}`} className="text-sm text-foreground">
            {post.content}
        </Link>
        <div>
            
        </div>
    </PostLayout>
  )
}

export default Post