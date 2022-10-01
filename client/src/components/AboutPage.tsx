import { Button, Container, Divider, Group, Text, Title } from '@mantine/core'
import { IconBrandCss3, IconBrandFigma, IconBrandFirebase, IconBrandGithub, IconBrandHtml5, IconBrandJavascript, IconBrandLinkedin, IconBrandNextjs, IconBrandPython, IconBrandReact, IconBrandTailwind, IconBrandTwitter, IconCurrencyEthereum, IconMail } from '@tabler/icons'
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
        I am Lakshit Chiranjiv Sagar, currently a 3rd year BTech. student, also a Full Stack web and blockchain developer. I have a very keen interest in web development and blockchain development with Javascript as my goto language. For now I am creating some good projects. You can contact me on any of the below given links or on my mail. Always Trying to do Better.✨ 
      </Text>

      <Title order={4} sx={{ fontFamily: 'Poppins, sans-serif' }}>Skills</Title>
      <Group my={30} position='center'>
        <Button variant="gradient" gradient={{ from: 'orange', to: '#ff9966', deg: 60 }}><IconBrandHtml5/></Button>
        <Button variant="gradient" gradient={{ from: 'blue', to: '#0099ff', deg: 60 }}><IconBrandCss3/></Button>
        <Button variant="gradient" gradient={{ from: 'yellow', to: '#ffff66', deg: 60 }}><IconBrandJavascript/></Button>
        <Button variant="gradient" gradient={{ from: '#00ffff', to: '#00ccff', deg: 60 }}><IconBrandReact/></Button>
        <Button variant="gradient" gradient={{ from: 'black', to: 'gray', deg: 60 }}><IconBrandNextjs/></Button>
        <Button variant="gradient" gradient={{ from: 'blue', to: 'yellow', deg: 60 }}><IconBrandPython/></Button>
        <Button variant="gradient" gradient={{ from: '#66c2ff', to: '#0099ff', deg: 60 }}><IconBrandTailwind/></Button>
        <Button variant="gradient" gradient={{ from: 'orange', to: 'yellow', deg: 60 }}><IconBrandFirebase/></Button>
        <Button variant="gradient" gradient={{ from: 'red', to: 'blue', deg: 60 }}><IconBrandFigma/></Button>
        <Button variant="gradient" gradient={{ from: 'black', to: 'gray', deg: 60 }}><IconCurrencyEthereum/></Button>
      </Group>

      <Title order={4} sx={{ fontFamily: 'Poppins, sans-serif' }}>Contact me</Title>
      <Group position='apart' my={30}>
        <Button variant="gradient" sx={{width: '30%', height: '48px'}} gradient={{ from: 'blue', to: '#79a9d9', deg: 60 }}><IconBrandTwitter/> &nbsp; Twitter</Button>
        <Button variant="gradient" sx={{width: '30%', height: '48px'}} gradient={{ from: '#0071AE', to: 'blue', deg: 60 }}><IconBrandLinkedin/> &nbsp; Linkedin</Button>
        <Button variant="gradient" sx={{width: '30%', height: '48px'}} gradient={{ from: 'black', to: 'gray', deg: 60 }}><IconBrandGithub/> &nbsp; Github</Button>
      </Group>
    </Container>
  )
}

export default AboutPage