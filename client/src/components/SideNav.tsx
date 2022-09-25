import { Avatar, Container, Group, Title } from '@mantine/core'
import NavbarLink from './NavbarLink'

const SideNav = () => {
  return (
    <Container className='sidenav' py={40} style={{ position: 'relative' }}>
      {
        [1,2,3,4].map((val,i) => <NavbarLink key={i}/>)
      }

      <Group position='apart' color='blue' style={{ width: '90%', position: 'absolute', bottom: 30, backgroundColor: '#f8ceff', borderRadius: 10 }} p={12}>
        <Avatar src={null} alt="Vitaly Rtishchev" color="violet">VR</Avatar>
        <Title order={5}>Vitaly Rtishchev</Title>
      </Group>
    </Container>
  )
}

export default SideNav