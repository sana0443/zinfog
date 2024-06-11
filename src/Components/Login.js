import React, { useState } from 'react'
import './Login.css'
import { Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import PhoneIcon from '@mui/icons-material/Phone';
import * as Yup from "yup";


function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    const LoginSchema = Yup.object().shape({
        username: Yup.string()
            .required("Username is required"),
        password: Yup.string()
            .min(3, "Password must be 3 characters at minimum")
            .required("Password is required"),
    });
    

    const navigate=useNavigate()

    const handleHome=()=>{
      navigate('/')
    }
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        await LoginSchema.validate({ username, password }, { abortEarly: false });
       
        const response = await fetch('http://3.110.171.91/api/b2b/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username,
            password,
          }),
        });
    
        if (response.ok) {
          console.log(response,'dddddddddddd');
         
  
    
          console.log('Login successful');
          navigate('/');
        } else {
          console.error('Login failed:', response.statusText);
        }
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          // Yup validation error occurred
          const validationErrors = {};
          error.inner.forEach((err) => {
            validationErrors[err.path] = err.message;
          });
          setErrors(validationErrors);
          console.error('Validation error:', validationErrors);
        } else {
          // Other types of errors occurred
          console.error('Error:', error);
        }
      }
      console.log(errors);
      console.log(errors);
      // Check the errors state after validation
    };
    

    return (
      <div className='loginpage p-5 d-flex justify-content-center align-items-center'>
        <div className='p-5 bg-white rounded-3 login-card' >
        <img src='/Images/Group 366.png'/>

        <h5 className='text-capitalize '>Report download portal</h5>

        <form className='inner-card p-5 rounded-3' onSubmit={handleSubmit}>
                    <div className="d-flex flex-column">
                        <label className='text-start'>Username</label>
                        <div className="input-group">
                            <input
                                type="text"
                                id="username"
                                className="form-control"
                                placeholder="Username"
                                style={{ width: "100%" }}
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            {errors.username && <div style={{ color: 'red', fontSize: '12px' }}>{errors.username}</div>}
                        </div>
                    </div>
                    <div className="d-flex flex-column">
                        <label className='text-start'>Password</label>
                        <input
                            type="password"
                            id="password"
                            className="form-control"
                            placeholder="Password"
                            style={{ width: "100%" }}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {errors.password && <div style={{ color: 'red', fontSize: '12px' }}>{errors.password}</div>}
                    </div>

                    <Button type='submit' style={{ marginTop: "25px", cursor: "pointer", backgroundColor: "#1c6ab7" }}>Submit</Button>
                    <br />
                    <Link to="/reset-password" style={{ cursor: "pointer", color: "#1c6ab7", marginTop: "10px" }}>Reset password</Link>
                </form>


        <h6> <PhoneIcon style={{ fontSize:"15px",color:"#1c6ab7"}}/> (+91) 9288008801</h6>
            
        </div>
      </div>
    )
  }
  export default Login
