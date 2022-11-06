import React from "react";
import "./style.css"
const Links = () => {
    return(
         <div className="big-bg">
               <ul>
                     <li><a href="/">Home</a></li>
                     <li><a href="/notfound">404 Page</a></li>
                     <li><a href="error">Error Boundary</a></li>
               </ul>
         </div>
    )
}

export default Links