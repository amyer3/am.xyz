import React from 'react'
import './words.css'


class Words extends React.Component{


    render(){
        return(
            <div className='enc'>
                <div className='wordStyle' href="https://www.linkedin.com/in/alexjmyers"><p>Linkedin</p></div>
                <div className='wordStyle' href="https://github.com/amyer3"><p>Github</p></div>
                <div className='wordStyle' href="#"><p>About</p></div>
                <div className='wordStyle' href="#"><p>Travel</p></div>
                <div className='wordStyle' href="#"><p>Work</p></div>
                <div className='wordStyle' href="#"><p>Contact</p></div>
            </div>
        )
    }
}

export default Words