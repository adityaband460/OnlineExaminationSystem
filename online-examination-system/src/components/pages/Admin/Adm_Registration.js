import axios from 'axios';
import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom';

export class Adm_Registration extends Component {
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
   
    submithandler = async event => {  
        event.preventDefault() 
        const data2 = {
            "Name" : this.state.name,
            "Email" : this.state.email,
            "Phone" : this.state.number,
            "Password" : this.state.password,
            "Org" : this.state.org,
            "NameOrg" : this.state.nameOrg
        }
        
        await axios.post(`http://localhost:5000/adminModel`,data2).then(res => {
         alert(JSON.stringify(res.data.message) )   
        // console.log();
            console.log(res.data);
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
            <div className="container-fluid">
                <div className="container">
                    <div className="row mb-3">
                        <div className="center">
                            <div className="card">
                                <div className="card-header" style={{ backgroundColor: 'lightblue' }}>
                                    <h1 className="text-center" style={{paddingTop:'15px',textDecoration:'underline Grey'}}>Admin Registeration</h1>
                                    <hr />
                                </div>
                                <div className="card-body">
                                <hr />
                                    <div className="row">
                                        <div className="col-md-7">
                                            <form onSubmit={this.submithandler}>
                                                <div className="mb-3 row" style={{padding:'3px'}}>
                                                    <div className="col-md-4">
                                                        <label for="name">Name</label>
                                                    </div>
                                                    <div className="col-md-8">
                                                        <input type="text" name="name" value={this.state.name} className="form-control" placeholder="Type your name here" onChange={this.myChangeHandler} required />
                                                    
                                                    </div>
                                                </div>

                                                <div className="mb-3 row" style={{padding:'3px'}}>
                                                    <div className="col-md-4">
                                                        <label for="email">E-mail</label>
                                                    </div>
                                                    <div className="col-md-8">
                                                        <input type="email" name="email" value={this.state.email} className="form-control" placeholder="Type your e-mail" onChange={this.myChangeHandler} required />

                                                    </div>
                                                </div>

                                                <div className="mb-3 row" style={{padding:'3px'}}>
                                                    <div className="col-md-4">
                                                        <label htmlFor="number">Phone Number</label>
                                                    </div>
                                                    <div className="col-md-8">
                                                        <input type="text" minLength='10' value={this.state.number} maxLength='10' name="number" className="form-control" placeholder="So we can reach you" onChange={this.myChangeHandler} required />

                                                    </div>
                                                </div>

                                                <div className="mb-3 row" style={{padding:'3px'}}>
                                                    <div className="col-md-4">
                                                        <label htmlFor="password">Password</label>
                                                    </div>
                                                    <div className="col-md-8">
                                                        <input type="password" id="txtPassword" value={this.state.password} name="password" className="form-control password" placeholder="Enter password for your account." onChange={this.myChangeHandler} required />

                                                    </div>
                                                </div>

                                                <div className="mb-3 row" style={{padding:'3px'}}>
                                                    <div className="col-md-4">
                                                        <label for="confirm_password">Confirm Password</label>
                                                    </div>
                                                    <div className="col-md-8">
                                                        <input type="password" id="txtConfirmPassword" value={this.state.confirm_password} name="confirm_password" className="form-control confirmPassword" placeholder="re-Enter password for your account" onChange={this.myChangeHandler} required />
                                                        <span id='errdisplay' style={{fontSize:'13px'}}></span>

                                                    </div>
                                                </div>

                                                <div className="mb-3 row" style={{padding:'3px'}}>
                                                    <div className="col-md-4">
                                                        <label for="organisation">Select Organisation</label>
                                                    </div>
                                                    <div className="col-md-8">
                                                        <select name='org' value={this.state.org} onChange={this.myChangeHandler} required>
                                                            <option value="">Select your Sector</option>
                                                            <option value='scl'>School</option>
                                                            <option value='clg'>College</option>
                                                            <option value='corp'>Corporate</option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <div className="mb-3 row" style={{padding:'3px'}}>
                                                    <div className="col-md-4">
                                                        <label for="nameOrg">Name of the organisation</label>
                                                    </div>
                                                    <div className="col-md-8">
                                                        <input type="text" value={this.state.nameOrg} onChange={this.myChangeHandler} name="nameOrg" className="form-control" placeholder="Name of your Orangisation" required/>

                                                    </div>
                                                </div>
                                                <h5 style={{color:"red",marginLeft:'250px'}}>{this.state.errormessage}</h5>
                                                <div className="mb-3 row" style={{padding:'3px'}}>
                                                    <div className="col-md-4">
                                                    </div>
                                                    <div className="col-md-8">
                                                        <button className="btn btn-primary" type='submit' id='btnSubmit' onSubmit='addtodb()'>Register</button>
                                                       
                                                    </div> 
                                                    
                                                </div>

                                                <div class="mb-3 row" style={{padding:'3px'}}>
                                                    <div class="col-md-4">
                                                    </div>
                                                    <div class="col-md-8">
                                                        <p style={{fontSize:"15px"}}>Already Have an account? <Link to='/admin-log' >Login Here</Link> </p>
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

export default Adm_Registration
