import certificatesData from "../data/certificatesData";
import SingleCertificate from "./SingleCertificate";
import "../styles/certificates.css";
import { useState, useRef, useEffect } from "react";

export default function Certificates() {
    const [isMobile, setIsMobile] = useState(false);
    const [selectedImage, setSelectedImage] = useState(false);
    const currentImage = useRef(0);

    useEffect(() => {
        function checkWindowSize() {
            setIsMobile(window.innerWidth <= 768);
        }

        checkWindowSize();
        window.addEventListener('resize', checkWindowSize);
        return () => {
            window.removeEventListener('resize', checkWindowSize);
        };
    }, [])

    function onImageSelection(imageId) {
        currentImage.current = imageId;
        setSelectedImage(true);
    }

    return (
        <div className="w-full bg-gray-700 mainCertificatesDiv">
            {!selectedImage ? <div className="pt-20 w-3/4 bg-gray-400 align-center mx-auto componentDiv">
                {
                    certificatesData.map(indexValue => {
                        return <SingleCertificate {...indexValue} onImageClicked={onImageSelection} isMobile={isMobile} />
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