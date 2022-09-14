import React from 'react'
import { Container,Group,Image,Title,NavLink } from '@mantine/core'
import { IconActivity,IconChevronRight } from '@tabler/icons'

const NavbarLink = () => {
  return (
    <Container>
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