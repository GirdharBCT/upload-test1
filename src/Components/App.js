import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
import LoginForm from './components/LoginForm';

function App() {
  const adminUser={
    email:"phynd@admin.com",
    password:"admin"
  }

  const [user,setUser]=useState({email:""});
  const [error,setError]=useState("");

  const Login=details=>{
    if(details.email==adminUser.email && details.password==adminUser.password){
      setUser({
        email:details.email
      });
    }else{
    }
  }
  const Logout=()=>{
    setUser({email:""});
  }

  return (
    <div className="App">
      {(user.email!="")?(
        <div className="welcome">
          <h2>Welcome <span>{user.email}</span></h2>
          
          
          
          
          
          
          
          
          
          
          <button onClick={Logout}>Logout</button>
        </div>
      ):(
        <LoginForm Login={Login} error={error}/>
      )}
    </div>
  );
}

export default App;
