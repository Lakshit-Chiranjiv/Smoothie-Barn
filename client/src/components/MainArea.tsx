import { Container } from '@mantine/core'
import React, { useState } from 'react'
import AddSmoothie from './AddSmoothie'
import AuthTabs from './AuthTabs'
import HeroPage from './HeroPage'
import SmoothiesList from './SmoothiesList'

const MainArea = () => {

  const [addModalOpened,setAddModalOpened] = useState(false)

  return (
    <Container className='mainarea'>
        {/* <HeroPage/> */}
        {/* <AuthTabs/> */}
        <SmoothiesList/>
        <AddSmoothie addModalOpened={addModalOpened} setAddModalOpened={setAddModalOpened}/>
    </Container>
  )
}

export default MainArea