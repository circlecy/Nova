import "./team.css";

export default function Team() {

    return (
        <div className="teams">
            <section className="page-title bg-dark-overlay text-center">
                <div className="container">
                    <div className="page-title__holder">
                        <h1 className="page-title__title"><b>領袖的話 <br/>& <br/>成員感言</b></h1>
                        <p className="page-title__subtitle"></p>
                    </div>
                </div>
            </section>
            <div className="hr-line">
                <div className="container py-10">
                    <h2 className="text-center">The Executive Team</h2>
                    <div className="flex justify-center mx-auto mt-6">
                        <span className="w-40 h-1 rounded-full"></span>
                        <span className="w-3 h-1 mx-1 rounded-full"></span>
                        <span className="w-1 h-1 rounded-full"></span>
                    </div>
                    <p className="mx-auto text-center">
                        團隊成員擁有專業水平，有豐富理財策劃工作經驗。成員全情投入，能維持競爭優勢。而團隊目前約有50%成員取得百萬圓桌會（MDRT）會員資格。
                    </p>
                </div>
            </div>
            <div className="grid-list">
                <div className="grid-item grid-cols-1">
                    <div className="px-12 py-8 transition-colors duration-300 transform border hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent">
                        <div className="flex sm:-mx-4 sm:flex-row">
                            <img alt="" className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300" src={require('../../assets/staff/Jason_icon.PNG')} />

                            <div className="mt-4 sm:mx-4 sm:mt-0">
                                <h1 className="text-xl font-semibold text-gray-700 capitalize md:text-2xl dark:text-white group-hover:text-white">Jason Chu 朱超</h1>

                                <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">Nova 高級行政業務總監</p>
                            </div>
                        </div>

                        <p className="mt-4 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">Nova是一支年輕有活力，重質量的團隊，深明年輕人的想法和需要。「未來我們會幫助更多有志在行業發展的年輕人藉工作找到滿足感和成就感，實現人生目標；亦令廣大市民可透過專業的理財顧問獲得適切的財富管理方案，發揮保險業應有的價值。」</p>
                        <div className="flex mt-4 -mx-2"></div>
                    </div>
                </div><br />
                <div className="grid-item grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
                    <div className="px-12 py-8 transition-colors duration-300 transform border hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent">
                        <div className="flex sm:-mx-4 sm:flex-row">
                            <img alt="" className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300" src={require('../../assets/staff/Nic_icon.PNG')} />

                            <div className="mt-4 sm:mx-4 sm:mt-0">
                                <h1 className="text-xl font-semibold text-gray-700 capitalize md:text-2xl dark:text-white group-hover:text-white">Nic Lee 李建明</h1>

                                <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">Nova NL 行政業務總監</p>
                            </div>
                        </div>

                        <p className="mt-4 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">想在行業取得理想成績，良好的工作習慣無疑是關鍵之一。另外，我們必須Stay Hungry, Stay Foolish（求知若飢，虛心若愚），不要易於滿足一時佳績，要不斷學習，成為更好的人。</p>
                        <div className="flex mt-4 -mx-2"></div>
                    </div>

                    <div className="px-12 py-8 transition-colors duration-300 transform border hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent">
                        <div className="flex sm:-mx-4 sm:flex-row">
                            <img alt="" className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300" src={require('../../assets/staff/Darren_icon.PNG')} />

                            <div className="mt-4 sm:mx-4 sm:mt-0">
                                <h1 className="text-xl font-semibold text-gray-700 capitalize md:text-2xl dark:text-white group-hover:text-white">Darren Cheung 張焯熙</h1>

                                <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">Nova DC 業務總監</p>
                            </div>
                        </div>

                        <p className="mt-4 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">我相信不進則退，而Nova的成員對個人的專業水平與業績亦有一定的自我要求，無論是業績或成員人數，我們都期望每年有所增長，即使疫情期間亦沒有放棄這份信念。</p>
                        <div className="flex mt-4 -mx-2"></div>
                    </div>
                </div>
            </div>
            <div className="hr-line">
                <div className="container py-10">
                    <h2 className="text-center">團隊感想</h2>
                    <div className="flex justify-center mx-auto mt-6">
                        <span className="w-40 h-1 rounded-full"></span><span className="w-3 h-1 mx-1 rounded-full"></span><span className="w-1 h-1 rounded-full"></span>
                    </div>
                </div>
            </div>

            <div className="list">
                <ul className="team">
                    <li className="member">
                        <div className="thumb"><img alt="" src={require('../../assets/staff/sonia_icon.PNG')} /></div>
                        <div className="description">
                            <h3>Sonia (1K)</h3>
                            <p>前職業 : 學生(fresh grad)<br />
                                加入Sunlife日期 : 07/2022<br /><br />
                                喺加入NOVA呢個大家庭之前，我可謂未真正接觸過職場生活。不過，我好慶幸我畢業第一份工就選擇咗呢度。呢度嘅同事後生有活力，玩得傾得，令我好快可以同大家打成一片，而且大家都會無私解答我所有疑問，令我從來都唔會覺得無助。相比起其他同屆同學，我覺得我嘅工作環境係最開心嘅。
                                <br />
                            </p>
                        </div>
                    </li>
                    <li className="member">
                        <div className="thumb"><img alt="" src={require('../../assets/staff/Ada.jpeg')} /></div>
                        <div className="description">
                            <h3>Ada (AX)</h3>
                            <p>前職業 : 酒店訂房部<br />
                                加入Sunlife日期 : 11/2022<br /><br />
                                以前做酒店成日都好忙，要一日返十幾個鐘。入左呢一行，我可以自由分配時間，多左陪屋企人，做到work life balance。
                                加入Nova之後，團隊比左好多support我，完善既培訓令我由一張白紙變成專業。
                                另外，我都估唔到係呢個競爭性咁大既行業，Nova既成員都可以咁supportive，好願意分享，平時有任何問題都得到好多幫助，令我更想在團隊中繼續並肩成長。
                                <br />
                            </p>
                        </div>
                    </li>
                    <li className="member">
                        <div className="thumb"><img alt="" src={require('../../assets/staff/Ashley.jpg')} /></div>
                        <div className="description">
                            <h3>Ashley (AX)</h3>
                            <p>前職業 : 餐飲業人力資源部(HR)<br />
                                加入Sunlife日期 : 08/2017<br /><br />
                                轉眼入行將近6年。回想起當初由人力資源部文員掙扎轉行好像是剛發生一樣。六年間的種種變化讓我感到驚訝，好像一轉眼間，當初遙不可及的夢想都於短短時間入行三年後真正一一實現：家人能夠退休並享受生活，成功為家人置業，同時迎來了人生新的階段可以追求自己所想。這些變化讓我深刻體會到，當初轉行是我人生最勇敢的決定，希望大家都可以勇敢追求及完成心中所想。
                                <br />
                            </p>
                        </div>
                    </li>
                    <li className="member">
                        <div className="thumb"><img alt="" src={require('../../assets/staff/Anna 1k.jpeg')} /></div>
                        <div className="description">
                            <h3>Anna (1K)</h3>
                            <p>前職業 : 銀行業<br />
                                加入Sunlife日期 : 07/2022<br /><br />
                                加入nova family 已差不多有一年，一開始的印象還是很深刻。
                                還記得對這裏第一印象是：大家都很友善！ 各位都很願意和你聊天，交談，從日常生活的無聊事，以至工作上業務處理，在1K裏不論什麼團隊，大家都會予以幫助，對於新加入的我來說，這確實是很大的支持！
                                在我們身處的社會中，很喜歡分別新人舊人前輩後輩的概念，在這裏不論是新加入的，還是經驗老到的，大家都打成一遍，願意彼此分享經驗，也願意分享生活，這樣真的難得！這樣也與我自己從前在銀行業的工作環境有很大的差別，令我更加喜歡現在的生活和工作。
                                快樂的工作環境使時間過得更快，很快就已經差不多一年的時間，希望未來在工作上也能達成自己的願望，也希望能一直進步吧！
                                <br />
                            </p>
                        </div>
                    </li>
                    <li className="member">
                        <div className="thumb"><img alt="" src={require('../../assets/staff/lily-icon.PNG')} /></div>
                        <div className="description">
                            <h3>Lily (1K)</h3>
                            <p>加入Sunlife日期 : 07/2020<br />
                                加入Sunlife日期 : 04/2019<br /><br />
                                從來都估唔到自己有一日會加入保險行業
                                好慶幸加入Nova  俾咗個平台同方法我
                                諗起當初白紙入黎、無人脈、由零開始
                                到連續做到兩年MDRT
                                自己都估唔到個轉變咁大
                                原來真係唔係靠挨先有理想收入
                                原來真係做到多勞多得同時間彈性
                                入行3年，好慶幸當初選擇行出舒適圈
                                加入Nova 做到自己想做既野！
                                <br />
                            </p>
                        </div>
                    </li>
                    <li className="member">
                        <div className="thumb"><img alt="" src={require('../../assets/staff/Aiden.jpeg')} /></div>
                        <div className="description">
                            <h3>Aiden (1K)</h3>
                            <p>前職業 : Marketing Sales<br />
                                加入Sunlife日期 : 02/2022<br /><br />
                                Um… 大家好，我係 Nova 1K 嘅 Aiden Wu。你可能有聽過我個名，但冇聽過都唔緊要，我會努力令你哋記得我
                                未入行前，都有輕輕聽過 Nova 呢個團隊名，印象中係好young嘅team。入咗嚟之後發現：係好有火嘅年青人，除此之外都好有人情味。記得啱啱入嚟，就算唔係我上線都好關心我，會俾好多意見我去改善selling skills/ angle，因此上年可以M，都係大家係背後support我、勉勵我
                                總括嚟講，可以加入 Nova 呢個大家庭，我好榮幸！除咗賺錢多咗，仲識到一班好好嘅工作伙伴。

                                <br />
                            </p>
                        </div>
                    </li>
                    <li className="member">
                        <div className="thumb"><img alt="" src={require('../../assets/staff/ANNA YU AX.jpeg')} /></div>
                        <div className="description">
                            <h3>Anna Yu (AX)</h3>
                            <p>前職業 : 海外升學顧問<br />
                                加入Sunlife日期 : 02/2021<br /><br />
                                係澳洲番黎，加入左Nova呢個團隊，同一班年紀差唔多既後生仔一齊拼搏，並肩作戰，做到自己想達到既目標，不斷係事業上突破自己，好有滿足感。
                                團隊既經理和同事們都好好，會互相幫助同埋鼓勵大家，一齊work hard play hard！
                                另外，作為一個年輕團隊，我地秉承住不進則退既理念，一直不斷進步同埋勇於嘗試，希望可以係呢個行業更上一層樓

                                <br />
                            </p>
                        </div>
                    </li>
                    <li className="member">
                        <div className="thumb"><img alt="" src={require('../../assets/staff/Cena.jpg')} /></div>
                        <div className="description">
                            <h3>Cena Lau (1K)</h3>
                            <p>前職業 : 動畫設計師<br />
                                加入Sunlife日期 : 02/2019<br /><br />
                                由為別人工作，以致有機會自己建立團隊開展一盤生意確實唔容易，但呢個行業同團隊令我體會到理財策劃嘅重要性，為每個客戶計劃人生，帶到意義俾客人非常有滿足感。
                                亦令我慢慢體驗到工作同生活並存嘅體會，帶俾我既家庭有更好嘅生活質素同埋時間陪伴。

                                <br />
                            </p>
                        </div>
                    </li>
                    <li className="member">
                        <div className="thumb"><img alt="" src={require('../../assets/staff/Michael Chan.jpg')} /></div>
                        <div className="description">
                            <h3>Michael Chan (1K)</h3>
                            <p>前職業 : 空中服務員<br />
                                加入Sunlife日期 : 12/2020<br /><br />
                                當初抱住試下既心態入行，由以前每個月公司安排更表，到呢行要自己幫自己安排appointment，一開頭好唔慣。但我一步一步走到今日，入行兩年都連續做到MDRT，由當初對未來好迷惘，到而家做到業主，無唸過人生可以係短短兩年幾有咁大變化。慶幸Nova 呢個大家庭幫左我好多，更慶幸我自己當初既堅持同努力。
                                <br />
                            </p>
                        </div>
                    </li>
                    <li className="member">
                        <div className="thumb"><img alt="" src={require('../../assets/staff/Heidi Li.jpeg')} /></div>
                        <div className="description">
                            <h3>Heidi Li (1K)</h3>
                            <p>前職業 : 空中服務員(機艙乘務長)<br />
                                加入Sunlife日期 : 12/2020<br /><br />
                                加入NOVA這個團隊兩年多的時間，相比過往工作而言，同樣要接觸許多不同類別的人，但保險這行業無疑更具挑戰性，特別在心理層面上。轉換跑道由零開始的日子，團隊為大家預備不少培訓和經驗分享，加快我融入這行業的步伐。平時面對不同的疑難，同事們都樂於幫忙和解答，無分階級。團隊亦不定期舉辦大大小小的活動，為工作以外的生活添加不少色彩。在這裡學習到與得到的，超於想像。
                                <br />
                            </p>
                        </div>
                    </li>
                    <li className="member">
                        <div className="thumb"><img alt="" src={require('../../assets/staff/Wesker Lee.jpg')} /></div>
                        <div className="description">
                            <h3>Wesker Lee (1K)</h3>
                            <p>前職業 : 學生(fresh grad)<br />
                                加入Sunlife日期 : 07/2015<br /><br />
                                加入左Nova Family 接近第8年時間，係我大學畢業後第一份工一做就做到而家
                                讀書既時候從來都無諗過出黎之後要去做理財策劃行業，因為覺得要講野好叻先做得，但我從來講野都唔叻，所以而家諗返好慶幸自己當初加入左呢個團隊，比左好多support同training我，去令到我由一個原本唔識同人溝通既人，去到今時今日連續做左6年MDRT同COT
                                加入呢行除左為我自己個人本身帶黎轉變外，亦令我搵到一個以前讀書時諗都無諗過既收入，幫我係唔靠屋企人幫助下買左人生第一層樓，有能力比到更好既野比屋企人，而且因為工作時間彈性自由，平時亦可以工餘時發展我自己既興趣，做到Work Life Balance。好多謝當初既自己咁勇敢咁入左呢行，係可以做一世既事業。

                                <br />
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}
