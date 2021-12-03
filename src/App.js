// import logo from './logo.svg';
// import React, { Component } from 'react';
// import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
// import './App.css';
// import { Upload } from "@aws-sdk/lib-storage";
// import { S3Client, S3, Redirect } from "@aws-sdk/client-s3";
// import axios from 'axios'; 
// import UploadPage from './Upload';
// import Login1 from "./Login1";
// import Login2 from "./Login2";
// import Test from "./Test";
// import FileUploadComponent from './Upload2.';

// function App() {

//   return (
    
//     <div>
//     {/* <input type="file" onChange={upload2}/> */}
//     {/* select file */}
//     <br/>
//     {/* <UploadPage/> */}
//     {/* <FileUploadComponent/> */}
//     <Login2/>
//     {/* <Router>
//     <Routes>
//         <Route exact path={["/login", "/"]}>
//           <Login />
//         </Route>
//         <Route exact path="/test">
//           <Test />
//         </Route>
//       </Routes>
//       </Router> */}


//     </div>
    
//   );
// }

// export default App;



import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
import LoginForm from './Components/LoginForm';
import Upload from './Upload'
import Upload2 from './Components/Upload2';
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
          
          <Upload2/>
          
          
          
          
          
          
          
          
          <button onClick={Logout}>Logout</button>
        </div>
      ):(
        <LoginForm Login={Login} error={error}/>
      )}
    </div>
  );
}

export default App;
