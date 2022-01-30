import React from 'react'
const Bugitem = (props) => {
  const {bug,index} = props;
  return (
          <tr>
            <td>{index+1}</td>
            <td>{bug.name ===undefined?localStorage.getItem('name'):bug.name}</td>
            <td>{bug.type === undefined?localStorage.getItem('type'):bug.type}</td>
            <td><span className="badge bg-info text-dark">{bug.status === undefined?"TODO":bug.status}</span></td>
          </tr>
  )
}

export default Bugitem;
