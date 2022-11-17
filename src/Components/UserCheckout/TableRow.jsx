import axios from "../../axios";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

function TableRow({order, setUpdate}) {
    const [bookData, setBookData] = useState()
    useEffect(() => {

        axios.get(`/book/getbook/${order.bookId}`).then((response)=>{
            setBookData(response.data)
        }).catch((err)=>console.log(err))
    }, [])

    const handleClick = ()=>{
        const userId = localStorage.getItem('userId')
        axios({
            method : 'put',
            url : `/user/return/${userId}/${order.bookId}`
        }).then((response)=>{
           if(response.data){
            alert("Return Successfully")
            setUpdate()
           }
        }).catch((err)=>console.log(err))
    }
    const date = order.checkoutDate
    const checkoutDate = date.split("T")[0]

  return (
    <tr >
      <td>{order.bookId}</td>
      <td>{bookData?.bookName}</td>
      <td>{bookData?.author}</td>
      
      <td>{checkoutDate}</td>

      <td>
        <div>
          <Button onClick={handleClick} variant="secondary" size="sm">
            Return
          </Button>
        </div>
      </td>
    </tr>
  );
}

export default TableRow;
