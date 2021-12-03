import React,{useState} from "react";
import './LoginForm.css';
import profile from "./../Images/a.png";
import email from "./../Images/email.jpg";
import pass from "./../Images/pass.png";
function LoginForm({Login,error}){
    const[details,setDetails]=useState({email:"",password:""});

    const submitHandler=e=>{
        e.preventDefault();
        Login(details);
    }
    return(
        <form onSubmit={submitHandler}> 
        <div className="main">
            <div className="sub-main">
                <div>
                    <div className="imgs">
                        <div className="container-image">
                            <img src={profile} alt="profile" className="profile"/>
                         </div>
                    </div>
                    <div>
                        <h1>Login Page</h1>
                        <div>
                            <img src={email} alt="email" className="email"/>
                            <input type="email" placeholder="Email" className="name" id="email" onChange={e=>setDetails({...details,email:e.target.value})} value={details.email}/>
                        </div>
                        <div className="second-input">
                            <img src={pass} alt="pass" className="email"/>
                            <input type="password" placeholder="Password" className="name" id="password" onChange={e=>setDetails({...details,password:e.target.value})} value={details.password}/>
                        </div>
                        <div className="login-button">
                            <button type="submit">Login</button>
                        </div>
           

                    </div>
                </div>
            </div>
        </div>
        </form>
    )
}
export default LoginForm;