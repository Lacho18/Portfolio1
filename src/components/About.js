import CVImage from "../images/CVImage1.jpg";
import { Link, animateScroll as scroll } from 'react-scroll';
import "../styles/about.css";

export default function About() {
    return (
        <div className="h-screen w-full bg-gray-700">
            <div className="pt-20 w-3/4 bg-gray-400 align-center mx-auto scroll h-screen aboutMeMainDiv">
                <div className="grid grid-cols-2 flex inline-block headerAboutDiv">
                    <img className="w-1/2 flex bg-red-100 m-5 rounded" src={CVImage} alt="CVImage" />
                    <div className="w-1/2 top-1/3 relative">
                        <p className="text-3xl font-bold">About me</p>
                        <p className="text-xl">Lachezar Genov</p>
                        <p className="text-small italic">Master of software engineering</p>
                    </div>
                </div>
                <div className="ml-2 mr-2 p-3">
                    <p className="font-sans paragraphAbout">
                        Lachezar, was born in one of the most attractive cities on the Black sea’s coastline, East Bulgaria. He graduated the high school in 2021 with 1st class in language classes degree which includes advanced study of English,
                        Germany, and Spanish.
                    </p>
                    <p className="font-sans paragraphAbout">Computer science and software technology have always been a passion for Lachezar.</p>
                    <p className="font-sans paragraphAbout">Therefore, after his graduation he considered education as a bachelor and master in the Technical University of Gabrovo, Bulgaria where he is currently completing his last year of education.</p>
                    <p className="font-sans paragraphAbout">To support his study and cover the taxes, during his education he worked as an assistant in a company for design and printing services for business customising purposes and advertisements.</p>
                    <p className="font-sans paragraphAbout">Through the years he participated in several mathematical competitions with some international recognitions and acknowledgements from the relevant institutions.</p>
                    <p className="font-sans paragraphAbout">His future interest and ambitions are to work and develop in the software technology industry and to apply all knowledge which he gained so far.</p>
                </div>
            </div>
        </div>
    );
}