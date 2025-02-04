
import React, { Component } from 'react'

export default class App extends Component {

  constructor(props){
    super(props)
    this.state={
      Person:{fullName:'Sara Ben',bio:'IT student ', imgSrc:'/dev_pic.jpg', profession:'developper'},
      bool:false,
      timeInterval:0
    }
  }
   //arrow function showstate 
  showState=()=>{(this.state.bool)? this.setState({bool:false}):this.setState({bool:true}) }


  //mounting 
  componentDidMount(){
    //code will be executed every 1s since componenet is mounted,and the timeInterval state wil be incremented
     this.interval = setInterval(
      () => {this.setState( (prevState) => ({timeInterval: prevState.timeInterval + 1}) ); } , 1000);
  } 

  // unmounting
  componentWillUnmount(){
    clearInterval(this.interval);
  }



  render() {
    //destructuring the Person state
    const {fullName,bio,imgSrc,profession}=this.state.Person
    
    return (
      <div  style={{textAlign:'center'}}>
       <button onClick={this.showState}>{this.state.bool.toString()}</button>
       {
         this.state.bool && 
         <div>
           <p>{fullName},{bio},{profession}</p>
           <img src={imgSrc} hint='developer image' style={{width:300,height:200}}></img>
         </div>
       }
       <p  style={{color:'#6D2323'}}> Time interval since the last component : {this.state.timeInterval}</p>
      </div>
      )
  }
}
