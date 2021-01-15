import React, { useState,useEffect }  from 'react'
import AdminMain from './AdminMain'
import "./QuestionEdit.css"
import axios from 'axios';

function QuestionEdit() {
    const [formdata,setFormdata]= useState({
        id:0,
        question: "",
        a: "",
        b: "",
        c: "",
        d: "",
        ans: ""

    })
    const [Questions,setQuestions]= useState([])
    useEffect(()=>{
        loadQuestions();
     },[]);

     const [currSubId,setSubId] = useState("")
 
     const loadQuestions= async()=>{ //make some
      //   const result=await axios.get('http://localhost:5000/addQuestions');
      //   setQuestions(result.data);
     }
    const ChangeHandler = (e)=>{
        //console.log(e.target.value.trim())
         setFormdata({...formdata,[e.target.name]: e.target.value})
    }
    const takeSubId = async(_id)=>{
        console.log("jsut hi"+_id)
        setSubId(""+_id)
        
    }


    //for form submit button

    useEffect( async()=>{
        let Questions1 = {Questions:Questions}
         await axios.put('http://localhost:5000/postSubjects/'+currSubId,Questions1)
      //this link uncomment plz  await axios.post('http://localhost:5000/addQuestions',formdata)
        alert("question added")
     },[Questions]);
    var addQuestion =  (e)=> {
        e.preventDefault()
       // numberStore = [...numberStore, newNumber];
       

        setQuestions([...Questions,formdata]);
      
       
    }

    const [subjects,setSubjects]= useState([])

    useEffect(()=>{
       loadSubjects();
    },[]);

    const loadSubjects= async()=>{
        const result=await axios.get('http://localhost:5000/postSubjects');
        setSubjects(result.data);
    }
/////
    return (
        <div>
            <AdminMain></AdminMain>
            <h1>you can edit question here</h1>
            {/* <!-- Button trigger modal --> */}


            {/* <!-- button,modal,modaldialog,modal content,modal header , modal title -->
  <!-- Modal --> */}
            <div class="modal fade" id="add_question" tabindex="-1" aria-labelledby="addQuestion" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" >Add question
                    </h5>
                            {/* <!-- this is cross mark --> */}
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="close"></button>
                        </div>
                        <div class="modal-body">
                            <form id="q-form" action="#" onSubmit={addQuestion}>
                            <div class="mb-3">
                                    <label for="id" class="form-label">Question number</label>
                                    <input required name="id" defaultValue="" type="number" onChange={ChangeHandler} class="form-control" id="id" />
                                    <div id="id" class="form-text">give question number.</div>
                                </div>
                                <div class="mb-3">
                                    <label for="question" class="form-label">Question</label>
                                    <input required name="question" type="text" onChange={ChangeHandler} class="form-control" id="question" />
                                    <div id="question" class="form-text">create a suitable question.</div>
                                </div>
                                <div class="mb-3">
                                    <label for="optionA" class="form-label">Option A</label>
                                    <input required name="a" onChange={ChangeHandler} type="text" class="form-control" id="optionA" />
                                </div>
                                <div class="mb-3">
                                    <label for="optionB" class="form-label">Option B</label>
                                    <input required  name="b" onChange={ChangeHandler} type="text" class="form-control" id="optionB" />
                                </div>
                                <div class="mb-3">
                                    <label for="optionC" class="form-label">Option C</label>
                                    <input required name="c" onChange={ChangeHandler} type="text" class="form-control" id="optionC" />
                                </div>
                                <div class="mb-3">
                                    <label for="optionD" class="form-label">Option D</label>
                                    <input required name="d" onChange={ChangeHandler} type="text" class="form-control" id="optionD" />
                                </div>
                                <div id="question" class="form-text">Select correct answer.</div>
                                <div class="form-check">
                                    <input required onClick={ChangeHandler}  class="form-check-input" type="radio" name="ans" id="A" value="a" />
                                    <label class="form-check-label" for="A">
                                        Option A
                                </label>
                                </div>
                                <div class="form-check">
                                    <input onClick={ChangeHandler} class="form-check-input" type="radio" name="ans" id="B" value="b" />
                                    <label class="form-check-label" for="B">
                                        Option B
                                </label>
                                </div>
                                <div class="form-check">
                                    <input onClick={ChangeHandler} class="form-check-input" type="radio" name="ans" id="C" value="c" />
                                    <label class="form-check-label" for="C">
                                        Option C
                                </label>
                                </div>
                                <div onClick={ChangeHandler} class="form-check mb-2">
                                    <input class="form-check-input" type="radio" name="ans" id="D"
                                    value="d" />
                                    <label class="form-check-label" for="D">
                                        Option D
                                </label>
                                </div>

                                {/* <!-- <button type="submit" class="btn btn-primary">Submit</button> --> */}
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">close</button>
                            <button  type="submit" form="q-form" class="btn btn-primary">Save</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container my-5" >
            <div className="row">
               {
                   subjects.map((sub,index)=>(
                    <div className="col-md-3 "style={{paddingBottom:'20px'}}>
                    <div className="card h-100" style={{border:"2px solid blue",borderRadius:"20px"}}>
                    <div className="card-body">
                        
                        <h4 className="card-title">{sub.Name}</h4><hr></hr>
                        <div className="card-text text-muted"> {sub.Description}</div>
                        <div className="container-qadder">
                        <button type="button" onClick={()=>{takeSubId(sub._id)}} className="btn btn-primary qadder" data-bs-toggle="modal" data-bs-target="#add_question"
                         >Add question</button>
                                </div>
                    </div>
                    </div>   
                    </div>
                   ))
               }
                               
               
                
                
            </div>
        </div>

        {/* id:0,
        question: "",
        a: "",
        b: "",
        c: "",
        d: "",
        ans: "" */}


        <div className="container">
            <div className="card">
               <h2>This Questions are going to be added </h2>
            </div>
        {Questions.map((q,index)=>(
            <div className ="card">
                <div className="card-body" >
                <p style={{fontSize:"18px"}}>{+q.id+")  "+q.question} </p>
                <p style={{fontSize:"18px"}}>{"A "+q.a}</p>
                <p style={{fontSize:"18px"}}>{"B "+q.b}</p>
                <p style={{fontSize:"18px"}}>{"C "+q.c}</p>
                <p style={{fontSize:"18px"}}>{"D "+q.d}</p>
                <p style={{fontSize:"18px"}}>{"Correct Ans : "+q.ans}</p>
                </div>
            </div>
            
        )
            
        )}
        </div>
           

        </div>
    )
}

export default QuestionEdit
