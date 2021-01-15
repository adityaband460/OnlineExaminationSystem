import React, { Component } from 'react'
import axios from 'axios'

export class ContactUs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            number: '',
            inquiry: '',
            errormessage: '',
            sent: false
        };
    }

    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        let err = '';


        if (nam === "name") {
            if (val == "") {
                err = '*Your Name field cannot be blank';
            }
        }
        if (nam === "email") {
            if (val == "") {
                err = '*Your Email field cannot be blank';
            }
        }
        if (nam === "number") {
            if (val === "" || !Number(val) || val.length != 10) {
                err = '*Please enter a valid number';
            }
        }
        this.setState({ errormessage: err });

        this.setState({ [nam]: val });
    }

    formSubmit = (e) => {

        let data = {
            name: this.state.name,
            email: this.state.email,
            number: this.state.number,
            inquiry: this.state.inquiry
        }
        axios.post('/api/forma', data).then(res => {
            this.setState({
                sent: true,
            }, this.resetForm())
        }).catch(() => {
            console.log('Message not sent!')
        })
        alert('Mail has been sent! Sorry for the incovinience.')
    }


    resetForm = () => {
        this.setState({
            name: '',
            email: '',
            number: '',
            inquiry: '',
        })
        setTimeout(() => {
            this.setState({
                sent: false,
            })
        }, 5000);

    }

    render() {
        return (
            <div class="container-fluid center">
                <div class="container">
                    <div class="row mb-3">
                        <div class="center">
                            <div class="card">
                                <div class="card-header" style={{ backgroundColor: 'lightblue' }}>
                                    <h1 class="text-center" style={{ paddingTop: '15px', textDecoration: 'underline Grey' }}>Contact Us</h1>
                                    <hr />
                                </div>
                                <div class="card-body">
                                    <hr />
                                    <div class="row">
                                        <div class="col-md-7">
                                            <form onSubmit={this.formSubmit}>
                                                <div class="mb-3 row" style={{ padding: '3px' }}>
                                                    <div class="col-md-4">
                                                        <label for="name">Name</label>
                                                    </div>
                                                    <div class="col-md-8">
                                                        <input type="text" name="name" class="form-control" placeholder="Type your name here" onChange={this.myChangeHandler} required />

                                                    </div>
                                                </div>


                                                <div class="mb-3  row" style={{ padding: '3px' }}>
                                                    <div class="col-md-4">
                                                        <label for="email">E-mail</label>
                                                    </div>
                                                    <div class="col-md-8">
                                                        <input type="email" name="email" class="form-control" placeholder="Type your e-mail" onChange={this.myChangeHandler} required />

                                                    </div>
                                                </div>

                                                <div class="mb-3  row" style={{ padding: '3px' }}>
                                                    <div class="col-md-4">
                                                        <label for="number">Phone Number</label>
                                                    </div>
                                                    <div class="col-md-8">
                                                        <input type="text" name="number" minLength='10' maxLength='10'  class="form-control" placeholder="So we can reach you" onChange={this.myChangeHandler} required />

                                                    </div>
                                                </div>

                                                <div class="mb-3  row" style={{ padding: '3px' }}>
                                                    <div class="col-md-4">
                                                        <label for="inquiry">Inquiry</label>
                                                    </div>
                                                    <div class="col-md-8">
                                                        <input type="text" name="inquiry" class="form-control" placeholder="So we can reach you" onChange={this.myChangeHandler} required />
                                                        <p class="text-center" style={{ fontSize: "13px" }}>
                                                            We are sorry if you are experiecing any problems.
                                                            We will try our best to solve the issues in no time.
                                                        </p>
                                                    </div>
                                                </div>


                                                <div class="mb-3  row" style={{ padding: '3px' }}>
                                                    <div class="col-md-4">
                                                    </div>
                                                    <div class="col-md-8">
                                                        <button class="btn btn-primary">Submit request</button>
                                                        {this.state.errormessage}
                                                    </div>
                                                </div>

                                            </form>
                                        </div>
                                        <div class="mb-3  row " class='text-center' data-wow-delay=".2s" margin-right='20px'>
                                            <div class="col-md-12">
                                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1890.9341526967157!2d73.737176!3d18.5799751!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bbe5b036291d%3A0xcb8abc91bdca4c48!2sLTI!5e0!3m2!1sen!2sin!4v1609779814951!5m2!1sen!2sin" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"
                                                    width="80%" height={400} frameBorder={0} style={{ border: "2px black solid" }} allowFullScreen data-aos="fade-left" data-aos-duration={3000} />
                                            </div>
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

export default ContactUs

