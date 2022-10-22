import { Avatar, Container, Group, Title } from '@mantine/core'
import { IconCirclePlus, IconGlass, IconGlassFull, IconHome, IconLogin, IconLogout, IconQuestionMark, IconUserPlus } from '@tabler/icons'
import { useNavigate } from 'react-router-dom'
import { userStateType } from '../lib/Types.js'
import NavbarLink from './NavbarLink'

type SideNavProps = {
  setAddModalOpened: React.Dispatch<React.SetStateAction<boolean>>,
  setAuthTab: React.Dispatch<React.SetStateAction<"signup" | "login">>,
  user: userStateType | null,
  setUser: React.Dispatch<React.SetStateAction<userStateType | null>>,
  setUserSpecificSmoothies: React.Dispatch<React.SetStateAction<boolean>>
}

const SideNav = ({setAddModalOpened,setAuthTab,user,setUser,setUserSpecificSmoothies}: SideNavProps) => {

  const navigate = useNavigate()

  return (
    <Container className='sidenav' py={40} style={{ position: 'relative' }}>

      <Container p={0}>
        <NavbarLink linkLabel='Home' linkIcon={<IconHome/>} path='/'/>
        {
          user &&
          <>
            <NavbarLink linkLabel='All Smoothies' linkIcon={<IconGlassFull/>} path='/smoothies' clickHandler={()=>setUserSpecificSmoothies(false)}/>

            <NavbarLink linkLabel='My Smoothies' linkIcon={<IconGlass/>} path='/smoothies' clickHandler={()=>setUserSpecificSmoothies(true)}/>

            <NavbarLink linkLabel='Add Smoothie' linkIcon={<IconCirclePlus/>} path='/' clickHandler={()=>setAddModalOpened(true)}/>

            <NavbarLink linkLabel='Log out' linkIcon={<IconLogout/>} path='/' clickHandler={()=>{
            setUser(null)
            localStorage.removeItem('user')
            navigate('/')
            }}/>
          </>
        }
        {
          !user &&
          <>
            <NavbarLink linkLabel='Sign Up' linkIcon={<IconUserPlus/>} path='/signup' clickHandler={()=>setAuthTab('signup')}/>

            <NavbarLink linkLabel='Log in' linkIcon={<IconLogin/>} path='login' clickHandler={()=>setAuthTab('login')}/>
          </>
        }
        <NavbarLink linkLabel='About Me' linkIcon={<IconQuestionMark/>} path='/about'/>
      </Container>

      {
        user && 
        <Group position='apart' color='blue' style={{ width: '90%', position: 'absolute', bottom: 30, backgroundColor: '#f8ceff', borderRadius: 10 }} p={12}>
          <Avatar src={null} alt="Vitaly Rtishchev" color="violet">{user?.username[0].toUpperCase()}</Avatar>
          <Title order={5}>{user?.username}</Title>
        </Group>
      }
    </Container>
  )
}

export default SideNav