
import React, { Component } from 'react'

export class Crud extends Component {
  constructor(props) {
    super(props)
    this.state = {
      myname: '',
      rollno: '',
      mark: '',
      list: [{
        N: '',
        R: '',
        M: ''
      }],
      len: 1,
      displayMark: '',
      displayName:'',
      show: false,
      newMark: '',
      temp1: false,
      temp2: false
      
    }
  }
  change = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  submit = () => {
    this.setState({
      len: this.state.len + 1,
      list: [...this.state.list, { N: this.state.myname, R: this.state.rollno, M: this.state.mark }]
    })
    this.state.myname = ""
    this.state.rollno = ""
    this.state.mark = ""
    
    console.log(this.state.len)
  }
  clear = () => {
    this.setState({
      list: []
    })
  }

  chsearch = (e) => {
    this.setState({
      search: e.target.value
    })
  }
  fnsearch = (e) => {
    this.setState({
      search: this.state.search
    })
    for (var i = 0; i < this.state.len; i++) {
      if (this.state.search == this.state.list[i].R) {
        this.state.displayMark = "Mark : " + this.state.list[i].M;
        
        break;
      }
    }
    if (i == this.state.len) {
      this.state.displayMark = "Roll No not found"
      

    }
    for (var i = 0; i < this.state.len; i++) {
      if (this.state.search == this.state.list[i].R) {
        this.state.displayName = "Name : " + this.state.list[i].N;
        
        break;
      }
    }
    if (i == this.state.len) {
      this.state.displayName = "Roll No not found"
      

    }
  }



  fnupdate = () => {
    this.setState({
      show: !this.state.show,
      update: this.state.update,
      temp1: false,
      temp2: false,
      updatedMark:'',
      updatedName:''
    })
    

    
  }

  
  fnupdateMark = () => {
    
    for (var i = 0; i < this.state.len; i++) {
      if (this.state.update == this.state.list[i].R) {
        this.state.list[i].M = this.state.updatedMark
      }
    }
    
    this.setState({})
  }
  fnupdateName = () => {
    for (var i = 0; i < this.state.len; i++) {
      if (this.state.update == this.state.list[i].R) {
        this.state.list[i].N = this.state.updatedName
      }
    }
    this.setState({})
  }
  render() {
    const { myname, rollno, mark } = this.state
    var b = this.state.list.map(x => <tr>
      <td>{x.N}</td>
      <td>{x.R}</td>
      <td>{x.M}</td>
     
    </tr>)
    return (
      <>
        <div>
          <label>Name : </label>
          <input onChange={this.change} name="myname" value={myname} />
        </div>
        <div>
          <label>Roll No. : </label>
          <input onChange={this.change} name="rollno" value={rollno} />
        </div>
        <div>
          <label>Mark : </label>
          <input onChange={this.change} name="mark" value={mark} />
        </div>
        
        <button onClick={this.submit}>Submit</button>
        <button onClick={this.clear}>Clear</button>
        <hr />
        <div>
          <table >
            <thead>
              <tr>
                <th>Name  </th>
                <th>Roll No. </th>
                <th>Mark</th>
               
              </tr>
            </thead>
            <tbody>
              {b}
            </tbody>
          </table>
        </div>

        <div>
          <input value={this.state.search} onChange={this.chsearch} />
          <button onClick={this.fnsearch}>Search</button>
          <h3>{this.state.displayMark}</h3>
          <h3>{this.state.displayName}</h3>
        </div>

        <div>
          <label>Roll No : </label>
          
          <input
            value={this.state.update}
            onChange={(e) => { this.setState({ update: e.target.value }) }}
          />
          <button onClick={this.fnupdate}>Update</button>
        </div>

        <br />
        {this.state.show && <>

          <button onClick={() => this.setState({ temp1: true, temp2: false })}>Mark</button>
          <button onClick={() => this.setState({ temp1: false, temp2: true })}>Name</button>
          {
            this.state.temp1 && <>
            
              <div>
                <label>Mark : </label>
                <input
                  value={this.state.updatedMark}
                  onChange={(e) => this.setState({ updatedMark:window.prompt("enter the value")})}

                />
                
                <button onClick={this.fnupdateMark}>Update Mark</button>
              
              </div>
            </>
          }
          {
            this.state.temp2 && <>
              <div>
                <label>Name : </label>
                <input
                  value={this.state.updatedName}
                  onChange={(e) => this.setState({ updatedName: e.target.value })}
                />
                <button onClick={this.fnupdateName}>Update Name</button>
              </div>
            </>
          }
          
        </>}
      </>
    )
  }
}

export default Crud