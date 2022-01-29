import { useState } from "react";
import { Button } from "antd";
import "antd/dist/antd.css";

export function LikeButton() {
  const [isLiked, setLiked] = useState(false);

  function handleClick() {
    setLiked(!isLiked);
    console.log(isLiked);
  }
  return (
    <Button type="primary" onClick={handleClick}>
      {isLiked ? `You like this. 🙌` : `Like? 👍`}
    </Button>
  );
}
