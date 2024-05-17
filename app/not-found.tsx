import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { buttonVariants } from '@/components/ui/button'
import { AlertTriangle } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <Alert className='my-8'>
            <AlertTriangle />
            <div className='ml-5'>
                <AlertTitle>Not Found</AlertTitle>
                <AlertDescription>
                    Post not found.
                </AlertDescription>
            </div>
            <Link href='/' className={buttonVariants({variant : "link"})}>
                Accueil
            </Link>
        </Alert>
  )
}
