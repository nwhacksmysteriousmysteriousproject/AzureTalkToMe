import React, { Component } from 'react';
import Sidebar from './component/Sidebar';
import './App.css';
import Azure from './component/azure.js';
import {Breadcrumb, Layout, Button} from "antd";
import Bot from './bot.js';
// import recorder from "./backend/AudioTransformer.js";

const {
    Header, Footer, Sider, Content,
} = Layout;

class App extends Component {

  render() {
    return (
      <div className="App">
          <Layout style={{ minHeight: '100vh' }}>
              <Sider>
                <Sidebar/>
              </Sider>
              <Layout>
                  <Content style={{ margin: '0 16px' }}>
                    <Azure/>
                  </Content>
                  <Footer style={{ textAlign: 'center' }}>
                  </Footer>
              </Layout>
          </Layout>
      </div>
    );
  }
}

export default App;
