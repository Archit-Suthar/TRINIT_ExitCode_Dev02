import React from 'react'
import { Table } from 'react-bootstrap'
export default function Buglist() {

    const h1style={
        color:'grey',
        letterSpacing: '0.2rem'
    }

    return (
        <div className='mt-2'>
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
    <tr>
      <td>1</td>
      <td>Bug-1</td>
      <td>Run-time</td>
      <td>404</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Bug-2</td>
      <td>Compile Time</td>
      <td>400</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Bug-3</td>
      <td>Logical</td>
      <td>500</td>
    </tr>
  </tbody>
</Table>
        </div>
    )
}
