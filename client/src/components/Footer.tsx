import { Container, Title } from '@mantine/core'
import React from 'react'

const Footer = () => {
  return (
    <Container className='footer' p={16}>
        <Title order={5} color='white'>
            © Copyright | {new Date().getFullYear()} | Created By Lakshit | All rights reserved
        </Title>
    </Container>
  )
}

export default Footer