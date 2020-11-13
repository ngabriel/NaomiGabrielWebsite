import React, { Component } from 'react';
import { Button } from './Button';
import './HeroSection.css';
import '../App.css';


export class HeroSection extends Component {
    render() {
        return (
            <div className= 'hero-container'>
                <video src= "videos/video-1.mp4" autoPlay loop muted />
                <h1>Adventure Awaits</h1>
                <p> What are you waiting for?
                </p>
                
                <div className="hero-btn">
                    <Button className='btn' buttonStyle='btn--outline' buttonSize='btn--large '>
                        Get Started
                    </Button>
                    <Button className='btn' buttonStyle='btn--primary' buttonSize='btn--large '>
                        Wathch Trailer <i className = 'far fa-play-circle'/>
                    </Button>
                </div>
                
            </div>
        )
    }
}

export default HeroSection

