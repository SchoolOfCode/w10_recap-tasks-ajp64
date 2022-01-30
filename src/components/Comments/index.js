import { Comment, Avatar } from "antd";

export function Comments({ comments }) {
  return (
    <article>
      <h3>Comments: </h3>
      {comments.map((item) => {
        return (
          <ul key={item.id}>
            <Comment
              author={item.name}
              avatar={
                <Avatar src="https://i.pinimg.com/736x/cb/45/72/cb4572f19ab7505d552206ed5dfb3739.jpg" />
              }
              content={<p>{item.text}</p>}
            />
          </ul>
        );
      })}
    </article>
  );
}
