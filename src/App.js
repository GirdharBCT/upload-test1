import logo from './logo.svg';
import './App.css';
import { Upload } from "@aws-sdk/lib-storage";
import { S3Client, S3 } from "@aws-sdk/client-s3";
import axios from 'axios'; 

function App() {

  // const upload = (uploadFile)=>{
  //   var file = uploadFile.target.files[0]; 

  //   console.log("file:",uploadFile);
  //   console.log("file:",file);

  //   const target = { Bucket:"demo-upload-2", Key:file.name, Body:file };
  //   const creds = {accessKeyId:"AKIAWLLYJKYTLVPVPFBR" ,secrectAccessKey:"GBJ7ryk66zWagpy1agRaxqktZDwz5G3N70V7opWQ"};
  //   try {
  //     const parallelUploads3 = new Upload({
  //       client: new S3Client({region:"us-east-1", credentials:creds }),
  //       leavePartsOnError: false, // optional manually handle dropped parts
  //       params: target,
  //       headers: { 'Content-Type': 'application/octet-stream' }

  //     });

  //     console.log("trying...");

  //     parallelUploads3.on("httpUploadProgress", (progress) => {
  //       console.log(progress);
  //     });

  //     parallelUploads3.done();
  //   } catch (e) {
  //     console.log(e);
  //   }

  // }
  const upload2 = (uploadFile)=>{
    var file = uploadFile.target.files[0];
    console.log("uploadFile:",uploadFile);
    console.log("file:",file);
    axios.post("https://localhost:44397/s3/AddFile?bucketName=demo-upload-1",file, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }}
      ).then(json => {  
        console.log("Status of created :",json.status);})
      .catch(function (error) {  
          console.log("error_msg",error.status);  
          console.log("error_msg",error); 
        }) 
  }

  return (
    <>
    <input type="file" onChange={upload2}/>
    </>
  );
}

export default App;
