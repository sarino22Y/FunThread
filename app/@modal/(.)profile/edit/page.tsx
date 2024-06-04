import { ProfileForm } from '@/app/profile/edit/ProfileForm';
import { getUser } from '@/src/query/user.query'
import React from 'react'
import EditProfileModal from './EditProfileModal';
import { editProfile } from '@/app/profile/edit/edit-profile.action';

export default async function page() {
    const user = await getUser();
  return <EditProfileModal user={user} editProfile={editProfile} />
}
