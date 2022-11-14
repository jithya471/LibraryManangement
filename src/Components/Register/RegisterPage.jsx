import axios from "../../axios";
import { useRef } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";



function RegisterPage() {
  const fullname = useRef()
  const add = useRef()
  const usergender = useRef()
  const useremail = useRef()
  const userpassword = useRef()
  const dateofbirth = useRef()
  const navigate = useNavigate();


  const handleSubmit = (e)=>{

    e.preventDefault()
    const userName = fullname.current.value;
    const address = add.current.value;
    const dob = dateofbirth.current.value;
    const email = useremail.current.value;
    const password = userpassword.current.value;
    const gender = usergender.current.value;


    axios({
      method: 'post',
      url: '/user/signup',
      data:{
        userName,
        address,
        dob,
        email,
        password,
        gender
      }
    }).then((response)=>{
      navigate("/login")
      if(response.data){
        alert("Welcome " + userName)
      }
      else{
        alert("user already exist")
      }
    }).catch((error)=>{
      console.log(error);
    })
  }

  return (
    <>
      <Container className="mt-5 pt-5 justify-content-center">
        
      <form onSubmit={handleSubmit} className="row g-3 needs-validation" >
      <div className="col-md-4">
    <label htmlFor="name" className="form-label">Full Name</label>
    <input type="text" className="form-control" id="name" required ref={fullname}/>
    
  </div>
  <div className="col-md-4">
    <label htmlFor="address" className="form-label">Address</label>
    <input type="text" className="form-control" id="address"  required ref={add}/>
    
  </div>
  <div className="col-md-4">
  <label htmlFor="gender" className="form-label">Gender</label>
  <select className="form-select" ref={usergender}>
  <option defaultChecked>select menu</option>
  <option value="male">Male</option>
  <option value="female">Female</option>
  <option value="other">Others</option>
</select>
      
  </div>
  
  <div className="col-md-4">
  <label htmlFor="email" className="form-label">E-Mail Id</label>
    <input type="email" className="form-control" id="email" required ref={useremail}/>
  </div>

  <div className="col-md-4">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" id="validationCustom03" required ref={userpassword}/>
    
  </div>
  
  <div className="col-md-4">
    <label htmlFor="dob" className="form-label">Date of Birth</label>
    <input type="date" className="form-control" id="dob" required ref={dateofbirth}/>
    
  </div>
  
  <div className="col-12">
    <button className="btn btn-primary" type="submit">Register</button>
  </div>
</form>
        
      </Container>
    </>
  );
}
export default RegisterPage;
