import React from 'react';
import './Pricing.css';
import { FaFire } from 'react-icons/fa';
import { BsXDiamondFill } from 'react-icons/bs';
import { GiCrystalize } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';

function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#fff', size: 64 }}>
      <div className='pricing__section'>
        <div className='pricing__wrapper'>
        <h1>Online Exam System Pricing</h1>
          <div className='pricing__container'>
            <Link to='/admin-register' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <FaFire />
                </div>
                <h3>Free</h3>
                <h4>No.Of EXAMS : 25</h4>
                <p>Validity : 15 DAYS</p>
                <ul className='pricing__container-features'>
                  <li>candidate Management</li>
                  <li>Technical Support</li>
                  <li>Custom certification</li>
                </ul>
                <button type="button" class="btn btn-light">Choose Plan</button>
               
              </div>
            </Link>
            <Link to='/admin-register' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <BsXDiamondFill />
                </div>
                <h3>Gold</h3>
                <h4>$500.25</h4>
                <h4>No.Of EXAMS : 5000</h4>
                <p>Validity : 1 YEAR</p>
                <ul className='pricing__container-features'>
                  <li>Test Series with proctoring</li>
                  <li>Security</li>
                </ul>
                <button type="button" class="btn btn-light">Choose Plan</button>

              </div>
            </Link>
            <Link to='/admin-register' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <GiCrystalize />
                </div>
                <h3>Diamond</h3>
                <h4>$700</h4>
                <p>Validity : 1 YEAR</p>
                <ul className='pricing__container-features'>
                  <li>Unlimited Acess</li>
                  <li>10% Cash Back</li>
                  <li>Unlimited Spending</li>
                </ul>
                <button type="button" class="btn btn-light">Choose Plan</button>

              </div>
            </Link>
          </div>
        </div>
       
      </div>
     
    </IconContext.Provider>
  );
}
export default Pricing;