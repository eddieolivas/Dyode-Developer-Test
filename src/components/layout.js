import React, { Component } from 'react'

import Header from './header/header';
import Footer from './footer/footer';
import SideDrawer from '../components/header/navigation/sideDrawer/sideDrawer';
import classes from './layout.module.scss';

class Layout extends Component {
  state = {
    showSideDrawer: false
  }

  sideDrawerClosedHandler = () => {
    this.setState({showSideDrawer: false});
  }

  sideDrawerToggleHandler = () => {
    this.setState( ( prevState ) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    } );
  }

  render () {
    console.log('layout state showSideDrawer ' + this.state.showSideDrawer)
    return (
      <div className={classes.layout}>
        <SideDrawer 
            open={this.state.showSideDrawer}
            closed={this.sideDrawerClosedHandler}
            drawerToggleClicked={this.sideDrawerToggleHandler} />
        <Header 
          drawerToggleClicked={this.sideDrawerToggleHandler} />
          <main>
              {this.props.children}
          </main>
        <Footer />
      </div>
    );
  }
} 

export default Layout;