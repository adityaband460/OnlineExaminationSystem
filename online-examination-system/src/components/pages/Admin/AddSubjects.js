import React, { useState,useEffect } from 'react'
import AdminMain from './AdminMain'
import $ from 'jquery';
import axios from 'axios';

function AddSubjects() {
    const [formdata,setFormdata]= useState({
        Name:"",
        Description:""

    })
    const {Name,Description}=formdata;
    const [subjects,setSubjects]= useState([])

    useEffect(()=>{
       loadSubjects();
    },[]);

    const loadSubjects= async()=>{
        const result=await axios.get('http://localhost:5000/postSubjects');
        setSubjects(result.data);
    }
   const AddSubjectHandler=async e=>{
        e.preventDefault()
        await axios.post('http://localhost:5000/postSubjects',formdata);
         setSubjects(arr => [...arr,formdata])
   }
   
   const ChangeHandler = (e)=>{
       console.log(e.target.value.trim())
        setFormdata({...formdata,[e.target.name]: e.target.value})
   }
    return (
        <div>
            
            <AdminMain></AdminMain>
            <h1>you can Add subjects here</h1>
            <div className="container-qadder">
        <button  type="button" className="btn btn-primary qadder" data-bs-toggle="modal" data-bs-target="#add_subject"
        >
            
       Add Subject

    </button>
    </div>

    <div class="modal fade" id="add_subject" tabindex="-1" aria-labelledby="addSubject" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" >Add Subject
                    </h5>
                    {/* <!-- this is cross mark --> */}
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="close"></button>
                </div>
                <div class="modal-body">
                    <form id="q-form" action="#" onSubmit={AddSubjectHandler}>
                        <div class="mb-3">
                          <label for="Subject" class="form-label">Subject Name</label>
                          <input required onChange={e=>ChangeHandler(e)} type="text" name="Name" value={Name} class="form-control" id="Subject" />
                          <div id="Subject" class="form-text">create a suitable Subject.</div>
                        </div>
                        <div class="mb-3">
                          <label for="sDesc" class="form-label">Subject Description</label>
                          <textarea required onChange={e=>ChangeHandler(e)} name="Description" value={ Description} type="text" class="form-control" id="sDesc"></textarea>
                        </div>

                      </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">close</button>
                    <button type="submit" form="q-form" class="btn btn-primary" >Save</button>
                </div>
            </div>
        </div>
    </div>

        <div className="container my-5" >
            <div className="row">
               {
                   subjects.map((sub,index)=>(
                    <div className="col-md-3" style={{paddingBottom:'20px'}}>
                    <div className="card h-100" style={{border:"2px solid blue",borderRadius:"20px"}}>
                    <div className="card-body">
                        
                        <h4 className="card-title">{sub.Name}</h4><hr></hr>
                        <div className="card-text text-muted"> {sub.Description}</div>
                    </div>
                    </div>   
                    </div>
                   ))
               }
                               
               
                
                
            </div>
        </div>

        </div>
    )
}

export default AddSubjects
