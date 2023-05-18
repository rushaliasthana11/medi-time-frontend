import React from "react";
import ReactDOM from "react-dom";

function Footer() {
    const date = new Date().getFullYear();
    return (<footer className="meditime-footer bg-dark text-center text-white">
    <div className="text-center p-3">
      © {date} Copyright: 
      <a className="text-white" href="/"> MediTime.com</a>
    </div>
  </footer>)
}

export default Footer;