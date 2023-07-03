import { Link } from "react-router-dom";
import "./about.css";

export default function About() {
    return (
        <div className="about">
            <div><img src={require('../../assets/img/Nova-Banner.jpg')} alt="" className="m-teambanner"/></div>
            <div className="container">
                <div className="aboutTitle">
                    團隊年輕有活力 90後團隊打造行業新勢力
                </div>
                <div className="row">
                    <div className="col-xs-12 col-md-12">
                        <div className="title-box">
                            <div className="subtitle">
                                <img alt="" src={require('../../assets/img/title1.svg').default} />
                                <span>引言</span>
                                <img alt="" src={require('../../assets/img/title2.svg').default} />
                            </div>
                            <div className="text">年輕人缺乏經驗和渠道，在發展個人事業時往往需要投放更多精神與時間才能接近夢想。作為過來人，香港永明金融有限公司（下稱Sun Life永明）高級行政業務總監朱超（Jason）深明年輕人的想法和需要，因此多年來積極善用公司的平台與團隊的力量，為有志在理財策劃行業發展的年輕人提供所須的知識和經驗，助他們迅速成長，快人一步實現目標。</div>
                        </div>
                    </div>
                </div>
                <div className="aboutTitle2">
                    關於我們
                </div>
                <div className="aboutSubtitle2">
                    Nova - 團隊年輕有活力 突破界限 創造無價
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
                                <img alt="" src={require('../../assets/img/title1.svg').default} />
                                <span>Our Story</span>
                                <img alt="" src={require('../../assets/img/title2.svg').default} />
                            </div>

                            {/*<h2>Nova - 團隊年輕有活力 突破界限 創造無價</h2>*/}
                            <div className="text">年輕、幹勁、活力不只是年輕人的代名詞，也是Sun Life永明Nova營業區予人的印象。「現時整個營業區約有250個成員，當中大約8成的成員為Y世代（90後），他們大多是大學畢業後便投身行業，或從其他行業轉行的全新人。」由於團隊成員的年紀與背景接近，團隊不只充滿活力，而且十分有「火」。「所以在成立團隊時，我們選擇了Nova，即『新星』這個名字，寓意團隊嶄露頭角且有爆炸力。」</div>
                            <br />
                            <div className="button">
                                <Link to="/about"><button className="button-17">查看更多</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row content">
                    <div className="col-xs-3 col-md-5">
                        <div className="photoGroup">
                            <img
                                className="awardImg1"
                                src="https://images.pexels.com/photos/4516067/pexels-photo-4516067.jpeg"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="col-xs-9 col-md-7">
                        <div className="title-box">
                            <div className="subtitle2">
                                <img alt="" src={require('../../assets/img/title1.svg').default} />
                                <span>公司優勢</span>
                                <img alt="" src={require('../../assets/img/title2.svg').default} />
                            </div>

                            <h2>善用公司優勢助新晉複製成功</h2>
                            <div className="text">投身理財策劃行業的原因，行業升遷發展無限制、多勞多得，以及工作模式靈活具彈性等特質非常吸引。
                                <br /><br />
                                「由於本港在職人士都擁有強積金賬戶，透過為客戶跟進有關強積金事宜，令我們加深對客戶的認識，從而藉着日常接觸，進一步了解他們在保障與財富管理上的需要，並進行理財分析，為個人及團隊創造機遇。」
                                <br /><br />
                                這個為客戶進行理財策劃的方式，有助新晉顧問更容易起步，大大提升他們對個人事業發展的信心，即使經歷3年多的疫情，Nova的成員人數仍能節節上升，成為公司同齡隊伍中，增長幅度最快的團隊之一。
                                「令成員愉快地工作並實現個人目標是Nova的宗旨，透過公司的支援例如遙距投保服務，以及團隊上下的齊心協力，並不時舉辦的培訓課程和團隊凝聚活動，令成員在任何時刻仍能保持動力。」
                            </div>
                            <br />
                            <div className="button">
                                <Link to="/about"><button className="button-17" >查看更多</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}