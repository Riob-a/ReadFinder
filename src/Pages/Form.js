import React from "react";
import "./Form.css"

function FormData(){
return(
    <div>
    <form >
        <p id="p1">Welcome to ReadFinder</p>
        <label for="Id">Id: </label> 
        <input type="text"/> <br/>

        <label for="Id">Category: </label>
        <input type="text"/> <br/>
       
        <label for="Id">Image: </label>
        <input type="text"/> <br/>

        <label for="Id">Description: </label>
        <input type="text"/> <br/>

        <label for="Id">Price: </label>
        <input type="text"/> <br/>
    </form>
    </div>
)

}
export default FormData