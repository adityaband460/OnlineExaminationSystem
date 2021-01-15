import React, { useEffect, useState } from 'react'

function AllOptions({currQuestion,selectedAnsArr,setSelectedAnsArr}) {
    const[sel,setSel]=useState(false)
    const [allOpt,setAllOpt] = useState([currQuestion.a,currQuestion.b,currQuestion.c,currQuestion.d])

    useEffect(()=>{
        if(!sel)
       setAllOpt([currQuestion.a,currQuestion.b,currQuestion.c,currQuestion.d])
     },[currQuestion]);
    return (
        <div >
            <ol type="A">
                <li>
                    <input style={{border:"1px solid grey",marginBottom:"2%"}} className="btn btn-alert" type="button" name="a" id="q1A"
                    value={currQuestion.a} onClick={(e)=>{
                       
                        // if ans matches to the ans of current question
                        if(e.target.name ==currQuestion.ans){
                            
                            let arr = [...selectedAnsArr]
                            arr[currQuestion.id-1]=1

                            // add the current option in array ans set the array
                            setSelectedAnsArr(arr)
                        }
                        else{
                            let arr = [...selectedAnsArr]
                            arr[currQuestion.id-1]=0
                            // alert("selecte ans array is",selectedAnsArr)
                            setSelectedAnsArr(arr)

                        }
                        // setSel(true)
                    }} />
                    
                </li>

                <li>
                    <input style={{border:"1px solid grey",marginBottom:"2%"}} className="btn btn-alert" type="button" name="b" id="q1A"
                    value={currQuestion.b} onClick={(e)=>{
                       
                       // alert("selected opt is "+e.target.name)
                        if(e.target.name ==currQuestion.ans){
                            
                            let arr = [...selectedAnsArr]
                            arr[currQuestion.id-1]=1
                            // alert("selecte ans array is",selectedAnsArr)
                            setSelectedAnsArr(arr)
                        }
                        else{
                            let arr = [...selectedAnsArr]
                            arr[currQuestion.id-1]=0
                            // alert("selecte ans array is",selectedAnsArr)
                            setSelectedAnsArr(arr)

                        }
                        // setSel(true)
                    }} />
                    
                </li>

                <li>
                    <input style={{border:"1px solid grey",marginBottom:"2%"}} className="btn btn-alert" type="button" name="c" id="q1A"
                    value={currQuestion.c} onClick={(e)=>{
                       
                       // alert("selected opt is "+e.target.name)
                        if(e.target.name ==currQuestion.ans){
                            
                            let arr = [...selectedAnsArr]
                            arr[currQuestion.id-1]=1
                            // alert("selecte ans array is",selectedAnsArr)
                            setSelectedAnsArr(arr)
                        }
                        else{
                            let arr = [...selectedAnsArr]
                            arr[currQuestion.id-1]=0
                            // alert("selecte ans array is",selectedAnsArr)
                            setSelectedAnsArr(arr)

                        }
                        // setSel(true)
                    }} />
                    
                </li>

                <li>
                    <input style={{border:"1px solid grey",marginBottom:"2%"}} className="btn btn-alert" type="button" name="d" id="q1A"
                    value={currQuestion.d} onClick={(e)=>{
                       
                       // alert("selected opt is "+e.target.name)
                        if(e.target.name ==currQuestion.ans){
                            
                            let arr = [...selectedAnsArr]
                            arr[currQuestion.id-1]=1
                            // alert("selecte ans array is",selectedAnsArr)
                            setSelectedAnsArr(arr)
                        }
                        else{
                            let arr = [...selectedAnsArr]
                            arr[currQuestion.id-1]=0
                            // alert("selecte ans array is",selectedAnsArr)
                            setSelectedAnsArr(arr)

                        }
                        // setSel(true)
                    }} />
                    
                </li>
            </ol>
        </div>
    )
}

export default AllOptions
