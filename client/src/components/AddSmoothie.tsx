import { Button, Modal, NumberInput, Textarea, TextInput, Title } from '@mantine/core'
import React from 'react'

type AddSmoothieProps = {
    addModalOpened: boolean,
    setAddModalOpened: React.Dispatch<React.SetStateAction<boolean>>
}

const AddSmoothie = ({addModalOpened,setAddModalOpened}: AddSmoothieProps) => {
  return (
    <Modal withCloseButton={addModalOpened} opened={true} onClose={() => setAddModalOpened(false)}>
      <Title order={2} mb={30}>Add a Smoothie</Title>
      <TextInput
        placeholder="Smoothie name"
        label="Smoothie Name"
        withAsterisk
        mb={20}
      />
      <NumberInput
        defaultValue={0}
        min={0}
        placeholder="Smoothie price in ₹"
        label="Smoothie Price in ₹"
        withAsterisk
        mb={20}
      />
      <Textarea
        placeholder="Put a full stop after each step"
        label="Steps"
        mb={20}
      />
      <Button fullWidth variant="gradient" gradient={{ from: 'teal', to: 'blue', deg: 60 }}>Add Smoothie</Button>
    </Modal>
  )
}

export default AddSmoothie