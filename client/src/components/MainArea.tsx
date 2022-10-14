import { Container } from '@mantine/core'
import { Route,Routes,Navigate } from 'react-router-dom'
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
  setUser: React.Dispatch<React.SetStateAction<userStateType | null>>,
  addModalOpened: boolean,
  setAddModalOpened: React.Dispatch<React.SetStateAction<boolean>>,
  authTab: 'signup' | 'login',
  setAuthTab: React.Dispatch<React.SetStateAction<"signup" | "login">>,
  userSpecificSmoothies: boolean,
  setUserSpecificSmoothies: React.Dispatch<React.SetStateAction<boolean>>
}

const MainArea = ({user,setUser,addModalOpened,setAddModalOpened,authTab,setAuthTab}: MainAreaProps) => {

  return (
    <Container className='mainarea'>
      <Routes>
        <Route path='*' element={<NotFound/>}/>
        <Route path='/' element={<HeroPage user={user} setAuthTab={setAuthTab}/>}/>
        <Route path='/signup' element={!user ? <AuthTabs authTab={authTab} setAuthTab={setAuthTab} setUser={setUser}/> : <Navigate to='/'/>}/>
        <Route path='/login' element={!user ? <AuthTabs authTab={authTab} setAuthTab={setAuthTab} setUser={setUser}/> : <Navigate to='/'/>}/>
        <Route path='/smoothies' element={user ? <SmoothiesList user={user} setAddModalOpened={setAddModalOpened}/> : <Navigate to='/'/>}/>
        <Route path='/smoothies/:id' element={user ? <SmoothieDetail user={user}/> : <Navigate to='/'/>}/>
        <Route path='/about' element={<AboutPage/>}/>
      </Routes>
      {
        user &&
        <AddSmoothie user={user} addModalOpened={addModalOpened} setAddModalOpened={setAddModalOpened}/>
      }
    </Container>
  )
}

export default MainArea