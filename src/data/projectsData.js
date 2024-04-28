import TechShopImage1 from "../images/TechShop1.png";
import TechShopImage2 from "../images/TechShop2.png";
import TechShopImage3 from "../images/TechShop3.png";
import TechShopImage4 from "../images/TechShop4.png";
import TechShopImage5 from "../images/TechShop5.png";
import TechShopAPI1 from "../images/TechShopAPI1.png";
import TechShopAPI2 from "../images/TechShopAPI2.png";
import TechShopAPI3 from "../images/TechShopAPI3.png";
import ObstacleImage1 from "../images/ObstacleGameImage1.png";
import ObstacleImage2 from "../images/ObstacleGameImage2.png";
import ObstacleImage3 from "../images/ObstacleGameImage3.png";
import ChatApp from "../images/ChatApp0.png";
import ChatApp1 from "../images/ChatApp1.png";
import ChatApp2 from "../images/ChatApp2.png";
import ChatApp3 from "../images/ChatApp3.png";
import ChatAppAPI1 from "../images/ChatAppAPI1.png";
import ChatAppAPI2 from "../images/ChatAppAPI2.png";

const projectsData = [
    {
        id: 1,
        name: "Tech shop",
        images: [TechShopImage1, TechShopImage2, TechShopImage3, TechShopImage4, TechShopImage5],
        description: `This is a web application presenting a GUI to work with a shop for technical objects. This interface is build with the Javascript famous library React.
                      To enables declarative routing in this app, I used the React library React Router. This app is connected to a server written on NodeJS, which is connected
                      to a MongoDB data base. This app provides a GUI to work with the server, by sending HTTP requests and getting data or inserting to the database. It has features like 
                      creating or deleting account, adding or removing a product and giving to every product a comment, editing it and deleting it. The GUI has hidden page visible only for
                      the administrators and there can be done the requests allowed only for the administrator.`,
        gitHubLink: "https://github.com/Lacho18/Tech_Shop"
    },
    {
        id: 2,
        name: "Tech shop API",
        images: [TechShopAPI1, TechShopAPI2, TechShopAPI3],
        description: `This is the server side of the Tech Shop. It is written on NodeJS. To build the server-side I used Express.js. This server connect to a MongoDB database.
                    For the realization of the whole project is used the MERN (MongoDB, Express.js, React, NodeJS) technological stack. This server side application gets the 
                    request from the front end app, processes them and return an answer.`,
        gitHubLink: "https://github.com/Lacho18/Tech_Shop-api"
    },
    {
        id: 3,
        name: "Obstacle game",
        images: [ObstacleImage1, ObstacleImage2, ObstacleImage3],
        description: `This is a game build only with HTML5, CSS3 and Javascript. To help myself in selection of html items and release the game logic, i used the jQuery  library.
        jQuery  is a fast, small, and feature-rich JavaScript library that simplifies HTML document traversal and manipulation, event handling, and animation. To release the animation
        I used the html tag <canvas>. The game starts and obstacles are spawned. The main hero, a dog, has the ability to walk forward (D) and backward (A), to jump in order to avoid the obstacles (W)
        and to sit in order to stop the obstacle and change its speed after standing up (S). The game has also the option to be paused (P).`,
        gitHubLink: "https://github.com/Lacho18/Obstacle-Game"
    },
    {
        id: 4,
        name: "Chat application",
        images: [ChatApp, ChatApp1, ChatApp2, ChatApp3],
        description: `This is a web application presenting a GUI to work with real time chat application. The interface is build with React JavaScript and React Routes to 
        enables declarative routing in this app. The app has home page, a page to log in an account, to create account and a page where the chat window appears. In the chat window
        there is a navigation menu where there are every user that created an account. The application allows everyone to chat to everyone. By sending a message to someone
        the same message is immediately send back to the sender and to the receiver with web tokens, which sets state variables and refreshing immediately the components,
        making the app real time.`,
        gitHubLink: "https://github.com/Lacho18/Real-time-chat-app"
    },
    {
        id: 5,
        name: "Chat application API",
        images: [ChatAppAPI1, ChatAppAPI2],
        description: `This is the server site of the chat application. It is written on Node.js, Express.js and MongoDB as database. The project uses a special technology in
        MongoDB called change stream. This technology allows the database to react immediately after a change appears in given collection or database. In this example the server reacts
        immediately after a message is inserted in collection 'messages', sending the inserted message to the client side and upgrading a state variable to make it visible 
        immediately. The server handles and other http requests like - creating an user account, returning data for a user when logging in, inserting new message, updating and
        deleting messages. On the server runs a web socket server with whom the data is immediately send back to the user through the change stream event.`,
        gitHubLink: "https://github.com/Lacho18/Real-time-chat-api"
    }
];

export default projectsData;