import { getUser } from '@/src/query/user.query'
import React from 'react'
import { createPost } from '@/app/write/write-post.action';
import WriteModal from './WriteModal';

export default async function Page() {
    const user = await getUser();

  return <WriteModal user={user} createPost={createPost}/>
}
