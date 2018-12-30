import React, { Component } from 'react';
import LottoErrand from './component/LottoBrands';
import './component/lotto.css';

class HomePage extends Component {
  render() {
    return (
      <div className='writing'>
      <header className='header'>
        <nav className="navbar navbar-light sm-light">
          <a className="navbar-brand">LottoErrand</a>
          <form className="form-inline">
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Sign Up</button>
            <button className="btn btn-outline-success my-2 my-sm-0" >Log In</button>
          </form>
        </nav>
        </header>
        <div className='dialogue'>
          <h4>buy lottery tickets without leaving your home</h4>
        </div>
        <LottoErrand/>
      </div>
    );
  }
}

export default HomePage;
