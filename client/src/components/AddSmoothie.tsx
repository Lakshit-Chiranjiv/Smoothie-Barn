import { Modal } from '@mantine/core'
import React from 'react'

type AddSmoothieProps = {
    addModalOpened: boolean,
    setAddModalOpened: React.Dispatch<React.SetStateAction<boolean>>
}

const AddSmoothie = ({addModalOpened,setAddModalOpened}: AddSmoothieProps) => {
  return (
    <Modal withCloseButton={false} opened={addModalOpened} onClose={() => setAddModalOpened(false)}>
      Modal without header, press escape or click on overlay to close
    </Modal>
  )
}

export default AddSmoothie