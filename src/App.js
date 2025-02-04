
import React, { Component } from 'react'

export default class App extends Component {

  constructor(props){
    super(props)
    this.state={
      Person:{fullName:'Sara Ben',bio:'Full stack dev ,Web devlopment ,JavaScript ,Python ,React', imgSrc:'/dev_pic.jpg', profession:'Programmer'},
      bool:false,
      timeInterval:0
    }
  }
   //arrow function showstate 
  showState=()=>{this.setState((prevState)=>({bool:!prevState.bool}) ) }


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
    // style vars
    const styleDiv={textAlign:'center'}
    const styleimg={width:300,height:200}
    const styleIntevalText={color:'#6D2323',marginTop:30}

    return (
      <div  style={styleDiv}>
       <button onClick={this.showState}> {this.state.bool ? "Hide Profile" : "Show Profile"}</button>
       {
         this.state.bool && 
         <div>
           <h2>{fullName}</h2>
           <p>{profession}</p>
            <p>{bio}</p>
           <img src={imgSrc} alt='developer image' style={styleimg}></img>
         </div>
       }

       {/* text to display the time interval since component mounted  */}
       <p  style={styleIntevalText}> Time interval since the last component : {this.state.timeInterval}</p>
      </div>
      )
  }
}
