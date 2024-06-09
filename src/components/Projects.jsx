import './projects.css'
import PropTypes from 'prop-types';
const data = [
    {
        name : "Personal Portfolio Website",
        description : "Designed and developed a personal portfolio website to exhibit my skill set and showcase diverse projects, offering a captivating glimpse into my abilities and achievements.",
        code : "https://github.com/Raajakartikeya/Personal-Portfolio",
        website : "https://raaja.vercel.app/"
    },
    {
        name : "Skin Disease Classification using ResNet50",
        description : "Improved the classification accuracy on an extensive dataset spanning eight distinct skin disease classes by tuning the hyperparameters.",
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
        name : "Railway Reservation System using C++",
        description : "Developed a Railway Reservation System where passengers can book, cancel, and view their tickets. It manages berth preferences, RAC, and waiting lists efficiently to optimize seat allocation on train.",
        code : "https://github.com/Raajakartikeya/Railway-Reservation-System"
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
        code :  "https://github.com/Raajakartikeya/ECE-Association-Website",
        website : "https://eceassociation.netlify.app/"
    }
];


function Pro(props){
    return(
 
        <div className='subcontainer'>
            <div className='sub1' >
                <h3>{props.name}</h3>
                <p>{props.description}</p>
                <div className='socialicons1'>
                {props.code && <a href={props.code} target='_blank'><i className='bx bx-code-alt'></i></a>}
                {props.website && <a href={props.website} target='_blank'><i id="link" className='bx bx-link-external'></i></a>}
                </div>
            </div>
        </div>
 
    )
}
Pro.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    code: PropTypes.string,
    website: PropTypes.string
};

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
