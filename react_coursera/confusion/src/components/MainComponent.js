// This will be our main Container Component

import { Component } from 'react';
import Menu from './MenuComponent';
import Contact from './ContactComponent'
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import About from './AboutComponent';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStatetoProps = (state) => {
  return{
    dishes : state.dishes,
    promotions: state.promotions,
    leaders: state.leaders,
    comments: state.comments,
  }
}

class Main extends Component {
  
  render(){

    const Homepage= () => {
      return(
        <Home
          dish={this.props.dishes.filter((dish)=> dish.featured)[0]}
          promotion={this.props.promotions.filter((promo)=> promo.featured)[0]}
          leader={this.props.leaders.filter((leader)=> leader.featured)[0]} 
        />
      );
    }

    // ROUTE passes 3 objects to the component- match, location and history.
      // match contains the route parameters under eg. match.params.dishId
    const DishWithID = ({match}) => {
      return(
        <DishDetail 
          dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]} 
          comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}
        />
      );
    }

    return (
      <div>
        <Header />
          <Switch>
            <Route path='/home' component={Homepage} />
            <Route path='/aboutus' component={() => <About leaders={this.props.leaders} />} />
            <Route exact path='/menu' component={()=> <Menu dishes={this.props.dishes} />} />
            <Route path='/menu/:dishId' component={DishWithID} />
            <Route exact path='/contactus' component={Contact} />
            <Redirect to='/home'/>
          </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStatetoProps)(Main));