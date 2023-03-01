import React, { Component } from 'react'
 class Additem extends React.Component {
    constructor() {
        super()
        this.state = {
            list: [],
            item: 0,
        }
    }
    addFront = () => {
        var date = new Date().toLocaleTimeString()
        this.state.item += 1

        this.setState({
            list: [{ it: this.state.item, dt: date }, ...this.state.list]
        })
     
        console.log(this.state.list)
    }

    addLast = () => {
        this.state.item += 1
        var date = new Date().toLocaleTimeString()

        this.setState({
            list: [...this.state.list, { it: this.state.item, dt: date }]
        })
        
        console.log(this.state.list)
    }
   

    render() {
        var b = this.state.list.map((x) => <tr key={x.it}>
            <td>{x.it}</td>
            <td><input id={x.it} type="text"  /></td>
            <td>{x.dt}</td>
        </tr>)
        return (
            <div>
                
                <table>
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Value</th>
                            <th>Created Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {b}
                    </tbody>

                </table>
                <button onClick={this.addFront}>Add To Front</button>
                <button onClick={this.addLast}>Add To Last</button>
            </div>
        )
    }
}
export default Additem