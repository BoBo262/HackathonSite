import React from "react";
import "./Page2.css"
import { Link } from 'react-router-dom';

 function Page2() {

     return (
       <div className="Atendee">
         <p>
           Welcome atendee. Where are we going tonight?
           <br />
           Click on the button below.
         </p>
         <Link to="/App">
            <button variant="outlined">
                Back to the menu
            </button>
        </Link>
       </div>
     );
 }
 export default Page2;