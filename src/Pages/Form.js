import React from "react";
import "./Form.css";
import { useState } from "react";

function FormData({ handlePost}) {
    const [formData, setFormData] = useState({
      image: "",
      title: "",
      category: "",
      description: "",
      price: ""
    });
  
    const handleChange = (e) => {
      const { id, value } = e.target;
      setFormData((prevFormData) => ({
        ...prevFormData,
        [id]: value
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("submitted", formData);
      handlePost(formData);
      // Clear the form after submission if needed
      setFormData({
        image: "",
        title: "",
        category: "",
        description: "",
        price: ""
      });
    };
  
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <p>Book Details</p>
  
  <label>Image:</label>
  <input type="text" placeholder="Add Image Url" id="image" value={formData.image} onChange={handleChange} 
  accept="image/*" />{formData.picture}  <br /> <br />
  
  <label>Title:</label>
  <input type="text"placeholder="Title"id="title"value={formData.title}onChange={handleChange}/>{" "}
   <br /> <br />
  
  <label>Category:</label>
  <input type="text"placeholder="Category"id="category" value={formData.category}onChange={handleChange} />{" "}
  <br /> <br />
  
  <label>Description:</label>
  <input type="text"placeholder="Description"id="description"value={formData.description} onChange={handleChange}/>{" "}
  <br /> <br />
  
  <label>Price:</label>
  <input type="text"placeholder="Price"id="price"value={formData.price} onChange={handleChange} />{" "}
  <br /> <br />
  
  {/* Change onSubmit to onClick */}
  <button id="btn" type="submit"> Add a book </button> {" "}
  <br /> <br />
  
  <footer id="footerform">Get to add a book of your choice.</footer>
    </form>
  </div>
    );
  }
  
  export default FormData;