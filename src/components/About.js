import CVImage from "../images/CVImage1.jpg";
import { Link, animateScroll as scroll } from 'react-scroll';
import "../styles/about.css";

export default function About() {
    const sections = [
        {
            name: "Schools",
            sectionID: "schoolSection"
        },
        {
            name: "Technologies",
            sectionID: "technologiesSection"
        },
        {
            name: "More about me",
            sectionID: "moreAboutMeSection"
        },
    ];

    return (
        <div className="h-auto w-full bg-gray-700">
            <div className="pt-20 w-3/4 bg-gray-400 align-center mx-auto scroll aboutMeMainDiv">
                <div className="flex justify-end">
                    {sections.map(indexValue =>
                        <Link
                            className="linkAboutMeHeader"
                            activeClass="active"
                            to={indexValue.sectionID}
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >{indexValue.name}</Link>)}
                </div>
                <div className="grid grid-cols-2 flex inline-block headerAboutDiv">
                    <img className="w-1/2 flex bg-red-100 m-5 rounded" src={CVImage} alt="CVImage" />
                    <div className="w-1/2 top-1/3 relative">
                        <p className="text-3xl font-bold">About me</p>
                        <p className="text-xl">Lachezar Genov</p>
                    </div>
                </div>
                <div className="flex inline-block ml-2 mr-2 p-3">
                    <p className="font-sans paragraphAbout">
                        Hello, I am Lachezar Genov. I am from Bulgaria. I have completed a language class with advanced study of English and German. After graduation i started
                        learning computer science. I have completed a lot of courses in the Technical university of Gabrovo like Object oriented programming with Java and C#,
                        Web development with Javascript, frontend development with React JS, backend development with NodeJS, Java and more. I have completed the SoftUni programming
                        basic course with C#. I am always ready to learn new things.
                    </p>
                </div>
                <div id={sections[0].sectionID} className="ml-2 mr-2 p-3">
                    <p className="text-3xl font-bold underline pt-7 title">Schools</p>
                    <div className="flex inline-flex w-full schoolsAbout">
                        <div className="w-1/2 my-4 ml-1 text-center">
                            <p className="text-xl mt-7">Primary school Nikolay Katranov</p>
                            <p className="text-base mt-7">School with a language class</p>
                            <a className="text-blue-500 underline italic mt-7" href="https://katranov.com">Go to school web site</a>
                        </div>
                        <div className="w-1/2 my-4 mr-1 schoolDiv">
                            <img className="w-full h-full p-3 m-1 border-tl-red-500" src="https://platforma.interactivebg.com/wp-content/uploads/2021/04/cropped-head1-1-1-1024x405.jpg" alt="school image" />
                        </div>
                    </div>
                    <div className="flex inline-flex w-full schoolsAbout">
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
                <div id={sections[1].sectionID} className="ml-2 mr-2 p-3">
                    <p className="text-3xl font-bold underline pt-7 title">Technologies</p>
                    <p className="pt-3 paragraphAbout">I am currently a student in technical university of Gabrovo. Here i have studied a lot of technologies connected with different styles of programming.
                        I have learned :
                        <ul className="pl-14 mt-1 mb-3 list-disc">
                            <li>C++</li>
                            <li>C#</li>
                            <li>Java</li>
                            <li>Php</li>
                            <li>MySQL</li>
                            <li>Javascript</li>
                            <li>React.js</li>
                            <li>Node.js</li>
                            <li>MongoDB</li>
                        </ul>
                        These are mostly every technologies i have learned in the university. However from them i am mostly interest in and have most knowledge in
                        <span className="font-bold"> Javascript, ReactJS, Node.js, MongoDB, C++</span>. I love to study and i am always ready to learn a new technology, framework or library.
                    </p>
                </div>
                <div id={sections[2].sectionID} className="ml-2 mr-2 p-3">
                    <p className="text-3xl font-bold underline pt-7 title">More about me</p>
                    <p className="paragraphAbout">On my secondary education i learned mostly english and a little bit of german and spanish. In middle school i have participated
                        in a lot of math competitions. From the university i have participated in two math competition. The first is named SEEMOUS. It is
                        a regional mathematical competition for university-level students from Southeastern European countries. The second one is NSOM. NSOM is a
                        competition for university students in a country.</p>
                    <p className="paragraphAbout">Since i started learning computer science, I have learned a lot of software technologies and how the computer
                        hardware works. I love what i am learning and am always ready to learn new technologies.</p>
                    <p className="paragraphAbout">I have and different hobbies. I love climbing mountains, traveling and exploring new destinations around the world.</p>
                </div>
            </div>
        </div>
    );
}