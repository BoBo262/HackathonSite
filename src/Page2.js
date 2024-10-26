import React from "react";
import "./Page2.css"
import { Link } from 'react-router-dom';

 function Page2() {

     return (
       <div className="Atendee">
         <p>
           Welcome atendee. Where are we going tonight?
           <br />
         </p>
         <div>
          <p>Enter name:</p>
            <textarea name="postContent" rows={1} cols={20} />
         </div>

         <div>
          <p>Choose available party</p>
         </div>

         <div>
          <p>What are you bringing? Choose at least one</p>
          <input type="checkbox" /> <text>food</text> <br />
          <input type="checkbox" /> <text>drinks</text> <br />
          <input type="checkbox" /> <text>games</text> <br />
         </div>

         <div className="Buttons">
        <Link to="./App">
         <button type="button" class="action_btn_submit" onClick={function handleClick(){alert('Submission confirmed!');}}>
           Submit 
         </button>
         </Link>
         </div>

         <Link to="/App">
            <button variant="outlined">
                Back to the menu
            </button>
        </Link>
       </div>
     );
 }
 export default Page2;