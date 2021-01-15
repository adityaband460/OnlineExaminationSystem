import React from 'react'

import { useState } from 'react'
import { useSpring, animated as a } from 'react-spring'
import './Results.css'

import Fire from './fire'
import { NavLink } from 'react-router-dom'

function Results(props) {
    var score = JSON.stringify(props.location.state.total);
    
    const [flipped, set] = useState(false)
    const { transform, opacity } = useSpring({
        opacity: flipped ? 1 : 0,
        transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
        config: { mass: 5, tension: 500, friction: 80 }
    })


    return (
        <div class='view'>
            <div on onClick={() => set(state => !state)}>
            <a.div class="c back" style={{ opacity: opacity.interpolate(o => 1 - o), transform }}>
                <h1 class="hide">Click Here to see the result</h1>
               
            </a.div>
            
            <a.div class="c front" style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }}>
                
                <h1 class="scoreBoard"> Congratulations!! You Scored {  score } Marks <NavLink to="/TestSelection"> Back to Test </NavLink> </h1>
                
                <Fire/>
                
            </a.div>
            
            </div>
            
        </div>
    )
}

export default Results

