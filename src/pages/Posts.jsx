import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchPosts } from "./services/fetchPosts";
import Post from "./Post";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  const fetchPostsData = async () => {
    try {
      const postsData = await fetchPosts();
      setPosts(postsData);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  useEffect(() => {
    fetchPostsData();
  }, []);

  return (
    <div className="rounded-lg bg-gray-50 p-7 text-gray-900 shadow-lg">
      <h1 className="mb-7 text-4xl font-bold">Posts</h1>
      <Link to="/" className="mb-4 flex items-center text-blue-600 hover:underline">
        <Icon icon="mdi:arrow-left" className="mr-2" />
        Back to Home
      </Link>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Post
            key={post.id}
            firstName={post.firstName}
            lastName={post.lastName}
            image={post.image}
            writeup={post.writeup}
          />
        ))}
      </div>
    </div>
  );
};

export default Posts;
