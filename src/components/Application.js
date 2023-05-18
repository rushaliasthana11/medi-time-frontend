import React from 'react';
import ReactDOM from 'react-dom';
import Header from "./Header";
import Footer from "./Footer";
import MainPage from './AppPages/MainPage';
import { Router, Routes, Route } from 'react-router-dom';
import DailyDose from './AppPages/daily-dose/DailyDose';
import UploadPrescription from './AppPages/UploadPrescription';


function Application() {
return (
<div>
<Header/>
<Routes>
    <Route path="/" element={<MainPage/>}></Route>
    <Route path="/daily-dose" element={<DailyDose/>}></Route>
    <Route path="/upload-presecription" element={<UploadPrescription/>}></Route>
</Routes>
<Footer/>
</div>
);
}


export default Application;