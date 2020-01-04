import React, { Component,Fragment } from 'react'
import Axios from '../../utils/request'
import { Carousel } from 'antd-mobile'

import nav1 from '../../assets/images/nav-1.png'
import nav2 from '../../assets/images/nav-2.png'
import nav3 from '../../assets/images/nav-3.png'
import nav4 from '../../assets/images/nav-4.png'
import {API_URL} from '../../utils/urls'

import './index.scss'
export default class index extends Component {
        state={
            swiper_list:[],
            nav:[
                {pic:nav1, name:'整租' },
                {pic:nav2,name:'合租'},
                {pic:nav3,name:'地图找房' },
                {pic:nav4,name:'去出租' }
            ]
        } 
    componentDidMount(){
        Axios.get("/home/swiper").then((res)=>{
            // console.log(res);
            this.setState({
                swiper_list:res.body
            })
        })
    }

    render() {
        return (
            <Fragment>
                <div className="home">
                    <div className="home_swiper">
                    <Carousel
                        autoplay={true}
                        infinite
        >
          {this.state.swiper_list.map(val => (
            <a
              key={val.id}
              href="http://www.alipay.com"
              style={{ display: 'inline-block', width: '100%', height: 176 }}
            >
              <img
                src={API_URL+val.imgSrc}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
                    </div>
                    <div className="home_nav">
                        {
                            this.state.nav.map((val,i)=>(
                                <div className="home_nav_item" key={i}>
                                    <img src={val.pic}></img>
                                    <p>{val.name}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
                
            </Fragment>
        )
    }
}
