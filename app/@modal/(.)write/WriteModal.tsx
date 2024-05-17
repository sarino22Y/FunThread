"use client"

import WritePostForm, { WritePostFormValue } from '@/app/write/WritePostForm';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { User } from 'prisma/prisma-client'
import { usePathname, useRouter } from 'next/navigation';
import React from 'react'

const WriteModal = ({
    user,
    createPost
    }: {
        user: User,
        createPost: (values: WritePostFormValue) => Promise<string>
    }) => {
    const router = useRouter();
    const pathName = usePathname();
    return (
        <Dialog open={pathName === '/write'} onOpenChange={() => {
            router.back();
        }}>
            <DialogContent>
                <WritePostForm user={user} onSubmit={createPost} />
            </DialogContent>
        </Dialog>
    )
}

export default WriteModal
