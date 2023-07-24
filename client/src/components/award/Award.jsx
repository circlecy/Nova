import { Link } from "react-router-dom";
import logoimg from "../../assets/img/logo_bg_wh.png"
import "./award.css";

export default function Award() {
    return (
        <div className="h-award">
            <div className="container">
                <div className="row">
                    <div className="col-xs-6 col-md-6" style={{ minwidth: "720px" }}>
                        <div className="photoGroup">
                            <img className="rect" alt="" src={require('../../assets/img/award_rect.svg').default} />
                            <img className="dot" alt="" src={require('../../assets/img/award_icon.svg').default} />
                            {/*<img
                                className="awardImg2"
                                src={require('../../assets/img/3c9d475fda6e.jpg')}
                                alt=""
                            />*/}
                            <img
                                className="awardImg1"
                                src={require('../../assets/img/DIRX0947.JPG')}
                                alt=""
                            />
                            <div><img src={logoimg} alt="" className="logoImg" /></div>
                        </div>
                    </div>
                    <div className="col-xs-6 col-md-6">
                        <div className="title-box">
                            <div className="subtitle">
                                <img alt="" src={require('../../assets/img/title1.svg').default} />
                                <span><b>擴展客群</b></span>
                                <img alt="" src={require('../../assets/img/title2.svg').default} />
                            </div>

                            <h2>銳意拓展高淨值與大灣區客群</h2>
                            <div className="text">
                                隨着團隊規模不斷擴展，除了強積金市場外，粵港澳大灣區訪港客戶市場，以及高淨值客戶群乃團隊未來的發展重點之一。「Sun Life永明是一間以人為本，且在強積金市場擁有豐富經驗的公司，近年更銳意發展大灣區市場。配合有關發展，團隊會持續增員，並進一步協助成員提升專業水平，以及Nova的整體服務質素。」
                                <br /><br />
                                Nova致力為成員營造開心、愉快的工作環境，但同樣重視他們的專業水平，以及對工作的投入度。而團隊目前約有50%成員取得百萬圓桌會（MDRT）會員資格。
                            </div>
                            {/*<br />
                            <div className="stat row">
                                <div className="first col-xs-4 col-md-4">
                                    <h3>60+</h3>
                                    <span className="text">團隊成員</span>
                                </div>
                                <div className="second col-xs-4 col-md-4">
                                    <h3>10+</h3>
                                    <span className="text">團隊獎項</span>
                                </div>
                                <div className="third col-xs-4 col-md-4">
                                    <h3>60%</h3>
                                    <span className="text">團隊成員取得MDRT會員資格</span>
                                </div>
                            </div>*/}
                            <br />
                            <div className="button">
                                <Link to="/award"><button className="button-17">查看更多</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}