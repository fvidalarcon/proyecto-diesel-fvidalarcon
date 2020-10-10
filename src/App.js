import React, { Fragment } from 'react';
import Header from './components/Header';
import SearchDieselStation from './components/SearchDieselStation';
import Footer from './components/Footer';


const App = () => (
      <Fragment>
        <Header/>
        <SearchDieselStation/>
        <Footer/>
      </Fragment>
);

App.displayName = 'App'; //description component

export default App;
