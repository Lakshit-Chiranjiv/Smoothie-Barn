import { Container } from '@mantine/core'
import { Route,Routes } from 'react-router-dom'
import AboutPage from './AboutPage'
import AddSmoothie from './AddSmoothie'
import AuthTabs from './AuthTabs'
import HeroPage from './HeroPage'
import NotFound from './NotFound'
import SmoothieDetail from './SmoothieDetail'
import SmoothiesList from './SmoothiesList'

type MainAreaProps = {
  addModalOpened: boolean,
  setAddModalOpened: React.Dispatch<React.SetStateAction<boolean>>
}

const MainArea = ({addModalOpened,setAddModalOpened}: MainAreaProps) => {

  return (
    <Container className='mainarea'>
      <Routes>
        <Route path='*' element={<NotFound/>}/>
        <Route path='/' element={<HeroPage/>}/>
        <Route path='/signup' element={<AuthTabs/>}/>
        <Route path='/login' element={<AuthTabs/>}/>
        <Route path='/smoothies' element={<SmoothiesList/>}/>
        <Route path='/smoothies/:id' element={<SmoothieDetail/>}/>
        <Route path='/about' element={<AboutPage/>}/>
      </Routes>
        <AddSmoothie addModalOpened={addModalOpened} setAddModalOpened={setAddModalOpened}/>
    </Container>
  )
}

export default MainArea