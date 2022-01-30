import articles from "../../libs/articles";
import { Comments } from "../Comments";
import { LikeButton } from "../LikeButton";
import css from "./Article.module.css";
import { Typography, Divider, Layout } from "antd";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "../Loading";
const { Title, Paragraph } = Typography;

function PidgeonArticle() {
  return (
    <Typography className={css.article}>
      {articles.map((item) => {
        return (
          <ul key={item.id}>
            <Title className={css.title}>{item.title}</Title>
            <ol>
              {item.paragraphs.map((para) => {
                return (
                  <Paragraph key={para.id + 2}>
                    <li key={para.id}>{para.text}</li>
                  </Paragraph>
                );
              })}
            </ol>
            <LikeButton />
            <Divider />
            <Comments comments={item.comments} />
          </ul>
        );
      })}
    </Typography>
  );
}

export default withAuthenticationRequired(PidgeonArticle, {
  onRedirecting: () => <Loading />,
});
