import React from 'react';

function AddBug() {
  return <div>
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addBug">
      Report a new Bug
    </button>

    <div class="modal fade" id="addBug" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div className="container">
            {/* header of the modal  */}
            <div class="modal-header">
              <h5 class="modal-title fs-4" id="exampleModalLabel">Report New Bug</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            {/* body of the modal  */}
            <div class="modal-body">
              <div class="mb-3">
                <label for="bug-summary" class="form-label float-start fs-5">Summary</label>
                <input type="text" class="form-control" id="bug-summary" placeholder="Summary of the New Bug" />
              </div>
              <div class="mb-3">
                <label for="bug-desc" class="form-label float-start fs-5">Description</label>
                <textarea class="form-control" id="bug-desc" rows="3" placeholder="Detailed description of the New Bug"></textarea>
              </div>
              <div class="row g-3 align-items-center">
                <div class="col-auto">
                  <label for="bug-tag" class="col-form-label fs-5">Add tag : </label>
                </div>
                <div class="col-auto">
                  <input type="text" id="bug-tag" class="form-control"/>
                </div>
                
              </div>
            </div>

            {/* footer of the modal  */}
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>

            
          </div>

        </div>
      </div>
    </div>
  </div>;
}

export default AddBug;
