import { Container } from "react-bootstrap";
import "./AddBook.css";
import React, { useRef } from "react";
import axios from "../../axios";
import { useNavigate } from "react-router-dom";

function AddBook() {
  const isbnno = useRef("");
  const book = useRef("");
  const bookAuthor = useRef("");
  const total = useRef("");
  const bal = useRef("");
  const img = useRef("");
  const navigate = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();

    const isbn = isbnno.current.value;
    const bookName = book.current.value;
    const author = bookAuthor.current.value;
    const totalNo = total.current.value;
    const balCopies = bal.current.value;
    const image = img.current.value;

    axios({
      method: "post",
      url: "/book/addbooks",
      data: {
        isbn,
        bookName,
        author,
        totalNo,
        balCopies,
        image,
      },
    })
      .then((response) => {
        navigate("/admin");
        if (response.data) {
          alert("Added");
        } else {
          alert("Already exist");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>

      <Container className="mt-5 pt-5 justify-content-center">
        <div className="card mt-3 pb-5 shadow" style={{ width: "50rem" }}>
          <h3 className="mt-5">Add Book</h3>
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
                  ref={isbnno}
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
                  ref={book}
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
                  ref={bookAuthor}
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
                  ref={total}
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
                  ref={bal}
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
                  ref={img}
                  required
                />
              </div>
            </div>
            <div className="col-12">
              <button
                className="btn btn-primary "
                style={{ alignSelf: "center" }}
                type="submit"
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </Container>
    </>
  );
}

export default AddBook;
