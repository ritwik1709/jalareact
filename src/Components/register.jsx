import React, { useState } from 'react'
import '../Styles/register.css';
import { Link } from 'react-router-dom';



const Register = () => {
    const [name,setname]=useState("");
    const [email,setemail]=useState("");
    const [password,setpassword]=useState("");

    const submithandler=(e)=>{
        e.preventDefault();
        const user={email,password};
        localStorage.setItem('user', JSON.stringify(user));

        
        alert("User Registered Successfully");
        setemail("");
        setpassword("");
        setname("");
    }

    return (
      <div>
              <h1>JALA ACEDEMY</h1>
          <div className="container">
      <div className="screen">
          <div className="screen__content">
              <form className="login" onSubmit={submithandler}>
                 <div className="login__field">
                      <i className="login__icon fas fa-user"></i>
                      <input
                       type="text" 
                       className="login__input" 
                       required="true"
                       placeholder="Name"
                       value={name}
                        onChange={(e)=>{setname(e.target.value)}}
                       />
                  </div>
                  <div className="login__field">
                      <i className="login__icon fas fa-user"></i>
                      <input
                       type="email" 
                       className="login__input" 
                       required="true"
                       placeholder="Email"
                       value={email}
                        onChange={(e)=>{setemail(e.target.value)}}
                       />
                  </div>
                  <div className="login__field">
                      <i className="login__icon fas fa-lock"></i>
                      <input 
                      type="password" 
                      required="true"
                      className="login__input" 
                      placeholder="Password"
                      value={password}
                      onChange={(e)=>{setpassword(e.target.value)}}
                      />
                  </div>
                  
                	
                  <button className="button login__submit" >
                      <span className="button__text">Register</span>
                      <i className="button__icon fas fa-chevron-right"></i>
                  </button>	
                  <button className="button login__submit">
                      <span className="button__text">
                        <Link to={'/'}>  Go to LogIn page</Link>                      
                        </span>
                      <i className="button__icon fas fa-chevron-right"></i>
                  </button>
                
                          
              </form>
          </div>
          <div className="screen__background">
              <span className="screen__background__shape screen__background__shape4"></span>
              <span className="screen__background__shape screen__background__shape3"></span>		
              <span className="screen__background__shape screen__background__shape2"></span>
              <span className="screen__background__shape screen__background__shape1"></span>
          </div>		
      </div>
  </div>
      </div>
    )
  }
  

export default Register