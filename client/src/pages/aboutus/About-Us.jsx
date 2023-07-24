import "./aboutus.css";

export default function AboutUs() {

  return (
    <div className="aboutus">
      <section className="page-title bg-dark-overlay text-center">
        <div className="container">
          <div className="page-title__holder">
            <h1 className="page-title__title"><b>關於我們</b></h1>
            <p className="page-title__subtitle"></p>
          </div>
        </div>
      </section>
      <div className="container">
        <div className="contentTitle">
          <span>NOVA </span><br />
          <span>Core Value - 核心價值</span><br />
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 col-ms-12">
            <div className="hi-icon-effect">
              <div className="hi-icon fa">
                <svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
                  <path d="M60.68 45.48C60.4589 44.9218 60.127 44.4142 59.7041 43.9879C59.2813 43.5617 58.7764 43.2256 58.22 43C57.6822 42.7723 57.1041 42.6549 56.52 42.6549C55.9359 42.6549 55.3578 42.7723 54.82 43L42.09 47.51C42.1336 47.2556 42.157 46.9981 42.16 46.74C42.16 45.6049 41.7091 44.5162 40.9064 43.7136C40.1038 42.9109 39.0151 42.46 37.88 42.46H34.58C31.6453 42.4574 28.7553 41.7401 26.16 40.37C23.2789 38.8464 20.0691 38.05 16.81 38.05H11.81V34.5C11.81 34.2348 11.7046 33.9804 11.5171 33.7929C11.3296 33.6054 11.0752 33.5 10.81 33.5H4C3.73478 33.5 3.48043 33.6054 3.29289 33.7929C3.10536 33.9804 3 34.2348 3 34.5V59C3 59.2652 3.10536 59.5196 3.29289 59.7071C3.48043 59.8946 3.73478 60 4 60H10.81C11.0752 60 11.3296 59.8946 11.5171 59.7071C11.7046 59.5196 11.81 59.2652 11.81 59V56.75C13.6051 56.8324 15.3795 57.1691 17.08 57.75L22.22 59.57C24.8546 60.4967 27.6272 60.9701 30.42 60.97H31.42C34.4138 60.8345 37.3582 60.1569 40.11 58.97L58.54 51.1C59.5302 50.5955 60.2976 49.741 60.6931 48.7024C61.0886 47.6638 61.0839 46.5153 60.68 45.48V45.48ZM9.81 58H5V35.5H9.81V58ZM57.73 49.32L39.36 57.17C36.8274 58.2604 34.1153 58.874 31.36 58.98C28.4717 59.1003 25.587 58.6693 22.86 57.71L17.74 55.9C15.8299 55.2299 13.8321 54.8425 11.81 54.75V40.05H16.81C19.7423 40.0465 22.6305 40.7643 25.22 42.14C28.1057 43.661 31.318 44.4572 34.58 44.46H37.88C38.1803 44.46 38.4776 44.5193 38.7548 44.6345C39.0321 44.7497 39.2839 44.9186 39.4958 45.1313C39.7076 45.3441 39.8753 45.5966 39.9893 45.8744C40.1033 46.1522 40.1613 46.4497 40.16 46.75C40.1617 47.0755 40.0919 47.3974 39.9554 47.6929C39.8188 47.9885 39.619 48.2503 39.37 48.46L37.69 49.05H26.78C26.5148 49.05 26.2604 49.1554 26.0729 49.3429C25.8854 49.5304 25.78 49.7848 25.78 50.05C25.78 50.3152 25.8854 50.5696 26.0729 50.7571C26.2604 50.9446 26.5148 51.05 26.78 51.05H37.88C38.02 51.05 55.56 44.89 55.56 44.89C55.8613 44.7587 56.1864 44.6909 56.515 44.6909C56.8436 44.6909 57.1687 44.7587 57.47 44.89C57.7752 45.0138 58.0521 45.1982 58.2841 45.4319C58.5161 45.6657 58.6984 45.9439 58.82 46.25C59.0445 46.8081 59.0577 47.4289 58.857 47.996C58.6563 48.563 58.2556 49.0374 57.73 49.33V49.32Z" />
                  <path d="M26.0801 31.88L42.8101 40.88C42.9547 40.957 43.1161 40.9973 43.2801 40.9973C43.444 40.9973 43.6054 40.957 43.7501 40.88L60.4701 31.88C60.6297 31.795 60.7634 31.6682 60.8567 31.5132C60.95 31.3583 60.9996 31.1809 61.0001 31V13C60.9996 12.8191 60.95 12.6417 60.8567 12.4867C60.7634 12.3318 60.6297 12.205 60.4701 12.12L43.7501 3.11999C43.6054 3.04295 43.444 3.00266 43.2801 3.00266C43.1161 3.00266 42.9547 3.04295 42.8101 3.11999L26.0801 12.12C25.9222 12.2063 25.7906 12.3337 25.6991 12.4885C25.6076 12.6434 25.5596 12.8201 25.5601 13V31C25.5596 31.1799 25.6076 31.3566 25.6991 31.5114C25.7906 31.6663 25.9222 31.7936 26.0801 31.88V31.88ZM27.5601 14.67L42.2801 22.6V38.33L27.5601 30.4V14.67ZM32.7501 10.8L46.8501 18.94L43.2801 20.86L28.6701 13L32.7501 10.8ZM38.0001 7.99999L52.1101 16.14L48.9501 17.84L34.8201 9.68999L38.0001 7.99999ZM50.1301 19.45L52.9001 18V21.3L52.1601 20.56C52.0436 20.4447 51.9007 20.3598 51.7437 20.3127C51.5868 20.2656 51.4207 20.2578 51.2601 20.29C51.1002 20.3236 50.9509 20.3958 50.8254 20.5004C50.6999 20.605 50.6019 20.7388 50.5401 20.89L50.1301 21.89V19.45ZM44.2801 38.33V22.6L48.1301 20.53V26.91C48.1328 27.1395 48.2143 27.361 48.361 27.5375C48.5078 27.714 48.7107 27.8346 48.9358 27.8792C49.161 27.9238 49.3946 27.8895 49.5975 27.7822C49.8003 27.675 49.9602 27.5011 50.0501 27.29L51.8101 23L53.2001 24.38C53.3404 24.5176 53.5183 24.6108 53.7113 24.6479C53.9044 24.685 54.1041 24.6644 54.2855 24.5886C54.4668 24.5129 54.6219 24.3853 54.7312 24.2219C54.8405 24.0585 54.8993 23.8666 54.9001 23.67V16.88L59.0001 14.67V30.4L44.2801 38.33ZM43.2801 5.13999L57.8901 13L54.1501 15L40.0501 6.87999L43.2801 5.13999Z" />
                </svg>
              </div>
              <div className="service-name"><b>N</b>urture培育</div>
              <div className="service-text">盡心盡力培育每位加入團隊的成員，秉承對團隊成員有要求及關愛並存的原則，孕育人才，燃亮別人，令團隊可以在高的標準下傳承</div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 col-ms-12">
            <div className="hi-icon-effect">
              <div className="hi-icon fa">
                <svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
                  <path d="M59.25 51.09L53.94 33C53.8655 32.7521 53.6978 32.5427 53.4722 32.4159C53.2465 32.2891 52.9805 32.2547 52.73 32.32L46.11 34C45.9787 34.0317 45.8551 34.0897 45.7469 34.1705C45.6386 34.2513 45.5478 34.3532 45.48 34.47C45.3502 34.7086 45.318 34.9881 45.39 35.25L45.56 35.83C43.8424 35.7662 42.1583 35.3366 40.62 34.57L36.17 32.32C34.3998 31.4279 32.3614 31.2248 30.45 31.75L26.91 32.7L18.28 33.06L18.46 32.5C18.4999 32.3713 18.5134 32.2359 18.4996 32.1018C18.4859 31.9678 18.4452 31.8379 18.38 31.72C18.3154 31.6034 18.2282 31.5008 18.1234 31.4184C18.0187 31.336 17.8985 31.2753 17.77 31.24L11.18 29.44C10.9307 29.3709 10.6644 29.401 10.4369 29.5241C10.2095 29.6472 10.0385 29.8536 9.95998 30.1L4.75998 46.57C4.68185 46.8293 4.70693 47.1088 4.82998 47.35C4.89461 47.4695 4.98292 47.5746 5.08952 47.6588C5.19612 47.7431 5.31877 47.8047 5.44998 47.84L12 49.64H12.26C12.4806 49.6501 12.6983 49.5869 12.8792 49.4603C13.0601 49.3337 13.194 49.1507 13.26 48.94L15.61 51.94C17.3911 54.2706 19.5511 56.2853 22 57.9L25.76 60.36C26.4621 60.8117 27.288 61.0325 28.1219 60.9912C28.9558 60.95 29.7559 60.6488 30.41 60.13C31.0004 59.6583 31.4245 59.01 31.62 58.28V58.28C32.2685 58.8115 33.0815 59.1013 33.92 59.1C34.4003 59.099 34.8755 59.001 35.3171 58.812C35.7587 58.623 36.1576 58.3468 36.49 58C36.8305 57.6409 37.0867 57.2105 37.24 56.74C37.9815 57.1955 38.8551 57.387 39.7192 57.2835C40.5832 57.1801 41.387 56.7877 42 56.17C42.4596 55.6889 42.7689 55.0842 42.89 54.43C43.6041 54.7686 44.4072 54.8716 45.1837 54.7243C45.9601 54.5769 46.6696 54.1867 47.21 53.61C47.5309 53.2589 47.779 52.8476 47.94 52.4L50.31 52L50.7 53.33C50.7623 53.5444 50.8947 53.7318 51.0759 53.8623C51.2571 53.9928 51.4768 54.0589 51.7 54.05H51.95L58.57 52.37C58.7013 52.3383 58.8248 52.2803 58.9331 52.1995C59.0414 52.1187 59.1322 52.0168 59.2 51.9C59.2611 51.7749 59.297 51.639 59.3056 51.5C59.3141 51.361 59.2953 51.2217 59.25 51.09V51.09ZM6.99998 46.18L11.6 31.61L16.26 32.88L16 33.8L12 46.53L11.71 47.44L6.99998 46.18ZM45.76 52.25C45.4546 52.5606 45.0465 52.7492 44.6121 52.7805C44.1776 52.8118 43.7467 52.6836 43.4 52.42L39.14 49.05C39.0369 48.9686 38.9188 48.9083 38.7924 48.8725C38.666 48.8367 38.5338 48.8262 38.4033 48.8415C38.2728 48.8568 38.1467 48.8977 38.032 48.9618C37.9173 49.0259 37.8164 49.1119 37.735 49.215C37.6536 49.3181 37.5932 49.4362 37.5575 49.5626C37.5217 49.689 37.5112 49.8212 37.5265 49.9517C37.5418 50.0821 37.5827 50.2083 37.6468 50.323C37.7108 50.4377 37.7969 50.5386 37.9 50.62L40.39 52.62C40.5597 52.752 40.6998 52.9181 40.8014 53.1075C40.903 53.297 40.9639 53.5056 40.98 53.72C40.9958 53.9198 40.9683 54.1206 40.8992 54.3088C40.8302 54.4969 40.7213 54.6679 40.58 54.81C40.2485 55.136 39.807 55.326 39.3425 55.3426C38.8779 55.3593 38.4239 55.2014 38.07 54.9L33.95 51.28C33.7522 51.104 33.4928 51.0135 33.2284 51.0285C32.9641 51.0435 32.7165 51.1627 32.54 51.36C32.4519 51.4588 32.3843 51.5741 32.3411 51.6992C32.2979 51.8243 32.28 51.9567 32.2883 52.0888C32.2967 52.2209 32.3312 52.35 32.3899 52.4687C32.4485 52.5873 32.5301 52.6931 32.63 52.78L35 54.82C35.1307 54.93 35.2372 55.0659 35.3129 55.219C35.3887 55.3722 35.4319 55.5393 35.44 55.71C35.4472 55.8761 35.4198 56.0418 35.3595 56.1968C35.2993 56.3517 35.2075 56.4924 35.09 56.61C34.8044 56.889 34.4278 57.0557 34.0292 57.0796C33.6307 57.1035 33.2368 56.9829 32.92 56.74L28.64 53.14C28.4371 52.9689 28.1746 52.8855 27.9101 52.908C27.6457 52.9305 27.401 53.0571 27.23 53.26C27.0589 53.4629 26.9755 53.7254 26.998 53.9899C27.0205 54.2543 27.1471 54.4989 27.35 54.67L29.35 56.33C29.492 56.4677 29.605 56.6324 29.6823 56.8144C29.7596 56.9965 29.7996 57.1922 29.8 57.39C29.7969 57.6209 29.7413 57.8481 29.6374 58.0543C29.5334 58.2605 29.3838 58.4403 29.2 58.58C28.8736 58.8316 28.4775 58.9762 28.0658 58.9941C27.6541 59.012 27.2469 58.9023 26.9 58.68L23.15 56.22C20.8899 54.757 18.8976 52.9169 17.26 50.78L14 46.64L14.5 45.08L17.65 35.08L25.07 34.77L21.51 39.77C20.9924 40.4861 20.7748 41.3761 20.9037 42.2502C21.0326 43.1244 21.4977 43.9137 22.2 44.45C22.9375 45.0299 23.861 45.3213 24.7978 45.2698C25.7346 45.2182 26.6205 44.8273 27.29 44.17L28.89 42.57C29.6301 41.8441 30.5834 41.3745 31.61 41.23C32.2828 41.1272 32.9696 41.1629 33.6282 41.3348C34.2867 41.5068 34.9033 41.8114 35.44 42.23L45.58 50.23C45.734 50.3505 45.8615 50.5015 45.9544 50.6736C46.0473 50.8457 46.1037 51.0351 46.12 51.23C46.1322 51.4172 46.1046 51.6049 46.0391 51.7807C45.9736 51.9564 45.8717 52.1164 45.74 52.25H45.76ZM48 50.37C47.7935 49.7022 47.3889 49.1128 46.84 48.68L36.7 40.68C35.3645 39.6371 33.6961 39.1141 32.0042 39.2078C30.3124 39.3016 28.712 40.0059 27.5 41.19L25.9 42.79C25.5745 43.097 25.1506 43.2785 24.7038 43.3023C24.257 43.3261 23.8163 43.1907 23.46 42.92C23.3068 42.8101 23.1771 42.6706 23.0788 42.5097C22.9804 42.3488 22.9153 42.1699 22.8874 41.9834C22.8594 41.7969 22.8691 41.6067 22.9159 41.4241C22.9628 41.2414 23.0457 41.07 23.16 40.92L27.7 34.56L31 33.67C32.437 33.2743 33.9698 33.4276 35.3 34.1L39.75 36.35C41.7201 37.34 43.8951 37.8537 46.1 37.85H46.19L49.77 50.07L48 50.37ZM52.38 51.85L52 50.59L47.86 36.54L47.6 35.67L52.29 34.48L57 50.66L52.38 51.85Z" />
                  <path d="M21.0599 23.55C22.4416 25.0942 24.1343 26.3287 26.0268 27.1723C27.9194 28.0159 29.9691 28.4496 32.0411 28.4449C34.1132 28.4402 36.1609 27.9971 38.0496 27.1449C39.9383 26.2927 41.6254 25.0505 42.9999 23.5C43.0657 23.4197 43.1227 23.3325 43.1699 23.24C43.2565 23.038 43.2741 22.813 43.2199 22.6C42.7722 20.7407 41.8686 19.0221 40.5907 17.5992C39.3127 16.1764 37.7007 15.0941 35.8999 14.45C36.956 13.6376 37.7313 12.515 38.1169 11.2396C38.5025 9.96421 38.4792 8.6001 38.0501 7.33867C37.6211 6.07723 36.8079 4.98178 35.7246 4.20601C34.6413 3.43024 33.3423 3.01309 32.0099 3.01309C30.6775 3.01309 29.3786 3.43024 28.2953 4.20601C27.212 4.98178 26.3988 6.07723 25.9698 7.33867C25.5407 8.6001 25.5174 9.96421 25.903 11.2396C26.2886 12.515 27.0638 13.6376 28.1199 14.45C26.3329 15.0845 24.7309 16.1518 23.4571 17.5565C22.1832 18.9613 21.2772 20.6597 20.8199 22.5C20.7452 22.7137 20.7452 22.9463 20.8199 23.16C20.8687 23.3068 20.9508 23.4403 21.0599 23.55ZM27.6099 9.39C27.6099 8.52174 27.8674 7.67298 28.3498 6.95105C28.8322 6.22911 29.5178 5.66644 30.32 5.33417C31.1221 5.0019 32.0048 4.91496 32.8564 5.08435C33.708 5.25374 34.4902 5.67185 35.1041 6.2858C35.7181 6.89975 36.1362 7.68198 36.3056 8.53355C36.475 9.38513 36.388 10.2678 36.0558 11.07C35.7235 11.8721 35.1608 12.5578 34.4389 13.0402C33.717 13.5225 32.8682 13.78 31.9999 13.78V13.78C30.8356 13.78 29.719 13.3175 28.8957 12.4942C28.0725 11.6709 27.6099 10.5543 27.6099 9.39V9.39ZM31.9999 15.78C34.044 15.7821 36.0329 16.4427 37.672 17.6639C39.3111 18.8852 40.5132 20.602 41.0999 22.56C39.9171 23.7873 38.4989 24.7636 36.9302 25.4304C35.3615 26.0972 33.6745 26.4408 31.9699 26.4408C30.2654 26.4408 28.5784 26.0972 27.0097 25.4304C25.4409 24.7636 24.0228 23.7873 22.8399 22.56C23.4325 20.5938 24.6443 18.8717 26.2948 17.65C27.9454 16.4283 29.9464 15.7724 31.9999 15.78V15.78Z" />
                </svg>
              </div>
              <div className="service-name"><b>O</b>ffering 貢獻</div>
              <div className="service-text">團隊每位經理及同事，各善其職，做好各自角色的職責外，以施與受為原則，樂於貢獻團隊，幫助及成就更多的團隊成員。</div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 col-ms-12">
            <div className="hi-icon-effect">
              <div className="hi-icon fa">
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 64 64"><g id="Layer_38" data-name="Layer 38"><path d="M59,12.59A8,8,0,0,0,52.32,9H48.17V5.5a1,1,0,0,0-1-1H16.85a1,1,0,0,0-1,1V9H11.68A8,8,0,0,0,5,12.59c-4.91,8,5,17,12.91,16.94a16.29,16.29,0,0,0,6.37,6.33v1.23a5,5,0,0,0,4,4.93V52.58H23.77A1,1,0,0,0,23,53l-4,4.92a1,1,0,0,0,.78,1.63H44.25A1,1,0,0,0,45,57.87L41,53a1,1,0,0,0-.77-.37H35.73V42a5,5,0,0,0,4-4.93V35.86a16.31,16.31,0,0,0,6.37-6.34C54,29.55,63.93,20.6,59,12.59ZM6.13,19.39A6.08,6.08,0,0,1,11.68,11h4.17c.18,4.07-.65,12.76,1.08,16.46A13.38,13.38,0,0,1,6.13,19.39Zm36,38.11H21.87l2.37-2.92H39.77ZM30.29,52.58V42.12h3.44V52.58Zm7.47-15.49a3,3,0,0,1-3,3H29.29a3.07,3.07,0,0,1-3-3.35,16.05,16.05,0,0,0,11.5,0ZM32,35.85A14.18,14.18,0,0,1,17.85,21.69V6.5H46.17V21.69A14.18,14.18,0,0,1,32,35.85ZM57.87,19.39a13.38,13.38,0,0,1-10.78,8.06C48.82,23.78,48,15,48.17,11h4.15A6.08,6.08,0,0,1,57.87,19.39Z" /></g></svg>
              </div>
              <div className="service-name"><b>V</b>ictory勝利</div>
              <div className="service-text">理財策劃乃有競爭性的行業，團隊成員須以良性心態享受競爭，盡力追求每種方向性的勝利，如更高的職級，更豐厚的收入以及更卓越的成就，無論物質及精神層面都得到滿足，最終成就更卓越的團隊。</div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 col-ms-12">
            <div className="hi-icon-effect">
              <div className="hi-icon fa">
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 64 64"><g id="Layer_29" data-name="Layer 29"><path d="M51.1,19.4c-4.24-4.95.25-11-9-12a13,13,0,0,1-2.83-.64C36.93,5.68,34.93,3,32,3s-4.93,2.68-7.29,3.75a13,13,0,0,1-2.83.64c-9.23,1-4.74,7.05-9,12-4.49,5.6-1.39,7.37,1.49,12.25,1.38,4.73.37,8.76,6.77,9.56V60a1,1,0,0,0,.58.91,1,1,0,0,0,1.08-.16l9.18-8,9.18,8a1,1,0,0,0,1.08.16,1,1,0,0,0,.58-.91V41.21c6.38-.79,5.4-4.83,6.77-9.56C52.48,26.8,55.59,25,51.1,19.4ZM32.66,50.63a1,1,0,0,0-1.32,0L23.16,57.8V41.54c3.34.41,5.27,4.17,8.84,4.17s5.5-3.76,8.84-4.17V57.8ZM49.5,28.12A10.64,10.64,0,0,0,47,34.18c-.24,1.55-.46,3-1.3,3.86-1.63,1.52-5,1.11-7.16,2.08S34.27,43.66,32,43.71c-1.27,0-2.48-.9-3.76-1.85a10.64,10.64,0,0,0-6.06-2.51c-3.75-.41-4.76-1.42-5.17-5.17a10.71,10.71,0,0,0-2.51-6.06c-2.42-3-2.43-4.56,0-7.52A10.67,10.67,0,0,0,17,14.53c.41-3.74,1.41-4.76,5.17-5.16a10.71,10.71,0,0,0,6.06-2.51C33,2.77,34.31,6.55,38.53,8.6c2.12,1,5.53.55,7.16,2.07s1.1,5,2.07,7.16C49.79,22,53.59,23.41,49.5,28.12Z" /><path d="M32,10.85A13.52,13.52,0,0,0,18.49,24.36c.74,17.92,26.28,17.91,27,0A13.52,13.52,0,0,0,32,10.85Zm0,25a11.52,11.52,0,0,1-11.51-11.5c.63-15.27,22.39-15.27,23,0A11.52,11.52,0,0,1,32,35.86Z" /></g></svg>
              </div>
              <div className="service-name"><b>A</b>dvancement 進步</div>
              <div className="service-text">做更好的自己，團隊成員要在不同層面上追求自我提升，如銷售，招募，管理，知識層面，才能在面對變幻無窮的理財環境中，屹立不倒，才有能力做好培育，貢獻及勝利以上三大核心價值。</div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="contentTitle">
          <br /><span>團隊年輕有活力 </span><br />
          <span>90後團隊打造行業新勢力</span><br />
        </div>
        <div className="row">
          <div className="col-xs-12 col-md-12">
            <div className="title-box">
              <div className="subtitle">
                <img alt="" src={require('../../assets/img/title1.svg').default} />
                <span>Our Story</span>
                <img alt="" src={require('../../assets/img/title2.svg').default} />
              </div>
              <div className="text">年輕人缺乏經驗和渠道，在發展個人事業時往往需要投放更多精神與時間才能接近夢想。作為過來人，香港永明金融有限公司（下稱Sun Life永明）高級行政業務總監朱超（Jason）深明年輕人的想法和需要，因此多年來積極善用公司的平台與團隊的力量，為有志在理財策劃行業發展的年輕人提供所須的知識和經驗，助他們迅速成長，快人一步實現目標。</div> <br />
              <div className="text">年輕、幹勁、活力不只是年輕人的代名詞，也是Sun Life永明Nova營業區予人的印象。「現時整個營業區約有250個成員，當中大約8成的成員為Y世代（90後），他們大多是大學畢業後便投身行業，或從其他行業轉行的全新人。」由於團隊成員的年紀與背景接近，團隊不只充滿活力，而且十分有「火」。「所以在成立團隊時，我們選擇了Nova，即『新星』這個名字，寓意團隊嶄露頭角且有爆炸力。」</div>
              <br />
            </div>
          </div>
        </div>
        <br />
        <div className="about-video">
          <video width="100%" height="350" src={require('../../assets/video/Nova Video.mp4')} type="video/mp4" controls />
        </div>
        <br />
      </div>
    </div>
  );
}