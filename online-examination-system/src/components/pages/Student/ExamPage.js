import axios from 'axios'
import React ,{ useState, useEffect }  from 'react'
import {Route , BrowserRouter as Router, Switch, Redirect} from 'react-router-dom'

import questions from '../../../Quiz'
import QuestionBox from './QuestionBox'
import QuestionButtons from './QuestionButtons'
import Timer from './Timer'

function ExamPage(props) {
    
    useEffect(()=>{
        loadQuestions();
     },[]);

    const [questionsArr, setquestionsArr] = useState(questions)//;load questions here
    const [currQuestion,setCurrentQuestion]= useState(questions[0])
    const [selectedAnsArr,setSelectedAnsArr]= useState(Array(questionsArr.length).fill(0))

    
    
     const loadQuestions = async()=>{
        //   alert('first')
        let result1 = await axios.get('http://localhost:5000/id')
        let id = result1.data[0].id;
       // alert(JSON.stringify(result1.data[0].id) )
        const result=await axios.get('http://localhost:5000/postSubjects/'+id);
        setquestionsArr(result.data);
        let i=0;
        let cars = []
        for (i = 0; i < result.data.length; i++) {
         cars[i]=0 ;
        }
        setSelectedAnsArr(cars)
       
     }
     
    
    const collectAllAns =()=>{}
    //timer
    const time = new Date();
    time.setSeconds(time.getSeconds() + 600); // 10 minutes timer= 10*60=600
    // setTimeout(()=>{
    //     let i=0; let total =0;
    //     for(i;i<selectedAnsArr.length;i++)
    //     {
    //        total += selectedAnsArr[i]
    //     }
      
    //     props.history.push({
    //        pathname: '/results',
    //        state: { total: total }
    //      })

    //  },600000)
   
    return (

        <div className="greenShade">
            {/* this is a timer component */}
            <Timer expiryTimestamp={time} />
             {/* Whole page */}
            <div className="container-fluid  examContainer " >
                <div className="row">{/* All 2 boxes in a row */}
                    <div className="col-md-4">{/* first box of 1,2,3,4 */}
                        <div className="card my-5" style={{borderRadius:"20px"}}>
                            <div className="card-body">
                                <h5 className="card-title">Java</h5>
                                <div className="card-text">
                                    <div className="container">
                                        <div className="row my2">
                                            {
                                                questionsArr.map((quest)=>
                                                ( 
                                                <QuestionButtons
                                                    key ={quest.id}
                                                  index={quest.id-1}
                                                  setCurrentQuestion={setCurrentQuestion}
                                                  questionsArr={questionsArr}
                                                  //
                                                /> ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* question panel */}
                    <div className="col-md-8">
                   
                   
                        <QuestionBox
                        selectedAnsArr={selectedAnsArr}
                        setSelectedAnsArr={setSelectedAnsArr}
                        currQuestion={currQuestion }
                        questionsArr={questionsArr}
                        setCurrentQuestion={setCurrentQuestion}
                         /> 
                         <div style={{marginLeft:"25%"}}>

                             {/* submit button logic */}
                         <a  style={{borderRadius:"20px",padding:"10px 30px"}} className="btn btn-warning" onClick={()=>{
                             let i=0; let total =0;
                             for(i;i<selectedAnsArr.length;i++)
                             {
                                total += selectedAnsArr[i]
                             }
                           
                             props.history.push({
                                pathname: '/results',
                                state: { total: total }
                              })
                         }}>Submit</a>  
                         </div>          
                         

                    </div>
                    
                        
                    
                </div>
            </div>
        </div>
         )
}

export default ExamPage
