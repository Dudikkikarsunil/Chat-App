import {  useState } from 'react'
import './Login.css'
import assets from '../../assets/assets'
import { login, signup } from '../../config/FireBase';

const Login = () => {
  const [currState,setCurrState]=useState("Sign Up");
  const [userName,setUserName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

   const onSubmitHandler=(event)=>{
      event.preventDefault();
      if(currState==="Sign Up"){
        signup(userName,email,password);
      }else{
        login(email,password);
      }
   }
  return (
    <div className='login'>
        <img src={assets.logo_big} alt="" className='login-logo'/>
        <form onSubmit={onSubmitHandler}className="login-form">
        <h2>{currState}</h2> 
        {currState=== "Sign Up"?<input onChange={(e)=>setUserName(e.target.value)}  value={userName}type="text" placeholder='user name' className='form-input' required/>:null}
        <input onChange={(e)=>setEmail(e.target.value)}  type="email"  placeholder='email address' className='form-input' required />
        <input  onChange={(e)=>setPassword(e.target.value)} value ={password} type="password" placeholder='password' className='form-input' required/>
        <button type='submit'>{currState==="Sign Up"?"Create Account":"Login Now"}</button>
        <div className='login-term'>
            <input type="checkbox" />
            <p>Agree the terms and conditions for use & privacy policy.</p>
        </div>
        <div className='login-forgot'>
        {
            currState === "Sign Up"
            ?
            <p className="login-toggle"> Already have an account    <span onClick={()=>{setCurrState("Login")}}>Login here</span></p>:
             <p className="login-toggle">   Create an account    <span onClick={()=>{setCurrState("Sign Up")}}>Click here</span></p>
        }
        </div>
        </form>
    </div>
  )
}

export default Login