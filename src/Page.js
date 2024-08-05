import React from 'react';
import './Page.css';
import Header from './navbar.js'
import './e-com.js';
import Home from './home.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


function Page() {
  return(
    <>
    <Header/>
    <Home/>
    </>
  )
}

export default Page;
