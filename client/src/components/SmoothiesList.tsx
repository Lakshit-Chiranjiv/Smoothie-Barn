import { Button, Divider, Grid, Group, Title } from '@mantine/core'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { userStateType } from '../lib/Types.js'
import SmoothieCard from './SmoothieCard'

type SmoothieListProps = {
  user: userStateType | null,
  setAddModalOpened: React.Dispatch<React.SetStateAction<boolean>>
}

type SmoothieProps = {
    createdAt: string,
    createdBy: string,
    name: string,
    price: number,
    steps: string[],
    updatedAt: string,
    _v: number,
    _id: string
}

const SmoothiesList = ({user,setAddModalOpened}: SmoothieListProps) => {

  const [smoothies,setSmoothies] = useState<SmoothieProps[] | []>([])

  useEffect(() => {
    const getSmoothies = async() => {
      const smoothiesData = await axios.get('http://localhost:8000/smoothies', { 
        headers: {
          'Authorization': `Bearer ${user?.token}`
        }
       })
      console.log(smoothiesData.data.smoothies)
      setSmoothies(smoothiesData.data.smoothies)
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
        {
          smoothies.map((smoothie) => {
            return (
              <Grid.Col span={4}>
                <SmoothieCard createdBy={smoothie.createdBy} name={smoothie.name} price={smoothie.price}/>
              </Grid.Col>
            )
          })
        }
      </Grid>
    </>
  )
}

export default SmoothiesList