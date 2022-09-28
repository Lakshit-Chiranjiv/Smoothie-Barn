import { Button, Container, Divider, Group, Text, Title } from '@mantine/core'
import { IconBrandGithub, IconBrandLinkedin, IconBrandTwitter, IconMail } from '@tabler/icons'
import React from 'react'

const AboutPage = () => {
  return (
    <Container>
      <Group position='apart' m={30}>
        <Title order={2} sx={{ fontFamily: 'Poppins, sans-serif' }}>About Me</Title>
        <Button variant="gradient" gradient={{ from: 'teal', to: 'blue', deg: 60 }}><IconMail/></Button>
      </Group>

      <Divider my="sm" />

      <Text my={32}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores delectus nihil illum ratione pariatur porro eius, impedit quas nostrum repellat suscipit sunt id vel saepe? Odit id totam nam cupiditate eum possimus quae aspernatur mollitia modi iste? Repellat autem eaque blanditiis inventore vitae mollitia laboriosam omnis facilis sed numquam! Nesciunt laborum non assumenda nobis voluptatem vitae unde perspiciatis eum illum maiores ullam alias perferendis voluptates totam molestiae, amet repellat! Enim?
      </Text>

      <Group position='apart'>
        <Button variant="gradient" sx={{width: '30%', height: '48px'}} gradient={{ from: 'blue', to: 'indigo', deg: 60 }}><IconBrandTwitter/></Button>
        <Button variant="gradient" sx={{width: '30%', height: '48px'}} gradient={{ from: 'purple', to: 'blue', deg: 60 }}><IconBrandLinkedin/></Button>
        <Button variant="gradient" sx={{width: '30%', height: '48px'}} gradient={{ from: 'black', to: 'gray', deg: 60 }}><IconBrandGithub/></Button>
      </Group>
    </Container>
  )
}

export default AboutPage