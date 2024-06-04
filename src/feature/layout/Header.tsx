import { Button } from '@/components/ui/button'
import ThemeToggle from '@/src/theme/ThemeToggle'
import React from 'react'
import LoginButton from './auth/LoginButton'
import { getAuthSession } from '@/lib/auth'
import UserProfile from './auth/UserProfile'
import Link from 'next/link'

const Header = async () => {
    const session = await getAuthSession();
    return (
        <header className='border-b border-b-accent z-20 fixed top-0 bg-background w-full'>
            <div className='container flex items-center py-2 max-w-lg m-auto gap-1'>
                <Link href='/' className='text-2xl font-bold mr-auto'>
                    FunThread
                </Link>

                {session?.user ? (
                    <UserProfile />
                ) : (
                    <LoginButton />
                )}                
                <ThemeToggle />
            </div>
        </header>
    )
}

export default Header
