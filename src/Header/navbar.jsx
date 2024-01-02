import logo from "./logo.png";
export default function Navbar(){
    console.log(logo);
 const styles= {
        buttonStyle:{padding:""}
       }

    return(
      
        <>
            <header id="home" className="bg">
                <ul style={{position:"fixed"}}>
                    <li className="img">
                        <img src={logo} alt="Logo" width="70px" />
                    </li>
                    <li>
                       <a href="#home">Home</a>
                    </li>
                    <li>
                       <a href="#body">About</a>
                    </li>
                    <li>
                       <a href="#footer">Contact</a>
                    </li>
                </ul>
                    <div className="body">
                    <div className="body-text">
                    <h1 style={{margin:"0 0 30px 0"}}>Eyüb Sabri Demir</h1>
                    <h2 style={{margin:"0 0 10px 0"}}>Front-End Developer</h2>
                    <h3>Expert in Creating Stylish, User-Friendly and Modern Digital Interfaces</h3>
                    </div>
                </div>
            </header>
        </>
    )
}