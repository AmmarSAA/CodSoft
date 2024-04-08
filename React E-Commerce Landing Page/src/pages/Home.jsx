import React from 'react'
import './css/Home.css';
import { Hero, NewCollections, NewsLetter, Offers, Popular } from '../components';

const Home = () => {

  return (
    <>
      <Hero />
      <Popular />
      <Offers />
      <NewCollections />
      <NewsLetter />
    </>
  )
}

export default Home