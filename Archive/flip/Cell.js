import React from 'react'


class Cell extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            target: this.glyphs[Math.floor(Math.random() * this.glyphs.length)]
        }
    }
    topLetter = ""
    bottomLetter = ""
    glyphs = [' ', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
        '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

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
        clipPath: "inset(0 0 50% 0)",
        borderRadius: "4px 4px 0 0",

    }
    bottomCLip = {
        clipPath: "inset(50% 0 0 0)",
        borderRadius: "0 0 4px 4px",
    }

    setLetters(letter) {
        setTimeout(
            this.topLetter = letter,
            1500
        );
        setTimeout(
            this.bottomLetter = letter,
            450
        )
    }

    findIters() {
        for (let i in this.glyphs) {
            if (this.glyphs[i] === this.state.target) {
                console.log(i)
                return i
            }
        }
    }

    updateDisplay() {
        for (let i in this.glyphs) {
            this.setLetters(this.glyphs[i])
            if (i === this.findIters()) {
                break;
            }
        }

    }

    myLoop() {
        var c = 0;
        setTimeout(() => {
            this.setLetters(this.glyphs[c])
            c++;
            if (c < this.findIters()) {
                this.myLoop();
            }
        }, 450)
    }

    componentDidMount() {
        this.myLoop()
        this.findIters()
    }

    render() {
        return (
            <div key={this.props.key} style={this.digitStyle} className="digit">
                {
                    [
                        <div style={{...this.flapStyle, ...this.topClip}}
                             className={this.props.mode === 'day' ? "core" : 'inverse'}>{this.topLetter}</div>,
                        <div style={{...this.flapStyle, ...this.bottomCLip}}
                             className={this.props.mode === 'day' ? "core" : 'inverse'}>{this.bottomLetter}</div>,
                    ]
                }

            </div>

        )
    }
}


export default Cell