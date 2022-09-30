import { Button, Container, Group, Title } from '@mantine/core'
import { IconHome } from '@tabler/icons'
import React from 'react'

type Props = {}

const NotFound = (props: Props) => {
  return (
    <Container my={70}>
      <Group position='center' my={40}>
        <Title order={1} sx={{ fontFamily: 'Poppins, sans-serif' }}>404 Page Not Found</Title>

      </Group>
      <Group position='center' my={40}>
        <Title order={2} sx={{ fontFamily: 'Poppins, sans-serif' }}>Oops!! Seems that you are lost</Title>
      </Group>

      <Group position='center' my={40}>
          <Button variant="gradient" fullWidth sx={{height: '48px'}} gradient={{ from: 'pink', to: '#ff66cc', deg: 60 }}>Head to Home</Button>
      </Group>
    </Container>
  )
}

export default NotFound