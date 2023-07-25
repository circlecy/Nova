import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logoimg from "../../assets/img/logo_bg_bk.png"
import "./footer.css";

export default function Footer() {

    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <div><img src={logoimg} alt="" className="logoImg" /></div>
                        <ul className="footer-links">
                            <li>Email : nova.recuitmentpower@gmail.com </li>
                            <li>地址: 香港九龍紅磡紅鸞道18號祥祺中心A座7樓</li>
                        </ul>
                    </div>

                    <div className="col-xs-6 col-md-3">
                        <h6>關於及查詢</h6>
                        <ul className="footer-links">
                            <li><Link className="link" to="/about">關於我們 </Link></li>
                            <li><Link className="link" to="/award">團隊成就</Link></li>
                            <li><a href="mailto:nova.recuitmentpower@gmail.com?subject=Request to join Nova Team&body=I would like to join the Nova Team." className="link">加入我們</a></li>
                            <li><Link className="link" to="/contact">聯絡我們</Link></li>

                        </ul>
                    </div>

                    <div className="col-xs-6 col-md-3">
                        <h6>網站地址</h6>
                        <ul className="footer-links">
                            <li><Link className="link" to="/posts">最新動態</Link></li>
                            <li><Link className="link" to="/posts">活動相簿</Link></li>
                            <li><Link className="link" to="/team">團隊感想</Link></li>
                            <li><Link className="link" to="/login">登入</Link></li>
                        </ul>
                    </div>
                </div>
                <hr />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-sm-6 col-xs-12">
                        <p className="copyright-text">Copyright &copy; 2023 All Rights Reserved by Nova.
                        </p>
                    </div>

                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <ul className="social-icons">
                            <li><div className="facebook icon"><a href="www.facebook.com"><i className="fa-brands fa-facebook-f"></i></a></div></li>
                            <li><div className="instagram icon"><a href="www.instagram.com"><i className="fa-brands fa-instagram"></i></a></div></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}
