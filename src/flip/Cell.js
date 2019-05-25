import React from 'react'


//<input style={cellStyle} key={this.props.i} className=" flapper XS" placeholder= {`R${this.props.i}C${this.props.j}`}/>


class Cell extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            topLetter: "A",
            bottomLetter: "B",
        }
    }
    presets = {
        alphanum: [' ','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
            '1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
    }

    digitStyle = {
        position: 'relative',
        height: `128px`,
        width: `96px`,
        border: '1px solid black',
        marginLeft: '.0625%',
        marginRight: '.0625%',
        display: 'inline-block',
        borderRadius: '5px',
        color: "black",
    }
    flapStyle = {
        height: "100%",
        textAlign: "top",
        fontSize: '89px',
        overflow: 'hidden',
        position: 'absolute',
        width: '100%',
        color: 'yellow'

    }
    topClip = {
        clipPath: "inset(0px 0px 64px 0px)",
        borderRadius: "4px 4px 0 0",

    }
    bottomCLip = {
        clipPath: "inset(64px 0px 0px 0px)",
        borderRadius: "0 0 4px 4px",
    }

    updateDisplay(){}

    setTopLetter(){}

    setBottomLetter(){}

    //bottom is seen first, then top

    render(){
        return(
            <div key={this.props.key} style={this.digitStyle} className="digit">
                {
                    [
                        <div style={{...this.flapStyle, ...this.topClip}} className={this.props.mode === 'day' ? "core" : 'inverse'}>{this.state.topLetter}</div>,
                        <div style={{...this.flapStyle, ...this.bottomCLip}} className={this.props.mode === 'day' ? "core" : 'inverse'}>{this.state.bottomLetter}</div>,
                    ]
                }

            </div>

        )
    }
}

export default Cell