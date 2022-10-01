import { Container, PasswordInput, TextInput,Button, Title, Group } from '@mantine/core'
import { useState } from 'react'

type AuthFormProps = {
    formFor: 'signup' | 'login'
}

const AuthForm = ({formFor}: AuthFormProps) => {

  const [usernameInput,setUsernameInput] = useState('')
  const [emailInput,setEmailInput] = useState('')
  const [passwordInput,setPasswordInput] = useState('')

  return (
    <Container className='form' p={40}>
        <Group position='center'>
          <Title order={2} sx={{ fontFamily: 'Poppins, sans-serif' }} mb={40}>
            {formFor === 'signup' ? 'Sign Up' : 'Login'}
          </Title>
        </Group>
        <TextInput
            placeholder="Your username"
            label="Username"
            withAsterisk
            mb={40}
            value={usernameInput}
            onChange={(e) => setUsernameInput(e.target.value)}
        />
        <TextInput
            placeholder="Your email"
            label="Email"
            withAsterisk
            mb={40}
            value={emailInput}
            onChange={(e) => setEmailInput(e.target.value)}
        />
        <PasswordInput
            placeholder="Password"
            label="Password"
            description="Password must include at least one letter, number and special character"
            withAsterisk
            mb={40}
            value={passwordInput}
            onChange={(e) => setPasswordInput(e.target.value)}
        />
        <Button fullWidth variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>
            {formFor === 'signup' ? 'Sign Up' : 'Login'}
        </Button>
    </Container>
  )
}

export default AuthForm