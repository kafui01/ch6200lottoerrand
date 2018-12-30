import React, { Component } from 'react';
import HowItWorks from './HowItWorks';
import WaysToPlay from './WaysToPlay';
import './lotto.css';



class LottoBrands extends Component {
  constructor(props){
    super(props);
    this.state = {  
      modal: false,
    lotto:  [
              {
                brand:'MEGA-MILLION', 
                countdown: '2days 1hour', 
                amount:'$100million' , 
                id: 1
                }
                  ,
                {
                brand:'POWERBALL', 
                countdown: '3days 4hours', 
                amount:'$80million', 
                id: 2
              }
            ]
    }
    this.toggleModal = this.toggleModal.bind(this);
    this.close = this.close.bind(this);
}
toggleModal() {
  this.setState({
    modal: !this.state.modal
  });
}

close(){
  this.setState({
    modal:false
  });
}
  
  render() {
    return (
      <div className='writing'>
        <div>
          <ul>
          {this.state.lotto.map( (lot,id) => {
            return (
              <div className='lot'>
                <div key={lot.id} className='lotto'>
                  <li>{lot.brand}</li>
                  <li>{lot.amount}</li>
                  <li>{lot.countdown}</li>
                  <button type="button" className="btn btn-success" onClick={this.toggleModal}>PLAY NOW</button>
                <div>
                {
                  this.state.modal ?  <div id="myModal" class="modal">
                                        <div class="modal-content">
                                          <span class="close" onClick={this.close}>&times;</span>
                                          <button id='space' type="button" className="btn btn-success">create an account (recommended)</button>
                                          <button type="button" className="btn btn-success">proceed to buy ticket</button>
                                        </div>
                                      </div>: null
                }
                </div>
              </div>
              </div>
              )
            })}
          </ul>
        </div> 
        <HowItWorks/>
        <WaysToPlay />
      </div>
    );
  }
}

export default LottoBrands;