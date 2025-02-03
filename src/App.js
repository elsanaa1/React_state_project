
import React, { Component } from 'react'

export default class App extends Component {

  constructor(props){
    super(props)
    this.state={
      Person:{fullName:'Sara Ben',bio:'IT student ', imgSrc:'/dev_pic.jpg', profession:'developper'},
      bool:false
    }
  }

  showState=()=>{(this.state.bool)? this.setState({bool:false}):this.setState({bool:true}) }

  render() {
    //destructuring the Person state
    const {fullName,bio,imgSrc,profession}=this.state.Person
    return (
      <>
       <button onClick={this.showState}>{this.state.bool.toString()}</button>
       {
         this.state.bool && 
         <div style={{textAlign:'center'}}>
           <p>{fullName},{bio},{profession}</p>
           <img src={imgSrc} hint='developer image' style={{width:300,height:200}}></img>
         </div>
       }
       
      
      </>
       
      )
  }
}
