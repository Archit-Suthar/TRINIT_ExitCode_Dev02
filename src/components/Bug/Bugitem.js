import React from 'react'
const Bugitem = (props) => {
  const {bug} = props;
  return (
          <tr>
            <td>1</td>
            
            <td>{bug.name}</td>
            <td>{bug.type}</td>
            <td><span className="badge bg-info text-dark">{bug.status}</span></td>
          </tr>
  )
}

export default Bugitem;
