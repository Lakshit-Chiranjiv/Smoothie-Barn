import { Container } from '@mantine/core'
import React from 'react'
import AuthTabs from './AuthTabs'
import HeroPage from './HeroPage'

const MainArea = () => {
  return (
    <Container className='mainarea'>
        {/* <HeroPage/> */}
        <AuthTabs/>
    </Container>
  )
}

export default MainArea