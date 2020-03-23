import React from "react";
import Comment from "./Comment";

const CommentList = ({ list }) => {
  return (
    <div>
      {list.map(comment => {
        return <Comment key={comment.id} {...comment} />;
      })}
    </div>
  );
};

export default CommentList;
