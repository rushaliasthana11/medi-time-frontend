import React, {useState,useEffect} from "react";
import ReactDOM from "react-dom";

function Navigation() {
    return  (<ul class="nav nav-pills mt-3" role="tablist">
    <li class="nav-item">
      <a class="nav-link active" data-toggle="tab" href="#upload">Upload Prescription</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" data-toggle="tab" href="#pending">Pending</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" data-toggle="tab" href="#intray">In Tray</a>
    </li>
  </ul>);
}

export default Navigation;