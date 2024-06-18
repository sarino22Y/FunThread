import React from 'react'
import WritePostForm from './WritePostForm'
import { getUser } from '@/src/query/user.query'
import { createPost } from './write-post.action';
import { notFound } from 'next/navigation';

export default async function Write() {
    const user = await getUser();

    if (!user) {
      return <div>Utilisateur non trouvé</div>;
    }

  return (
    <WritePostForm user={user} onSubmit={createPost}/>
  )
}
