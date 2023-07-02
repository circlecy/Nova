import logoimg from '../../assets/img/logo_color.png'
import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerImg">
      </div>
      <div className="headerTitles">
        <div className="headerBrand"><img src={logoimg} alt="" className="logoImg" /></div>
        <h3 className="headerTitleLg">
          <b>
            <div className="dp-slogan">Sun Life 永明 多元發展 精英薈萃</div>
            <div className="mb-slogan">Sun Life 永明 <br />多元發展 <br />精英薈萃</div>
          </b>
        </h3>
        <span className="headerTitleSm"></span>
      </div>
      <div className="mainPhoto"></div>
      <div className="headerBottomRight"></div>
      <div className="headerBottomLeft"></div>
    </div>
  );
}
