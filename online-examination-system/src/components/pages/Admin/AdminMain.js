import React from 'react'
import { NavLink } from 'react-router-dom'
import './Adm-nav.css'


function AdminMain() {
    return (
        <div >
           
            <nav className="blueShade adm-nav-header ">
                <ul className="nav adm-nav-links ">
                    <li  className="nav-item text-light adm-li">
                        <NavLink  to="/AdminMain/usermgt" className="nav-link active adm-a" > User management</NavLink>    
                     </li>
                     <li className="nav-item adm-li">
                        <NavLink  to="/AdminMain/questionedit" className="nav-link adm-a">Questions </NavLink>    
                     </li>
                     <li className="nav-item adm-li">
                        <NavLink  to="/AdminMain/addsubjects" className="nav-link adm-a">Add Subjects</NavLink>    
                     </li>
                     {/* <li className="nav-item adm-li">
                        <NavLink  to="/AdminMain/displayquestions" className="nav-link adm-a">display questions</NavLink>    
                     </li> */}
                     <li className="nav-item adm-li">
                         <button  type="button" class="btn btn-dark" style={{marginTop:"5px",marginLeft:'50px'}}>
                        <NavLink  to="/" className="nav-link adm-a">Log Out</NavLink>  
                        </button>  
                     </li>
                </ul>
            </nav>
            
           
        </div>
    )
}

export default AdminMain
