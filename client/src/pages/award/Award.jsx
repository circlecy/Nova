import { LazyLoadImage } from "react-lazy-load-image-component";
import "./award.css";
import dc from "./DC.json";
import direct from "./Direct.json";
import nl from "./NL.json";

export default function Award() {
  const PF = "http://45.80.181.65:5000/images/staff/";
  const openAgency = (agency, name) => {
    var elems = document.querySelectorAll(".active")[0];
    if (elems) {
      elems.classList.remove("active");
      document.getElementById(agency).className = "w3-button active";
    }
    var x = document.getElementsByClassName("allAgency");
    for (var i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    document.getElementById(name).style.display = "block";
  }

  return (
    <div className="award">
      <div className="container all-award">
        <div className="container mt-5 mb-5">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <h4>團隊獲得 MDRT / TOT / COT 成員</h4>
              <ul className="timeline">
                <li>
                  <div className="award-name"><b>TOT</b></div>
                  <p>Top of the Table. (頂尖會員)</p>
                </li>
                <li>
                  <div className="award-name"><b>COT</b></div>
                  <p>Court of the Table. (超級會員) </p>
                </li>
                <li>
                  <div className="award-name"><b>MDRT</b></div>
                  <p>Million Dollar Round Table. (百萬圓桌會員)</p>
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <div className="mdrt">
                <img alt="" src={require('../../assets/award/mdrt.svg').default} />
                <div>
                  <b>MDRT（Million Dollar Round Table，又名百萬圓桌）</b><br />
                  成立於1927年的壽險理財專業人士的卓越組織，由一群人壽保險銷售人員創立，他們希望表彰行業中表現最好的人。
                  該組織是一個獨立的國際組織，遍佈全球 70 個國家/地區的 500 多間公司，均是世界一流的壽險和金融服務專業人士。
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="agency-title"> <b>Nova DC Agency</b></div>
        <div className="w3-bar">
          <button id="DCagency" className="w3-button active" onClick={(e) => openAgency("DCagency", "DC")}>DC Agency</button>
          <button id="DirectAgency" className="w3-button" onClick={(e) => openAgency("DirectAgency", "Direct")}>Direct Agency</button>
          <button id="NLagency" className="w3-button" onClick={(e) => openAgency("NLagency", "NL")}>NL Agency</button>
        </div>
        <div id="DC" className="allAgency">
          <div className="grid-list">
            <div className="grid-item md:grid-cols-2">
              {dc.map((dc, i) => (
                <ul key={i} >
                  <li className="list-flex">
                    <LazyLoadImage src={PF + "DC/" + dc.photo}
                      className="object-cover w-24 rounded-full sm:mx-4"
                      width={10} height={10}
                      alt="Image Alt"
                    />
                    {/*<img alt="" className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300" loading="lazy" src={require("../../assets/award/DC/" + dc.photo)} style={{ width: "70px", height: "70px" }} />*/}
                    <div className="details">
                      <span className="name">{dc.name}, {dc.nickname}</span><br />
                      <span className="member">
                        {dc.TOT !== "" ? <span><b>TOT:</b> {dc.TOT} &nbsp;&nbsp; </span> : ""}
                        {dc.COT !== "" ? <span><b>COT:</b> {dc.COT} <br /></span> : ""}
                        <b>MDRT:</b> {dc.MDRT} <br />
                      </span>
                    </div>
                  </li>
                </ul>
              ))}
            </div>
          </div>
        </div>

        <div id="Direct" className="allAgency" style={{ display: "none" }}>
          <div className="grid-list">
            <div className="grid-item md:grid-cols-2">
              {direct.map((direct, i) => (
                <ul key={i} >
                  <li className="list-flex">
                    <LazyLoadImage src={PF + "Direct/" + direct.photo}
                      className="object-cover w-24 rounded-full sm:mx-4"
                      width={10} height={10}
                      alt="Image Alt"
                    />
                    {/*<img alt="" className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300" loading="lazy" src={require("../../assets/award/Direct/" + direct.photo)} style={{ width: "70px", height: "70px" }} />*/}
                    <div className="details">
                      <span className="name">{direct.name}, {direct.nickname}</span><br />
                      <span className="member">
                        {direct.TOT !== "" ? <span><b>TOT:</b> {direct.TOT} &nbsp;&nbsp; </span> : ""}
                        {direct.COT !== "" ? <span><b>COT:</b> {direct.COT} <br /></span> : ""}
                        <b>MDRT:</b> {direct.MDRT}
                      </span>
                    </div>
                  </li>
                </ul>
              ))}
            </div>
          </div>
        </div>

        <div id="NL" className="allAgency" style={{ display: "none" }}>
          <div className="grid-list">
            <div className="grid-item md:grid-cols-2">
              {nl.map((nl, i) => (
                <ul key={i} >
                  <li className="list-flex">
                    <LazyLoadImage src={PF + "NL/" + nl.photo}
                      className="object-cover w-24 rounded-full sm:mx-4"
                      width={10} height={10}
                      alt="Image Alt"
                    />
                    {/*<img alt="" className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300" loading="lazy" src={require("../../assets/award/NL/" + nl.photo)} style={{ width: "70px", height: "70px" }} />*/}
                    <div className="details">
                      <span className="name">{nl.name}, {nl.nickname}</span><br />
                      <span className="member">
                        {nl.TOT !== "" ? <span><b>TOT:</b> {nl.TOT} &nbsp;&nbsp;</span> : ""}
                        {nl.COT !== "" ? <span><b>COT:</b> {nl.COT} <br /></span> : ""}
                        <b>MDRT:</b> {nl.MDRT}
                      </span>
                    </div>
                  </li>
                </ul>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}