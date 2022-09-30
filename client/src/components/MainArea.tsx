import { Container } from '@mantine/core'
import React, { useState } from 'react'
import { Route,Routes } from 'react-router-dom'
import AboutPage from './AboutPage'
import AddSmoothie from './AddSmoothie'
import AuthTabs from './AuthTabs'
import HeroPage from './HeroPage'
import NotFound from './NotFound'
import SmoothieDetail from './SmoothieDetail'
import SmoothiesList from './SmoothiesList'


const MainArea = () => {

  const [addModalOpened,setAddModalOpened] = useState(false)

  return (
    <Container className='mainarea'>
      <Routes>
        <Route path='/' element={<HeroPage/>}/>
        <Route path='/signup' element={<AuthTabs/>}/>
        <Route path='/login' element={<AuthTabs/>}/>
        <Route path='/smoothies' element={<SmoothiesList/>}/>
        <Route path='/smoothies/:id' element={<SmoothieDetail/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
        <AddSmoothie addModalOpened={addModalOpened} setAddModalOpened={setAddModalOpened}/>
    </Container>
  )
}

export default MainArea