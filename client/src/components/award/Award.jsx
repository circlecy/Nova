import { Link } from "react-router-dom";
import logoimg from "../../assets/img/logo_bg_wh.png"
import "./award.css";

export default function Award() {
    return (
        <div className="h-award">
            <div className="container">
                <div className="row">
                    <div className="col-xs-6 col-md-6">
                        <div className="photoGroup">
                            <img className="rect" src={require('../../assets/img/award_rect.svg').default} />
                            <img className="dot" src={require('../../assets/img/award_icon.svg').default} />
                            <img
                                className="awardImg2"
                                src="https://images.pexels.com/photos/5326915/pexels-photo-5326915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                alt=""
                            />
                            <img
                                className="awardImg1"
                                src="https://images.pexels.com/photos/4516067/pexels-photo-4516067.jpeg"
                                alt=""
                            />
                            <div><img src={logoimg} alt="" className="logoImg" /></div>
                        </div>
                    </div>
                    <div className="col-xs-6 col-md-6">
                        <div className="title-box">
                            <div className="subtitle">
                                <img src={require('../../assets/img/title1.svg').default} />
                                <span>Award</span>
                                <img src={require('../../assets/img/title2.svg').default} />
                            </div>

                            <h2>We Have 20 Years of Experience</h2>
                            <div className="text">Lorem Ipsum is simply dummy text of the printingand typesetting industry lorem Ipsum has been the industrys standard dummy text ever since the when an unknown printer took a galley of type.</div>
                            <br /><br />
                            <div className="stat row">
                                <div className="first col-xs-4 col-md-4">
                                    <h3>2000+</h3>
                                    <span className="text">Our Staff</span>
                                </div>
                                <div className="second col-xs-4 col-md-4">
                                    <h3>100+</h3>
                                    <span className="text">Award</span>
                                </div>
                                <div className="third col-xs-4 col-md-4">
                                    <h3>20+</h3>
                                    <span className="text">Year Experience</span>
                                </div>
                            </div>
                            <br />
                            <div className="button">
                                <Link to="/about"><button className="button-17" role="button">View More</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}