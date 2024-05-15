import certificatesData from "../data/certificatesData";
import SingleCertificate from "./SingleCertificate";
import "../styles/certificates.css";
import { useState, useRef, useEffect } from "react";

export default function Certificates(props) {
    const [selectedImage, setSelectedImage] = useState(false);
    const currentImage = useRef(0);

    function onImageSelection(imageId) {
        currentImage.current = imageId;
        setSelectedImage(true);
    }

    return (
        <div className="w-full bg-gray-700 absolute mainCertificatesDiv" style={{ backgroundColor: "#20b2aa" }}>
            {!selectedImage ? <div className="pt-20 w-3/4 bg-gray-400 text-center align-center mx-auto componentDiv" style={{ backgroundColor: "#62c9c3" }}>
                {
                    certificatesData.map(indexValue => {
                        return <SingleCertificate {...indexValue} onImageClicked={onImageSelection} isMobile={props.isMobile} />
                    })
                }
            </div>
                :
                <div className="w-3/4 bg-gray-700 align-center mx-auto">
                    <img className="w-full h-full p-3" src={certificatesData[currentImage.current - 1].image} />
                    <button onClick={() => { currentImage.current = 0; setSelectedImage(false) }}
                        className="fixed p-5 font-bold text-3xl rounded-full border-2 bg-red-800 right-12 top-20">
                        X
                    </button>
                </div>

            }
        </div>
    );
}