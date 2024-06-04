import PostPlaceholder from '@/src/feature/post/PostSkeleton'
import React from 'react'

const loader = () => {
  return (
    <div className='devide-y devide-accent'>
      {Array.from({length: 20}).map((_, index) => {
            return <PostPlaceholder key={index} />;
        })}
    </div>
  )
}

export default loader
