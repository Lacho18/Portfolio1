import { useState } from "react";

export default function ImageSlider({ images, isMobile }) {
    const [currentImage, setCurrentImage] = useState(0);
    const [biggerImage, setBiggerImage] = useState(0);

    function changeImage(nextImage) {
        console.log("clicked");
        let currentValue = currentImage + nextImage;

        if (currentValue < 0) {
            setCurrentImage(images.length - 1);
        }
        else if (currentValue > images.length - 1) {
            setCurrentImage(0);
        }
        else {
            setCurrentImage(currentValue);
        }
    }

    /*<div className="flex items-center h-full">
            <button className="h-full text-3xl bg-gray-500 bg-opacity-50 font-bold" onClick={() => { changeImage(-1); }}>{"<"}</button>
            <img src={images[currentImage]} className="max-w-full max-h-full w-full h-full object-cover" />
            <button className="h-full text-3xl bg-gray-500 bg-opacity-50 font-bold" onClick={() => { changeImage(1); }}>{">"}</button>
    </div>*/

    if (biggerImage === 0) {
        console.log(biggerImage);
        return (
            <div className="flex items-center h-full image-slider">
                <button className="h-3/4 text-3xl bg-gray-500 bg-opacity-50 font-bold" onClick={() => { changeImage(-1); }}>{"<"}</button>
                <div className="flex-grow relative overflow-hidden" onClick={() => {
                    if (!isMobile) {
                        setBiggerImage(1);
                    }
                }}>
                    <img src={images[currentImage]} className=" inset-0 w-full h-full object-cover" />
                </div>
                <button className="h-3/4 text-3xl bg-gray-500 bg-opacity-50 font-bold" onClick={() => { changeImage(1); }}>{">"}</button>
            </div >
        );
    }
    else {
        return (
            <div className="z-10 w-3/4vw h-3/4vh fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 visible-image" onClick={() => { setBiggerImage(0); }}>
                <div>
                    <button className="px-3 py-2 text-2xl bg-red-500 rounded absolute left-full -translate-x-full">X</button>
                    <img src={images[currentImage]} />
                </div>
            </div>
        );
    }
}