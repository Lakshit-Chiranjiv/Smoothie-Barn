import './App.css'
import { useState } from 'react';
import { Grid, Group } from '@mantine/core';
import HeroPage from './components/HeroPage';
import Header from './components/Header';
import Footer from './components/Footer';
import SideNav from './components/SideNav';
import MainArea from './components/MainArea';

export default function App() {

  const [addModalOpened,setAddModalOpened] = useState(false)

  return (
    <>
      <Grid grow>
        <Grid.Col span={12}>
            <Header/>
        </Grid.Col>
      </Grid>
      <Grid grow>
        <Grid.Col span={3}>
          <SideNav setAddModalOpened={setAddModalOpened}/>
        </Grid.Col>
        <Grid.Col span={9}>
          <MainArea addModalOpened={addModalOpened} setAddModalOpened={setAddModalOpened}/>
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