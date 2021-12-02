import logo from './logo.svg';
import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import './App.css';
import { Upload } from "@aws-sdk/lib-storage";
import { S3Client, S3, Redirect } from "@aws-sdk/client-s3";
import axios from 'axios'; 
import UploadPage from './Upload';
import Login from "./Login";
import Test from "./Test";

function App() {

  return (
    
    <div>
    {/* <input type="file" onChange={upload2}/> */}
    select file
    <br/>
    <UploadPage/>

    {/* <BrowserRouter>
    <Switch>
        <Route exact path={["/login", "/"]}>
          <Login />
        </Route>
        <Route exact path="/test">
          <Test />
        </Route>
      </Switch>
      </BrowserRouter> */}


    </div>
    
  );
}

export default App;
