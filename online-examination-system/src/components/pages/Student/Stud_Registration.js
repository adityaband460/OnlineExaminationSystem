import axios from 'axios';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class Stud_Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            number: '',
            password: '',
            confirm_password: '',
            errormessage: '',
            org: '',
            nameOrg: ''
        };
    }

    submithandler = event => {
        
        const data2 = {
            "Name" : this.state.name,
            "Email" : this.state.email,
            "Phone" : this.state.number,
            "Password" : this.state.password,
            "Org" : this.state.org,
            "NameOrg" : this.state.nameOrg
        }
        // alert("hi")

        axios.post(`http://localhost:5000/studentModel`,data2).then(res => {
           
            // alert(JSON.stringify(res.data.message ))
            // console.log(res.data);
        })
        
    }

    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        let err = '';

        if (nam === "name") {
            if (val === "") {
                err = '*Please Enter your name for registration!';
            }
        }  
        if (nam === 'email') {
            if (val === "") {
                err = '*Please Enter your e-mail for registration!';
            }
        }  
        if (nam === "number") {
            if (val !== "" && !Number(val)) {
                err = '*Please enter a valid number';
            }
        }

        this.setState({ errormessage: err });
        this.setState({ [nam]: val });
    }

    render() {
        return (
            <div class="container-fluid">
                <div class="container">
                    <div class="row mb-3" >
                        <div class="center">
                            <div class="card">
                                <div class="card-header" style={{ backgroundColor: 'lightblue' }}>
                                    <h1 class="text-center" style={{paddingTop:'15px',textDecoration:'underline Grey'}}>Student Registeration</h1>
                                    <hr />
                                </div>
                                <div class="card-body">
                                    <hr/>
                                    <div class="row">
                                        <div class="col-md-7" >
                                            <form onSubmit={this.submithandler}>
                                                <div class="mb-3 row" style={{padding:'3px'}}>
                                                    <div class="col-md-4">
                                                        <label for="name">Name</label>
                                                    </div>
                                                    <div class="col-md-8">
                                                        <input type="text" name="name" class="form-control" placeholder="Type your name here" value={this.state.name} onChange={this.myChangeHandler} required />

                                                    </div>
                                                </div>

                                                <div class="mb-3 row" style={{padding:'3px'}}>
                                                    <div class="col-md-4">
                                                        <label for="email">E-mail</label>
                                                    </div>
                                                    <div class="col-md-8">
                                                        <input type="email" name="email" class="form-control" placeholder="name@email.com" value={this.state.email} onChange={this.myChangeHandler} required />

                                                    </div>
                                                </div>

                                                <div class="mb-3 row" style={{padding:'3px'}}>
                                                    <div class="col-md-4">
                                                        <label for="number">Phone Number</label>
                                                    </div>
                                                    <div class="col-md-8">
                                                        <input type="text" minLength='10' maxLength='10' name="number" class="form-control" value={this.state.number} placeholder="So we can reach you" onChange={this.myChangeHandler} required />

                                                    </div>
                                                </div>

                                                <div class="mb-3 row" style={{padding:'3px'}}>
                                                    <div class="col-md-4">
                                                        <label for="password">Password</label>
                                                    </div>
                                                    <div class="col-md-8">
                                                        <input type="password" id="txtPassword" name='password' class="form-control password" value={this.state.password} onChange={this.myChangeHandler} placeholder="Enter password for your account." required />

                                                    </div>
                                                </div>

                                                <div class="mb-3 row" style={{padding:'3px'}}>
                                                    <div class="col-md-4">
                                                        <label for="confirm_password">Confirm Password</label>
                                                    </div>
                                                    <div class="col-md-8">
                                                        <input type="password" id="txtConfirmPassword" name='confirm_password' class="form-control confirmPassword" value={this.state.confirm_password} onChange={this.myChangeHandler} placeholder="Re-Enter password for confirmation" required />
                                                        <p id='errdisplay' style={{fontSize:'13px'}}></p>
                                                       
                                                    </div>
                                                </div>

                                                <div class="mb-3 row" style={{padding:'3px'}}>
                                                    <div class="col-md-4">
                                                        <label for="org">Select Organisation</label>
                                                    </div>
                                                    <div class="col-md-8">
                                                        <select value={this.state.org} name='org' onChange={this.myChangeHandler} required>
                                                            <option value="" selected>Select your Sector</option>
                                                            <option value='scl'>School</option>
                                                            <option value='clg'>College</option>
                                                            <option value='corp'>Corporate</option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <div class="mb-3 row" style={{padding:'3px'}}>
                                                    <div class="col-md-4">
                                                        <label for="nameOrg">Name of the organisation</label>
                                                    </div>
                                                    <div class="col-md-8">
                                                    <select value={this.state.nameOrg} name='nameOrg'  onChange={this.myChangeHandler} required>
                                                            <option  selected>Select amongst the firms registered with us</option>
                                                            <option value='LTI'>LTI</option>
                                                            <option value='PICT'>PICT</option>
                                                            <option value='MIT'>MIT</option>
                                                        </select>

                                                    </div>
                                                </div>

                                                <div class="mb-3 row" style={{padding:'3px'}}>
                                                    <div class="col-md-4">
                                                    </div>
                                                    <div class="col-md-8">
                                                        <button type='submit' id='btnSubmit' class="btn btn-primary" >Register</button>
                                                        {this.state.errormessage}
                                                    </div>
                                                   
                                                </div>
                                                <div class="mb-3 row" style={{padding:'3px'}}>
                                                    <div class="col-md-4">
                                                    </div>
                                                    <div class="col-md-8">
                                                        

                                                        <p style={{fontSize:"15px"}}>Already Have an account? <Link to='/student-log' >Login Here</Link> </p>
                                                 </div>
                                                </div>
                                            </form>
                                        </div>
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

export default Stud_Registration
