import { Button, Modal, NumberInput, Textarea, TextInput, Title } from '@mantine/core'
import React, { useState } from 'react'

type AddSmoothieProps = {
    addModalOpened: boolean,
    setAddModalOpened: React.Dispatch<React.SetStateAction<boolean>>
}

const AddSmoothie = ({addModalOpened,setAddModalOpened}: AddSmoothieProps) => {

  const [smoothieName,setSmoothieName] = useState('')
  const [smoothiePrice,setSmoothiePrice] = useState(0)
  const [smoothieSteps,setSmoothieSteps] = useState<string[]>([])
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
        placeholder="Put a full stop after each step"
        label="Steps"
        mb={20}
        value={smoothieSteps.join()}
        onChange={(e)=>setSmoothieSteps(e.target.value.split('.'))}
      />
      <Button fullWidth variant="gradient" gradient={{ from: 'teal', to: 'blue', deg: 60 }}>Add Smoothie</Button>
    </Modal>
  )
}

export default AddSmoothie