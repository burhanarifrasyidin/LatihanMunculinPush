import React, { Component } from 'react';
import Navbar from './components/header';
// import Form from './components/form';
import Footer from './components/footer';
// import { Button } from 'reactstrap';
// import Homepage from './components/homepage'
// import Product from './components/product'
// import Latihan from './components/latihan'
// import Latihan2 from './components/latihan2'
// import Latihan3 from './components/latihan3'
import TugasWeekend from './components/tugasWeekend'
import {Route} from 'react-router-dom';
import './App.css';

class App extends Component {
  btnClick = () =>{
    alert('Masuk')
  }
  render() {
    return (
      <div>
        <Navbar/>
        <div className="container">
          {/* <Route path='/form' component={Form}/>
          <Route path='/products' component={Product}/>
          <Route path='/latihan' component={Latihan}/>
          <Route path='/latihan2' component={Latihan2}/>
          <Route path='/latihan3' component={Latihan3}/> */}
          {/* <Route path='/' component={Homepage} exact/> */}
          <Route path='/' component={TugasWeekend} exact/>
          {/* <Form fn={this.btnClick}/> */}
          {/* <Button color='primary'>Send!</Button>
          <h1>Hello World</h1> */}
        </div>
        {/* <Footer nama='Andi' warna='red' fn={this.btnClick}>Karyawan</Footer> */}
        <Footer/>
      </div>
    );
  }
}

export default App;
