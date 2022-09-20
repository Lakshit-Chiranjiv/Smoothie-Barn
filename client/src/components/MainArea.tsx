import { Container } from '@mantine/core'
import React from 'react'
import HeroPage from './HeroPage'
import SignupForm from './SignupForm'

const MainArea = () => {
  return (
    <Container className='mainarea'>
        {/* <HeroPage/> */}
        <SignupForm/>
    </Container>
  )
}

export default MainArea