import "./footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faPhone,faLocationDot,} from '@fortawesome/free-solid-svg-icons'
import { faLinkedin,faInstagram,faFacebook} from '@fortawesome/free-brands-svg-icons'
export default function Footer (){

    return(
        <>
            <footer id="footer">
                <div className="contact"> 
                    <div className="contact-info">
                        <div className="contact-info-item">  
                            <p><span><FontAwesomeIcon icon={faLocationDot} /></span>Sarıyakup Mah. Konya/Karatay, Türkiye</p>
                        </div>
                        <div className="contact-info-item">
                            <p><span><FontAwesomeIcon icon={faPhone} /></span>+90 234 567 890</p>
                         </div>
                        <div className="contact-info-item">
                            <p><span><FontAwesomeIcon icon={faEnvelope} /></span> eyubsabridemir@gmail.com</p>
                        </div>
                    </div>
                    <div className="contact-info">
                        <div className="row">
                            <div className="contact-info-item">
                                <a href="https://www.linkedin.com/in/eyubsabridemir/" target="blank" ><FontAwesomeIcon icon={faLinkedin} size="xl" style={{color: "#ffffff",}}/></a>
                            </div>
                            <div className="contact-info-item">
                                <a href="https://www.instagram.com/mrsabrii/" target="blank"><FontAwesomeIcon icon={faInstagram} size="xl" style={{color: "#ffffff",}}/></a>
                            </div>
                            <div className="contact-info-item">
                                <a href="https://m.facebook.com/eysadem" target="blank"><FontAwesomeIcon icon={faFacebook} size="xl" style={{color: "#ffffff",}} /></a>
                            </div>
                        </div>
                    </div>
                    
                </div>
                
            </footer>
        </>
    )

}