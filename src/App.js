import React from 'react';
import { Route , Switch } from 'react-router-dom'; 
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';


import Default from './components/Default';
import Modal from './components/Modal';
import CreateAcc from './components/CreateAcc';
import Login from './components/loginForm';


function App() {
  const [isLogin, setLogin] = React.useState("");
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route component={Default} />
      </Switch>
      <Modal />  
      <CreateAcc />
      <Login />
    </React.Fragment>
  ); 
}

export default App;
