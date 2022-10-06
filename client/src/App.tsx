import './App.css'
import { useState } from 'react';
import { Grid, Group } from '@mantine/core';
import HeroPage from './components/HeroPage';
import Header from './components/Header';
import Footer from './components/Footer';
import SideNav from './components/SideNav';
import MainArea from './components/MainArea';

type userStateType = {
  email: string,
  username: string,
  token: string
}

export default function App() {

  const [user,setUser] = useState<userStateType | null>(null)
  const [addModalOpened,setAddModalOpened] = useState(false)
  const [authTab,setAuthTab] = useState<'signup' | 'login'>('signup')

  return (
    <>
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
          <MainArea addModalOpened={addModalOpened} setAddModalOpened={setAddModalOpened} authTab={authTab} setAuthTab={setAuthTab}/>
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