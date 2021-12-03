import React, { Component } from 'react';
import axios from 'axios';
import ProgressBar from 'react-bootstrap/ProgressBar'
import "./Upload2.css"
class FileUploadComponent extends Component {
    state = {
            selectedFile:null,
            fileUploadedSucessfully:null,
            status: '',
            progress:0
        }
    
    selectFileHandler = (event)=>{
      console.log("inside selectFileHandle...");
        let file = event.target.files[0];
        console.log(`event ${event}`);
        console.log(`event ${event.target.files[0]}`);
       let errMessage = [];
       
       this.setState({selectedFile: event.target.files[0],
      progress:0},function(){
         console.log("selectedFile:",this.state.selectedFile);});
       
       
    };
    // method contain logic to upload file
    uploadHandler = () => {
        console.log("inside uploadHnadler...");
        console.log("selectedFile:",this.state.selectedFile);
        const formData = new FormData();
        formData.append('file', this.state.selectedFile);
        console.log("formdata:",formData);
        axios.post("https://localhost:5001/s3/AddFile?bucketName=upload-demo-2", formData, {
      onUploadProgress: progressEvent => {
        console.log("progress:",this.state.progress);
        this.setState({
          progress: (progressEvent.loaded / progressEvent.total*100)
        })
        console.log("progress:",this.state.progress);
      }
    })
      .then((response) => { 
        this.setState({status:`upload success ${response.data}`});

        this.setState({selectedFile:null});
        this.setState({fileUploadedSucessfully:true});
      })
      .catch((error) => { 
        this.setState({status:`upload failed ${error}`});
      })
    }

    fileData=()=>{
      console.log("inside filedata");
      console.log("this.state.selectedFile-",this.state.selectedFile);
      if(this.state.selectedFile!=null){
        console.log("pass");
      return(
        <div>
          <h2>File Details</h2>
          <p>File Name:{this.state.selectedFile.name}</p>
          <p>File Type:{this.state.selectedFile.type}</p>
          <p>File Last Modified:{this.state.selectedFile.lastModifiedDate.toDateString()}</p>
          <p>File Size:{(this.state.selectedFile.size / (1024*1024)).toFixed(2)} MB</p>
        </div>
        
      );
      }
      else if(this.state.fileUploadedSucessfully){
        return(
          <div>
            <h2>File Uploaded Sucessfully...</h2>
          </div>
        );

      }
      else{console.log("fail");
        return(
          <div>
            <h2>Select a file first...</h2>
          </div>
        );
      }
    }
    render() {
        return (
            <div className="uploadContainer">
              <h2>The File Upload DEMO</h2>
              <div>
                <label>Select File to Upload</label>
                <input type="file" onChange={this.selectFileHandler}/>
              </div>
              <hr/>
              <div>
              <button type="button"   onClick={this.uploadHandler}>Upload</button></div>
              <hr/>
              <div><ProgressBar animated now={this.state.progress} /></div>  
              <br/>
              <div className="FileData">{this.fileData()}</div>
            </div> 
);
    }
}

export default FileUploadComponent;
