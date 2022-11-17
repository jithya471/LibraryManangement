import { Link } from "react-router-dom";
export default function NotFound() {
    return (
        <div className="mt-5 pt-5" style={{textAlign:"center"}}>
            <h1>Oops! You seem to be lost.</h1>
            <p>Here are some helpful links:</p>
            <Link to='/'>Home</Link><br></br>
            <Link to='/login'>Login</Link><br></br>
            <Link to='/signup'>Register</Link>
        </div>
    )
}