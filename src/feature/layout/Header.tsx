import { Button } from '@/components/ui/button'
import ThemeToggle from '@/src/theme/ThemeToggle'
import React from 'react'
import LoginButton from './auth/LoginButton'

const Header = async () => {
    return (
        <header className='border-b border-b-accent fixed top-0 bg-background w-full'>
            <div className='container flex items-center py-2 max-w-lg m-auto gap-1'>
                <h2 className='text-2xl font-bold mr-auto'>Githread</h2>
                <LoginButton />
                <ThemeToggle />
            </div>
        </header>
    )
}

export default Header
