import { Avatar, Container, Group, Title } from '@mantine/core'
import { IconCirclePlus, IconGlass, IconHome, IconLogin, IconLogout, IconQuestionMark, IconUserPlus } from '@tabler/icons'
import NavbarLink from './NavbarLink'

type SideNavProps = {
  setAddModalOpened: React.Dispatch<React.SetStateAction<boolean>>,
  setAuthTab: React.Dispatch<React.SetStateAction<"signup" | "login">>
}

const SideNav = ({setAddModalOpened,setAuthTab}: SideNavProps) => {
  return (
    <Container className='sidenav' py={40} style={{ position: 'relative' }}>

      <Container p={0}>
        <NavbarLink linkLabel='Home' linkIcon={<IconHome/>} path='/'/>
        <NavbarLink linkLabel='Smoothies' linkIcon={<IconGlass/>} path='/smoothies'/>
        <a onClick={()=>setAddModalOpened(true)}>
          <NavbarLink linkLabel='Add Smoothie' linkIcon={<IconCirclePlus/>} path='/'/>
        </a>
        <a onClick={()=>setAuthTab('signup')}>
          <NavbarLink linkLabel='Sign Up' linkIcon={<IconUserPlus/>} path='/signup'/>
        </a>
        <a onClick={()=>setAuthTab('login')}>
          <NavbarLink linkLabel='Log in' linkIcon={<IconLogin/>} path='login'/>
        </a>
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