import React from "react";
import "./Home.css";

function ImageOne() {
  return (
    <div className="img_container">
        <img src= "https://www.pixelstalk.net/wp-content/uploads/2016/07/Free-Download-Laptop-Image.png" alt="Snow" style={{width: "100%", height: "350px"}}/>
        <div className="img_text_centered">
            <h1>ShowSkills</h1><br/>
            <h3>Be inspired to achieve more, and faster with top-quality work delivered by our Pros.</h3>
        </div>
    </div>
  );
}

export default ImageOne;
