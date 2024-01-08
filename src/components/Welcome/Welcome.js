import "./Welcome.css";
import welcome_img from "../../assets/home5.jpg";
import { Link } from "react-router-dom";
const Welcome = () => {
  return (
    <div className="welcome">
            <div className="r_card">
                <div className="welcome-img c_card img">
                    <img src={welcome_img} alt="welcome" />
                </div>
                <div className="welcome-info c_card">
                    <div className="info">
                    <h1>Invest Today <br /> Enjoy the Profit</h1>
                    <p className="info-italic">Join Millions of People who are investing in Agric Products to make profit without any stress. All at the comfort of your home.</p>
                    <br />
                    <Link to="/signup">
                        <button className="btn-success-large">Create an Account</button> 
                    </Link>
                    <Link to="/about" className="span-link">
                         | <span>How it works?</span>
                    </Link>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Welcome
