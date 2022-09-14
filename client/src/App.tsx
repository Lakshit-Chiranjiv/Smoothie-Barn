import './App.css'
import { useState } from 'react';
import { Grid, Group } from '@mantine/core';
import HeroPage from './components/HeroPage';
import Header from './components/Header';

export default function App() {
  return (
    <>
      <Grid grow>
        <Grid.Col>
            <Header/>
        </Grid.Col>
      </Grid>
      <Grid grow>
        <Grid.Col span={4}>
          Side Nav
        </Grid.Col>
        <Grid.Col span={8}>
          Main Area
        </Grid.Col>
      </Grid>
      <Grid grow>
        <Grid.Col>
          Footer
        </Grid.Col>
      </Grid>
    </>
  );
}