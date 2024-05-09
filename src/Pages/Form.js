import React from "react";
import "./Form.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function FormData({ handlePost }) {
    const navigate=useNavigate()
    const [formData, setFormData] = useState({
        picture: "",
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
            picture: "",
            title: "",
            category: "",
            description: "",
            price: ""
        });
        navigate("/")
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <p>Book Details</p>

                <label>Picture:</label>
                <input type="text" placeholder="Add Image Url" id="picture" value={formData.picture} onChange={handleChange}
                    accept="image/*" /> <br /> <br />

                <label>Title:</label>
                <input type="text" placeholder="Title" id="title" value={formData.title} onChange={handleChange} />{" "}
                <br /> <br />

                <label>Category:</label>
                <input type="text" placeholder="Category" id="category" value={formData.category} onChange={handleChange} />{" "}
                <br /> <br />

                <label>Description:</label>
                <input type="text" placeholder="Description" id="description" value={formData.description} onChange={handleChange} />{" "}
                <br /> <br />

                <label>Price:</label>
                <input type="text" placeholder="Price" id="price" value={formData.price} onChange={handleChange} />{" "}
                <br /> <br />

              
                <button id="btn" type="submit"> Add a book </button> {" "}
                <br /> <br />

                <footer id="footerform">Get to add a book of your choice.</footer>
            </form>
        </div>
    );
}

export default FormData;