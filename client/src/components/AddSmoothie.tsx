import { Button, Modal, NumberInput, Textarea, TextInput, Title } from '@mantine/core'
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { userStateType } from '../lib/Types.js'

type AddSmoothieProps = {
    user: userStateType | null,
    addModalOpened: boolean,
    setAddModalOpened: React.Dispatch<React.SetStateAction<boolean>>
}

const AddSmoothie = ({user,addModalOpened,setAddModalOpened}: AddSmoothieProps) => {

  const navigate = useNavigate()

  const [smoothieName,setSmoothieName] = useState('')
  const [smoothiePrice,setSmoothiePrice] = useState(0)
  const [smoothieSteps,setSmoothieSteps] = useState<string[]>([])

  const postSmoothieData = async() => {
    const smoothieData = await axios.post(`http://localhost:8000/${user?.username}/addsmoothie/`, {
      name: smoothieName,
      price: smoothiePrice,
      steps: smoothieSteps,
      createdBy: user?.username
    }, { 
      headers: {
        'Authorization': `Bearer ${user?.token}`
      }
     })
    console.log(smoothieData)
    setSmoothieName('')
    setSmoothiePrice(0)
    setSmoothieSteps([])
    navigate('/')
  }
  return (
    <Modal withCloseButton={false} opened={addModalOpened} onClose={() => setAddModalOpened(false)}>
      <Title order={2} mb={30}>Add a Smoothie</Title>
      <TextInput
        placeholder="Smoothie name"
        label="Smoothie Name"
        withAsterisk
        mb={20}
        value={smoothieName}
        onChange={(e) => setSmoothieName(e.target.value)}
      />
      <NumberInput
        defaultValue={0}
        min={0}
        placeholder="Smoothie price in ₹"
        label="Smoothie Price in ₹"
        withAsterisk
        mb={20}
        value={smoothiePrice}
        onChange={(num)=>setSmoothiePrice(num?num:0)}
      />
      <Textarea
        placeholder="Put a comma after each step"
        label="Steps"
        mb={20}
        value={smoothieSteps.join()}
        onChange={(e)=>setSmoothieSteps(e.target.value.split(','))}
      />
      <Button fullWidth variant="gradient" gradient={{ from: 'teal', to: 'blue', deg: 60 }} onClick={()=>{
        if(smoothieName && smoothiePrice){
          postSmoothieData()
        }
      }}>Add Smoothie</Button>
    </Modal>
  )
}

export default AddSmoothie