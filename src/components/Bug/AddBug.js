import React,{useState} from 'react';

function AddBug() {
  const [bug,setBug] = useState({name:"",description:"",type:""});
  const addBugs = async(e)=>{
    e.preventDefault();
    const response = await fetch(`http://localhost:5000/bugs/addbug`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({name:bug.name,description:bug.description,type:bug.type})
              });
              const json = await response.json();
              console.log(json)
  }
  const onChange = (e)=>{
    setBug({...bug,[e.target.name]:e.target.value});
  }
  return <div>
    <button type="button" className="btn btn-primary" data-bs-toggle="modal"  data-bs-target="#addBug">
      Report a new Bug
    </button>

    <div className="modal fade" id="addBug" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="container">
            {/* header of the modal  */}
            <div className="modal-header">
              <h5 className="modal-title fs-4" id="exampleModalLabel">Report New Bug</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            {/* body of the modal  */}
            <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="bug-summary" className="form-label float-start fs-5">Summary</label>
                <input type="text" className="form-control" id="bug-summary" name="name" onChange={onChange} placeholder="Summary of the New Bug" />
              </div>
              <div className="mb-3">
                <label htmlFor="bug-desc" className="form-label float-start fs-5">Description</label>
                <textarea className="form-control" id="bug-desc" name='description' onChange={onChange} rows="3" placeholder="Detailed description of the New Bug"></textarea>
              </div>
              <div className="row g-3 align-items-center">
                <div className="col-auto">
                  <label htmlFor="bug-tag" className="col-form-label fs-5">Add tag : </label>
                </div>
                <div className="col-auto">
                  <input type="text" id="bug-tag" name='type' onChange={onChange} className="form-control"/>
                </div>
                
              </div>
            </div>

            {/* footer of the modal  */}
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" onClick={addBugs} className="btn btn-primary">Save changes</button>
            </div>


          </div>

        </div>
      </div>
    </div>
  </div>;
}

export default AddBug;
