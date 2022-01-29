import React from 'react'
import Navbar from '../navbar/navbar';
import AddBug from '../Bug/AddBug';
import Buglist from '../buglist/Buglist';
const Home = () => {
  return (
    <div>
      <Navbar />
        <Buglist/>
        <AddBug/>
    </div>
  )
}

export default Home
