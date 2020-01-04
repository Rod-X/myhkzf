import React, { Component,Fragment } from 'react'
import Axios from '../../utils/request'

export default class index extends Component {

    
    componentDidMount(){
        Axios.get("/home/swiper").then((res)=>{
            console.log(res);
        })
    }

    render() {
        return (
            <Fragment>
                home
            </Fragment>
        )
    }
}
