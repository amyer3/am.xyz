import './Flip.css'
import React from 'react'
import Cell from './Cell'


//height: `128px`,
//width: `96px`
const list_en = ["Finance", "Engineering", "Baking"]
const list_fr = ["Financement"]
const numb_rows = 2  //document.documentElement.clientHeight / 96; // 128 is xxl px height
const numb_cols = 12 //document.documentElement.clientWidth / 72; // 96 is xxl px width
const innerMargin = 1; //margin between flippys in px


const rowStyle = {
    marginTop: `${innerMargin}px`,
    marginBottom: `${innerMargin}px`

}

const displaysStyle = {
    textAlign: "center",
}

const outerStyle = {
    marginTop: '10%'
}

function MakeSquare(props) {
    let rows = [];
    let outer = <div style={outerStyle}>{rows}</div>

    for (let i = 0; i < numb_rows; i++) {
        var cols = [];
        for (let j = 0; j < numb_cols; j++) {
            cols.push(<Cell key={j} mode={props.mode} letter={props.letter}/>)
        }
        rows.push(<div style={rowStyle} key={i} className='row'>{cols}</div>)
    }
    return outer
}

class Flip extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            word: "",
            width: window.innerWidth,
            height: window.innerHeight
        };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        console.log('reloaded flip.js')
        var list_using = (this.props.lang === "en" ? list_en : list_fr);
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);

        for (let i in list_using) {
            setInterval(() => {
                this.setState({word: list_using[i]})
                //console.log(this.state.word)
            }, 5000)
        }
    }

    updateWindowDimensions() {
        this.setState({width: window.innerWidth, height: window.innerHeight});
    }

    getList() {
        return this.props.lang === "en" ? list_en : list_fr
    }


    render() {
        return (
            <div style={displaysStyle} className="displays">
                <MakeSquare mode={this.props.mode}/>
            </div>
        )
    }
}

export default Flip