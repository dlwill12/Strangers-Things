import React, { useEffect, useState } from "react";
import FetchPost from "../API/api";
import Cards from "../components/card";

function Posts() {
  const [allPost, setAllPost] = useState([]);
  // console.log(allPost);

  useEffect(() => {
    const fetchAllPost = async () => {
      try {
        const response = await FetchPost();
        setAllPost(response);
      } catch (err) {
        console.error(err);
      }
    };
    fetchAllPost();
  }, []);

  return (
    <div>
      <section>
        {allPost && allPost.map((post) => <Cards key={post.id} post={post} />)}
      </section>
    </div>
  );
}

export default Posts;
