import './App.css'
import { useEffect, useState } from 'react';
import { Grid, Group } from '@mantine/core';
import HeroPage from './components/HeroPage';
import Header from './components/Header';
import Footer from './components/Footer';
import SideNav from './components/SideNav';
import MainArea from './components/MainArea';
import { userStateType } from './lib/Types.js'

type localUserType = {
  userEmail: string,
  userName: string,
  userToken: string
}

export default function App() {

  const [user,setUser] = useState<userStateType | null>(null)
  const [addModalOpened,setAddModalOpened] = useState(false)
  const [authTab,setAuthTab] = useState<'signup' | 'login'>('signup')

  useEffect(() => {
    const localUser = localStorage.getItem('user')
    const localUserObj: localUserType | null = localUser ?  JSON.parse(localUser) : null
    const userSetter = {
      email: localUserObj?.userEmail,
      username: localUserObj?.userName,
      token: localUserObj?.userToken
    }

    if(localUser)
      setUser(userSetter)
  },[])

  return (
    <>
    <button onClick={()=>console.log(user)}>check</button>
      <Grid grow>
        <Grid.Col span={12}>
            <Header/>
        </Grid.Col>
      </Grid>
      <Grid grow>
        <Grid.Col span={3}>
          <SideNav setAddModalOpened={setAddModalOpened} setAuthTab={setAuthTab}/>
        </Grid.Col>
        <Grid.Col span={9}>
          <MainArea user={user} addModalOpened={addModalOpened} setAddModalOpened={setAddModalOpened} authTab={authTab} setAuthTab={setAuthTab}/>
        </Grid.Col>
      </Grid>
      <Grid grow>
        <Grid.Col span={12}>
          <Footer/>
        </Grid.Col>
      </Grid>
    </>
  );
}


// const user = JSON.parse(localStorage.getItem('user'))