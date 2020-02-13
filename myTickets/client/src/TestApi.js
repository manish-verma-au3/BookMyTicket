import React, { Component } from 'react'

 class TestApi extends Component {
   constructor(props){
     super(props);
     this.state ={apiResponse: ""}
   }
   callAPI(){
    fetch("http://localhost:5000/testAPI")
      .then(res => res.text())
      .then(res => this.setState({apiResponse: res}));
     // console.log(res)
  }

componentDidMount(){
  this.callAPI();
}
  render() {
    return (
      <div>
      <p>{this.state.apiResponse}</p>
      </div>
    )
  }
}

export default TestApi