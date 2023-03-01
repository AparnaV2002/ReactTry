import React, { Component } from 'react'

class Calculate extends React.Component {
    constructor() {
        super()
        this.state = { input: '',
                        ans:'' }
    }
    chInp = (e) => {
        this.setState({
            input: e.target.value
        })
    }
    ans=(e)=>{
        this.setState({
            input: e.target.value,
            input: eval(this.state.input)
        })
    }
    clear=()=>{
        this.setState({
            input:''
        })
    }
    render() {
        return (
            <div>
                <input type="text" value={this.state.input} onChange={this.chInp} />
                <div>
                    <button value={this.state.input+1} onClick={this.chInp}>1</button>
                    <button value={this.state.input+2} onClick={this.chInp}>2</button>
                    <button value={this.state.input+3} onClick={this.chInp}>3</button>
                    <button value={this.state.input+'*'} onClick={this.chInp}>*</button>
                    <button value={this.state.input+'+'} onClick={this.chInp}>+</button>
                </div>
                <div>
                    <button value={this.state.input+4} onClick={this.chInp}>4</button>
                    <button value={this.state.input+5} onClick={this.chInp}>5</button>
                    <button value={this.state.input+6} onClick={this.chInp}>6</button>
                    <button value={this.state.input+'-'} onClick={this.chInp}>-</button>
                    <button onClick={this.clear}>C</button>
                </div>
                <div>
                    <button value={this.state.input+7} onClick={this.chInp}>7</button>
                    <button value={this.state.input+8} onClick={this.chInp}>8</button>
                    <button value={this.state.input+9} onClick={this.chInp}>9</button>
                    <button value={this.state.input+'/'} onClick={this.chInp}>/</button>
                    <button  onClick={this.ans}>=</button>
                </div>
                <div>
                <button value={this.state.input+0} onClick={this.chInp}>0</button>
                <button value={this.state.input+'%'} onClick={this.chInp}>%</button>
                </div>
            </div>
        )
    }
}
export default Calculate