import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import WrapperApp from "./components/wrapper/wrapper.js";


const root = ReactDOM.createRoot(document.getElementById("root"));

    root.render(  
      <React.StrictMode>
      <WrapperApp/>
      </React.StrictMode>  
    );

