import React from 'react';  
import axios from 'axios';  
class Upload extends React.Component{  

    upload2 = (uploadFile)=>{
        var file = uploadFile.target.files[0];
        console.log("uploadFile:",uploadFile);
        console.log("file:",file);

        var formData = new FormData();
        formData.append("file",file);
        console.log("formdata",formData);
        console.log("formdata.get",formData.get("sample"));
        // axios({
        //     url:"https://localhost:5001/s3/AddFile?bucketName=demo-upload-2",
        //     method:"POST",
        //     data:formData,
        //     'Content-Type': 'multipart/form-data'

        // })
        axios.post("https://localhost:5001/s3/AddFile?bucketName=upload-demo-2",formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }}
          )
          .then(json => {  
            console.log("Status of created :",json.status);})
          .catch(function (error) {  
              console.log("error_msg",error.status);  
              console.log("error_msg",error); 
            }) 
      }
      
      render(){
      return (
        
        <input type="file" onChange={this.upload2}/>
        
      );
      }

      }
      export default Upload