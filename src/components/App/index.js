import css from "./App.module.css";
import { MainHeader } from "../Header";
import { PidgeonArticle } from "../Article";
import { Layout } from "antd";
import "antd/dist/antd.css";
const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <Layout className={css.container}>
      <Header>
        <MainHeader />
      </Header>
      <Layout>
        <Sider></Sider>
        <Content>
          <PidgeonArticle />
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
