import React, { useContext, useEffect } from 'react';
import bugContext from "../../context/bugs/bugContext";
import Bugitem from '../Bug/Bugitem';
import AddBug from '../Bug/AddBug';
import { useNavigate } from 'react-router'
import { Table } from 'react-bootstrap'
export default function Buglist() {
  const navigate = useNavigate();
  const context = useContext(bugContext);
  const { bugs, getBug} = context;
  useEffect(() => {
    if(localStorage.getItem("token")){
      getBug();
    }else{
        navigate("/login")
    }
    // eslint-disable-next-line
}, [])

  const h1style = {
    color: 'grey',
    letterSpacing: '0.2rem'
  }

  return (
    <div className='mt-2 container'>
      <h2 style={h1style} > BUGS BEING TAKEN CARE OF</h2>

      <Table striped bordered hover variant="light">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Type</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {bugs.map((bug,index)=>{
            return <Bugitem key={index} index={index} bug = {bug} />
          })}
        </tbody>
      </Table>

      <AddBug/>
    </div>
  )
}
