import React from "react";
import "./Page1.css";
import { Link } from 'react-router-dom';

 function Page1() {

     return (
       <div className="Organizer">
         <p>
           Welcome organizer. What Party are we making tonight?
           <br />
         </p>
         <div>
          <p>Enter name:</p>
            <textarea name="postContent" rows={1} cols={20} onChange={(e) => this.setState({userDataName: e.target.value})} />
         </div>
         <div>
          <p>Enter date:</p>
          <textarea name="postContent" rows={1} cols={20} />
         </div>
         <div>
         <p>Enter location:</p>
         <select>
            <option value="Like Pub">Like Pub</option>
            <option value="80's Pub">80's Pub</option>
            <option value="Sura">Sura</option>
         </select>
         </div>
         <div>
          <p>Required Goods</p>
         <input type="checkbox" /> <text>food</text> <br />
         <input type="checkbox" /> <text>drinks</text> <br />
         <input type="checkbox" /> <text>games</text> <br />
         </div>
         <div className="Buttons">
         <Link to="/App">
         <button type="button" class="action_btn_submit" onClick={function handleClick(){alert('Submission confirmed!');}}>
           Submit 
         </button>
         </Link>
         </div>
         <Link to="/App">
            <button variant="outlined" >
                Back to the menu
            </button>
        </Link>
       </div>
     );

 }

 export default Page1;