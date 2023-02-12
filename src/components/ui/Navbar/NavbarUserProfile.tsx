import { FC, Fragment, useState } from 'react';
import Image from 'next/image';
import { Menu } from '@headlessui/react'

interface Props {
  userName: string,
  userImg: string,
  userEmail: string
}

export const NavbarUserProfile: FC<Props> = ({ userName, userImg, userEmail }) => {
  const links = [
    { href: '/profile', label: 'Mi Perfil' },
    { href: '/workplace', label: 'Sitio de Trabajo' },
    { href: '/password', label: 'Cambio Contraseña' },
  ]

  return (
    <>
      <Menu>
        <Menu.Button className="relative">
          <Image id="avatarButton" data-dropdown-toggle="userDropdown" data-dropdown-placement="bottom-start" className="w-10 h-10 rounded-full cursor-pointer" src={userImg} width={100} height={100} alt="User dropdown" />
        </Menu.Button>
        <Menu.Items className="absolute top-0 right-0 mt-16 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
          <div className="px-4 py-3 text-sm text-gray-900">
            <div>{userName}</div>
            <div className="font-medium truncate">{userEmail}</div>
          </div>
          <div className='py-2 text-sm text-gray-700'>
            {links.map((link) => (
              <Menu.Item key={link.href} as={Fragment}>
                {({ active }) => (
                  <a
                    href={link.href}
                    className="block px-4 py-2 text-sm hover:bg-cyan-600 hover:text-white"
                  >
                    {link.label}
                  </a>
                )}
              </Menu.Item>
            ))}
          </div>
          <div className="py-1">
            <a href="#" className="block px-4 py-2 text-sm hover:bg-cyan-600 hover:text-white">Cerrar Sesión</a>
          </div>
        </Menu.Items>
      </Menu>
    </>
  )
}