import { Layout, theme, Typography, Card, Row, Col } from "antd";
import { useContext } from "react";
import "./App.css";
import { NewRequestForm } from "./components/NewRequestForm";
import { RequestList } from "./components/RequestList";
import { SocketContext } from "./context/SocketContext";

function App() {
  const { Header, Content, Footer } = Layout;
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const { online } = useContext(SocketContext);

  return (
    <Layout
      className="layout"
      style={{ minHeight: "100vh", minWidth: "100vw" }}
    >
      <Header>
        <Typography.Title level={3} type={online ? "success" : "danger"}>
          VIZZNHO
        </Typography.Title>
      </Header>
      <Content style={{ padding: "0 50px", marginTop: 32 }}>
        <div
          className="site-layout-content"
          style={{ background: colorBgContainer }}
        >
          <Row gutter={16}>
            <Col span={8}>
              <NewRequestForm />
            </Col>
            <Col span={16}>
              <RequestList />
            </Col>
          </Row>
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Vizzn Backend Team: SocketIO
      </Footer>
    </Layout>
  );
}

export default App;
