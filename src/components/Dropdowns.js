import React from "react";
import "./Dropdowns.css";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function Dropdowns() {

    return (
        <div className="dropdown-section">
            <div className="dropdown-container">
                <button className="dropdown-button">Shop by Breed <span className="drop-icon"><ArrowDropDownIcon /></span></button>
                <div className="dropdown-content">
                    <a className="breed" href="https://www.google.com">Husky</a>
                    <a className="breed" href="www.google.com">Pug</a>
                    <a className="breed" href="www.google.com">Pomeranian</a>
                    <a className="breed" href="www.google.com">German Shepherd</a>
                    <a className="breed" href="www.google.com">Golden Retriever</a>
                </div>
            </div>

            <div className="dropdown-container">
                <button className="dropdown-button">Shop by Brand <span className="drop-icon"><ArrowDropDownIcon /></span></button>
                <div className="dropdown-content">
                    <a className="breed" href="https://www.google.com">Royal Canin</a>
                    <a className="breed" href="www.google.com">Drools</a>
                    <a className="breed" href="www.google.com">Pedigree</a>
                    <a className="breed" href="www.google.com">Hills</a>
                    <a className="breed" href="www.google.com">Whiskas</a>
                </div>
            </div>

            <div className="dropdown-container">
                <a href="https://medium.com/search?q=pets">
                    <button className="dropdown-button">Blogs</button>
                </a>
            </div>

        </div>
    );
}

export default Dropdowns;


