import { FC, useState } from 'react';
import Image from 'next/image';

interface Props {
  userName: string,
  userImg: string
}

export const NavbarUserProfile: FC<Props> = ({ userName, userImg }) => {
  const [userMenuToggle, setUserMenuToggle] = useState(false)

  const MenuToggle = () => {
    setUserMenuToggle(!userMenuToggle)
  }

  return (
    <>
      <div className='relative'>
        <button className="rounded-full" id="user-menu-button" aria-expanded="false" aria-haspopup="true" >
          <Image src={userImg} alt={`Foto de Perfil de ${userName}`} width={48} height={48} className="rounded-full" onClick={MenuToggle} />
        </button>
      </div>
      {userMenuToggle &&
        <div className='absolute right-0 z-10 mt-24 w-48 origin-top-right rounded-sm bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
          <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="user-menu-item-0">Your Profile</a>
          <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="user-menu-item-1">Settings</a>
          <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="user-menu-item-2">Sign out</a>
        </div>}
    </>
  )
}