import { Button, Container,Group,Image,Title } from '@mantine/core'
import heroImg1 from './../assets/hero.png'

const HeroPage = () => {
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
      <Title order={1} sx={{ fontFamily: 'Poppins, sans-serif' }} my={20}>Welcome to The Smoothie Barn</Title>

      <Group position='center' my={40}>
        <div style={{ width: '200px' }}>
          <Button variant="gradient" fullWidth gradient={{ from: '#e89dff', to: '#a49dff', deg: 35 }}>Sign Up</Button>
        </div>
        <div style={{ width: '200px' }}>
          <Button variant="gradient" fullWidth gradient={{ from: '#b4ff9d', to: '#ffb983', deg: 35 }}>Login</Button>
        </div>
      </Group>
    </Container>
  )
}

export default HeroPage