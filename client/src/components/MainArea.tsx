import { Container } from '@mantine/core'
import React, { useState } from 'react'
import AboutPage from './AboutPage'
import AddSmoothie from './AddSmoothie'
import AuthTabs from './AuthTabs'
import HeroPage from './HeroPage'
import SmoothieDetail from './SmoothieDetail'
import SmoothiesList from './SmoothiesList'

const MainArea = () => {

  const [addModalOpened,setAddModalOpened] = useState(false)

  return (
    <Container className='mainarea'>
        {/* <HeroPage/> */}
        {/* <AuthTabs/> */}
        {/* <SmoothiesList/> */}
        {/* <SmoothieDetail/> */}
        <AboutPage/>
        <AddSmoothie addModalOpened={addModalOpened} setAddModalOpened={setAddModalOpened}/>
    </Container>
  )
}

export default MainArea