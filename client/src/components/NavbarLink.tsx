import React, { FC } from 'react'
import { Container,Group,Image,Title,NavLink } from '@mantine/core'
import { IconActivity,IconChevronRight, TablerIconProps } from '@tabler/icons'

type NavbarLinkProps = {
  linkLabel: string,
  active: boolean,
  linkIcon: FC<TablerIconProps>,
}
// {linkLabel,active,linkIcon}: NavbarLinkProps

const NavbarLink = () => {
  return (
    <Container mb={20}>
      <NavLink
        className='navlink'
        label="Active subtle"
        icon={<IconActivity size={16} stroke={1.5} />}
        rightSection={<IconChevronRight size={12} stroke={1.5} />}
        variant="filled"
        active
        color='green.3'
      />
    </Container>
  )
}

export default NavbarLink