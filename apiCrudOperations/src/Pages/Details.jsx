import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Details.css"

export const Details = () => {
  const { id } = useParams(); // Get the dynamic id from the URL
  const [post, setPost] = useState(null);

  // Fetch post details by id
  const fetchPostDetails = async (id) => {
    try {
      const response = await fetch(
        `https://671734c7b910c6a6e026f332.mockapi.io/insert/${id}`
      );
      const data = await response.json();
      setPost(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchPostDetails(id); // Fetch data when component loads
  }, [id]);

  if (!post) return <div>Loading post details...</div>;

  return (
    <div className="post-details">
      
      <div>
        <strong>Title:</strong> {post.title}
      </div>
      <div>
        <strong>Description:</strong> {post.description}
      </div>
      <div>
        
        {post.image ? <img src={post.image} alt="Post" /> : "No image available"}
      </div>
      <div>
        <strong>Category:</strong> {post.category}
      </div>
      <div>
        <strong>Created By:</strong> {post.createdBy}
      </div>
      {/* Add your form or inputs here to update the post details */}
    </div>
  );
};
