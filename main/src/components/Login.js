import React, { useState } from 'react';
import "../styles/Login.css";
import { Link } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [values, setValues] = useState({
    username: '',
    password: ''
  });

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3306/signup', values)
      .then(res => console.log("Registered Successfully"))
      .catch(err => console.log(err));
  };

  return (
    <div id='ldivv'>
      <form onSubmit={handleSubmit}>
        <div id='ldiv1'>
          <center>
            <h1 id='h11'>Sign Here</h1>
            <br /><br /><br /><br />
            <p id='lp1'>UserName</p>
            <input id='lin1' type='text' placeholder='Username' name='username' onChange={handleChange} />
            <br /><br />
            <p id='lp1'>Password</p>
            <input id='lin1' type='password' placeholder='Password' name='password' onChange={handleChange} />
            <br /><br /><br />
            <Link to="/"> <p id="but1">login</p></Link>
            {/* <button type="submit" id="but1" to="/">Login</button> */}
          </center>
        </div>
      </form>
    </div>
  );
}

export default Login;
