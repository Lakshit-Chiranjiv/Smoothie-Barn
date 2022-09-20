import { Container, PasswordInput, TextInput,Button, Title, Group } from '@mantine/core'

type AuthFormProps = {
    formFor: 'signup' | 'login'
}

const AuthForm = ({formFor}: AuthFormProps) => {
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
        />
        <TextInput
            placeholder="Your email"
            label="Email"
            withAsterisk
            mb={40}
        />
        <PasswordInput
            placeholder="Password"
            label="Password"
            description="Password must include at least one letter, number and special character"
            withAsterisk
            mb={40}
        />
        <Button fullWidth variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>
            {formFor === 'signup' ? 'Sign Up' : 'Login'}
        </Button>
    </Container>
  )
}

export default AuthForm