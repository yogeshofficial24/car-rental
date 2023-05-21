import React from 'react'
import "../styles/Login.css"
import { Link } from 'react-router-dom';
function Reg() {
  return (
    <div id='ldivv'>
        <div id='ldiv1'>
        <center><h1 id='h11'>Register Here</h1>

        <br></br><br></br> <br></br>
        <p id='lp1'>UserName</p>
        <input id='lin1' type='text' placeholder='UserName'/>
        <br/><br></br>

        <p id='lp1'>Email</p>
        <input id='lin1' type='email' placeholder='Email'/>
        <br/><br></br>

        <p id='lp1'>PhoneNo</p>
        <input id='lin1' type='text' placeholder='Phone'/>
        <br/><br></br>

        <p id='lp1'>Password</p>
        <input id='lin1' type='password' placeholder='Password'/>
        <br/>
        <br/>
        <Link to="/"> <p id="but1">Register</p></Link>
        </center>
    </div>
    </div>
  )
}

export default Reg