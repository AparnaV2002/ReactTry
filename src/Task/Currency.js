import { useState, useEffect } from 'react';
import React, { Component } from 'react'

export default class Currency extends Component {
  constructor(props) {
    super(props)
    this.state = {
      curr: 0
    }
  }
  Inp = () => {
    this.setState({ curr: window.prompt("Enter Dollar") })
  }
  Us = () => {
    this.setState({ curr: this.state.curr * 82.81 })
  }
  render() {
    return (
      <div>
        <h1>{this.state.curr}</h1>
        <button onClick={this.Inp}>Rupee</button>
        <button onClick={this.Us}>To Us</button>
      </div>
    )
  }
}