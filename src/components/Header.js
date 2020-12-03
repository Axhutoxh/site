import React from 'react'
import '../Site.css'
import { Button } from './Button'
import './Header.css';
import Video from '../video/video3.mp4'


function Header() {
    return (
        <div className='header-container'>
            <video src={Video} autoPlay loop muted />

            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for ?</p>
            <div className='header-btn'>
            <Button className='btns' buttonStyle='btn--outline' buttonSize='bt--large'>
                    GET STARTED
                </Button>

                <Button className='btns' buttonStyle='btn--primary' buttonSize='bt--large'>
                    WATCH TRAILER<i className='far fa-play-circle' />
                </Button>



            </div>
            
        </div>
    )
}

export default Header
