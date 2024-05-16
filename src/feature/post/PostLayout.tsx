import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { formatDate } from '@/lib/date';
import { PostHome } from '@/src/query/post.query'
import clsx from 'clsx';
import { MoreHorizontal } from 'lucide-react';
import Link from 'next/link';
import React, { PropsWithChildren } from 'react'

type PostLayoutProps = PropsWithChildren<{
    user: PostHome["user"];
    createdAt?: Date;
    className?: string;
    postId?: string;
}>;

const PostLayout = ({className, user, createdAt, postId} : PostLayoutProps) => {
    const postHeader = (
        <div className="flex flex-row items-center gap-2">
            <p className='text-sm text-card-foregroud mr-auto'>{user.username}</p>
            {
                createdAt ? (
                    <p className='text-sm text-muted-foregroud'>
                        {formatDate(createdAt)}    
                    </p>
                ) : null
            }

            <button>
                <MoreHorizontal size={20} />
            </button>
        </div>
    );
  return (
    <div className={clsx("flex w-full flex-row items-start p-4", className)}>
      <Avatar>
        {user.image ? ( <AvatarImage src={user.image} alt={user.username}/> ) : null}
        <AvatarFallback>
            {user.username.slice(0, 2).toUpperCase()}
        </AvatarFallback>
      </Avatar>
      <div className='ml-4 flex w-full flex-col gap-2'>
        { postId ? 
            <Link href={`/users/${user.id}`}>{postHeader}</Link>
        : postHeader}
      </div>
    </div>
  )
}

export default PostLayout
