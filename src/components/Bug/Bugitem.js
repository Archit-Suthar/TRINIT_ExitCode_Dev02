import React,{useRef} from 'react';

const Bugitem = (props) => {
  const ref = useRef(null);
  const {bug,index} = props;
  // const [bug1,setBug1] = useState({name:"",description:"",type:""});
  const onClick =async()=>{
    
    if(localStorage.getItem('post') === 'Admin' ){
      ref.current.click();
      console.log("hey!!");
    }
  }
  return (
          <>
           {/* <!-- Button trigger modal --> */}
<button ref = {ref} type="button" class="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>

{/* <!-- Modal --> */}
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="bug-summary" className="form-label float-start fs-5">Summary</label>
                <input type="text" className="form-control" id="bug-summary" name="name" value={bug.name}  placeholder="Summary of the New Bug" required />
              </div>
              <div className="mb-3">
                <label htmlFor="bug-desc" className="form-label float-start fs-5">Description</label>
                <textarea className="form-control" id="bug-desc" name='description'   rows="3" placeholder="Detailed description of the New Bug"></textarea>
              </div>
              <div className="row g-3 align-items-center">
                <div className="col-auto">
                  <label htmlFor="bug-tag" className="col-form-label fs-5" value={bug.type}>Add tag :</label>
                </div>
                <div className="col-auto">
                  <input type="text" id="bug-tag" name='type'  className="form-control" />
                </div>

              </div>

            </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
          <tr onClick={onClick}>
            <td>{index+1}</td>
            <td>{bug.name ===undefined?localStorage.getItem('name'):bug.name}</td>
            <td>{bug.type === undefined?localStorage.getItem('type'):bug.type}</td>
            <td><span className="badge bg-info text-dark">{bug.status === undefined?"TODO":bug.status}</span></td>
          </tr>
          </>
  )
}

export default Bugitem;
