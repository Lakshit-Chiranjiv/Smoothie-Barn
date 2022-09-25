import { Button, Divider, Grid, Group, Title } from '@mantine/core'
import SmoothieCard from './SmoothieCard'

const SmoothiesList = () => {
  return (
    <>
      <Group position='apart' m={30}>
        <Title order={2} sx={{ fontFamily: 'Poppins, sans-serif' }}>The Barn</Title>
        <Button variant="gradient" gradient={{ from: 'teal', to: 'blue', deg: 60 }}>Add Smoothie</Button>
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