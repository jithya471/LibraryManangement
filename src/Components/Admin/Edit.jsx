import React, { useState } from 'react'
import { Container} from 'react-bootstrap'

function Edit() {

  const handlesubmit = (event) => {
    event.preventDefault()
  }
  return (
    <>
    <Container className="mt-5 pt-5 justify-content-center">
        <div className="card mt-3 pb-5 shadow" style={{ width: "50rem" }}>
          <h3 className="mt-5">Edit Book Details</h3>
          <form
            className="row g-3 needs-validation justify-content-center"
            onSubmit={handlesubmit}
          >
            <div className="row justify-content-md-center">
              <div className="col-md-4">
                <label htmlFor="isbn" className="form-label">
                  ISBN No.
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="isbn"
                  required
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="book" className="form-label">
                  Book Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="book"
                  
                  required
                />
              </div>
            </div>
            <div className="row justify-content-md-center mt-2">
              <div className="col-md-4">
                <label htmlFor="author" className="form-label">
                  Author
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="author"
                  required
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="totalNo" className="form-label">
                  Total No. of Copies
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="totalNo"
                  required
                />
              </div>
            </div>
            <div className="row justify-content-md-center mt-2">
              <div className="col-md-4">
                <label htmlFor="balance" className="form-label">
                  Balance Copies Available
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="balance"
                  required
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="image" className="form-label">
                  Image
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="image"

                  required
                />
              </div>
            </div>
            <div className="col-12">
    <button className="btn btn-primary " style={{alignSelf:"center"}} type="submit">Save</button>
  </div>
          </form>
        </div>
      </Container>
    </>
  )
}

export default Edit