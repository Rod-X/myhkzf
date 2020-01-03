import React from 'react';
import { TabBar } from 'antd-mobile';
//1.引入一个withRouter组件
import { withRouter} from "react-router-dom"
class TabBarExample extends React.Component {
  constructor(props) {
    super(props)
  }



  render() {
    return (
      <div style={true ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#21B97A"
          barTintColor="white"
        >
          <TabBar.Item
            title="首页"
            key="Home"
            icon={<i className="iconfont icon-ind"></i>
            }
            selectedIcon={<i className="iconfont icon-ind"></i>
            }
            selected={this.props.match.path==="/"}
            onPress={() => {
              this.props.history.push("/")
            }}
          >
            {this.props.children}
          </TabBar.Item>
          <TabBar.Item
            title="找房"
            key="findHouse"
            icon={<i className="iconfont icon-ind"></i>
            }
            selectedIcon={<i className="iconfont icon-ind"></i>
            }
            selected={this.props.match.path==="/list"}
            onPress={() => {
              this.props.history.push("/list")
            }}
          >
            {this.props.children}
          </TabBar.Item>         
          <TabBar.Item
            title="资讯"
            key="Info"
            icon={<i className="iconfont icon-ind"></i>
            }
            selectedIcon={<i className="iconfont icon-ind"></i>
            }
            selected={this.props.match.path==="/info"}
            onPress={() => {
              this.props.history.push("/info")
            }}
          >
            {this.props.children}
          </TabBar.Item>         
          <TabBar.Item
            title="我的"
            key="Profile"
            icon={<i className="iconfont icon-ind"></i>
            }
            selectedIcon={<i className="iconfont icon-ind"></i>
            }
            selected={this.props.match.path==="/profile"}
            onPress={() => {
              this.props.history.push("/profile")
            }}
          >
            {this.props.children}
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}
export default withRouter(TabBarExample)
