import React from "react";
import "./Form.css"

function FormData(){
return(
    <div>
        <legend>Welcome to ReadFinder!</legend>
    <form >
        <p>Book Details</p>

        <input type="text" placeholder="ID"/>  <br/> <br/>

        <input type="text" placeholder="Category"/> <br/> <br/>

        <input type="text" placeholder="Description"/> <br/> <br/>

        <input type="text"placeholder="Price"/> <br/> <br/>
      
        <input type="file" placeholder="Image" id="image" accept="image/*"/> <br/> <br/>

        <button id="btn" type="submit">Add a book</button> <br/> <br/>

        <footer id="footerform">Get to add a book of your choice.</footer>
    </form>
   
    </div>
)

}
export default FormData