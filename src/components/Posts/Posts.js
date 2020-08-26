import React, { useState } from "react";
import Post from './Post';
import './Posts.css';
import dummyData from "./dummy-data";

const Posts = () => {
  const [data] = useState(dummyData);
  console.log(data);

  // const Posts = (props) => {
  // // 🔥 Make sure the parent of Posts is passing the right props!
  // const { posts, setPosts} = props;

  return (
    <div className="posts-container-wrapper">
    {/* map through data here to return a Post and pass data as props to Post */}
    {data.map(post => {
      return <Post post={post} />
    })}
  </div>
)
};

export default Posts;
