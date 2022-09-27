import { Avatar, Button, Container, Divider, Group, List, Title } from '@mantine/core'
import React from 'react'

const SmoothieDetail = () => {
  return (
    <Container>
      <Group position='apart' m={30}>
        <Title order={2} sx={{ fontFamily: 'Poppins, sans-serif' }}>Smoothie Name</Title>
        <Button variant="gradient" gradient={{ from: 'teal', to: 'blue', deg: 60 }}>Buy : ₹ 800</Button>
      </Group>

      <Divider my="sm" />

      <Title order={4}>Steps :-</Title>
      <Container mt={24}>
        <List size='sm' withPadding>
          <List.Item>Clone or download repository from GitHub</List.Item>
          <List.Item>Install dependencies with yarn</List.Item>
          <List.Item>To start development server run npm start command</List.Item>
          <List.Item>Run tests to make sure your changes do not break the build</List.Item>
          <List.Item>Submit a pull request once you are done</List.Item>
        </List>
      </Container>

      <Button variant="gradient" fullWidth my={24} gradient={{ from: 'green', to: 'blue', deg: 75 }}>Buy Smoothie name for ₹ 800</Button>
    
      <Group position='apart' sx={{ backgroundColor: '#c7fff2', borderRadius: 12 }} mt={64} p={12}>
        <Avatar src={null} alt="Vitaly Rtishchev" color="violet">VR</Avatar>
        <Title order={5}>Created by Vitaly Rtishchev</Title>
      </Group>
    </Container>
  )
}

export default SmoothieDetail