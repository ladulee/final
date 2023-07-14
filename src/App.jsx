import "./App.css";
import {
  AuditOutlined,
  ReadOutlined ,
  SwapOutlined,
  FieldTimeOutlined,
  MenuOutlined,
  UserOutlined,
  BellOutlined,
} from "@ant-design/icons";

import BombIcon from "./MyIcons/BombIcon";
import ChessboardIcon from "./MyIcons/ChessboardIcon";

import { Layout, Menu, theme, Typography, Button, Space, Avatar } from "antd";
import { useState } from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import HelloWorld from "./miniProject/HelloWorld/Helloworld";
import ChessBoard from "./miniProject/ChessBoard/ChessBoard";
import ConvertMoney from "./miniProject/ConvertMoney/ConvertMoney";
import Pomodoro from "./miniProject/Pomodoro/Pomodoro";
import MindSweeper from "./miniProject/MineSweeper/MineSweeper";
import Quotes from "./miniProject/Quotes/Quotes";
import LanguageSwitcher from './components/LanguageSwitcher';
import tr from './i18n';
const { Header, Sider, Content, Footer } = Layout;
const { Text } = Typography;

function App() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const [collapsed, setCollapsed] = useState(false);
  const [lang, setLang] = useState("vi");
  
  return (
    <BrowserRouter>
      <Layout>
        <Header
          style={{
            paddingLeft: 10,
            height: 70,
            justifyContent: "space-between",
            background: "white",
            display: "flex",
            gap: 10,
            alignItems: "center",
            borderBottom: "1px solid #f5f5f5 ",
            paddingRight: 25,
          }}
        >
          <Space>
            <Button
              type="text"
              icon={collapsed ? <MenuOutlined /> : <MenuOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: 24,
                width: 60,
                height: 60,
                backgroundColor: "white",
              }}
            />

            <img
              style={{ width: 70, marginLeft: 10, marginTop: 23 }}
              src={"/download2.jpg"}
            />
            <Text style={{ color: "black", fontSize: 18 }} strong>
              Korea IT School
            </Text>
          </Space>
          <Space style={{ alignItems: "end", gap: 10 }}>
            <LanguageSwitcher lang={lang} languages={[
                  {lang: 'vi', label: "VIE"}, 
                  {lang: 'en', label: "ENG"}
                ]} onClick={(newLang) => setLang(newLang) }/>
             <Button shape="circle"style={{ border: "none", fontSize: 26,verticalAlign: 'sub', height: 'fit-content' }}>
              <BellOutlined style={{marginRight: 5}}/>
            </Button>
            <Avatar
              size={32}
              src={"/dog_avatar1.jpg"}
              icon={<UserOutlined />}
            />
            <Text style={{fontSize: 16}}>Đỗ Thị Hường</Text>
            
          </Space>
        </Header>
        <Layout
          style={{
            minHeight: "calc(100vh - 64px - 70px)",
            paddingTop: 1,
            backgroundColor: "white",
          }}
        >
          <Sider
            width={250}
            trigger={null}
            collapsible
            collapsed={collapsed}
            theme="light"
            style={{
              borderRight: "1px solid #f5f5f5",
              flex: "0 0 220px",
              maxWidth: 220,
            }}
          >
            <div className="demo-logo-vertical" style={{ padding: 15 }} />
            <Menu
              style={{ border: "none", paddingLeft: 10, paddingRight: 10 }}
              theme="light"
              mode="inline"
              defaultSelectedKeys={["1"]}
              items={[
                {
                  key: "/helloworld",
                  icon: <AuditOutlined />,
                  label: <Link to="/helloworld">{tr("Hello World", lang)}</Link>,
                },
                {
                  key: "/chessboard",
                  icon: <ChessboardIcon />,
                  label: <Link to="/chessboard">{tr("Chess Board", lang)}</Link>,
                },
              
                {
                  key: "/convertMoney",
                  icon: <SwapOutlined />,
                  label: <Link to="/convertMoney">{tr("Convert Money", lang)}</Link>,
                },
                {
                  key: "/pomodoro",
                  icon: <FieldTimeOutlined />,
                  label: <Link to="/pomodoro">{tr("Pomodoro", lang)}</Link>,
                },
                {
                  key: "/mindSweeper",
                  icon: <BombIcon />,
                  label: <Link to="/mindSweeper">{tr("Minesweeper", lang)}</Link>,
                },
                {
                  key: "/quotes",
                  icon: <ReadOutlined />,
                  label: <Link to="/quotes">{tr("Quotes", lang)}</Link>,
                },
              ]}
            />
          </Sider>

          <Content
            style={{
              padding: 50,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            <Switch>
              <Route path="/helloworld">
                <HelloWorld />
              </Route>
              <Route path="/chessboard">
                <ChessBoard />
              </Route>
              <Route path="/convertMoney">
                <ConvertMoney />
              </Route>
              <Route path="/pomodoro">
                <Pomodoro />
              </Route>
              <Route path="/mindSweeper">
                <MindSweeper />
              </Route>
              <Route path="/quotes">
                <Quotes />
              </Route>
            </Switch>
          </Content>
        </Layout>
        <Footer
          style={{
            textAlign: "center",
            fontStyle: "italic",
            backgroundColor: "white",
            border: "1px solid #f5f5f5",
          }}
        >
          Copyright by HEDY
        </Footer>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
