import { Link } from "react-router-dom";
import "./joinus.css";

export default function News() {
    return (
        <div className="joinus">
            <div className="container">
                <div className="row">
                    <div className="col-xs-6 col-md-6">
                        <div className="bannerContent1">
                            <h3 className="bannerTitle">加入我們</h3>
                            <div className="button">
                                <a href="mailto:nova.recuitmentpower@gmail.com?subject=Request to join Nova Team&body=I would like to join the Nova Team." className="button-5 link">
                                    加入我們
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-6 col-md-6">
                        <div className="bannerContent2">
                            <h3 className="bannerTitle">聯絡及查詢 </h3>
                            <div className="button">
                                <Link to="/contact" className="button-5">聯絡我們</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}