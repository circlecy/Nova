import "./contactus.css";

export default function ContactUs() {

    return (
        <div className="contactus">
            <section className="page-title text-center">
                <div className="container">
                    <div className="page-title__holder">
                        <h1 className="page-title__title"><b>聯絡我們</b></h1>
                        <p className="page-title__subtitle"></p>
                    </div>
                </div>
            </section>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="promo-block">
                            <div className="promo-text">NOVA 團隊聯絡方法</div>
                            <div className="center-line"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <div className="promo-block">
                            <div className="promo-text">聯絡方法</div>
                            <div className="center-line"></div>
                        </div>
                        <div className="marg50">
                            <ul className="contact-composer">
                                <li><i className="icon-map-pin"></i> <span>地址: 香港九龍紅磡紅鸞道18號祥祺中心A座7樓</span></li>
                                <li><i className="icon-envelope"></i> <span>E-mail: nova.recuitmentpower@gmail.com</span></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-12">
                        <div className="promo-paragraph">團隊位置</div>
                        <iframe title="map" width="100%" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.3938104031695!2d114.1851405748699!3d22.30094134287292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x340400e16637f3dd%3A0xc7d45029b3a39bf7!2z56Wl56W65Lit5b-D!5e0!3m2!1szh-TW!2shk!4v1684293626405!5m2!1szh-TW!2shk"></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}
