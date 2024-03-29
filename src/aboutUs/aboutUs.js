import HomeAboutUs from './HomeAboutUs'
import './aboutUs.css';
import mel from './mel.png'
import cj from './cj.png'
import gelo from './gelo.png'
import yanna from './yanna.png'
import jenie from './jenie.png'
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
const aboutUs = () =>  {
  return (
    <>
    <div className="info">
    <HomeAboutUs />
        <div className="palmap-about">
            PaLMap
        </div>

        <div className="palmap-desc">
            PaLMap is a navigation web app that guides freshmen towards their desired destination. This also includes the location of gazebo’s and parking spots. 
        </div>

        <div className="container-about">
            <h3>Guiding you to a better future and leading you to your destination</h3>
        </div>
        <h4 className="meet">Meet the Team</h4>
        <div className="team">
            

            <div className = "pics">
                <div className="mel">
                    <img src={mel} alt=" "/>
                    <h5>Rimuel Canada</h5>
                    <h6><i><FaSquareXTwitter/></i>
                    <i><MdEmail /></i>
                    <i><FaFacebook /></i>
                    </h6>
                </div>

                <div className="peeps">
                    <img src={cj} alt=" "/>
                    <h5>CJ Defita</h5>
                    <h6><i><FaSquareXTwitter/></i>
                    <i><MdEmail /></i>
                    <i><FaFacebook /></i>
                    </h6>
                </div>

                <div className="peeps">
                    <img src={gelo} alt=" "/>
                    <h5>Angelo Tancioco </h5>
                    <h6><i><FaSquareXTwitter/></i>
                    <i><MdEmail /></i>
                    <i><FaFacebook /></i>
                    </h6>
                </div>

                <div className="peeps">
                    <img src={yanna} alt=" "/>
                    <h5>Julianna Miranda</h5>
                    <h6><i><FaSquareXTwitter/></i>
                    <i><MdEmail /></i>
                    <i><FaFacebook /></i>
                    </h6>
                    
                </div>

                <div className="peeps">
                    <img src={jenie} alt=" "/>
                    <h5>Jenie Tadena </h5>
                    <h6><i><FaSquareXTwitter/></i>
                    <i><MdEmail /></i>
                    <i><FaFacebook /></i>
                    </h6>
                </div>
            </div>
        </div>
    </div>
    </>
  );
}

export default aboutUs;
