// This will be our main Container Component

import { Component } from 'react';
import Menu from './MenuComponent';
import {DISHES} from '../shared/dishes';
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Route, Switch, Redirect } from 'react-router-dom';

class Main extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      dishes: DISHES,
    }
  }


  render(){

    const Homepage= () => {
      return(
        <Home />
      );
    }

    return (
      <div>
        <Header />
          <Switch>
            <Route path='/home' component={Homepage} />
            <Route path='/menu' component={()=> <Menu dishes={this.state.dishes} />} />
            <Redirect to='/home'/>
          </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;