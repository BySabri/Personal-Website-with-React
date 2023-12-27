import "./footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faPhone,faLocationDot,} from '@fortawesome/free-solid-svg-icons'
import { faLinkedin,faInstagram,faFacebook} from '@fortawesome/free-brands-svg-icons'
export default function Footer (){

    return(
        <>
            <footer>
                <div className="contact"> 
                    <div className="contact-info">
                        <h3>Contact:</h3>
                        <div className="contact-info-item">  
                            <p><FontAwesomeIcon icon={faLocationDot} /> Sarıyakup Mah. Konya/Karatay, Türkiye</p>
                        </div>
                        <div className="contact-info-item">
                            <p><FontAwesomeIcon icon={faPhone} /> +1 234 567 890</p>
                         </div>
                        <div className="contact-info-item">
                            <p> <FontAwesomeIcon icon={faEnvelope} /> eyubsabridemir@gmail.com</p>
                        </div>
                    </div>
                    <div className="contact-info">
                        <div className="row">
                            <div className="contact-info-item">
                                <a href="https://www.linkedin.com/in/eyubsabridemir/" target="blank" ><FontAwesomeIcon icon={faLinkedin} size="2xl" style={{color: "#ffffff",}}/></a>
                            </div>
                            <div className="contact-info-item">
                                <a href="https://www.instagram.com/mrsabrii/" target="blank"><FontAwesomeIcon icon={faInstagram} size="2xl" style={{color: "#ffffff",}}/></a>
                            </div>
                            <div className="contact-info-item">
                                <a href="https://m.facebook.com/eysadem" target="blank"><FontAwesomeIcon icon={faFacebook} size="2xl" style={{color: "#ffffff",}} /></a>
                            </div>
                        </div>
                    </div>
                    
                </div>
                
            </footer>
        </>
    )

}