import React, { Component } from 'react';
export default class App extends Component {
  state={
    color:''
  }
  ColorHandler=()=>{
    if(this.state.color===''){
      document.body.style.backgroundColor=`white`;
    }else{
      document.body.style.backgroundColor=`${this.state.color}`;
    }
  }
  render() {
    return <div style={{textAlign:'center'}}>
    <h1 style={{fontFamily:'georgia'}}>Enter Color Name</h1>
    <form action="">
      <input style={{height:'15px',fontSize:'23px',padding:'10px',borderRadius:'10px'}} type="text" value={this.state.color} onChange={(e)=>this.setState({color:e.target.value})} onKeyUp={this.ColorHandler}/>
    </form>
    </div>
  }
}
