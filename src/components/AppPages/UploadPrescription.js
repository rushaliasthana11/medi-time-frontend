import React, {useState,useEffect} from "react";
import ReactDOM from "react-dom";
import axios from "axios";


function UploadPrescription() {

    const baseUrl = "http://localhost:8080/upload";
    const [csvFile, uploadFile] = useState(null);
    const [submitFile, submit] = useState(false);
  
  
   
    function uploadCsv() {
      const formData = new FormData();
      formData.append("file", csvFile);
      axios.post(baseUrl, formData ,{
        headers: {
          "Content-Type": "multipart/form-data",
        }
      }).then((response) => {
        console.log("csv file has been uploaded!");
        uploadFile(null);
        document.getElementById("myFile").value = null;
        uploadedAlertBox();
      }).catch((error) => {
        console.log(error);
      });
    }
  
    function uploadAlertBox() {
      return alert("Please upload the file!");
    }
  
    function uploadedAlertBox() {
      return alert("File has been uploaded!");
    }
  

    function getFileInput() {
        const selectedFile = document.getElementById("myFile").files[0];
        uploadFile(selectedFile);
      } 

    return <div className="container bg-light my-5 p-5"> 
<h1>Upload Prescription</h1>
<div className="p-4"><input type="file" id="myFile" name="filename"  onChange={getFileInput}/></div>
<button className="btn btn-success btn-pill" onClick={csvFile != null ? uploadCsv :  uploadAlertBox }>Upload</button>
    </div>
}

export default UploadPrescription;