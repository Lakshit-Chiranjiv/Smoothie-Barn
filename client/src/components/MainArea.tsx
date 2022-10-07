import { Container } from '@mantine/core'
import { Route,Routes } from 'react-router-dom'
import AboutPage from './AboutPage'
import AddSmoothie from './AddSmoothie'
import AuthTabs from './AuthTabs'
import HeroPage from './HeroPage'
import NotFound from './NotFound'
import SmoothieDetail from './SmoothieDetail'
import SmoothiesList from './SmoothiesList'
import { userStateType } from './../lib/Types.js'

type MainAreaProps = {
  user: userStateType | null,
  addModalOpened: boolean,
  setAddModalOpened: React.Dispatch<React.SetStateAction<boolean>>,
  authTab: 'signup' | 'login',
  setAuthTab: React.Dispatch<React.SetStateAction<"signup" | "login">>
}

const MainArea = ({addModalOpened,setAddModalOpened,authTab,setAuthTab}: MainAreaProps) => {

  return (
    <Container className='mainarea'>
      <Routes>
        <Route path='*' element={<NotFound/>}/>
        <Route path='/' element={<HeroPage/>}/>
        <Route path='/signup' element={<AuthTabs authTab={authTab} setAuthTab={setAuthTab}/>}/>
        <Route path='/login' element={<AuthTabs authTab={authTab} setAuthTab={setAuthTab}/>}/>
        <Route path='/smoothies' element={<SmoothiesList setAddModalOpened={setAddModalOpened}/>}/>
        <Route path='/smoothies/:id' element={<SmoothieDetail/>}/>
        <Route path='/about' element={<AboutPage/>}/>
      </Routes>
        <AddSmoothie addModalOpened={addModalOpened} setAddModalOpened={setAddModalOpened}/>
    </Container>
  )
}

export default MainArea