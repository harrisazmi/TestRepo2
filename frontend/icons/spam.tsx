export default function SpamUpdateIcon({
  className = '',
  classNamePath = 'fill-[#F0FDF4] dark: fill-[#052E16]',
  classNameCircle = 'fill-[#15803D] dark: fill-[#16A34A]',
  classNamePath2 = 'fill-[#15803D] dark: fill-[#16A34A]',
}) {
  return (
    <svg
      width="62"
      height="22"
      viewBox="0 0 62 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M0 11C0 4.92487 4.92487 0 11 0H51C57.0751 0 62 4.92487 62 11C62 17.0751 57.0751 22 51 22H11C4.92487 22 0 17.0751 0 11Z"
        fill="#FEF2F2"
        className={classNamePath}
      />
      <circle
        cx="12"
        cy="11"
        r="4"
        fill="#DC2626"
        className={classNameCircle}
      />
      <path
        d="M26.7188 8.56534C26.6733 8.16193 26.4858 7.84943 26.1562 7.62784C25.8267 7.40341 25.4119 7.29119 24.9119 7.29119C24.554 7.29119 24.2443 7.34801 23.983 7.46165C23.7216 7.57244 23.5185 7.72585 23.3736 7.92188C23.2315 8.11506 23.1605 8.33523 23.1605 8.58239C23.1605 8.78977 23.2088 8.96875 23.3054 9.11932C23.4048 9.26989 23.5341 9.39631 23.6932 9.49858C23.8551 9.59801 24.0284 9.68182 24.2131 9.75C24.3977 9.81534 24.5753 9.86932 24.7457 9.91193L25.598 10.1335C25.8764 10.2017 26.1619 10.294 26.4545 10.4105C26.7472 10.527 27.0185 10.6804 27.2685 10.8707C27.5185 11.0611 27.7202 11.2969 27.8736 11.5781C28.0298 11.8594 28.108 12.196 28.108 12.5881C28.108 13.0824 27.9801 13.5213 27.7244 13.9048C27.4716 14.2884 27.1037 14.5909 26.6207 14.8125C26.1406 15.0341 25.5597 15.1449 24.8778 15.1449C24.2244 15.1449 23.6591 15.0412 23.1818 14.8338C22.7045 14.6264 22.331 14.3324 22.0611 13.9517C21.7912 13.5682 21.642 13.1136 21.6136 12.5881H22.9347C22.9602 12.9034 23.0625 13.1662 23.2415 13.3764C23.4233 13.5838 23.6548 13.7386 23.9361 13.8409C24.2202 13.9403 24.5312 13.9901 24.8693 13.9901C25.2415 13.9901 25.5724 13.9318 25.8622 13.8153C26.1548 13.696 26.3849 13.5312 26.5526 13.321C26.7202 13.108 26.804 12.8594 26.804 12.5753C26.804 12.3168 26.7301 12.1051 26.5824 11.9403C26.4375 11.7756 26.2401 11.6392 25.9901 11.5312C25.7429 11.4233 25.4631 11.3281 25.1506 11.2457L24.1193 10.9645C23.4205 10.7741 22.8665 10.4943 22.4574 10.125C22.0511 9.75568 21.848 9.26705 21.848 8.65909C21.848 8.15625 21.9844 7.71733 22.2571 7.34233C22.5298 6.96733 22.8991 6.67614 23.3651 6.46875C23.831 6.25852 24.3565 6.15341 24.9418 6.15341C25.5327 6.15341 26.054 6.2571 26.5057 6.46449C26.9602 6.67188 27.3182 6.95739 27.5795 7.32102C27.8409 7.68182 27.9773 8.09659 27.9886 8.56534H26.7188ZM29.5792 17.4545V8.45455H30.8235V9.51562H30.93C31.0039 9.37926 31.1104 9.22159 31.2496 9.04261C31.3888 8.86364 31.582 8.70739 31.8292 8.57386C32.0763 8.4375 32.4031 8.36932 32.8093 8.36932C33.3377 8.36932 33.8093 8.50284 34.2241 8.76989C34.6388 9.03693 34.9641 9.42187 35.1999 9.92472C35.4386 10.4276 35.5579 11.0327 35.5579 11.7401C35.5579 12.4474 35.44 13.054 35.2042 13.5597C34.9684 14.0625 34.6445 14.4503 34.2326 14.723C33.8207 14.9929 33.3505 15.1278 32.8221 15.1278C32.4244 15.1278 32.0991 15.0611 31.8462 14.9276C31.5962 14.794 31.4002 14.6378 31.2582 14.4588C31.1161 14.2798 31.0067 14.1207 30.93 13.9815H30.8533V17.4545H29.5792ZM30.8278 11.7273C30.8278 12.1875 30.8945 12.5909 31.0281 12.9375C31.1616 13.2841 31.3548 13.5554 31.6076 13.7514C31.8604 13.9446 32.1701 14.0412 32.5366 14.0412C32.9173 14.0412 33.2354 13.9403 33.4911 13.7386C33.7468 13.5341 33.94 13.2571 34.0707 12.9077C34.2042 12.5582 34.271 12.1648 34.271 11.7273C34.271 11.2955 34.2056 10.9077 34.0749 10.5639C33.9471 10.2202 33.7539 9.94886 33.4954 9.75C33.2397 9.55114 32.9201 9.4517 32.5366 9.4517C32.1673 9.4517 31.8548 9.54687 31.5991 9.73722C31.3462 9.92756 31.1545 10.1932 31.0238 10.5341C30.8931 10.875 30.8278 11.2727 30.8278 11.7273ZM38.8903 15.1449C38.4755 15.1449 38.1005 15.0682 37.7653 14.9148C37.43 14.7585 37.1644 14.5327 36.9684 14.2372C36.7752 13.9418 36.6786 13.5795 36.6786 13.1506C36.6786 12.7812 36.7496 12.4773 36.8917 12.2386C37.0337 12 37.2255 11.8111 37.467 11.6719C37.7085 11.5327 37.9783 11.4276 38.2766 11.3565C38.5749 11.2855 38.8789 11.2315 39.1886 11.1946C39.5806 11.1491 39.8988 11.1122 40.1431 11.0838C40.3874 11.0526 40.565 11.0028 40.6758 10.9347C40.7866 10.8665 40.842 10.7557 40.842 10.6023V10.5724C40.842 10.2003 40.7369 9.91193 40.5266 9.70739C40.3192 9.50284 40.0096 9.40057 39.5977 9.40057C39.1687 9.40057 38.8306 9.49574 38.5835 9.68608C38.3391 9.87358 38.1701 10.0824 38.0763 10.3125L36.8789 10.0398C37.021 9.64205 37.2283 9.32102 37.5011 9.0767C37.7766 8.82955 38.0934 8.65057 38.4513 8.53977C38.8093 8.42614 39.1857 8.36932 39.5806 8.36932C39.842 8.36932 40.119 8.40057 40.4116 8.46307C40.707 8.52273 40.9826 8.63352 41.2383 8.79545C41.4968 8.95739 41.7085 9.18892 41.8732 9.49006C42.038 9.78835 42.1204 10.1761 42.1204 10.6534V15H40.8761V14.1051H40.8249C40.7425 14.2699 40.619 14.4318 40.4542 14.5909C40.2894 14.75 40.0778 14.8821 39.8192 14.9872C39.5607 15.0923 39.2511 15.1449 38.8903 15.1449ZM39.1673 14.1222C39.5195 14.1222 39.8207 14.0526 40.0707 13.9134C40.3235 13.7741 40.5153 13.5923 40.646 13.3679C40.7795 13.1406 40.8462 12.8977 40.8462 12.6392V11.7955C40.8008 11.8409 40.7127 11.8835 40.582 11.9233C40.4542 11.9602 40.3079 11.9929 40.1431 12.0213C39.9783 12.0469 39.8178 12.071 39.6616 12.0938C39.5053 12.1136 39.3746 12.1307 39.2695 12.1449C39.0224 12.1761 38.7965 12.2287 38.592 12.3026C38.3903 12.3764 38.2283 12.483 38.1062 12.6222C37.9869 12.7585 37.9272 12.9403 37.9272 13.1676C37.9272 13.483 38.0437 13.7216 38.2766 13.8835C38.5096 14.0426 38.8065 14.1222 39.1673 14.1222ZM43.8175 15V8.45455H45.0405V9.51989H45.1214C45.2578 9.15909 45.4808 8.87784 45.7905 8.67614C46.1001 8.47159 46.4709 8.36932 46.9027 8.36932C47.3402 8.36932 47.7067 8.47159 48.0021 8.67614C48.3004 8.88068 48.5206 9.16193 48.6626 9.51989H48.7308C48.8871 9.17045 49.1357 8.89205 49.4766 8.68466C49.8175 8.47443 50.2237 8.36932 50.6953 8.36932C51.2891 8.36932 51.7734 8.5554 52.1484 8.92756C52.5263 9.29972 52.7152 9.8608 52.7152 10.6108V15H51.4411V10.7301C51.4411 10.2869 51.3203 9.96591 51.0788 9.76705C50.8374 9.56818 50.549 9.46875 50.2138 9.46875C49.799 9.46875 49.4766 9.59659 49.2464 9.85227C49.0163 10.1051 48.9013 10.4304 48.9013 10.8281V15H47.6314V10.6491C47.6314 10.294 47.5206 10.0085 47.299 9.79261C47.0774 9.5767 46.7891 9.46875 46.4339 9.46875C46.1925 9.46875 45.9695 9.53267 45.7649 9.66051C45.5632 9.78551 45.3999 9.96023 45.2749 10.1847C45.1527 10.4091 45.0916 10.669 45.0916 10.9645V15H43.8175Z"
        fill="#DC2626"
        className={classNamePath2}
      />
    </svg>
  );
}
