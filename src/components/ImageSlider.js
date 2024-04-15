import { useState } from "react";

export default function ImageSlider({ images }) {
    const [currentImage, setCurrentImage] = useState(0);

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

    return (
        <div className="flex items-center h-full">
            <button className="h-full text-3xl bg-gray-500 bg-opacity-50 font-bold" onClick={() => { changeImage(-1); }}>{"<"}</button>
            <img src={images[currentImage]} className="max-w-full max-h-full w-full h-full object-cover" />
            <button className="h-full text-3xl bg-gray-500 bg-opacity-50 font-bold" onClick={() => { changeImage(1); }}>{">"}</button>
        </div>
    );
}