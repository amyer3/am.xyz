import React from 'react'
import './Logo.css'



class Logo extends React.Component{
    render(){


        return(
            <div id='outer'>
                <div className='container'>
                    <div className={this.props.mode === "day" ? "core nom a" : "inverse nom a"}><p>a</p></div>
                    <div className={this.props.mode === "day" ? "core nom l" : "inverse nom l"}><p>l</p></div>
                    <div className={this.props.mode === "day" ? "core nom fillerCore" : "inverse nom fillerCore"}>&nbsp;</div>
                    <div className={this.props.mode === "day" ? "core nom e" : "inverse nom e"}><p>e</p></div>
                    <div className={this.props.mode === "day" ? "inverse nom fillerInverse" : "core nom fillerInverse"}>&nbsp;</div>
                    <div className={this.props.mode === "day" ? "inverse nom x" : "core nom x"}><p>x</p></div>
                </div>
            </div>

        )
    }
}

export default Logo