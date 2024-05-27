import { getAuthSession } from '@/lib/auth'
import { getUserProfile } from '@/src/query/user.query';
import React from 'react'
import Profile from './Profile';
import NotFound from '@/app/not-found';

export default async function UserPage({params} : {
    params:{
        userId : string
    }
}) {
    const session = await getAuthSession();
    const user = await getUserProfile(params.userId);

    if (!user) {
        return NotFound();
    }
  return (
    <div>
      <Profile user={user} />
    </div>
  )
}
