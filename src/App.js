import React, { Component,Fragment } from 'react'
import { HashRouter as Router, Link, Route } from "react-router-dom";
import HKLayout from "./components/HKLayout"
import Home from "./pages/home"
import List from "./pages/list"
import Info from "./pages/info"
import Profile from "./pages/profile"

class TabBarExample extends React.Component{
  constructor(props) {
    super(props);
  }
}

export default class App extends Component {
  state = {
    selectedTab: 'redTab',
    hidden: false,
    fullScreen: true,
  };
  render() {
    return (
      <Fragment>
        <Router>
          <Route path="/" exact render={(props)=> <HKLayout><Home {...props}/></HKLayout>}></Route>
          <Route path="/list" exact render={(props)=><HKLayout><List {...props}/></HKLayout>}></Route>
          <Route path="/info" exact render={(props)=><HKLayout><Info {...props}/></HKLayout>}></Route>
          <Route path="/profile" exact render={(props)=><HKLayout><Profile {...props}/></HKLayout>}></Route>
        </Router>
      </Fragment>
    )
  }
}
