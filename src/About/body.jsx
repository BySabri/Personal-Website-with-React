import './cards.css'; 
import imagehtml from './htmlvecss.png';
import bootstrap from './Bootstrap.png';
import js from './js.png';
import react from './react.png';

console.log(imagehtml);
console.log(bootstrap);
console.log(js);
console.log(react);
export default function Body() {
    
    return(
        <>
        
        <div id="body" className="cards">
            <h1 style={{marginBottom:"40px"}}>My Software Skills</h1>
            <div className="card card-1">
                <div className="card-img">
                    <img src={imagehtml} alt="html ve css" />
                </div>
                <div className="card-text">
                    <h4>HTML and CSS</h4>
                    <p>HTML is a markup language used to structure the content of web pages, while CSS controls the appearance of this content by defining visual attributes like color, font, and layout.</p>
                </div>
                <div className="card-img">
                    <img src={bootstrap} alt="bootstrap" />
                </div> 
                <div className="card-text">
                    <h4>Bootstrap</h4>
                    <p>Bootstrap is a front-end framework that provides web developers with pre-made components and templates, enabling them to create fast, responsive, and stylish websites.</p>
                </div>
                    
            </div>
            <div className="card card-1">
                
                <div className="card-text">
                    <h4>JavaScript</h4>
                    <p>JavaScript is a programming language that runs in web browsers. It's commonly used to add interactivity, manage interactions, and manipulate content within web pages.</p>
                </div>
                <div className="card-img">
                    <img src={js} alt="" />
                </div>
                <div className="card-text">
                    <h4>React</h4>
                    <p>React is a JavaScript library used to build web applications. It simplifies the development process by breaking user interfaces into modular components.</p>
                </div>
                <div className="card-img">
                    <img src={react} alt="" />
                </div>     
            </div>
        </div>
        </>
    )



}