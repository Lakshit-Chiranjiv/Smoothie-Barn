import { Button, Divider, Grid, Group, Title } from '@mantine/core'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { userStateType } from '../lib/Types.js'
import SmoothieCard from './SmoothieCard'

type SmoothieListProps = {
  user: userStateType | null,
  setAddModalOpened: React.Dispatch<React.SetStateAction<boolean>>
}

const SmoothiesList = ({user,setAddModalOpened}: SmoothieListProps) => {

  const [smoothies,setSmoothies] = useState([])

  useEffect(() => {
    const getSmoothies = async() => {
      const data = await axios.get('http://localhost:8000/smoothies', { 
        headers: {
          'Authorization': `Bearer ${user?.token}`
        }
       })
      console.log(data)
    }

    getSmoothies()
  },[])

  return (
    <>
      <Group position='apart' m={30}>
        <Title order={2} sx={{ fontFamily: 'Poppins, sans-serif' }}>The Barn</Title>
        <Button variant="gradient" gradient={{ from: 'teal', to: 'blue', deg: 60 }} onClick={()=>setAddModalOpened(true)}>Add Smoothie</Button>
      </Group>

      <Divider my="sm" />

      <Grid>
        <Grid.Col span={4}>
          <SmoothieCard/>
        </Grid.Col>
        <Grid.Col span={4}>
          <SmoothieCard/>
        </Grid.Col>
        <Grid.Col span={4}>
          <SmoothieCard/>
        </Grid.Col>
        <Grid.Col span={4}>
          <SmoothieCard/>
        </Grid.Col>
        <Grid.Col span={4}>
          <SmoothieCard/>
        </Grid.Col>
      </Grid>
    </>
  )
}

export default SmoothiesList