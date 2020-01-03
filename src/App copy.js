import React, { Component,Fragment } from 'react'
import {HashRouter as Router,Link,Route} from "react-router-dom"
import Img from './assets/images/360壁纸 16103.jpg'
const Home=()=> {
 return (
  <div style={{width:"1000px", height:"1000px"}}>
    <span>首页</span>
    <img scr={Img} alt="" style={{width:"100px", height:"100px"}}></img>
    <img scr="./assets/images/360壁纸 16103.jpg" alt="" style={{width:"100px", height:"100px"}}></img>
    <img src="./logo512.png" alt=""></img>
  </div>
 )
}
const About=()=> <div>About</div>
const User=()=> <div>User</div>
export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <nav>
            <Link to="/">首页</Link>
            <Link to="/About">关于</Link>
            <Link to="/User">用户</Link>
          </nav>
          <section>
            <Route path="/" exact component={Home}></Route>
            <Route path="/About" exact component={About}></Route>
            <Route path="/User" exact component={User}></Route>
          </section>
        </Router>
      </Fragment>
    )
  }
}
