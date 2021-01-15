import React from 'react'

function QuestionButtons({index,setCurrentQuestion,questionsArr}) {

    const clickHandler =()=>{
        
        setCurrentQuestion(questionsArr[index])
        
    }
    return (
        <div className="col-sm-3 " >
            <button onClick={clickHandler}type="button" className="btn btn-secondary my-2" 
            value ={index}  >
                
            {index+1}</button>
        </div>
        
    )
}

export default QuestionButtons
