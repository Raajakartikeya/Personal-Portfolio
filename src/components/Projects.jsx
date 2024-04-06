import './projects.css'
const data = [
    {
        name : "Skin Disease Classification using ResNet50",
        description : "Improved the classification accuracy on an extensive dataset spanning eight distinct skin disease classes by configuring the model and tuning the hyperparameters.",
        code : "",
        website : ""
    },
    {
        name : "Weather App",
        description : "Developed a dynamic Weather App using React, integrating OpenWeatherMap API for real-time weather data retrieval,showcasing proficiency in React and API integration.",
        code : "https://github.com/Raajakartikeya/Weather-app-using-react",
        website : "https://weather-app-raaja.vercel.app/"
    },
    {
        name : "Tic Tac Toe Game using React",
        description : "Implemented tic-tac-toe game using React. The project showcases proficiency in component creation, event handling, and building interactive user interfaces.",
        code : "https://github.com/Raajakartikeya/tic-tac-toe-using-react",
        website : "https://tic-tac-toe-raaja.vercel.app/"
    },
    {
        name : "Random Password Generator",
        description : "Crafted a flexible Password Generator in React, empowering users to tailor passwords with desired length and character compositions.",
        code : "https://github.com/Raajakartikeya/Password-Generator-using-React",
        website : "https://password-generator-raaja.vercel.app/"
    },
    {
        name : "Interactive Book List",
        description : "This web application allows you to create and manage your own reading list. Add book titles, authors, and descriptions.",
        code : "https://github.com/Raajakartikeya/Book-List",
        website : "https://book-list-raaja.vercel.app/"
    },
    {
        name : "User Profile Card",
        description : "This web application allows you to create and manage your own reading list. Add book titles, authors, and descriptions.",
        code : "https://github.com/Raajakartikeya/User-Card-using-react/",
        website : "https://user-card-raaja.vercel.app/"
    },
    {
        name : "Add/Delete Data",
        description : "This project is a web application for managing bike data, allowing users to add new entries with details and delete existing entries effortlessly.",
        code : "https://github.com/Raajakartikeya/Add-Del-Bike-Data",
        website : "https://add-del-bike-data.vercel.app/"
    },
    {
        name : "Registration Form with Flask and MySQL",
        description : "Developed a web-based registration form using HTML and CSS for a user-friendly interface and implemented the back-end functionality with Flask to handle form submissions and store data in a MySQL database.",
        code : "https://github.com/Raajakartikeya/Student-Registration-Form-using-Flask-MySQL-HTML-and-CSS",
        website : ""
    },
    {
        name : "ECE Association",
        description : "Created an interactive website for the ECE association, featuring event calendars, faculty directories, and an annual magazine section",
        code : "https://github.com/Raajakartikeya/Student-Registration-Form-using-Flask-MySQL-HTML-and-CSS",
        website : "https://github.com/Raajakartikeya/ECE-Association-Website"
    }
];


function Pro(props){
    return(
 
        <div className='subcontainer'>
            <div className='sub1' >
                <h3>{props.name}</h3>
                <p>{props.description}</p>
                <div className='socialicons1'>
                {props.code && <a href={props.code}><i class='bx bx-code-alt'></i></a>}
                {props.website && <a href={props.website}><i id="link" class='bx bx-link-external'></i></a>}
                </div>
            </div>
        </div>
 
    )
}
export const Projects = () => {
  return (
    <>
    {data.map((project,index)=>(
        <Pro key = {index} 
        name = {project.name}
        description = {project.description}
        code = {project.code}
        website = {project.website}
        />
    ))}
    </>
  )
}
