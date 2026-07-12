import { useState } from "react";
import "./comment.css";
import CommentForm from "./CommentForm";

export default function Comment() {
  let [comments, setComments] = useState([
    {
      username: "@vir",
      remarks: "Nice work!",
      rating: 4,
    },
  ]);

  let addNewComment = (comment) => {
    setComments((currComments) => [...currComments, comment]);
  };

  return (
    <>
      <h3>All Comments:</h3>
      {comments.map((comment, idx) => (
        <div className="comment" key={idx}>
          <span>{comment.remarks}</span>
          &nbsp;
          <span>(rating = {comment.rating})</span>
          &nbsp;
          <p>~ {comment.username}</p>
        </div>
      ))}

      <hr />
      <CommentForm addNewComment={addNewComment} />
    </>
  );
}
