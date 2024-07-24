import React from 'react'

export default class ShowDateCC extends React.Component {

  constructor() {
    super()
    this.loadTime = new Date().toString()
    // make this object available as this reference 
    this.showDateTime = this.showDateTime.bind(this);
  }

  showDateTime() {
    this.now = document.getElementById("now")
    this.now.innerHTML = this.loadTime
  }
  render() {
    return (
      <>
        <button onClick={this.showDateTime}>Show Date and Time</button>
        <h1 id="now"></h1>
      </>
    )
  }
}

