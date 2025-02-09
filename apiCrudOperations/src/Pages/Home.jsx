import React, { useEffect, useState } from "react";
import "./Home.css";
import { Pagination } from "../components/Pagination";
import { Link } from "react-router-dom";
import { Loader } from "../components/Loader"; 
import { ToastContainer, toast } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css";

const API = "https://671734c7b910c6a6e026f332.mockapi.io/insert";

export const Home = () => {
  const [apiData, setApiData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); 
  const itemsPerPage = 6; 

  const LocalData = JSON.parse(localStorage.getItem("LoginData")) || {}; 
  const userRole = LocalData.role || "User"; 
  console.log(userRole);

  // Fetching data
  const fetchLogin = async (api) => {
    try {
      const response = await fetch(api);
      const data = await response.json();
      setApiData(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchLogin(API);
  }, []);

  // Calculate the current items to display based on pagination
  const currentItems = apiData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Function to truncate text
  const truncateText = (text, limit) => {
    const words = text.split(" ");
    return words.length > limit ? words.slice(0, limit).join(" ") + "..." : text;
  };

  // Function to delete a post
  const deletePost = async (id) => {
    try {
      const response = await fetch(`${API}/${id}`, { method: "DELETE" });

      if (response.ok) {
        setApiData((prevData) => prevData.filter((item) => item.id !== id));
        toast.success("Post deleted successfully!");
      } else {
        console.error("Failed to delete the post from the API");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
    
      <div className="table-data">
        {currentItems.length > 0 ? (
          currentItems.map((item) => (
            <div key={item.id} className="data-item">
              <p>
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.title || "Image"}
                    className="post-image"
                  />
                ) : (
                  <p>No Image Available</p>
                )}
              </p>
              <p>
                <strong>Title:</strong> {truncateText(item.title, 4)}
              </p>
              <p>
                <strong>Description:</strong> {truncateText(item.description, 4)}
              </p>
              <p>
                <strong>Category:</strong> {item.category}
              </p>
              <p>
                <strong>Created By:</strong> {item.createdBy}
              </p>
              <div className="allbtns">
                
                {userRole === "Admin" && (
                  <>
                    <button
                      className="btn btn-danger"
                      onClick={() => deletePost(item.id)}
                    >
                      Delete
                    </button>

                    <Link
                      to={`/insert/${item.id}`}
                      className="btn btn-warning"
                      aria-label={`Update ${item.title}`}
                    >
                      Update
                    </Link>
                  </>
                )}
                
                <Link
                  to={`/details/${item.id}`}
                  className="btn btn-info"
                  aria-label={`View details of ${item.title}`}
                >
                  Details
                </Link>
              </div>
            </div>
          ))
        ) : (
          <div className="loadings">
            <Loader />
            <h1>No Post Available!!</h1>
          </div>
        )}
      </div>

      {/* Pagination Component */}
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalItems={apiData.length}
        itemsPerPage={itemsPerPage}
      />
    </>
  );
};
