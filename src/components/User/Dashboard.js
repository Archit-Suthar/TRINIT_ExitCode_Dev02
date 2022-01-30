import React from 'react';
import Navbar from '../navbar/navbar';
import Buglist from '../buglist/Buglist';

function Dashboard() {
  return <div>
    <Navbar />
    <Buglist />
    {/* <AddBug /> */}
  </div>;
}

export default Dashboard;
