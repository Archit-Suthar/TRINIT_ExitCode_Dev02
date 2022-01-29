import React from 'react';
import Navbar from '../navbar/navbar';
import AddBug from '../Bug/AddBug';
import Buglist from '../buglist/Buglist';

function Dashboard() {
  return <div>
    <Navbar />
    <Buglist />
    <AddBug />
  </div>;
}

export default Dashboard;
