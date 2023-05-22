import { Link } from "react-router-dom";
import "./joinus.css";

export default function News() {
    return (
        <div className="joinus">
            <div className="container">
                <div className="row">
                    <div className="col-xs-6 col-md-6">
                        <div className="bannerContent1">
                            <h3 className="bannerTitle">Join Us </h3>
                            <div className="button">
                                <Link to="/contact"><button className="button-5" role="button">Join Us</button></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-6 col-md-6">
                        <div className="bannerContent2">
                            <h3 className="bannerTitle">Get In Touch </h3>
                            <div className="button">
                                <Link to="/contact"><button className="button-5" role="button">Contact Us</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}