import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import './index.css';

const { Header, Sider, Content } = Layout;

interface menuParams {
    name: string;
    enthusiasmLevel?: number;
  }

 const Comp1 = () => <div>coomp1</div>
 const Comp2 = () => <div>coomp2</div>
 const Comp3 = () => <div>coomp3</div>

export default class LayoutDemo extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  handleClick = (e: any) => {
    console.log('click ', e);
  };

  render() {
    return (
       <div className='layout'>

       </div>
    );
  }
}