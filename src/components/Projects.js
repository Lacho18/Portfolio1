import ImageSlider from "./ImageSlider";
import projectsData from "../data/projectsData";
import "../styles/projectStyle.css"
import { useState } from "react";

export default function Projects(props) {
    const [seeImages, setSeeImages] = useState(false);

    if (!props.isMobile) {
        return (
            <div className="w-full h-auto bg-gray-700 mainProjectsDiv">
                <div className="pt-20 w-3/4 bg-gray-400 align-center mx-auto mainProjectsDiv">
                    {projectsData.map(indexValue => {
                        return (
                            <div className="m-5 pb-3 flex flex-row projectComponent" style={{ borderBottom: "3px solid black", borderRadius: "10px" }}>
                                <div className="flex-1 p-2">
                                    <ImageSlider images={indexValue.images} />
                                </div>
                                <div className="flex-1 ml-10 p-2 font-serif">
                                    <p className="text-3xl font-bold text-center underline mb-1">{indexValue.name}</p>
                                    <p className="text-sm pb-6 pl-2">{indexValue.description}</p>
                                    <p className="font-bold">Link to github repository : </p>
                                    <a className="italic text-blue-700 underline" href={indexValue.gitHubLink}>Project repository</a>
                                </div>
                            </div>
                        );
                    })
                    }
                </div>
            </div>
        );
    }
    else {
        return (
            <div className="w-full h-auto bg-gray-700 mainProjectsDiv">
                <div className="pt-20 w-3/4 bg-gray-400 align-center mx-auto mainProjectsDiv">
                    {projectsData.map(indexValue => {
                        return (
                            <div className="m-1 pb-3 overflow-hidden text-center projectComponent" style={{ borderBottom: "3px solid black", borderRadius: "10px" }}>
                                <div className="ml-10 p-2 font-serif">
                                    <p className="text-3xl font-bold text-center underline mb-1">{indexValue.name}</p>
                                    <p className="text-sm pb-6 pl-2">{indexValue.description}</p>
                                    <p className="font-bold">Link to github repository : </p>
                                    <a className="italic text-blue-700 underline" href={indexValue.gitHubLink}>Project repository</a>
                                </div>
                                {seeImages &&
                                    <div className="p-2" style={{ width: "85%", position: "relative", left: "50%", transform: "translateX(-60%)" }}>
                                        <ImageSlider images={indexValue.images} />
                                    </div>
                                }
                                <button onClick={() => { setSeeImages(prev => !prev) }}>{seeImages ? "Hide" : "See"} images</button>
                            </div>

                        );
                    })}
                </div>
            </div>
        );
    }

} 