import React from "react";
import { postApi } from "../service/postApi";

const PostContainer = () => {
  const { data } = postApi.useFetchAllPostsQuery(5);
  return (
    <div>
      <ul>
        {data &&
          data.map((post) => {
            return <li key={post.id}>{post.title}</li>;
          })}
      </ul>
    </div>
  );
};

export default PostContainer;
