import { getUserEdit } from '@/src/query/user.query'
import { notFound } from 'next/navigation';
import React from 'react'
import { ProfileForm } from './ProfileForm';
import { editProfile } from './edit-profile.action';

export default async function page() {
    const user = await getUserEdit();
    
  return (
    <div className='h-full ccontainer flex items-center'>
        <div className='bg-card border rounded-md border-border p-4 flex-1'>
            <ProfileForm user={user} onSubmit={editProfile} />
        </div>
    </div>
  )
}
