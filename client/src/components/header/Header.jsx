import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div>
        <img
          className="headerImg"
          src="https://images.pexels.com/photos/15007786/pexels-photo-15007786.jpeg"
          alt=""
        />
      </div>
        <div className="headerTitles">
          <h1 className="headerBrand">Nova</h1>
          <h3 className="headerTitleLg">Explore Our World </h3>
          <span className="headerTitleSm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
        </div>
        <div className="mainPhoto"></div>
      <div className="headerBottomRight"></div>
      <div className="headerBottomLeft"></div>
    </div>
  );
}
