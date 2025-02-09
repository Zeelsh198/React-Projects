import React, { useState, useEffect } from "react";
import "./Insert.css";

import { useNavigate, useParams } from "react-router";
import { ToastContainer, toast } from "react-toastify"; // Import toast and ToastContainer
import "react-toastify/dist/ReactToastify.css"; // Import styles for toast notifications

export const Insert = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // Get the ID from URL parameters

  const [insertDetails, setInsertDetails] = useState({
    title: "",
    description: "",
    category: "Travel",
    image: null,
    createdBy: "",
  });

  // Fetch the post data if updating
  useEffect(() => {
    if (id) {
      fetch(`https://671734c7b910c6a6e026f332.mockapi.io/insert/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setInsertDetails({
            title: data.title,
            description: data.description,
            category: data.category,
            image: data.image,
            createdBy: data.createdBy,
          });
        })
        .catch((error) => console.error("Error fetching post:", error));
    }
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "image" && files.length > 0) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setInsertDetails((prevDetails) => ({
          ...prevDetails,
          image: reader.result,
        }));
      };

      reader.readAsDataURL(files[0]);
    } else {
      setInsertDetails((prevDetails) => ({
        ...prevDetails,
        [name]: value,
      }));
    }
  };

  const handleInsertSubmit = (e) => {
    e.preventDefault();

    const { title, description, category, image, createdBy } = insertDetails;

    if (!title || !description || !category || !image || !createdBy) {
      alert("Please fill in all the fields");
      return;
    }

    const method = id ? "PUT" : "POST"; // Use PUT for updating

    fetch(
      `https://671734c7b910c6a6e026f332.mockapi.io/insert${id ? `/${id}` : ""}`,
      {
        method: method,
        body: JSON.stringify({
          title,
          description,
          category,
          image,
          createdBy,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        // Show a success toast instead of setting a success message
        toast.success(
          id ? "Post Updated Successfully" : "Post Added Successfully"
        );
      })
      .catch((error) => console.error("Error:", error));

    setInsertDetails({
      title: "",
      description: "",
      category: "Travel",
      image: null,
      createdBy: "",
    });

    setTimeout(() => {
      navigate("/home");
    }, 3000);
  };

  const InsertCancel = () => {
    navigate("/home");
  };

  return (
    <>
   
      <form onSubmit={handleInsertSubmit}>
        <div className="insert-container-main">
          <h1>{id ? "Update Post" : "Enter Post Details"}</h1>

          <div className="input-group">
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              autoComplete="off"
              placeholder="Enter the title"
              value={insertDetails.title}
              onChange={handleInputChange}
            />
          </div>

          <div className="input-group">
            <label htmlFor="description">Description:</label>
            <input
              type="text"
              id="description"
              name="description"
              autoComplete="off"
              placeholder="Enter the description"
              value={insertDetails.description}
              onChange={handleInputChange}
            />
          </div>

          <div className="input-group">
            <label htmlFor="category">Category:</label>
            <select
              name="category"
              id="category"
              value={insertDetails.category}
              onChange={handleInputChange}
            >
              <option value="Travel">Travel</option>
              <option value="Fashion">Fashion</option>
              <option value="Food">Food</option>
              <option value="Coding">Coding</option>
              <option value="Style">Style</option>
            </select>
          </div>

          <div className="input-group">
            <label htmlFor="image">Image:</label>
            <input
              type="file"
              id="image"
              name="image"
              onChange={handleInputChange}
            />
          </div>

          {/* Display the selected image */}
          {insertDetails.image && (
            <div className="image-preview">
              <img
                src={insertDetails.image}
                alt="Selected"
                className="preview-image"
              />
            </div>
          )}

          <div className="input-group">
            <label htmlFor="createdby">Created By:</label>
            <input
              type="text"
              id="createdby"
              name="createdBy"
              autoComplete="off"
              placeholder="Enter your name"
              value={insertDetails.createdBy}
              onChange={handleInputChange}
            />
          </div>

          <button type="submit" className="submit-button">
            {id ? "Update Post" : "Submit Post"}
          </button>
          <button
            type="button"
            className="cancel-button"
            onClick={InsertCancel}
          >
            Cancel
          </button>
        </div>
      </form>
    </>
  );
};
