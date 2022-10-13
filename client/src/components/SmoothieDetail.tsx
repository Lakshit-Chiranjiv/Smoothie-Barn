import { Avatar, Button, Container, Divider, Group, List, Title } from '@mantine/core'
import { IconTrash } from '@tabler/icons'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { SmoothieProps, userStateType } from '../lib/Types.js'

type SmoothieDetailProps = {
  user: userStateType | null,
}

const SmoothieDetail = ({ user }: SmoothieDetailProps) => {

  const { id } = useParams()

  const navigate = useNavigate()

  const [smoothie,setSmoothie] = useState<SmoothieProps | null>(null)

  useEffect(() => {
    const fetchSmoothieData = async() => {
      const smoothieData = await axios.get(`http://localhost:8000/smoothie/${id}`, { 
        headers: {
          'Authorization': `Bearer ${user?.token}`
        }
       })
      setSmoothie(smoothieData.data.smoothie)
    }

    fetchSmoothieData()
  },[])
  
  return (
    <Container>
      <Group position='apart' m={30}>
        <Title order={2} sx={{ fontFamily: 'Poppins, sans-serif' }}>{smoothie?.name}</Title>
        {/* if current user is the smoothie creator then show delete else buy */}
        {
          user ? 
          <Button variant="gradient" gradient={{ from: 'teal', to: 'blue', deg: 60 }}>Buy : ₹ {smoothie?.price}</Button> :
          <Button variant="gradient" gradient={{ from: 'red', to: 'orange', deg: 60 }}>
            <IconTrash/>
          </Button>
        }
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

      <Group>
        <Button variant="gradient" sx={{width: '49%'}} my={24} gradient={{ from: 'orange', to: 'yellow', deg: 75 }} onClick={()=>navigate(-1)}>Back</Button>
        <Button variant="gradient" sx={{width: '49%'}} my={24} gradient={{ from: 'green', to: 'blue', deg: 75 }}>Buy {smoothie?.name} for ₹ {smoothie?.price}</Button>
      </Group>
    
      <Group position='apart' sx={{ backgroundColor: '#c7fff2', borderRadius: 12 }} mt={64} p={12}>
        <Avatar src={null} alt="Vitaly Rtishchev" color="violet">{smoothie?.createdBy[0]}</Avatar>
        <Title order={5}>Created by {smoothie?.createdBy}</Title>
      </Group>
    </Container>
  )
}

export default SmoothieDetail