import React, { Component } from 'react'
import {MdSubject} from 'react-icons/md'
import './Features.css';
import {AiFillCamera} from 'react-icons/ai'
import {MdLibraryBooks} from 'react-icons/md'
import {IoMdOptions} from 'react-icons/io'
import {MdFingerprint} from 'react-icons/md'
import {FaCertificate} from 'react-icons/fa'
import {GoGraph} from 'react-icons/go'
export class Features extends Component {
    render() {
        return (
            <div>
               
            <div >
                <div class=' row1'>
                    <p class='para'>AN AWARD WINNING ONLINE ASSESSMENT PLATFORM</p>
                </div>
                <div class="container container2">
                    <div class="row row2">
                        <div class="col-sm">
                        <div class="card" style={{width: '20rem'}}>
                            <div class='icon'><AiFillCamera/></div>
                            <div class="card-body">
                                <h5 class="card-title">AI Based Proctoring</h5>
                                <p class="card-text">Conduct online exams, proctored entrance exams using our scalable platform and proctoring technology.</p>
                            </div>
                        </div>
                        </div>
                        <div class="col-sm">
                        <div class="card" style={{width: '20rem'}}>
                            <div class='icon'><MdLibraryBooks/></div>
                            <div class="card-body">
                                <h5 class="card-title">Question Bank Availability</h5>
                                <p class="card-text">Question Banks with a lot of questions for every subject is available for preparation.</p>
                            </div>
                        </div>
                        </div>
                        <div class="col-sm">
                        <div class="card" style={{width: '20rem'}}>
                            <div class='icon'><IoMdOptions/></div>
                            <div class="card-body">
                                <h5 class="card-title">Different Types of Exams</h5>
                                <p class="card-text">Wide Range Of Exams type : Subjective, Objective, Viva, Mock, Personality tests</p>
                                
                            </div>
                        </div>
                        </div>
                    </div>
    
                    <div class="row">
                        <div class="col-sm">
                        <div class="card" style={{width: '20rem'}}>
                            <div class='icon'><GoGraph/></div>
                            <div class="card-body">
                                <h5 class="card-title">Exam Analysis Report</h5>
                                <p class="card-text">System generates individual ranking based on total score of the candidate during online exam. </p>
                            </div>
                        </div>
                        </div>
                        <div class="col-sm">
                        <div class="card" style={{width: '20rem'}}>
                            <div class='icon'><FaCertificate/></div>
                            <div class="card-body">
                                <h5 class="card-title">Online Certification</h5>
                                <p class="card-text">You will get certificate from industry Experts which can be used in your further career for admissions and recruitment.</p>
                            </div>
                        </div>
                        </div>
                        <div class="col-sm">
                        <div class="card" style={{width: '20rem'}}>
                            <div class='icon'><MdFingerprint/></div>
                            <div class="card-body">
                                <h5 class="card-title">Candidate Identity Verification</h5>
                                <p class="card-text">In this case prior to start of online exam,candidate is supposed to show individual identity card, Exam hall ticket in front of camera.</p>   
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default Features
