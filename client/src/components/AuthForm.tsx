import { Container, PasswordInput, TextInput,Button, Title, Group,Text } from '@mantine/core'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { userStateType } from '../lib/Types.js'

type AuthFormProps = {
    setUser: React.Dispatch<React.SetStateAction<userStateType | null>>,
    formFor: 'signup' | 'login'
}

type dataBodyType = {
  email: string,
  username: string,
  password: string
}



const AuthForm = ({setUser,formFor}: AuthFormProps) => {

  const navigate = useNavigate()

  const [usernameInput,setUsernameInput] = useState("")
  const [emailInput,setEmailInput] = useState("")
  const [passwordInput,setPasswordInput] = useState("")

  const [usernameError,setUsernameError] = useState("")
  const [emailError,setEmailError] = useState("")
  const [passwordError,setPasswordError] = useState("")

  const [fieldError,setFieldError] = useState("")

  const authClickHandler = async(operation: 'signup' | 'login',dataBody: dataBodyType) => {
    try {
      setEmailError('')
      setUsernameError('')
      setPasswordError('')
      setUsernameInput('')
      setEmailInput('')
      setPasswordInput('')
      const response = await axios.post(`http://localhost:8000/${operation}`,dataBody);
      if(response.data.userToken){
        localStorage.setItem('user', JSON.stringify(response.data))
        const userSetter = {
          email: response.data.userEmail,
          username: response.data.userName,
          token: response.data.userToken,
        }
        setUser(userSetter)
        navigate('/')
      }
    } catch (error: any) {
        setUser(null)
        const res = error.response.data 
        if(res){
          setEmailError(res.email)
          setUsernameError(res.username)
          setPasswordError(res.password)
        }

        setTimeout(()=>{
          setEmailError('')
          setUsernameError('')
          setPasswordError('')
        },5000)
    }
  }


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
            error={usernameError}
        />
        <TextInput
            placeholder="Your email"
            label="Email"
            withAsterisk
            mb={40}
            value={emailInput}
            onChange={(e) => setEmailInput(e.target.value)}
            error={emailError}
        />
        <PasswordInput
            placeholder="Password"
            label="Password"
            description="Password must include at least one letter, number and special character"
            withAsterisk
            mb={40}
            value={passwordInput}
            onChange={(e) => setPasswordInput(e.target.value)}
            error={passwordError}
        />
        <Button onClick={()=>{
          if(usernameInput && emailInput && passwordInput)
            authClickHandler(formFor,{
              email: emailInput,
              username: usernameInput,
              password: passwordInput
            })
          else{
            setFieldError("Fill up all fields!")
            setTimeout(()=>{
              setFieldError("")
            },4000)
          }
        }} fullWidth variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>
            {formFor === 'signup' ? 'Sign Up' : 'Login'}
        </Button>

        {
          fieldError &&
          <Group position='center' my={8}>
            <Text color='red' size='sm'>{fieldError}</Text>
          </Group>
        }
    </Container>
  )
}

export default AuthForm