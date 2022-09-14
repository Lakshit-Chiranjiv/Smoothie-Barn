import { Container,Image } from '@mantine/core'
import logo from './../assets/logo1.png'

const Header = () => {
  return (
    <Container className='header'>
      <div style={{ width: 240, marginLeft: 'auto', marginRight: 'auto' }}>
        <Image
          radius="md"
          src={logo}
          alt="Logo Image"
        />
      </div>
    </Container>
  )
}

export default Header