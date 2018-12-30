import React, { Component } from 'react';
import PlayModal from '../modalComponent/PlayModal';

class HowItWorks extends Component{
  constructor(props){
    super(props);
    this.state = {
      how:'HOW IT WORKS',
      messages:false
    }
  }
  operation(){
    this.setState({
     messages: !this.state.messages 
    })
  }
  render(){
    return (
        <div> 
            <div className="alert alert-info" role="alert" onClick={()=>this.operation()}>
               {this.state.how}<i className="icon ion-md-arrow-round-down"></i>

            </div>
            {this.state.messages ? 
                <div>
                <ol>
                  <li>Select your favorite lottery brand</li> 
                  <li>Put in your lucky numbers or select "machine pick"</li>
                  <li>Make payments for the ticket</li>
                  <li>Your purchased tickets will be scanned and sent to you via e-mail, you can also see it in your account should you create an account with us (we recommend this option)</li>
                </ol>
                </div>
                : null}
        </div>
    );
  }
}

export default HowItWorks;
/*
const HowItWorks = (props)=>{
    return(
      <div>
        <div className="alert alert-info" role="alert">
          HOW IT WORKS
        </div>
        
        <div>
        <ol>
          <li>Select your favorite lottery brand</li> 
          <li>Put in your lucky numbers or select "machine pick"</li>
          <li>Make payments for the ticket</li>
          <li>Your purchased tickets will be scanned and sent to you via e-mail, you can also see it in your account should you create an account with us (we recommend this option)</li>
        </ol>
        </div>
      </div>
    );
}

export default HowItWorks;
*/