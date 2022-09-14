import { Container, Title } from '@mantine/core'

const Footer = () => {
  return (
    <Container className='footer' p={16} m={0}>
        <Title order={5} color='white'>
            © Copyright | {new Date().getFullYear()} | Created By Lakshit | All rights reserved
        </Title>
    </Container>
  )
}

export default Footer