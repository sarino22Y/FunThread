import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger, DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { getAuthSession } from '@/lib/auth';
import { User2 } from 'lucide-react';
import Link from 'next/link';
import React from 'react'
import DropdownMenuItemLogout from './LogoutButton';

const UserProfile = async () => {
    const session = await getAuthSession();
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant='outline' size={'sm'}>
                    {session?.user.name ?? ""}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem asChild>
                    <Link href="/profile">
                        <User2 className='mr-2 h-4 w-4' />
                        Profile
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItemLogout />
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default UserProfile
