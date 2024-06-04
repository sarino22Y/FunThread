"use client"

import { ProfileForm, ProfileFormType } from '@/app/profile/edit/ProfileForm'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { UserEdit } from '@/src/query/user.query'
import { revalidatePath } from 'next/cache'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

const EditProfileModal = ({user, editProfile} : {
    user: UserEdit,
    editProfile: (values: 
        ProfileFormType) => Promise<string>
}) => {
    const router = useRouter();
    const pathName = usePathname();
    return (
        <Dialog open={pathName?.includes("edit")} onOpenChange={() => {
            router.back();
        }}>
            <DialogContent>
                <ProfileForm user={user} onSubmit={editProfile} />
            </DialogContent>
        </Dialog>
    )
}

export default EditProfileModal
