import React, { Component } from 'react'
import { SystemConsumer } from '../context';

export default class Default extends Component {

  renderPermission(permission){
    switch(permission){
      case 'creator':
        return(
          <div></div>
        )
      case 'manager':
        return(
          <div></div>
        )
      case 'admin':
        return(
          <div></div>
        )
      default:
        return null
      
    }
  }

  render() {
    console.log(this.props);
    return (
      <SystemConsumer>
        {(value)=>{
          const {isLogin,user} = value;
          const {userName,permission} = user;
          return(
            <div>
              {isLogin
              ?
              <div class="container">
                {this.renderPermission(permission)}
              </div>
              :
              <div 
              
                style={{
                  textAlign: "center",
                  margin : "7%",
                  fontSize: "41px"
                }}

              >
                Bạn chưa đăng nhập
              </div>
              }
            </div>
            
            
          )
        }}
      </SystemConsumer>
    )
  }
}
