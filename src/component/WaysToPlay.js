import React, { Component } from 'react';


class WaysToPlay extends Component{
  constructor(props){
    super(props);
    this.state = {
      how:'WAYS TO PLAY',
      messages:false}
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
            <p>{this.state.messages ? 
                <div>
                  <ul>
                    <li>INDIVIDUAL PLAY</li>
                      <ul>
                        <li><p>you keep 100% of your winnings</p></li> 
                        <li><i>we do not keep a 'dime' of your winnings</i></li>            
                      </ul>
                    <li>GROUP PLAY</li>
                      <ul>
                        <li><p>your 'play' is added to a pool with other like minded players</p></li>
                        <li><p>the winnings are split equally among the group</p></li>
                        <li><p>this gives you a higher chance of winning</p></li>
                        <li><i>we do not keep a 'dime' of the winnings</i></li>
                      </ul>
                  </ul>
                </div>
                : null}</p>
        </div>
    );
  }
}

export default WaysToPlay;

/*import React from 'react';

const WaysToPlay = (props)=>{
    return(
      <div>
        <div className="alert alert-info" role="alert">
          WAYS TO PLAY
        </div>
        <div>
          <ul>
            <li>INDIVIDUAL PLAY</li>
              <ul>
                <li><p>you keep 100% of your winnings</p></li> 
                <li><i>we do not keep a 'dime' of your winnings</i></li>            
              </ul>
            <li>GROUP PLAY</li>
            <ul>
                <li><p>your 'play' is added to a pool with other like minded players</p></li>
                <li><p>the winnings are split equally among the group</p></li>
                <li><p>this gives you a higher chance of winning</p></li>
                <li><i>we do not keep a 'dime' of the winnings</i></li>
              </ul>
          </ul>
          <></>
        </div>
      </div>
    );
}

export default WaysToPlay;*/