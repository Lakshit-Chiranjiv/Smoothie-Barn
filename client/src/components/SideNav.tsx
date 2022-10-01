import { Avatar, Container, Group, Title } from '@mantine/core'
import { IconCirclePlus, IconGlass, IconHome, IconLogin, IconLogout, IconQuestionMark, IconUserPlus } from '@tabler/icons'
import NavbarLink from './NavbarLink'

const SideNav = () => {
  return (
    <Container className='sidenav' py={40} style={{ position: 'relative' }}>

      <Container p={0}>
        <NavbarLink linkLabel='Home' linkIcon={<IconHome/>} path='/'/>
        <NavbarLink linkLabel='Smoothies' linkIcon={<IconGlass/>} path='/smoothies'/>
        <NavbarLink linkLabel='Add Smoothie' linkIcon={<IconCirclePlus/>} path='/'/>
        <NavbarLink linkLabel='Sign Up' linkIcon={<IconUserPlus/>} path='/signup'/>
        <NavbarLink linkLabel='Log in' linkIcon={<IconLogin/>} path='login'/>
        <NavbarLink linkLabel='Log out' linkIcon={<IconLogout/>} path='/'/>
        <NavbarLink linkLabel='About Me' linkIcon={<IconQuestionMark/>} path='/about'/>
      </Container>

      <Group position='apart' color='blue' style={{ width: '90%', position: 'absolute', bottom: 30, backgroundColor: '#f8ceff', borderRadius: 10 }} p={12}>
        <Avatar src={null} alt="Vitaly Rtishchev" color="violet">VR</Avatar>
        <Title order={5}>Vitaly Rtishchev</Title>
      </Group>
    </Container>
  )
}

export default SideNav