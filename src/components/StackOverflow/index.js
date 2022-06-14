import React from "react";

import Main from "./Main";
import Sidebar from "./Sidebar";

import './css/index.css';
function index(){
    return(
        <div className="stack-index">
     <div className="stack-index-content">
         <Sidebar/>
         <Main/>
     </div>
        </div>
    )
}

export default index;