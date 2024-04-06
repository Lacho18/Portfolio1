import { Link, useLocation, useNavigate } from "react-router-dom";
import "../styles/headerStyle.css";

export default function Header() {
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location.pathname);

    return (
        <div className="fixed top-0 left-0 w-full bg-gray-800 flex flex-wrap h-16 z-10 mainHeaderDiv">
            <div className="flex-1 flex justify-center items-center text-lg font-bold text-gray-100 titleName">
                {location.pathname !== "/" && <button onClick={() => { navigate('/'); }} className="w-9 h-9 mr-8 relative left-0">
                    <img className="w-full h-full" src="https://www.svgrepo.com/show/101168/go-back-arrow.svg" alt="back" />
                </button>
                }
                <p>Lachezar Genov</p>
            </div>
            <div className="flex-1 flex justify-end items-center h-full text-gray-100 navButtons">
                {location.pathname !== "/about" ? <Link to="/about">About me</Link> : <Link to="/">Home page</Link>}
                {location.pathname !== "/certificates" ? <Link to="/certificates">Certificates</Link> : <Link to="/">Home page</Link>}
                {location.pathname !== "/projects" ? <Link to="/projects">Projects</Link> : <Link to="/">Home page</Link>}
            </div>
            <div className="flex-2 flex justify-end items-center h-full text-gray-100 contactsDiv">
                <Link className="contactLink w-1/3 " to="https://github.com/Lacho18">
                    <img className="w-full h-full" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="github" />
                </Link>
                <Link className="contactLink w-1/3" to="https://www.facebook.com">
                    <img className="w-full h-full" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Facebook_icon.svg/2048px-Facebook_icon.svg.png" alt="facebook" />
                </Link>
                <Link className="contactLink w-1/3" to="https://www.instagram.com">
                    <img className="w-full h-full" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" alt="instagram" />
                </Link>
            </div>
        </div>
    );
}