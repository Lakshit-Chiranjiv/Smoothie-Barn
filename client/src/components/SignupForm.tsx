import { Container, PasswordInput, TextInput } from '@mantine/core'
const SignupForm = () => {
  return (
    <Container className='signupform' p={40}>
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
    </Container>
  )
}

export default SignupForm