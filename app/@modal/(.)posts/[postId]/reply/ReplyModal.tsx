"use client"

import WritePostForm, { WritePostFormValue } from '@/app/write/WritePostForm';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { User } from 'prisma/prisma-client'
import { usePathname, useRouter } from 'next/navigation';
import React from 'react'

const ReplyModal = ({
    user,
    createReply,
    }: {
        user: User,
        createReply: (values: WritePostFormValue) => Promise<string>,
    }) => {
    const router = useRouter();
    const pathName = usePathname();
    return (
        <Dialog open={pathName?.includes("reply")} onOpenChange={() => {
            router.back();
        }}>
            <DialogContent>
                <WritePostForm user={user} onSubmit={createReply} />
            </DialogContent>
        </Dialog>
    )
}

export default ReplyModal
