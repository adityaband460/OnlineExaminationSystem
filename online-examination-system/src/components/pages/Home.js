import React, { Component } from 'react'
import "./Home.css";
import Pricing from './Pricing';
import {ImArrowRight} from 'react-icons/im'
import { Features } from "./Features";
import { Services } from "./Services";


export class Home extends Component {
    render() {
        return (
          <>
            <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
  <ol class="carousel-indicators">
    <li data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active"></li>
    <li data-bs-target="#carouselExampleDark" data-bs-slide-to="1"></li>
    <li data-bs-target="#carouselExampleDark" data-bs-slide-to="2"></li>
    <li data-bs-target="#carouselExampleDark" data-bs-slide-to="3"></li>

  </ol>
            <div class="carousel-inner">

              <div class="carousel-item active">
              <img src="../../images/demo.jpg" class="d-block w-100"  alt="demo test"/>
                <div class="carousel-caption d-none d-md-block">
                  <h2 >Take Demo Test</h2>
                  <p>KAPS helps conduct 1000s of exam sessions every day.We will be happy to help you</p>
                </div>
              </div>
              <div class="carousel-item">
              <img src="../../images/Education.jpg" class="d-block w-100" alt="Education"/>
                <div class="carousel-caption d-none d-md-block">
                  <h2>Solution for Education</h2>
                  <p>Our AI based proctoring has been effectively used by <br></br>education institutes and universities across the world with success.</p>
                </div>
              </div>
              <div class="carousel-item">
              <img src="../../images/school.jpg" class="d-block w-100" alt="School"/>
                <div class="carousel-caption d-none d-md-block">
                  <h2 >Solution for Schools</h2>
                  <p  >We have conducted school certification tests, mock exams, academic exams, scholarship tests for various national and international schools, certification agencies, NGOs successfully.</p>
                </div>
              </div>
              <div class="carousel-item">
              <img src="../../images/corporate.jpg" class="d-block w-100" alt="Corporate"/>
                <div class="carousel-caption d-none d-md-block">
                  <h2 >Solution for Corporates</h2>
                  <p  >The online assessment is a technique used by many to evaluate the caliber and reliability of the candidates.<br></br> It is drafted to scrutinize the mental , analytical ability of the probable employee.</p>
                </div>
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleDark" role="button" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleDark" role="button" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </a>
          </div>


          <div>
           <div id="section1" class="container-fluid">
           <h1>Test Platform With Advanced Proctoring - Conduct Tests in 4 Easy Steps</h1>
           <div class="container" style={{paddingBottom:'80px'}}>
              <div class="row">
                <div class="col">
                  <h2 class="mt-2 text-bold">Set-Up Exams</h2>
                  <ul class="list-unstyled">
                  <li>Upload your questions</li>
                  <li>Configure Result</li>
                  <li>Edit questions</li>
                  </ul> 
                </div>
                <div class="col" style={{marginTop:'50px'}}><ImArrowRight ></ImArrowRight></div>
                <div class="col">
                <h2 class="mt-2 text-bold">Invite test-takers</h2>
                  <ul class="list-unstyled">
                  <li>Bulk upload candidates</li>
                  <li>Select time-slots</li>
                  <li>Distribute customized invite</li>
                  </ul>
                </div>
                <div class="col" style={{marginTop:'50px'}}><ImArrowRight ></ImArrowRight></div>

                <div class="col">
                <h2 class="mt-2 text-bold">Authorize & Proctor Test</h2>
                  <ul class="list-unstyled">
                  <li>ID-based Authentication</li>
                  <li>AI-based and Human Proctoring</li>
                  </ul>               
                   </div>
                   <div class="col" style={{marginTop:'50px'}}><ImArrowRight ></ImArrowRight></div>

                   <div class="col">
                <h2 class="mt-2 text-bold">Get real-time Results</h2>
                  <ul class="list-unstyled">
                  <li>Real-time customized result</li>
                  <li>Share results in pdf, html formats</li>
                  </ul>               
                   </div>
              </div>
              <div class="text-center"style={{marginTop:'20px',color:'white'}} >
                  <button type="button"  style={{backgroundColor:'steelblue'}} 
                  onClick={()=>{
                    this.props.history.push({
                      pathname: '/TestSelection'
                    })
                  }}
                  class="btn btn-primary" >Take Demo Test</button>
               </div>
           </div>
          </div>
          </div>

          <Services></Services>
          <div style={{paddingTop:"20px"}}> <Features></Features></div>
          
          <div style={{marginTop:'50px'}}>
            <h1>Clients We Work With</h1>
            <img src="../../images/client.png" class="img-fluid" alt="Clients"  style={{opacity:'1',padding: '50px'}}></img>
          </div>

          <Pricing></Pricing>
          </>
        )
    }
}

export default Home
