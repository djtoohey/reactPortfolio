import React from "react";
import "./App.css";

function Project(props) {
    return (
        <div>
            <h3>{props.name}</h3>
            <a href={props.liveSite} target="_blank" rel="noopener noreferrer">
                <img src={props.img.src}
                    alt={props.img.alt} class="portfolio-img"></img>
            </a>
            <p class="p-portfolio"> Sources: <a href={props.repo}
                target="_blank" rel="noopener noreferrer" style={{ color: "#e9c46a" }}>Github Repo</a>,
                    <a href={props.liveSite} target="_blank" rel="noopener noreferrer" style={{ color: "#e9c46a" }}>{props.liveSiteType}</a></p>
        </div>
    );
}

export default Project;
