import React from 'react'
import './Links.css'


class Links extends React.Component {


    render() {
        return (
            <div className="content inline link">
        <span className="border">
      <a href="https://www.linkedin.com/in/alexandermyers1/"
         className={this.props.mode === "day" ? "fa fa-linkedin core-border" : "fa fa-linkedin inverse-border"}> </a>
      <a href="https://github.com/amyer3"
         className={this.props.mode === "day" ? "fa fa-github core-border" : "fa fa-github inverse-border"}> </a>
      <a href="mailto:me@am.xyz?"
         className={this.props.mode === "day" ? "fa fa-envelope core-border" : "fa fa-envelope inverse-border"}> </a>
      <a href="http://www.alexmye.rs/about"
         className={this.props.mode === "day" ? "fa fa-user core-border" : "fa fa-user inverse-border"}> </a>
    </span>
            </div>
        )
    }
}

export default Links