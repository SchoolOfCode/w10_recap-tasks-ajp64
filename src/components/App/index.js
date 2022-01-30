import css from "./App.module.css";
import { MainHeader } from "../Header";
import { PidgeonArticle } from "../Article";
import { Layout } from "antd";
import LogoutButton from "../LogoutButton";
import Profile from "../Profile";
import "antd/dist/antd.css";
const { Header, Sider, Content } = Layout;

function App() {
  return (
    <Layout className={css.container}>
      <Profile />
      <Header>
        <MainHeader />
      </Header>
      <Layout>
        <Sider></Sider>
        <Content>
          <PidgeonArticle />
        </Content>
      </Layout>
      <LogoutButton />
    </Layout>
  );
}

export default App;
