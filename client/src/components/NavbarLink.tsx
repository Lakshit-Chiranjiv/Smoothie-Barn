import React, { FC, ReactNode } from 'react'
import { Container,Group,Image,Title,NavLink } from '@mantine/core'
import { IconActivity,IconChevronRight, TablerIconProps } from '@tabler/icons'

type NavbarLinkProps = {
  linkLabel: string,
  active?: boolean,
  linkIcon: ReactNode,
}


const NavbarLink = ({linkLabel,active,linkIcon}: NavbarLinkProps) => {
  return (
    <Container mb={20}>
      <NavLink
        className='navlink'
        label={linkLabel}
        icon={linkIcon}
        rightSection={<IconChevronRight size={12} stroke={1.5} />}
        variant="filled"
        active
        color='green.3'
      />
    </Container>
  )
}

export default NavbarLink