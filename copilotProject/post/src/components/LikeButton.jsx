import React, { useState } from "react";

const PicturePost = ({ imageUrl }) => {
  const [likes, setLikes] = useState(100);
  const [dislikes, setDislikes] = useState(5);
  const [comment, setComment] = useState("");

  const handleLikeClick = () => {
    setLikes(likes + 1);
  };

  const handleDislikeClick = () => {
    setDislikes(dislikes + 1);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  return (
    <div
      className="picture-post"
      style={{ border: "1px solid #ccc", padding: "10px" }}
    >
      <img src={imageUrl} alt="Random" className="post-image" />
      <div className="post-actions">
        <button onClick={handleLikeClick}>Like ({likes})</button>
        <button onClick={handleDislikeClick}>Dislike ({dislikes})</button>
        <input
          type="text"
          placeholder="Add a comment..."
          value={comment}
          onChange={handleCommentChange}
        />
        {/* Display comments below */}
        {comment && <p className="comment">Comment: {comment}</p>}
      </div>
    </div>
  );
};

export default PicturePost;
