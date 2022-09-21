import { Container } from '@mantine/core'
import NavbarLink from './NavbarLink'

const SideNav = () => {
  return (
    <Container className='sidenav' py={40}>
      {
        [1,2,3,4].map((val,i) => <NavbarLink key={i}/>)
      }
    </Container>
  )
}

export default SideNav