import React from "react";
import "./Form.css"

function FormData(){
return(
    <div>
       
    <form >
        <p>Book Details</p>

        <label>Image:</label>
        <input type="text" placeholder="Add Image Url" id="image" accept="image/*"/> <br/> <br/>

        <label>Title:</label>
        <input type="text" placeholder="Title"/>  <br/> <br/>

       <label>Category:</label>
        <input type="text" placeholder="Category"/> <br/> <br/>

        <label>Description:</label>
        <input type="text" placeholder="Description"/> <br/> <br/>

        <label>Price:</label>
        <input type="text"placeholder="Price"/> <br/> <br/>
      


        <button id="btn" type="submit">Add a book</button> <br/> <br/>

        <footer id="footerform">Get to add a book of your choice.</footer>
    </form>
   
    </div>
)

}
export default FormData