import React from 'react'
import { Bell } from 'lucide-react'
import { CircleUserRound } from 'lucide-react'

const NavbarIcons = () => {
    return (
        <div className='flex items-center justify-end gap-5 px-5 h-12 '>
            <Bell size={18} className='' />
            <CircleUserRound size={18} className='' />
        </div>
    )
}
export default NavbarIcons
