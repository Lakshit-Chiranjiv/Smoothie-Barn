import { Button, Container,Group,Image,Title } from '@mantine/core'
import { Link } from 'react-router-dom'
import { userStateType } from '../lib/Types.js'
import heroImg1 from './../assets/hero.png'

type HeroPageProps = {
  user: userStateType | null,
  setAuthTab: React.Dispatch<React.SetStateAction<"signup" | "login">>,
}

const HeroPage = ({ user,setAuthTab }: HeroPageProps) => {
  return (
    <Container className='hero' fluid>
      <div style={{ width: 360, marginLeft: 'auto', marginRight: 'auto' }}>
        <Image
          radius="md"
          src={heroImg1}
          alt="hero image"
          my={20}
        />
      </div>
      <Title order={1} sx={{ fontFamily: 'Poppins, sans-serif',textAlign: 'center' }} my={20}>Welcome to The Smoothie Barn</Title>

      {/* Not signed in */}
      {
        !user && 
        <Group position='center' my={40}>
          <div style={{ width: '200px' }}>
            <Link to='/signup' className='link' onClick={()=>setAuthTab('signup')}>
              <Button variant="gradient" fullWidth gradient={{ from: '#e89dff', to: '#a49dff', deg: 35 }}>Sign Up</Button>
            </Link>
          </div>
          <div style={{ width: '200px' }}>
            <Link to='/login' className='link' onClick={()=>setAuthTab('login')}>
              <Button variant="gradient" fullWidth gradient={{ from: '#b4ff9d', to: '#ffb983', deg: 35 }}>Login</Button>
            </Link>
          </div>
        </Group>
      }

      {/* signed in */}
      {
        user && 
        <Group position='center' my={40}>
          <div style={{ width: '200px' }}>
            <Link to='/smoothies' className='link'>
              <Button variant="gradient" fullWidth gradient={{ from: '#e89dff', to: '#a49dff', deg: 35 }}>Smoothies</Button>
            </Link>
          </div>
          <div style={{ width: '200px' }}>
            <Link to='/about' className='link'>
              <Button variant="gradient" fullWidth gradient={{ from: '#b4ff9d', to: '#ffb983', deg: 35 }}>About Me</Button>
            </Link>
          </div>
        </Group>
      }
    </Container>
  )
}

export default HeroPage