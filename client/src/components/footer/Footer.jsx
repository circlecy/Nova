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
                            <li>Email : support@email.com </li>
                            <li>電話 : 2567-8930</li>
                            <li>地址: 455, Hong Kong</li>
                        </ul>
                    </div>

                    <div className="col-xs-6 col-md-3">
                        <h6>網站地址</h6>
                        <ul className="footer-links">
                            <li><Link className="link" to="/about">關於我們 </Link></li>
                            <li><Link className="link" to="/posts">活動</Link></li>
                            <li><Link className="link" to="/posts">加入我們</Link></li>
                            <li><Link className="link" to="/about">聯絡及查詢</Link></li>
                        </ul>
                    </div>

                    <div className="col-xs-6 col-md-3">
                        <h6></h6>
                        <ul className="footer-links">
                            <li><Link className="link" to="/login">登入</Link></li>
                            <li><Link className="link" to="/posts">活動</Link></li>
                            <li><Link className="link" to="/contact">聯絡我們</Link></li>
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
                            <li><div className="facebook icon"><a href=""><i className="fa-brands fa-facebook-f"></i></a></div></li>
                            <li><div className="twitter icon"><a href=""><i className="fa-brands fa-twitter"></i></a></div></li>
                            <li><div className="linkedin icon"><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></div></li>
                            <li><div className="instagram icon"><a href="#"><i className="fa-brands fa-instagram"></i></a></div></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}
