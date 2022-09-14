import { Container,Navbar } from '@mantine/core'
import NavbarLink from './NavbarLink'

const SideNav = () => {
  return (
    <Container className='sidenav' py={40}>
      {
        [1,2,3,4].map(val => <NavbarLink/>)
      }
    </Container>
  )
}

export default SideNav