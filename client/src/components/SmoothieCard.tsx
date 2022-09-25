import { Avatar, Container, Group, Image, Text, Title, Card, Button } from '@mantine/core'
import React from 'react'

const SmoothieCard = () => {
  return (
    <Card shadow="sm" p="lg" radius="md" sx={{ width: '40%' }}>
      <Card.Section>
        <Image
          src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
          height={160}
          alt="Norway"
        />
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Title order={3} sx={{fontFamily: 'Poppins, sans-serif'}}>Smoothie Name</Title>
        <Avatar src={null} alt="Vitaly Rtishchev" color="red">VR</Avatar>
      </Group>

      <Text weight={600} color="green.6" sx={{fontFamily: 'Poppins, sans-serif'}}>̥₹ 800.00</Text>

      <Button variant="light" color="blue" fullWidth mt="md" radius="md">
        Know More
      </Button>
    </Card>
  )
}

export default SmoothieCard



{/* <Container sx={{ backgroundColor: 'white', width: '46%' }} p={6} m={12}>
<Group position='center'>
  <div style={{ width: 150, marginLeft: 'auto', marginRight: 'auto' }}>
    <Image
      radius="md"
      src="https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
      alt="Random unsplash image"
    />
  </div>
  <div>
    <Title order={3} sx={{fontFamily: 'Poppins, sans-serif'}}>Smoothie Name</Title>
    <Text weight={700} color="green.6" sx={{fontFamily: 'Poppins, sans-serif'}}>̥₹ 800.00</Text>
  </div>
  <Avatar src={null} alt="Vitaly Rtishchev" color="red">VR</Avatar>
</Group>
</Container> */}