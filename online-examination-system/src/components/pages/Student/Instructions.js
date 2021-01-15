import React from 'react'
import { NavLink } from 'react-router-dom'

function Instructions() {
    return (
    <div style={{paddingTop:"20px",paddingBottom:"20px" ,marginLeft:"100px",marginRight:"100px"}}>
            <div class="card shadow-lg p-3 mb-5 bg-white rounded">
            <div class="card-body">
                <h1 class="card-title" style={{textAlign:'center',fontWeight: 900}}>Instructions</h1>
                <p class="card-text"style={{textAlign:'center'}}>Please read all the Instructions carefully before starting test</p>
            </div>
            <ol class="list-group list-group-flush" style={{fontWeight: 600,color:'black'}}>
            <li class="list-group-item">The examination will comprise of Objective type Multiple Choice Questions (MCQs) </li>
            <li class="list-group-item">All questions are compulsory and each carries One mark. </li>
            <li class="list-group-item" style={{textDecoration:'underline',textDecorationColor:'black'}}>There will be NO NEGATIVE MARKING for the wrong answers.</li>
            <li class="list-group-item">Every student will take the examination on a Laptop/Desktop/Smart Phone</li>
            <li class="list-group-item">The answers can be changed at any time during the test and are saved automatically.</li>
             <li class="list-group-item">The student may not use his or her textbook, course notes, or receive help from a proctor or any other outside source.</li>
             <li class="list-group-item">Students must not stop the session and then return to it. This is especially important in the online environment where the system will "time-out" and not allow the student or you to reenter the exam site.</li>
            </ol>
            <div class="card-body " style={{paddingLeft:"30%"}}>
            <p>  <NavLink to="/ExamPage"  className="btn btn-primary" style={{width:"50%"}}>start Test</NavLink>     </p>
            </div>
            </div>
        
        </div>
    )
}

export default Instructions