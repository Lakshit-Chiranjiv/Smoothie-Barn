import { Avatar, Container, Group, Title } from '@mantine/core'
import { IconCirclePlus, IconGlass, IconHome, IconLogin, IconLogout, IconUserPlus } from '@tabler/icons'
import NavbarLink from './NavbarLink'

const SideNav = () => {
  return (
    <Container className='sidenav' py={40} style={{ position: 'relative' }}>

      <Container p={0}>
        <NavbarLink linkLabel='Home' linkIcon={<IconHome/>}/>
        <NavbarLink linkLabel='Smoothies' linkIcon={<IconGlass/>}/>
        <NavbarLink linkLabel='Add Smoothie' linkIcon={<IconCirclePlus/>}/>
        <NavbarLink linkLabel='Sign Up' linkIcon={<IconUserPlus/>}/>
        <NavbarLink linkLabel='Log in' linkIcon={<IconLogin/>}/>
        <NavbarLink linkLabel='Log out' linkIcon={<IconLogout/>}/>
      </Container>

      <Group position='apart' color='blue' style={{ width: '90%', position: 'absolute', bottom: 30, backgroundColor: '#f8ceff', borderRadius: 10 }} p={12}>
        <Avatar src={null} alt="Vitaly Rtishchev" color="violet">VR</Avatar>
        <Title order={5}>Vitaly Rtishchev</Title>
      </Group>
    </Container>
  )
}

export default SideNav