import React, { FC, ReactNode } from 'react'
import { Container,Group,Image,Title,NavLink } from '@mantine/core'
import { IconActivity,IconChevronRight, TablerIconProps } from '@tabler/icons'
import { Link } from 'react-router-dom'

type NavbarLinkProps = {
  linkLabel: string,
  active?: boolean,
  linkIcon: ReactNode,
  path: string,
  clickHandler?: () => void
}


const NavbarLink = ({linkLabel,active,linkIcon,path,clickHandler}: NavbarLinkProps) => {
  return (
    <Link to={path} className='link'>
      <NavLink
        className='navlink'
        label={linkLabel}
        icon={linkIcon}
        rightSection={<IconChevronRight size={12} stroke={1.5} />}
        variant="filled"
        active
        color='green.3'
        mb={20}
        onClick={clickHandler?clickHandler:()=>{}}
      />
    </Link>
  )
}

export default NavbarLink