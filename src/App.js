import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/home-page.component';
import ShopPage from './pages/shoppage/shop-page.component';
import Header from './components/header/header-component.jsx';
import { signInAndSignUpPage } from './pages/sign-in-and-sign-up.page/sign-in-and-sign-up.component';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signIn" component={signInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
