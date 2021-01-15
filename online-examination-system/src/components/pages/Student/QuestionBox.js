import React,{useEffect, useState} from 'react'
import AllOptions from './AllOptions'

function QuestionBox({currQuestion,questionsArr,setCurrentQuestion,selectedAnsArr,setSelectedAnsArr}) 
{
    // const[sel,setSel]=useState(false)
    const [allOpt,setAllOpt] = useState([])
    // const [selectedAns, setSelectedAns] = useState("")
    // const SetOption=(e)=>{
    //     setSelectedAns(e.target.value)
    // }

    useEffect(()=>{
        // if(!sel)
       setAllOpt([currQuestion.a,currQuestion.b,currQuestion.c,currQuestion.d])
     },[currQuestion]);

    const prevClickHandler = ()=>{
        if(currQuestion.id >1){
            
            setCurrentQuestion(questionsArr[currQuestion.id -2])
        }
        
    }
    const nextClickHandler = ()=>{
        if(currQuestion.id < questionsArr.length){
            // alert(JSON.stringify(questionsArr[currQuestion.id]) )
        setCurrentQuestion(questionsArr[currQuestion.id ])
        }
    }
    //alert( currQuestion.question)
    // alert(selectedAnsArr)
   
    return (
        
        
       
        <div className="card my-5 " style={{borderRadius:"20px"}}>
                <div className="card-body">
                   
                    <h5 className="card-title">{currQuestion.id}) Question :  {currQuestion.question}</h5>
                    <div className="card-text">
                     <AllOptions 
                      selectedAnsArr={selectedAnsArr}
                      setSelectedAnsArr={setSelectedAnsArr}
                     currQuestion={currQuestion} />

                        <div className="container">
                            <a onClick={prevClickHandler} style={{marginBottom:"2%"}} className="btn btn-primary mx-3">prev</a>
                            <a onClick={nextClickHandler} style={{marginBottom:"2%"}} className="btn btn-primary mx-3">next</a>
                        </div>
                    </div>
                </div>
            </div>
        
    )
}

export default QuestionBox
