import axios from "../../axios";
import React, { useEffect, useState, useRef } from "react";
import { Container } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

function Edit() {
  const [books, setBooks] = useState();
  const [changedInput, setChangedInput] = useState();

  const isbnno = useRef("");
  const bookref = useRef("");
  const bookAuthor = useRef("");
  const total = useRef("");
  const bal = useRef("");
  const img = useRef("");
  const navigate = useNavigate();

  const { bookId } = useParams();

  useEffect(() => {
    axios
      .get(`/book/getbook/${bookId}`)
      .then((response) => setBooks(response.data))
      // console.log(response.data))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const onInputChange = (e, value) => {
    if (e.target.value !== value) {
      setChangedInput(true);
    } else {
      setChangedInput(false);
    }
  };

  const handlesubmit = (event) => {
    event.preventDefault();

    const isbn = isbnno.current.value;
    const bookName = bookref.current.value;
    const author = bookAuthor.current.value;
    const totalNo = total.current.value;
    const balCopies = bal.current.value;
    const image = img.current.value;

    axios({
      method: "patch",
      url: `/book/edit/bookId/${bookId}`,
      data: {
        id: bookId,
        isbn,
        bookName,
        author,
        totalNo,
        balCopies,
        image,
      },
    })
      .then((response) => {
        if (response.data) {
          alert(bookName + " details Updated");
          navigate("/admin");
        } else {
          alert("error");
        }
      })
      .catch((error) => console.log(error));
  };

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
                  ref={isbnno}
                  onChange={(e) => onInputChange(e, books.isbn)}
                  required
                  defaultValue={books?.isbn}
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="book" className="form-label">
                  Book Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="bookName"
                  ref={bookref}
                  onChange={(e) => onInputChange(e, books.bookName)}
                  defaultValue={books?.bookName}
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
                  onChange={(e) => onInputChange(e, books.author)}
                  defaultValue={books?.author}
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
                  onChange={(e) => onInputChange(e, books.totalNo)}
                  defaultValue={books?.totalNo}
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
                  onChange={(e) => onInputChange(e, books.balCopies)}
                  defaultValue={books?.balCopies}
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
                  onChange={(e) => onInputChange(e, books.image)}
                  defaultValue={books?.image}
                  required
                />
              </div>
            </div>
            <div className="col-12">
              <button
                className="btn btn-primary "
                style={{ alignSelf: "center" }}
                type="submit"
                disabled={!changedInput}
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </Container>
    </>
  );
}

export default Edit;
