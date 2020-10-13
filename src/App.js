import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//components
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';

const App = () => (
  <BrowserRouter>
    <Header/>
    <Switch>
      <Route exact path='/' component={Home} />
    </Switch>
    <Footer />
  </BrowserRouter>
);


App.displayName = "App";

export default App;
