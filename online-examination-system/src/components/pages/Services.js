import React, { Component } from 'react'
import './Services.css';
import {AiFillCamera} from 'react-icons/ai'
import {MdLibraryBooks} from 'react-icons/md'
import {IoMdOptions} from 'react-icons/io'
import {MdFingerprint} from 'react-icons/md'
import {FaCertificate} from 'react-icons/fa'
import {GoGraph} from 'react-icons/go'

export class Services extends Component {
    render() {
        return (
            <div>
                <div class='first'>
                    <h1 class='maintext'>Assessment for Education Institute</h1>
                    <p class='parag'>  Online Assessments can be useful to conduct online entrance exams, internal exams, university exams, online aptitude tests.<br/>
                            Do you want to use technology to automate Pen and paper-based Tests?<br/>
                             Are you exploring the option of digital assessments for your educational institution?<br/>
                             Many universities/ institutes are using online assessment tools to enhance and improve their examination structure.<br/>
                             Training institutes can use the online Assessment Process to guide their students while preparing for various exams.</p>
                </div>
                <div class='second'>
                    <h1 class='maintext'>Assessment for corporate</h1>
                    <p class='parag'>Online assessments can help corporate to simplify hiring, recruitment, assessment of employees, performance evaluation after training, analysis of training programs.

 

Digital Assessments can help companies to simplify employee training, employee evaluation, or even recruitment process simplification.

 

Many organizations have benefited from the usage of the Eklavvya platform for managing their assessment process digitally. You can explore the below video and all relevant articles for details to understand how you can be benefited from the digital assessment strategy.</p>
                </div>
                <div class='first'>
                    <h1 class='maintext'>Assessment for schools</h1>
                    <p class='parag'>Education technology adoption in school is increasing. Technology can help schools to enhance education delivery along with conducting exams.

The online examination system provides ways to manage online exams for your K12 students. It would help you to simplify exam administration, reduce the cost of managing the exam process, proctoring technology can help to detect/ prevent exam cheating activities.

 

We have conducted school certification tests, mock exams, academic exams, scholarship tests for various national and international schools, certification agencies, NGOs successfully.

</p>
                </div>
            </div>
        )
    }
}

export default Services
