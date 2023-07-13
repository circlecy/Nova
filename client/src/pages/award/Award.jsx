import "./award.css";
import dc from "./DC.json";
import direct from "./Direct.json";
import nl from "./NL.json";

export default function Award() {

  return (
    <div className="award">
      <div className="container all-award">
        <div className="container mt-5 mb-5">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <h4>團隊獲得 MDRT/TOT/COT 成員</h4>
              <ul className="timeline">
                <li>
                  <div className="award-name"><b>MDRT</b></div>
                  <p>Million Dollar Round Table. (百萬圓桌會員)</p>
                </li>
                <li>
                  <div className="award-name"><b>COT</b></div>
                  <p>Court of the Table. (超級會員) </p>
                </li>
                <li>
                  <div className="award-name"><b>TOT</b></div>
                  <p>Top of the Table. (頂尖會員)</p>
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <div className="photoGroup">
                <img alt="" className="award1" src={require('../../assets/img/DIRX0630.JPG')} />
                <img alt="" className="award2" src={require('../../assets/img/DSC09608.JPG')} />
                <img alt="" className="award3" src={require('../../assets/img/57bb41102724.JPG')} />
              </div>
            </div>
          </div>
        </div>
        <div className="agency"> <b>Nova DC Agency</b></div>
        <div className="grid-list">
          <div className="grid-item md:grid-cols-2">
          {dc.map((dc,i) => (
            <div key={i} className="px-12 py-8 transition-colors duration-300 transform border hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent">
              <div className="flex sm:-mx-4 sm:flex-row">
                <img alt="" className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300" src={require('../../assets/award/DC/'+ dc.photo)} />
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
                <b>MDRT:</b> {dc.MDRT} <br/>
                {dc.COT !== "" ? <span><b>COT:</b> {dc.COT} &nbsp;&nbsp; </span>: ""}
                {dc.TOT !=="" ? <span><b>TOT:</b> {dc.TOT}</span>: ""}
              </p>
            </div>
          ))}
          </div>
        </div>
        <div className="agency"> <b>Nova Direct Agency</b></div>
        <div className="grid-list">
          <div className="grid-item md:grid-cols-2">
          {direct.map((direct,i) => (
            <div key={i} className="px-12 py-8 transition-colors duration-300 transform border hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent">
              <div className="flex sm:-mx-4 sm:flex-row">
                <img alt="" className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300" src={require('../../assets/award/Direct/'+ direct.photo)} />
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
                <b>MDRT:</b> {direct.MDRT} <br/>
                {direct.COT !== "" ? <span><b>COT:</b> {direct.COT} &nbsp;&nbsp; </span>: ""}
                {direct.TOT !== "" ? <span><b>TOT:</b> {direct.TOT}</span>: ""}
              </p>
            </div>
          ))}
          </div>
        </div>
        <div className="agency"> <b>Nova Direct Agency</b></div>
        <div className="grid-list">
          <div className="grid-item md:grid-cols-2">
          {nl.map((nl,i) => (
            <div key={i} className="px-12 py-8 transition-colors duration-300 transform border hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent">
              <div className="flex sm:-mx-4 sm:flex-row">
                <img alt="" className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300" src={require('../../assets/award/NL/'+ nl.photo)} />
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
                <b>MDRT:</b> {nl.MDRT} <br/>
                {nl.COT !== "" ? <span><b>COT:</b> {nl.COT} &nbsp;&nbsp; </span>: ""}
                {nl.TOT !== "" ? <span><b>TOT:</b> {nl.TOT}</span>: ""}
              </p>
            </div>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
}
