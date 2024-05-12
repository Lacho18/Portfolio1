import TechShopImage1 from "../images/TechShop1.png";
import TechShopImage2 from "../images/TechShop2.png";
import TechShopImage3 from "../images/TechShop3.png";
import TechShopImage4 from "../images/TechShop4.png";
import TechShopImage5 from "../images/TechShop5.png";
import TechShopAPI1 from "../images/TechShopAPI1.png";
import TechShopAPI2 from "../images/TechShopAPI2.png";
import TechShopAPI3 from "../images/TechShopAPI3.png";
import TechShopAPI4 from "../images/TechShopAPI4.png";
import ObstacleImage1 from "../images/ObstacleGameImage1.png";
import ObstacleImage2 from "../images/ObstacleGameImage2.png";
import ObstacleImage3 from "../images/ObstacleGameImage3.png";
import ChatApp from "../images/ChatApp0.png";
import ChatApp1 from "../images/ChatApp1.png";
import ChatApp2 from "../images/ChatApp2.png";
import ChatApp3 from "../images/ChatApp3.png";
import ChatAppAPI1 from "../images/ChatAppAPI1.png";
import ChatAppAPI2 from "../images/ChatAppAPI2.png";

/*
    This app server side and business logic is released on the Javascript runtime NodeJS. With the help of a proxy server, this app connects to the server. The server stores the data
    in a non-relational database, MongoDB. The app sends packages of data to the server app with HTTP pipelines. This app support futures like
    creating or deleting an user account, adding or removing a product and giving to every product a comment. The application allows to the user that uploaded
    a comment to be able to edit it and delete it.The GUI has hidden page visible only for the administrators. On this page the administrators can perform requests that are not
    allowed for the common user.
*/

/*
    In order to build the server-side in this project is used the NodeJS framework for web applications and APIs Express.js. THe server connects to the non-relational database
    MongoDB. The connection between the database server and the NodeJS server is done with Object data modeling library Mongoose. For the whole project (frontend, backend) is used
    the technology stack MERN(MongoDB, Express.js, NodeJS, React). The mostly usage of this server is to provide data about the technological objects and the comments about them
    to the users. It gets a request from a user, takes the necessary data and returns it back with Http pipelines.
*/

/*
    To help the process of developing the game in this project is used the Javascript famous library jQuery. This library facilitate the DOM manipulation and event handling.
    jQuery  is a fast, small, and feature-rich JavaScript library that simplifies HTML document traversal and manipulation, event handling, and animation. For the realization
    of the animated frames is used the HTML tag <canvas>. On the beginning of the game, obstacles are spawned.
*/

const projectsData = [
    {
        id: 1,
        name: "Tech shop",
        images: [TechShopImage1, TechShopImage2, TechShopImage3, TechShopImage4, TechShopImage5],
        description: `This is a web application presenting a GUI (Graphical user interface) in order to have access to a shop for technical objects. This interface is build with the Javascript famous library React.
                      To enables declarative routing in this app is used the React library React Router. This app server side and business logic is released on the Javascript runtime NodeJS. With the help of a proxy server, this app connects to the server. The server stores the data
                      in a non-relational database, MongoDB. The app sends packages of data to the server app with HTTP pipelines. This app support futures like
                      creating or deleting an user account, adding or removing a product and giving to every product a comment. The application allows to the user that uploaded
                      a comment to be able to edit it and delete it.The GUI has hidden page visible only for the administrators. On this page the administrators can perform requests that are not
                      allowed for the common user.`,
        gitHubLink: "https://github.com/Lacho18/Tech_Shop"
    },
    {
        id: 2,
        name: "Tech shop API",
        images: [TechShopAPI1, TechShopAPI4, TechShopAPI3],
        description: `This API is the server side of the Tech Shop. It is written on the Javascript runtime NodeJS. In order to build the server-side in this project is used the NodeJS framework for web applications and APIs Express.js. The server connects to the non-relational database
        MongoDB. The connection between the database server and the NodeJS server is done with Object data modeling library Mongoose. For the whole project (frontend, backend) is used
        the technology stack MERN(MongoDB, Express.js, NodeJS, React). The mostly usage of this server is to provide data about the technological objects and the comments about them
        to the users. It gets a request from a user, takes the necessary data and returns it back with HTTP pipelines.`,
        gitHubLink: "https://github.com/Lacho18/Tech_Shop-api"
    },
    {
        id: 3,
        name: "Obstacle game",
        images: [ObstacleImage1, ObstacleImage2, ObstacleImage3],
        description: `This is a game build only with HTML5, CSS3 and Javascript. To help the process of developing the game, in this project is used the Javascript famous library jQuery. This library facilitate the DOM manipulation and event handling.
        jQuery  is a fast, small, and feature-rich JavaScript library that simplifies HTML document traversal and manipulation, event handling, and animation. For the realization
        of the animated frames is used the HTML tag <canvas>. On the beginning of the game, obstacles are spawned. The main hero, a dog, has the ability to walk forward (D) and backward (A), to jump in order to avoid the obstacles (W)
        and to sit in order to stop the obstacle and change its speed after standing up (S). The game has also the option to be paused (P).`,
        gitHubLink: "https://github.com/Lacho18/Obstacle-Game"
    },
    {
        id: 4,
        name: "Chat application",
        images: [ChatApp, ChatApp1, ChatApp2, ChatApp3],
        description: `This is a web application presenting a GUI (Graphical user interface) through which anyone can work with real time chat application. The interface is build with React JavaScript and React Router to 
        enables declarative routing in this app. The app has home page, a page to log in an account, to create account and a page where the chat window appears. In the chat window
        there is a navigation menu where there are every user that created an account. The application allows everyone to chat with everyone. By sending a message to someone
        the same message is immediately send back to the sender and to the receiver with web tokens, which sets state variables and refreshes immediately the components,
        making the app real time.`,
        gitHubLink: "https://github.com/Lacho18/Real-time-chat-app"
    },
    {
        id: 5,
        name: "Chat application API",
        images: [ChatAppAPI1, ChatAppAPI2],
        description: `This is the server site of the chat application. It is written on the Javascript runtime Node.js, the framework for web applications and APIs Express.js 
        and the non-relational database MongoDB as database. The project uses a special technology in
        MongoDB called change stream. This technology allows the database to react immediately after a change appears in given collection or database. In this example the server reacts
        immediately after a message is inserted in collection 'messages', sending the inserted message to the client side and upgrading a state variable to make it visible 
        immediately. The server handles and other http requests like - creating an user account, returning data for a user when logging in, inserting new message, updating and
        deleting messages. On the server runs a web socket server with whom the data is immediately send back to the user through the change stream event.`,
        gitHubLink: "https://github.com/Lacho18/Real-time-chat-api"
    }
];

export default projectsData;