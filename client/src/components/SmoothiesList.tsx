import { Button, Divider, Grid, Group, Title } from '@mantine/core'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SmoothieProps, userStateType } from '../lib/Types.js'
import SmoothieCard from './SmoothieCard'

type SmoothieListProps = {
  user: userStateType | null,
  setAddModalOpened: React.Dispatch<React.SetStateAction<boolean>>,
  setUser: React.Dispatch<React.SetStateAction<userStateType | null>>,
  userSpecificSmoothies: boolean
}

const SmoothiesList = ({user,setAddModalOpened,setUser,userSpecificSmoothies}: SmoothieListProps) => {

  const [smoothies,setSmoothies] = useState<SmoothieProps[] | []>([])
  const navigate = useNavigate()

  useEffect(() => {
    const getSmoothies = async() => {
      const smoothiesData = await axios.get('http://localhost:8000/smoothies', { 
        headers: {
          'Authorization': `Bearer ${user?.token}`
        }
       })
       if(smoothiesData.data.error){
        setUser(null)
        localStorage.removeItem('user')
        navigate('/')
       }
       else{
          if(userSpecificSmoothies){
            const filteredSmoothies = smoothiesData.data.smoothies?.filter((sm: SmoothieProps) => sm.createdBy===user?.username) 
            setSmoothies(filteredSmoothies)
          }
          else
            setSmoothies(smoothiesData.data.smoothies)
       }
    }

    getSmoothies()
  },[userSpecificSmoothies])

  return (
    <>
      <Group position='apart' m={30}>
        <Title order={2} sx={{ fontFamily: 'Poppins, sans-serif' }}>The Barn</Title>
        <Button variant="gradient" gradient={{ from: 'teal', to: 'blue', deg: 60 }} onClick={()=>setAddModalOpened(true)}>Add Smoothie</Button>
      </Group>

      <Divider my="sm" />

      <Grid>
        {
          smoothies?.map((smoothie) => {
            return (
              <Grid.Col span={4}>
                <SmoothieCard key={smoothie._id} smoothieId={smoothie._id} createdBy={smoothie.createdBy} name={smoothie.name} price={smoothie.price}/>
              </Grid.Col>
            )
          })
        }
      </Grid>
    </>
  )
}

export default SmoothiesList