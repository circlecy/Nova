import "./about.css";

export default function About() {
    return (
        <div className="about">
            <div className="container">
                <div className="aboutTitle">
                    ABOUT
                </div>
                <div className="row">
                    <div className="col-xs-9 col-md-7">
                        <div className="about-video">
                            < video width="100%" height="350" src={require('../../assets/video/Nova Video.mp4')} type="video/mp4" controls />
                        </div>
                    </div>
                    <div className="col-xs-3 col-md-5">
                        <div className="title-box">
                            <div className="subtitle">
                                <img src={require('../../assets/img/title1.svg').default} />
                                <span>Our Story</span>
                                <img src={require('../../assets/img/title2.svg').default} />
                            </div>

                            <h2>We Have 20 Years of Experience</h2>
                            <div className="text">Lorem Ipsum is simply dummy text of the printingand typesetting industry lorem Ipsum has been the industrys standard dummy text ever since the when an unknown printer took a galley of type.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}