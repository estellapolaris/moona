import React from "react";
import './loader.css';
function Loader(){
    window.addEventListener("load", function () {
        const loader = document.querySelector(".loader");
        loader.className += " hidden"; // class "loader hidden"
    });
    return(
        <div class="loader">
            <img src="/images/loading.gif"/>
        </div>
    )
}

export default Loader;