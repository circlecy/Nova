import { Link } from "react-router-dom";
import "./joinus.css";

export default function News() {
    return (
        <div className="joinus">
            <div className="container">
                <div className="row">
                    <div className="col-xs-6 col-md-6">
                        <div className="bannerContent1">
                            <h3 className="bannerTitle"><b>加入我們</b></h3>
                            <div className="button">
                                <Link to="/contact"><button className="button-5" role="button">加入我們</button></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-6 col-md-6">
                        <div className="bannerContent2">
                            <h3 className="bannerTitle"><b>聯絡及查詢</b></h3>
                            <div className="button">
                                <Link to="/contact"><button className="button-5" role="button">聯絡我們</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}