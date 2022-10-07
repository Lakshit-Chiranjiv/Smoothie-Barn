import { Avatar, Container, Group, Title } from '@mantine/core'
import { IconCirclePlus, IconGlass, IconHome, IconLogin, IconLogout, IconQuestionMark, IconUserPlus } from '@tabler/icons'
import { useNavigate } from 'react-router-dom'
import { userStateType } from '../lib/Types.js'
import NavbarLink from './NavbarLink'

type SideNavProps = {
  setAddModalOpened: React.Dispatch<React.SetStateAction<boolean>>,
  setAuthTab: React.Dispatch<React.SetStateAction<"signup" | "login">>,
  user: userStateType | null,
  setUser: React.Dispatch<React.SetStateAction<userStateType | null>>
}

const SideNav = ({setAddModalOpened,setAuthTab,user,setUser}: SideNavProps) => {

  const navigate = useNavigate()

  return (
    <Container className='sidenav' py={40} style={{ position: 'relative' }}>

      <Container p={0}>
        <NavbarLink linkLabel='Home' linkIcon={<IconHome/>} path='/'/>
        {
          user &&
          <>
            <NavbarLink linkLabel='Smoothies' linkIcon={<IconGlass/>} path='/smoothies'/>
            <a onClick={()=>setAddModalOpened(true)}>
              <NavbarLink linkLabel='Add Smoothie' linkIcon={<IconCirclePlus/>} path='/'/>
            </a>
            <a onClick={()=>{
              setUser(null)
              localStorage.removeItem('user')
              navigate('/')
            }}>
              <NavbarLink linkLabel='Log out' linkIcon={<IconLogout/>} path='/'/>
            </a>
          </>
        }
        {
          !user &&
          <>
            <a onClick={()=>setAuthTab('signup')}>
              <NavbarLink linkLabel='Sign Up' linkIcon={<IconUserPlus/>} path='/signup'/>
            </a>
            <a onClick={()=>setAuthTab('login')}>
              <NavbarLink linkLabel='Log in' linkIcon={<IconLogin/>} path='login'/>
            </a>
          </>
        }
        <NavbarLink linkLabel='About Me' linkIcon={<IconQuestionMark/>} path='/about'/>
      </Container>

      <Group position='apart' color='blue' style={{ width: '90%', position: 'absolute', bottom: 30, backgroundColor: '#f8ceff', borderRadius: 10 }} p={12}>
        <Avatar src={null} alt="Vitaly Rtishchev" color="violet">{user?.username[0].toUpperCase()}</Avatar>
        <Title order={5}>{user?.username}</Title>
      </Group>
    </Container>
  )
}

export default SideNav