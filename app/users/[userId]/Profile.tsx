import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { UserProfile } from '@/src/query/user.query';
import React, { PropsWithChildren } from 'react'

const removeHttp = (url : string) => {
    return url.replace(/(^\w+:|^)\/\//,'');
}

const Profile = ({user} : PropsWithChildren<{user: UserProfile}>) => {
  return (
    <div className='mt-4 container'>
      <div className='flex gap-2 items-start justify-between'>
        <div className='flex flex-col gap-0.5'>
            <h3 className='text-2xl font-bold'>{ user.name }</h3>
            <p>{user.username}</p>            
        </div>
        <Avatar size='lg'>
                {user.image ? (<AvatarImage src={user.image} alt={user.username} />) : null}
                <AvatarFallback>
                    {user.username.slice(0, 2).toUpperCase()}
                </AvatarFallback>
            </Avatar>
      </div>
    </div>
  )
}

export default Profile
