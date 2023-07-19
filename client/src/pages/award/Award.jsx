import "./award.css";
import dc from "./DC.json";
import direct from "./Direct.json";
import nl from "./NL.json";

export default function Award() {
  const openAgency = (agency, name) => {
    if (agency == "DCagency") {
      document.getElementById("DirectAgency").className = "w3-button";
      document.getElementById("NLagency").className = "w3-button";
      document.getElementById(agency).className = "w3-button active";
    } else if (agency == "NLagency"){
      document.getElementById("DirectAgency").className = "w3-button";
      document.getElementById("DCagency").className = "w3-button";
      document.getElementById(agency).className = "w3-button active";
    } else if(agency == "DirectAgency"){
      document.getElementById("NLagency").className = "w3-button";
      document.getElementById("DCagency").className = "w3-button";
      document.getElementById(agency).className = "w3-button active";
    }
    var i;
    var x = document.getElementsByClassName("city");
    for (i = 0; i < x.length; i++) {
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
              <h4>團隊獲得 MDRT/TOT/COT 成員</h4>
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
              <div className="photoGroup">
                <img alt="" loading="lazy" className="award1" src={require('../../assets/img/DIRX0630.JPG')} />
                <img alt="" loading="lazy" className="award2" src={require('../../assets/img/DSC09608.JPG')} />
                <img alt="" loading="lazy" className="award3" src={require('../../assets/img/57bb41102724.JPG')} />
              </div>
            </div>
          </div>
        </div>
        <div className="agency"> <b>Nova DC Agency</b></div>
        <div className="w3-bar w3-black">
          <button id="DCagency" className="w3-button active" onClick={(e) => openAgency("DCagency", "DC")}>DC Agency</button>
          <button id="DirectAgency" className="w3-button" onClick={(e) => openAgency("DirectAgency", "Direct")}>Direct Agency</button>
          <button id="NLagency" className="w3-button" onClick={(e) => openAgency("NLagency", "NL")}>NL Agency</button>
        </div>
        <div id="DC" className="w3-container city">
          <div className="grid-list">
            <div className="grid-item md:grid-cols-2">
              {dc.map((dc, i) => (
                <div key={i} className="">
                  <ul>
                    <li className="list-flex">
                      <img alt="" className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300" loading="lazy" src={require("../../assets/award/DC/" + dc.photo)} style={{width: "70px", height:"70px"}}/>
                      <div className="details">
                        <span className="name">{dc.name}, {dc.nickname}</span><br />
                        <span className="member">
                          <b>MDRT:</b> {dc.MDRT} <br />
                          {dc.COT !== "" ? <span><b>COT:</b> {dc.COT} &nbsp;&nbsp; </span> : ""}
                          {dc.TOT !== "" ? <span><b>TOT:</b> {dc.TOT}</span> : ""}
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div id="Direct" className="w3-container city" style={{ display: "none" }}>
          <div className="grid-list">
            <div className="grid-item md:grid-cols-2">
              {direct.map((direct, i) => (
                <div key={i} className="">
                  <ul>
                    <li className="list-flex">
                      <img alt="" className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300" loading="lazy" src={require("../../assets/award/Direct/" + direct.photo)} style={{width: "70px", height:"70px"}}/>
                      <div className="details">
                        <span className="name">{direct.name}, {direct.nickname}</span><br />
                        <span className="member">
                          <b>MDRT:</b> {direct.MDRT} <br />
                          {direct.COT !== "" ? <span><b>COT:</b> {direct.COT} &nbsp;&nbsp; </span> : ""}
                          {direct.TOT !== "" ? <span><b>TOT:</b> {direct.TOT}</span> : ""}
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div id="NL" className="w3-container city" style={{ display: "none" }}>
          <div className="grid-list">
            <div className="grid-item md:grid-cols-2">
              {nl.map((nl, i) => (
                <div key={i} className="">
                  <ul>
                    <li className="list-flex">
                      <img alt="" className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300" loading="lazy" src={require("../../assets/award/NL/" + nl.photo)} style={{width: "70px", height:"70px"}}/>
                      <div className="details">
                        <span className="name">{nl.name}, {nl.nickname}</span><br />
                        <span className="member">
                          <b>MDRT:</b> {nl.MDRT} <br />
                          {nl.COT !== "" ? <span><b>COT:</b> {nl.COT} &nbsp;&nbsp; </span> : ""}
                          {nl.TOT !== "" ? <span><b>TOT:</b> {nl.TOT}</span> : ""}
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>


        {/*<div className="tabs">
          <div className="tab-2">
            <label for="tab2-1">One</label>
            <input id="tab2-1" name="tabs-two" type="radio" checked="checked"></input>
            <div>
              <h4>Tab One</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas consequat id velit quis vestibulum. Nam id orci eu urna mollis porttitor. Nunc nisi ante, gravida at velit eu, aliquet sodales dui. Sed laoreet condimentum nisi a egestas. <a className="documentation" href="https://flkt.mx/pitaya/componentes.html#pestanias">Documentación en español</a>.</p><p>Donec interdum ante ut enim consequat, quis varius nulla dapibus. Vivamus mollis fermentum augue a varius. Vestibulum in sapien at lectus gravida lobortis vulputate sed metus. Duis scelerisque justo et maximus efficitur. Donec eu eleifend quam. Curabitur aliquet commodo sapien eget vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vestibulum vel aliquet nunc, finibus posuere lorem. Suspendisse consectetur volutpat est ut ornare.</p>
            </div>

          </div>
          <div className="tab-2">
            <label for="tab2-2">Two</label>
            <input id="tab2-2" name="tabs-two" type="radio"></input>
            <div>
              <h4>Tab Two</h4>
              <p>Quisque sit amet turpis leo. Maecenas sed dolor mi. Pellentesque varius elit in neque ornare commodo ac non tellus. Mauris id iaculis quam. Donec eu felis quam. Morbi tristique lorem eget iaculis consectetur. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean at tellus eget risus tempus ultrices. Nam condimentum nisi enim, scelerisque faucibus lectus sodales at.</p>
            </div>

          </div>
        </div>


        <div className="grid-list">
          <div className="grid-item md:grid-cols-2">
            {dc.map((dc, i) => (
              <div key={i} className="px-12 py-8 transition-colors duration-300 transform border hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent">
                <div className="flex sm:-mx-4 sm:flex-row">
                  <img alt="" className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300" loading="lazy" src={require('../../assets/award/DC/' + dc.photo)} />
                  <div className="mt-4 sm:mx-4 sm:mt-0">
                    <h1 className="text-xl font-semibold text-gray-700 capitalize md:text-2xl dark:text-white group-hover:text-white">
                      {dc.name}, {dc.nickname}
                    </h1>
                    <p className="info mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
                      Agency: {dc.agency} &nbsp; &nbsp; District: {dc.district}
                    </p>
                  </div>
                </div>
                <p className="qualify mt-4 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
                  <b>MDRT:</b> {dc.MDRT} <br />
                  {dc.COT !== "" ? <span><b>COT:</b> {dc.COT} &nbsp;&nbsp; </span> : ""}
                  {dc.TOT !== "" ? <span><b>TOT:</b> {dc.TOT}</span> : ""}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="agency"> <b>Nova Direct Agency</b></div>
        <div className="grid-list">
          <div className="grid-item md:grid-cols-2">
            {direct.map((direct, i) => (
              <div key={i} className="px-12 py-8 transition-colors duration-300 transform border hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent">
                <div className="flex sm:-mx-4 sm:flex-row">
                  <img alt="" className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300" loading="lazy" src={require('../../assets/award/Direct/' + direct.photo)} />
                  <div className="mt-4 sm:mx-4 sm:mt-0">
                    <h1 className="text-xl font-semibold text-gray-700 capitalize md:text-2xl dark:text-white group-hover:text-white">
                      {direct.name}, {direct.nickname}
                    </h1>
                    <p className="info mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
                      Agency: {direct.agency} &nbsp; &nbsp; District: {direct.district}
                    </p>
                  </div>
                </div>
                <p className="qualify mt-4 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
                  <b>MDRT:</b> {direct.MDRT} <br />
                  {direct.COT !== "" ? <span><b>COT:</b> {direct.COT} &nbsp;&nbsp; </span> : ""}
                  {direct.TOT !== "" ? <span><b>TOT:</b> {direct.TOT}</span> : ""}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="agency"> <b>Nova Direct Agency</b></div>
        <div className="grid-list">
          <div className="grid-item md:grid-cols-2">
            {nl.map((nl, i) => (
              <div key={i} className="px-12 py-8 transition-colors duration-300 transform border hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent">
                <div className="flex sm:-mx-4 sm:flex-row">
                  <img alt="" className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300" loading="lazy" src={require('../../assets/award/NL/' + nl.photo)} />
                  <div className="mt-4 sm:mx-4 sm:mt-0">
                    <h1 className="text-xl font-semibold text-gray-700 capitalize md:text-2xl dark:text-white group-hover:text-white">
                      {nl.name}, {nl.nickname}
                    </h1>
                    <p className="info mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
                      Agency: {nl.agency} &nbsp; &nbsp; District: {nl.district}
                    </p>
                  </div>
                </div>
                <p className="qualify mt-4 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
                  <b>MDRT:</b> {nl.MDRT} <br />
                  {nl.COT !== "" ? <span><b>COT:</b> {nl.COT} &nbsp;&nbsp; </span> : ""}
                  {nl.TOT !== "" ? <span><b>TOT:</b> {nl.TOT}</span> : ""}
                </p>
              </div>
            ))}
          </div>
        </div>*/}
      </div>
    </div>
  );
}
