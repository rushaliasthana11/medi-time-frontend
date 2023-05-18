import React, {useState,useEffect} from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import UploadTab from "./UploadTab";
import PendingTab from "./PendingTab";
import IntrayTab from "./InTrayTab";
import Navigation from "./Navigation";

function Card() {
  const dateHour = new Date().getHours();
  const minutes = new Date().getMinutes();
  var ampm = "A.M";
  if(dateHour >= 12)
  ampm = "P.M";
    return (
    <div class="container my-5">
        <div class="card">
            <div class="card-body">
              <div class="container">
                <div class="card-header"><h3>{dateHour}:{minutes} {ampm}</h3></div>
                <Navigation />
                <div class="tab-content">
                  <UploadTab id="upload"/>
                  <PendingTab id="pending"/>
                  <IntrayTab id="intray"/>
                </div>
              </div>
            </div>
        </div>
    </div>
    );


}


export default Card;