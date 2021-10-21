/* eslint-disable react/require-default-props */
import React from 'react';
import '../../../assets/styles/error.css';
import Button from '../button/Button';

interface ErrorProps {
  errorInfo: string;
  tryAgain: () => void;
  className?: string;
}

const Error = ({ errorInfo, tryAgain, className }: ErrorProps): JSX.Element => {
  return (
    <div className={`container error ${className}`}>
      <svg
        className="error--image"
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="30%"
        height="30%"
        viewBox="0 0 512.000000 512.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <g
          transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
          stroke="none"
        >
          <path
            fill="#f70000"
            d="M2370 5080 c-437 -34 -856 -180 -1220 -425 -374 -252 -661 -580 -855
-980 -126 -258 -193 -474 -236 -756 -31 -203 -31 -515 0 -718 43 -285 116
-517 242 -771 502 -1012 1609 -1569 2713 -1365 1038 192 1849 1003 2041 2041
86 463 36 957 -140 1394 -188 467 -538 893 -965 1173 -129 84 -380 210 -520
261 -323 116 -728 172 -1060 146z m393 -161 c734 -64 1390 -460 1796 -1084
181 -276 306 -610 357 -950 25 -167 25 -503 0 -670 -78 -516 -301 -961 -665
-1326 -214 -214 -375 -330 -636 -459 -237 -117 -460 -187 -725 -227 -160 -24
-501 -24 -665 0 -780 117 -1452 604 -1795 1302 -116 237 -187 461 -226 720
-28 179 -25 524 4 700 89 524 319 967 688 1325 130 126 214 194 356 288 443
292 982 428 1511 381z"
          />
          <path
            fill="#f70000"
            d="M1231 3864 c-60 -30 -102 -82 -120 -146 -9 -32 -11 -276 -9 -954 l3
-911 30 -49 c19 -30 49 -60 79 -79 49 -30 50 -30 218 -33 l168 -3 0 75 0 76
-125 0 c-135 0 -185 12 -204 48 -8 14 -11 214 -11 636 l0 616 1305 0 1305 0 0
-616 c0 -422 -3 -622 -11 -636 -20 -36 -69 -48 -209 -48 l-130 0 0 -75 0 -75
158 0 c144 0 161 2 208 24 56 26 98 74 120 133 11 31 13 214 14 951 0 998 3
951 -58 1016 -15 16 -49 39 -77 52 l-50 24 -1276 0 -1275 0 -53 -26z m2614
-159 c25 -24 25 -26 25 -215 l0 -190 -328 0 c-181 0 -768 -3 -1305 -7 l-977
-6 0 197 c0 196 0 197 25 221 l24 25 1256 0 1256 0 24 -25z"
          />
          <path
            fill="#ff5e57"
            d="M1450 3515 l0 -75 80 0 80 0 0 75 0 75 -80 0 -80 0 0 -75z"
          />
          <path
            fill="#febc2b"
            d="M1770 3515 l0 -75 80 0 80 0 0 75 0 75 -80 0 -80 0 0 -75z"
          />
          <path
            fill="#23c73e"
            d="M2090 3515 l0 -75 80 0 80 0 0 75 0 75 -80 0 -80 0 0 -75z"
          />
          <path
            fill="#f70000"
            d="M2390 2595 c-396 -85 -672 -451 -646 -855 12 -200 85 -366 225 -514
103 -108 219 -178 365 -221 519 -150 1046 248 1046 790 0 382 -279 723 -652
799 -93 19 -250 19 -338 1z m334 -175 c115 -29 207 -82 295 -170 85 -84 130
-154 169 -262 24 -66 27 -86 26 -208 0 -126 -2 -141 -31 -216 -72 -191 -202
-325 -383 -397 -189 -75 -409 -56 -585 51 -74 45 -179 150 -223 225 -84 139
-113 322 -77 482 41 186 178 361 345 443 47 23 110 48 140 56 82 22 232 20
324 -4z"
          />
          <path
            fill="#f70000"
            d="M2272 2073 l-51 -58 111 -112 111 -111 -111 -117 -111 -117 52 -59
52 -59 117 117 118 118 118 -118 118 -118 52 60 53 60 -112 116 -113 116 112
112 112 113 -51 58 -52 58 -119 -119 -118 -118 -118 118 -119 119 -51 -59z"
          />
        </g>
      </svg>
      <div className="error__text">{errorInfo}</div>
      <Button
        theme="secondary"
        text="Try again"
        onClick={tryAgain}
        submit={false}
        className="error__btn"
      />
    </div>
  );
};

export default Error;
