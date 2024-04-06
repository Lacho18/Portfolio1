import CVImage from "../images/CVImage.jpg";
import "../styles/about.css";

export default function About() {

    return (
        <div className="h-screen w-full bg-gray-700">
            <div className="pt-20 w-3/4 bg-gray-400 align-center mx-auto scroll">
                <div className="grid grid-cols-2 flex inline-block">
                    <img className="w-1/2 flex bg-red-100 m-5 rounded" src={CVImage} alt="CVImage" />
                    <div className="w-1/2 top-1/3 relative">
                        <p className="text-3xl font-bold">About me</p>
                        <p className="text-xl">Lachezar Genov</p>
                    </div>
                </div>
                <div className="flex inline-block ml-2 mr-2 p-3">
                    <p className="font-sans">
                        Hello, I am Lachezar Genov. I am from Bulgaria. I have completed a language class with advanced study of English and German. After graduation i started
                        learning computer science. I have completed a lot of courses in the Technical university of Gabrovo like Object oriented programming with Java and C#,
                        Web development with Javascript, frontend development with React JS, backend development with NodeJS, Java and more. I have completed the SoftUni programming
                        basic course with C#. I am always ready to learn new things.
                    </p>
                </div>
                <div>
                    <p className="text-3xl font-bold underline pt-7">Schools</p>
                    <div className="flex inline-flex w-full">
                        <div className="w-1/2 my-4 ml-1 text-center">
                            <p className="text-xl mt-7">Primary school Nikolay Katranov</p>
                            <p className="text-base mt-7">School with a language class</p>
                            <a className="text-blue-500 underline italic mt-7" href="https://katranov.com">Go to school web site</a>
                        </div>
                        <div className="w-1/2 my-4 mr-1 schoolDiv">
                            <img className="w-full h-full p-3 m-1 border-tl-red-500" src="https://platforma.interactivebg.com/wp-content/uploads/2021/04/cropped-head1-1-1-1024x405.jpg" alt="school image" />
                        </div>
                    </div>
                    <div className="flex inline-flex w-full">
                        <div className="w-1/2 my-4 mr-1 schoolDiv">
                            <img className="w-full h-full p-3 m-1 border-tl-red-500" src="https://www.tugab.bg/images/sliders/1.jpg" alt="school image" />
                        </div>
                        <div className="w-1/2 my-4 ml-1 text-center">
                            <p className="text-xl mt-7">Technical university Gabrovo</p>
                            <p className="text-base mt-7">University teaching engineering sciences</p>
                            <a className="text-blue-500 underline italic mt-7" href="https://www.tugab.bg">Go to school web site</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}