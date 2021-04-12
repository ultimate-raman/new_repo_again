import React from "react";
// import "./index.css";
import "../index.css";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/dist/dropdown.js";
import { Link } from "react-router-dom";

function Dropdown() {
    return(
        <div style={{backgroundColor: "#333", border: "100px"}}>
        <div className="row top-buffer">
        <div className="col">
            <div className="dropdown">
                <button style={{backgroundColor: "#333", borderColor: "#333"}}
                    className="btn btn-secondary dropdown-toggle" 
                    type="button" 
                    id="dropdownMenuButton" 
                    data-toggle="dropdown" 
                    aria-haspopup="true">
                    Graphics & Design
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <Link className="dropdown-item" to='/mainphotoshops'>View</Link>
                    <a className="dropdown-item" href="https://react-bootstrap.github.io/components/dropdowns/">Item 1</a>
                    <a className="dropdown-item" href="#nogo">Item 2</a>
                    <a className="dropdown-item" href="#nogo">Item 3</a>
                </div>
            </div>
        </div>

        <div className="col">
            <div className="dropdown">
                <button style={{backgroundColor: "#333", borderColor: "#333"}}
                    className="btn btn-secondary dropdown-toggle" 
                    type="button" 
                    id="dropdownMenuButton" 
                    data-toggle="dropdown" 
                    aria-haspopup="true">
                    Dropdown
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="https://react-bootstrap.github.io/components/dropdowns/">Item 1</a>
                    <a className="dropdown-item" href="#nogo">Item 2</a>
                    <a className="dropdown-item" href="#nogo">Item 3</a>
                </div>
            </div>
        </div>

        <div className="col">
            <div className="dropdown">
                <button style={{backgroundColor: "#333", borderColor: "#333"}}
                    className="btn btn-secondary dropdown-toggle" 
                    type="button" 
                    id="dropdownMenuButton" 
                    data-toggle="dropdown" 
                    aria-haspopup="true">
                    Dropdown
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="https://react-bootstrap.github.io/components/dropdowns/">Item 1</a>
                    <a className="dropdown-item" href="#nogo">Item 2</a>
                    <a className="dropdown-item" href="#nogo">Item 3</a>
                </div>
            </div>
        </div>

        <div className="col">
            <div className="dropdown">
                <button style={{backgroundColor: "#333", borderColor: "#333"}}
                    className="btn btn-secondary dropdown-toggle" 
                    type="button" 
                    id="dropdownMenuButton" 
                    data-toggle="dropdown" 
                    aria-haspopup="true">
                    Dropdown
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="https://react-bootstrap.github.io/components/dropdowns/">Item 1</a>
                    <a className="dropdown-item" href="#nogo">Item 2</a>
                    <a className="dropdown-item" href="#nogo">Item 3</a>
                </div>
            </div>
        </div>

        <div className="col">
            <div className="dropdown">
                <button style={{backgroundColor: "#333", borderColor: "#333"}}
                    className="btn btn-secondary dropdown-toggle" 
                    type="button" 
                    id="dropdownMenuButton" 
                    data-toggle="dropdown" 
                    aria-haspopup="true">
                    Dropdown
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="https://react-bootstrap.github.io/components/dropdowns/">Item 1</a>
                    <a className="dropdown-item" href="#nogo">Item 2</a>
                    <a className="dropdown-item" href="#nogo">Item 3</a>
                </div>
            </div>
        </div>


    </div>
        </div>
    );
}

export default Dropdown;