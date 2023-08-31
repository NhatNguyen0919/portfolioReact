import "./WorkCardStyle.scss";
import React from 'react'
import WorkCard from "./WorkCard";
import ProjectCartdData from "./WorkCradData";

const Work = () => {
    return (
        <div className="work-container">
            <h1 className="project-heading">All Projects</h1>
            <div className="project-container">
                {ProjectCartdData.map((item, index) => {
                    return(
                        <WorkCard 
                            key={index}
                            imgsrc = {item.imgsrc}
                            title = {item.title}
                            text = {item.text}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Work;