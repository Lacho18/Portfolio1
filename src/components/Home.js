import CVImage from "../images/CVImage1.jpg";
import "../styles/homePage.css";

export default function Home() {

    return (
        <div className="h-screen w-full bg-gray-700 relative place-items-center flex">
            <div className="grid grid-cols-2 bg-gray-500 w-2/3 homeMainDiv">
                <div>
                    <div class="bg-gray-500 p-4 h-full flex items-center justify-center">
                        <img className="inline-block align-middle" style={{ borderRadius: "50%" }} src={CVImage} />
                    </div>
                </div>
                <div>
                    <div class="bg-gray-500 p-4 h-4/6 flex flex-col">
                        <p className="text-2xl font-bold h-1/5">Lachezar Genov</p>
                        <p className="text-lg text-slate-50 font-serif h-1/5">A bit about me</p>
                        <p className="text-base text-neutral-300 font-serif h-1/2">I am currently a student in Technical university Gabrovo in Bulgaria. I mostly work with Javascript programming language and it's open-source, server side run-time environment Node.js. I am always ready to learn new things.</p>
                        <p className="text-lg font-serif font-bold" style={{ height: "10%" }}>Technologies that i know</p>
                    </div>
                    <div class="bg-gray-900 p-4 grid-cols-4 flex h-2/6 technologiesDiv">
                        <img className="h-full w-1/5 ml-4" src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="JavaScript" />
                        <img className="h-full w-1/5 ml-4" src="https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png" alt="NodeJS" />
                        <img className="h-full w-1/5 ml-4" src="https://seeklogo.com/images/M/mongodb-icon-logo-F5A5E0981A-seeklogo.com.png" alt="MongoDB" />
                        <img className="h-full w-1/5 ml-4" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="React" />
                    </div>
                </div>
            </div>
        </div>
    );
}