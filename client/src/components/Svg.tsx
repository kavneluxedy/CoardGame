import React from 'react'

const Svg = (width: string | number, height: string | number) => {
    return (
        <><svg
            xml:space="preserve"
            width="1016px"
            height="456px"
            version="1.1"
            style={`shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd`}
            viewBox={`0 0 ${width} ${height}`} /><defs>
                <font id="FontID0" horiz-adv-x="707" font-variant="normal" style="fill-rule:nonzero" font-style="normal" font-weight="400">
                    <font-face
                        font-family="Ruslan Display">
                        <font-face-src>
                            <font-face-name name="Ruslan Display" />
                        </font-face-src>
                    </font-face>
                    <missing-glyph><path d="M0 0z" /></missing-glyph>
                    <glyph unicode="A" horiz-adv-x="707" d="M689.992 8.00187l0 -8.00187 -231.998 0c-2.66729,36.6647 -8.33353,75.9968 -16.9987,117.996 -46.6659,-46.6659 -93.3318,-85.9979 -139.998,-117.996l-232.998 0c-4.66659,27.3316 -7.00222,63.5011 -7.00222,108.499 0,44.9983 6.67056,90.1647 20.0023,135.499 47.9972,13.9998 94.1633,37.6644 138.498,70.9985 44.3303,33.3295 76.4966,69.3309 96.4989,107.995 -18.6664,29.3355 -37.6691,54.9994 -56.9987,77.0011l331.996 0c65.9956,-144.664 98.9981,-308.663 98.9981,-491.991zm-267 182.997c-16.6624,57.3304 -39.332,113.329 -67.9949,167.997 -31.3348,-92.0005 -49.3332,-178.998 -53.9998,-260.997 49.3332,26.6682 89.9965,57.6667 121.995,93.0002z" />
                    <glyph unicode="C" horiz-adv-x="631" d="M448.992 438.996c-23.333,3.9986 -45.8298,5.9979 -67.4997,5.9979 -21.6653,0 -47.8291,-3.66694 -78.4959,-11.0008 -10.0012,-41.9993 -14.9994,-82.999 -14.9994,-122.999 0,-103.328 45.9979,-182.66 137.998,-237.996 61.329,40.668 116.665,91.3325 165.998,151.998 1.9993,-26.6636 3.66694,-67.3316 4.99825,-121.999 -49.3332,-38.664 -99.666,-68.9992 -150.999,-90.9962 -51.3325,-22.0016 -115.333,-33.0025 -191.998,-33.0025l-22.9966 0c-60.0024,26.0002 -107.168,64.3326 -141.502,115.002 -34.3291,50.6645 -51.496,103.996 -51.496,159.995 0,74.6655 30.6668,138.167 91.9958,190.499 61.3337,52.3321 150.335,78.5006 267,78.5006 65.3323,0 133.663,-8.33353 204.994,-25.0006 -10.6645,-41.9993 -23.9963,-81.6677 -40,-119 -41.9993,-3.9986 -85.3299,-5.9979 -129.997,-5.9979 6.66589,18.6664 12.3321,40.6633 16.9987,66.0003z" />
                    <glyph unicode="D" horiz-adv-x="717" d="M314.997 522.994c128.665,0 233.33,-15.9991 313.993,-48.0019 28.6675,-57.3304 42.999,-115.329 42.999,-173.995 0,-75.3334 -25.6639,-140.666 -76.9964,-195.997 -74.6655,-79.332 -175.663,-119 -302.997,-119 -43.9986,0 -103.665,4.99825 -178.998,14.9994 -26.0002,134 -39.0004,257.662 -39.0004,370.996 0,39.332 1.9993,81.9993 6.00257,127.997 107.332,15.3311 185.664,23.0013 234.997,23.0013zm29.9988 -75.0018c-12.0005,-125.33 -17.9984,-215.163 -17.9984,-269.494 0,-54.3314 0.99965,-98.4982 2.99895,-132.5 35.9967,19.3344 64.1645,51.8323 84.4985,97.4986 20.334,45.6663 30.4987,92.0005 30.4987,138.998 0,47.0022 -8.5017,85.4981 -25.5004,115.502 -16.9987,29.9988 -41.8312,46.6659 -74.4973,49.9965z" />
                    <glyph unicode="R" horiz-adv-x="705" d="M621.993 325.993l-0.99965 -33.9974c-53.3318,-28.6675 -120,-51.0008 -200,-66.9999 57.3351,-15.3311 112.666,-22.9966 165.998,-22.9966l21.002 0c36.6647,-53.9998 60.3293,-121.336 70.9985,-201.999l-258.998 0c-6.66589,46.6659 -20.1658,86.8341 -40.4998,120.5 -20.3293,33.6658 -45.1664,56.4989 -74.4973,68.4994 -0.66799,-11.3372 -0.99965,-34.0021 -0.99965,-67.9996 0,-34.0021 1.9993,-74.3338 5.9979,-121l-217.994 0c-19.3344,96.6671 -28.9992,186.495 -28.9992,269.494 0,82.999 4.66659,159.832 13.9998,230.499l521.99 0c15.3358,-67.3316 23.0013,-125.33 23.0013,-174zm-295.999 107c-7.9972,-58.6664 -13.9998,-116.333 -17.9984,-172.996 36.6647,5.32991 66.6683,18.33 90.0012,39.0004 -12.6685,44.6619 -36.6694,89.3285 -72.0028,133.995z" />
                    <glyph unicode="S" horiz-adv-x="634" d="M422.992 439.996c-26.6636,3.9986 -55.1629,5.9979 -85.4981,5.9979 -30.3305,0 -59.8295,-1.9993 -88.4971,-5.9979 17.9984,-30.6668 39.332,-55.6674 64.001,-75.0018 24.6643,-19.3297 55.8309,-38.4959 93.4953,-57.4986 37.6691,-18.998 68.3359,-36.4966 92.0005,-52.5003 23.6646,-15.9991 49.833,-42.331 78.5006,-78.9957 28.6629,-36.6694 46.6659,-75.0018 53.9951,-115.002 -31.9981,-41.3313 -74.3291,-77.8326 -126.998,-109.494 -52.6638,-31.6665 -106.664,-52.8366 -161.995,-63.5011 -37.3327,3.33528 -84.4985,13.8316 -141.502,31.4983 -56.9987,17.6667 -99.8295,26.5001 -128.497,26.5001 -28.6675,0 -57.3304,-9.00152 -85.9979,-26.9999 12.0005,34.0021 31.6665,76.6648 58.998,127.997l8.00187 0c42.6673,0 82.8308,-6.66589 120.495,-19.9977 37.6691,-13.3318 72.0028,-26.6682 103.001,-40 30.9985,-13.3318 55.9991,-19.9977 74.9971,-19.9977 19.0027,0 32.8343,1.33131 41.4995,3.9986 0,43.9986 -13.6634,80.3317 -40.9997,108.999 -14.6631,15.3311 -27.1634,27.1634 -37.4962,35.4969 -10.3328,8.33353 -26.1684,19.8342 -47.5021,34.5019l-16.9987 12.0005c-45.3346,31.3302 -82.6673,63.1648 -111.998,95.4993 -29.3355,32.3298 -50.6645,72.1617 -64.001,119.496 21.3337,47.3339 42.3356,88.3336 63.0013,122.999 63.333,15.3311 128.997,23.0013 196.996,23.0013l43.9986 0c57.3351,0 122.999,-8.00187 196.996,-24.0009 -10.6645,-43.9986 -23.6646,-83.667 -38.9957,-119 -55.9991,-3.9986 -99.3344,-5.9979 -130.001,-5.9979 6.00257,15.3311 11.6688,37.3327 16.9987,66.0003z" />
                </font>
                <style type="text/css">
                    < />![CDATA[
                    @font-face {font - family}:"Ruslan Display";font-variant:normal;font-style:normal;font-weight:normal;src:url("#FontID0") format(svg){'}'}
                    .fil2 {fill}:none}
                    .fil0 {fill}:none}
                    .fil3 {fill}:black}
                    .fil4 {fill}:black;fill-rule:nonzero}
                    .fil1 {fill}:url(#id2)}
                    .fnt0 {font - height}:normal;font-size:34.56px;font-family:'Ruslan Display'}
                    ]]>
                </style>
                <clipPath id="id0">
                    <path d="M24.05 18.51c0,0 1,-2.49 1.08,-4.05 0.08,-1.56 -1.4,-2.3 -0.41,-3.49 0.98,-1.19 2.14,-1.72 1.24,-2.95 -0.91,-1.23 1.97,-4.4 2.21,-2.77 0.24,1.63 -0.23,1.56 0.85,3.89 1.09,2.34 2.5,0.53 2.94,-1.26 0.43,-1.79 0.49,-4.93 -2.01,-4.01 0.41,-5.06 4.5,-4.41 6.51,-2.29 2.01,2.12 1.46,2.7 3.52,2.48 2.06,-0.22 1.98,2.22 0.5,3.19 -4.01,2.62 -0.3,1.96 0.65,4.53 0.6,1.63 -0.54,1.63 -0.54,3.21 0,1.51 0.68,3.26 0.77,3.44 0.37,0.59 0.69,1.21 0.98,1.84l0 0c0.11,0.24 0.22,0.48 0.31,0.72l0.01 0.01 0 0 0 0c0.11,0.29 0.22,0.58 0.32,0.87l0 0c0.6,1.73 0.91,3.5 0.91,5.09 0,3.72 -1.75,8.39 -4.82,11.28l0 0c-0.23,0.21 -0.47,0.42 -0.71,0.61l0 0c-1.6,1.28 -3.51,2.08 -5.67,2.08 -2.81,0 -5.22,-1.4 -7.07,-3.46l0 0c-0.38,-0.43 -0.74,-0.88 -1.08,-1.35l0 0 0 0 0 0c-1.95,-2.77 -3.06,-6.25 -3.06,-9.16 0,-2.66 0.92,-5.81 2.57,-8.45l0 0z" />
                </clipPath>
                <clipPath id="id1">
                    <path d="M24.05 18.51c0,0 1,-2.49 1.08,-4.05 0.08,-1.56 -1.4,-2.3 -0.41,-3.49 0.98,-1.19 2.14,-1.72 1.24,-2.95 -0.91,-1.23 1.97,-4.4 2.21,-2.77 0.24,1.63 -0.23,1.56 0.85,3.89 1.09,2.34 2.5,0.53 2.94,-1.26 0.43,-1.79 0.49,-4.93 -2.01,-4.01 0.41,-5.06 4.5,-4.41 6.51,-2.29 2.01,2.12 1.46,2.7 3.52,2.48 2.06,-0.22 1.98,2.22 0.5,3.19 -4.01,2.62 -0.3,1.96 0.65,4.53 0.6,1.63 -0.54,1.63 -0.54,3.21 0,1.51 0.68,3.26 0.77,3.44 0.37,0.59 0.69,1.21 0.98,1.84l0 0c0.11,0.24 0.22,0.48 0.31,0.72l0.01 0.01 0 0 0 0c0.11,0.29 0.22,0.58 0.32,0.87l0 0c0.6,1.73 0.91,3.5 0.91,5.09 0,3.72 -1.75,8.39 -4.82,11.28l0 0c-0.23,0.21 -0.47,0.42 -0.71,0.61l0 0c-1.6,1.28 -3.51,2.08 -5.67,2.08 -2.81,0 -5.22,-1.4 -7.07,-3.46l0 0c-0.38,-0.43 -0.74,-0.88 -1.08,-1.35l0 0 0 0 0 0c-1.95,-2.77 -3.06,-6.25 -3.06,-9.16 0,-2.66 0.92,-5.81 2.57,-8.45l0 0z" />
                </clipPath>
                <linearGradient id="id2" gradientUnits="userSpaceOnUse" x1="33.97" y1="41.02" x2="31.93" y2="0.15">
                    <stop offset="0" style="stop-opacity:1; stop-color:#321654" />
                    <stop offset="0.270588" style="stop-opacity:1; stop-color:#1E889F" />
                    <stop offset="0.509804" style="stop-opacity:1; stop-color:#09FAEB" />
                    <stop offset="0.894118" style="stop-opacity:1; stop-color:#1DFC92" />
                    <stop offset="1" style="stop-opacity:1; stop-color:#32FF39" />
                </linearGradient>
            </defs></>
        >
        <g id="Layer_x0020_1">
            <metadata id="CorelCorpID_0Corel-Layer" />
            <g id="_2139208452112">
                <g style="clip-path:url(#id0)">
                    <polygon className="fil0" points="21.48,0 43.89,0 43.89,40.93 21.48,40.93 " />
                </g>
                <g style="clip-path:url(#id1)">
                    <g>
                        <rect className="fil1" x="15.11" y="0.12" width="35.68" height="40.93" />
                    </g>
                </g>
                <path className="fil2" d="M24.05 18.51c0,0 1,-2.49 1.08,-4.05 0.08,-1.56 -1.4,-2.3 -0.41,-3.49 0.98,-1.19 2.14,-1.72 1.24,-2.95 -0.91,-1.23 1.97,-4.4 2.21,-2.77 0.24,1.63 -0.23,1.56 0.85,3.89 1.09,2.34 2.5,0.53 2.94,-1.26 0.43,-1.79 0.49,-4.93 -2.01,-4.01 0.41,-5.06 4.5,-4.41 6.51,-2.29 2.01,2.12 1.46,2.7 3.52,2.48 2.06,-0.22 1.98,2.22 0.5,3.19 -4.01,2.62 -0.3,1.96 0.65,4.53 0.6,1.63 -0.54,1.63 -0.54,3.21 0,1.51 0.68,3.26 0.77,3.44 0.37,0.59 0.69,1.21 0.98,1.84l0 0c0.11,0.24 0.22,0.48 0.31,0.72l0.01 0.01 0 0 0 0c0.11,0.29 0.22,0.58 0.32,0.87l0 0c0.6,1.73 0.91,3.5 0.91,5.09 0,3.72 -1.75,8.39 -4.82,11.28l0 0c-0.23,0.21 -0.47,0.42 -0.71,0.61l0 0c-1.6,1.28 -3.51,2.08 -5.67,2.08 -2.81,0 -5.22,-1.4 -7.07,-3.46l0 0c-0.38,-0.43 -0.74,-0.88 -1.08,-1.35l0 0 0 0 0 0c-1.95,-2.77 -3.06,-6.25 -3.06,-9.16 0,-2.66 0.92,-5.81 2.57,-8.45l0 0z" />
                <g transform="matrix(1.00038 0 0 1 506.878 143.402)">
                    <text x="-508" y="-106.22" className="fil3 fnt0">C</text>
                </g>
                <g transform="matrix(1.00038 0 0 1 551.416 143.249)">
                    <text x="-508" y="-106.22" className="fil3 fnt0">A</text>
                </g>
                <g transform="matrix(1.00038 0 0 1 575.954 143.402)">
                    <text x="-508" y="-106.22" className="fil3 fnt0">R</text>
                </g>
                <g transform="matrix(1.00038 0 0 1 600.363 143.402)">
                    <text x="-508" y="-106.22" className="fil3 fnt0">D</text>
                </g>
                <g transform="matrix(1.00038 0 0 1 625.186 143.402)">
                    <text x="-508" y="-106.22" className="fil3 fnt0">S </text>
                </g>
                <path className="fil3" d="M24.3 26.82c0.01,-1.12 0.24,-2.34 0.66,-3.55l0 0.01 1.38 2.36 0.09 0.03c0,0 1.25,0.31 1.24,0.34 0,0.04 -0.01,0.12 -0.02,0.21l-0.07 0.12 0.06 0.03c-0.03,0.29 -0.07,0.66 -0.07,0.66l0 0.07 0.38 0.75 -0.36 0.07 -0.71 -0.41 -1.57 0.05 -1.01 -0.74zm0.78 -3.89c0.59,-1.57 1.5,-3.08 2.68,-4.25l2.15 1.8 0.18 0.32 -2.03 2.03 0.32 1.22 -0.05 0.93 -0.43 0.79c-0.36,-0.24 -1,-0.46 -1.24,-0.54l-1.4 -2.4 -0.18 0.1zm3.03 -4.58c1.27,-1.13 2.81,-1.86 4.58,-1.86 0.26,0 0.52,0.02 0.78,0.05 0.11,0.09 0.21,0.17 0.23,0.2 0.01,0.02 -0.01,0.07 -0.02,0.1 -0.12,0.11 -0.45,0.42 -0.52,0.56 -0.06,0.12 -0.27,0.65 -0.27,0.65l-0.07 0.15 0.57 0.55 -0.11 0.2 -0.46 0.82 -0.05 0.06 0.01 0.02 -0.29 0.54c-0.04,0.02 -0.17,0.1 -0.49,0.28 -0.17,0.1 -0.27,0.13 -0.33,0.16 -0.2,0.08 -0.25,0.1 -0.34,0.33 -0.04,0.11 -0.04,0.2 -0.04,0.29 0,0.1 -0.01,0.21 -0.23,0.35 -0.04,0.03 -0.07,0.05 -0.1,0.08 0,-0.3 -0.02,-0.55 -0.06,-0.64 -0.05,-0.08 -0.13,-0.22 -0.21,-0.36l0.02 -0.01 -0.05 -0.05 -0.35 -0.62 -0.03 -0.03 -2.17 -1.82zm6.05 -1.69c2.79,0.63 4.82,3.02 5.94,5.69l-1.61 0.81c-0.25,-0.02 -1.19,-0.08 -1.4,-0.01 -0.25,0.08 -0.65,0.96 -0.79,1.31l-0.75 0.02c0.08,-0.43 0.22,-1.17 0.28,-1.24 0.06,-0.1 0.23,-0.34 0.42,-0.59 0.14,-0.19 0.29,-0.38 0.4,-0.52 0.5,-0.6 -1.62,-1.06 -2.04,-1.14l-1.23 -1.23 0.22 -0.39 0.01 0 0.11 -0.21 0.26 -0.51 -0.59 -0.56c0.07,-0.16 0.17,-0.4 0.21,-0.48 0.04,-0.09 0.44,-0.45 0.44,-0.45l0.04 -0.03 0.02 -0.04c0,0 0.09,-0.22 0.06,-0.43zm6.12 6.14c0.34,0.92 0.58,1.86 0.7,2.77 -0.12,-0.2 -0.3,-0.36 -0.3,-0.36l-0.11 -0.13 -1.91 0.82c-0.25,-0.07 -0.98,-0.27 -0.98,-0.33 0,-0.33 -0.61,-0.78 -0.91,-0.98 0.15,-0.33 0.45,-0.97 0.47,-0.98 0.13,-0.04 1.1,0.03 1.35,0.04l1.69 -0.85zm0.79 4.45c-0.03,1.08 -0.25,2.25 -0.65,3.41l-0.96 -0.85 -0.04 -0.02c-0.01,0 -0.17,-0.07 -0.91,-0.2 -0.13,-0.02 -0.23,-0.03 -0.32,-0.04 -0.09,0 -0.16,0 -0.22,0l-0.06 0 0 0 -0.06 -0.01c-0.03,-0.01 -0.06,-0.04 -0.11,-0.1 -0.22,-0.25 -0.31,-0.75 -0.34,-0.92l0.09 -0.26c0.16,-0.1 0.61,-0.4 0.74,-0.42 0.32,-0.07 0.74,-1.14 0.74,-1.14l0.02 -0.07 -0.05 -0.33 1.49 -0.64c0.09,0.1 0.19,0.23 0.19,0.24 0,0.14 0.06,0.33 0.13,0.56 0.04,0.13 0.09,0.28 0.13,0.43 0.03,0.11 0.1,0.24 0.19,0.36zm-0.82 3.89c-0.22,0.57 -0.49,1.13 -0.79,1.67l-0.49 -0.79 -0.16 -0.76 -1.03 -0.4 0.15 -0.82 0.01 0 0.06 -0.01c0.04,0 0.09,0 0.16,0 0.07,0.01 0.15,0.02 0.27,0.04 0.49,0.08 0.7,0.14 0.79,0.16l1.03 0.91zm-1.06 2.14c-0.78,1.26 -1.79,2.36 -2.99,3.11 -0.1,-0.03 -0.21,-0.04 -0.32,-0.06 -0.12,-0.02 -0.19,0.04 -0.21,0 -0.02,-0.03 -0.05,-0.08 -0.09,-0.13 -0.06,-0.09 -0.13,-0.19 -0.16,-0.35 -0.04,-0.3 -0.35,-0.78 -0.45,-0.93l-0.21 -1.13 1.01 -1.01 -0.19 -0.17 -0.34 -0.33c0.58,-0.01 1.44,-0.03 1.45,0 0.13,0.34 0.92,0.54 0.92,0.54l0.08 0.02 0.96 -0.42 0.54 0.86zm-3.65 3.48c-0.87,0.42 -1.82,0.67 -2.85,0.67 -0.22,0 -0.43,-0.02 -0.64,-0.04l-0.17 -1.05 1.16 -0.21c-0.12,-0.53 -0.25,-1.06 -0.38,-1.58l-0.01 -0.02c-0.1,-0.22 -0.21,-0.46 -0.3,-0.66 -0.07,-0.18 -0.12,-0.31 -0.12,-0.33 0,-0.07 0.99,-0.68 1.15,-0.83 0,0 0.19,-0.16 0.3,-0.46 0.04,-0.11 0.14,-0.39 0.22,-0.61 0.17,0.17 0.37,0.37 0.56,0.55l0.11 0.11c0.19,0.19 0.38,0.37 0.5,0.49l-0.83 0.84 0.27 1.48 0.03 0.04c0,0 0.37,0.53 0.41,0.77 0.04,0.27 0.14,0.43 0.24,0.56 0.02,0.03 0.04,0.06 0.06,0.1 0.06,0.1 0.16,0.15 0.29,0.18zm-3.99 0.56c-1.6,-0.3 -3,-1.21 -4.12,-2.45l0.34 -0.4 0.06 -0.59 0.87 -0.25 0.05 -0.05c0.03,-0.03 0.06,-0.07 0.09,-0.12 0.1,-0.17 0.19,-0.47 0.22,-0.75 0.04,-0.31 0.01,-0.62 -0.15,-0.77l0 0c-0.02,-0.02 -0.04,-0.03 -0.07,-0.05 -0.12,-0.07 -0.16,-0.18 -0.2,-0.29 -0.01,-0.03 -0.03,-0.07 -0.04,-0.11 -0.04,-0.08 -0.08,-0.21 -0.1,-0.33 -0.01,-0.06 -0.01,-0.11 0,-0.14 0.04,-0.09 0.21,-0.4 0.32,-0.59l0.64 0.21 1.07 -0.21 1.58 -1.57c0.18,0.05 0.37,0.08 0.58,0.08 0.2,0 0.4,-0.03 0.58,-0.09l-0.04 0.18 -0.23 0.92c-0.09,0.36 0.16,0.76 0.32,1.01 0.04,0.06 0.07,0.1 0.08,0.13 0.01,0.03 0.06,0.08 0.13,0.16 -0.05,0.14 -0.24,0.67 -0.3,0.84 -0.03,0.07 -0.15,0.21 -0.21,0.29 -0.18,0.11 -1.28,0.85 -1.28,1.16 0,0.09 0.07,0.28 0.17,0.51 0.08,0.2 0.19,0.44 0.29,0.66l0.25 1.03 -1.12 0.2 0.22 1.38zm0.09 -8.68l-1.35 1.34 -0.8 0.16 -0.83 -0.27 -0.07 -0.02 -0.05 -0.02 -0.04 0c0,0 -0.15,-0.03 -0.66,0.37 -0.11,0.08 -0.2,0.16 -0.28,0.24 -0.08,0.08 -0.15,0.16 -0.21,0.23l-0.03 0.03c-0.13,0.15 -0.25,0.28 -0.35,0.32 -0.08,0.03 -0.14,0.05 -0.19,0.06 -0.26,-0.39 -1.19,-1.77 -1.42,-1.83 -0.04,-0.01 -0.11,-0.02 -0.21,-0.04 -0.16,-0.03 -0.41,-0.07 -0.62,-0.12 -0.12,-0.57 -0.2,-1.12 -0.22,-1.66l0.84 0.62 1.6 -0.05 0.75 0.42 0.68 -0.12 0.01 0.01 0.05 -0.02 0.59 -0.11 0.95 -0.84 0.96 0c0.11,0.55 0.44,1.01 0.9,1.3zm-0.93 -1.78l-1.11 0 -0.99 0.86 -0.16 0.04 -0.39 -0.76c0.01,-0.13 0.04,-0.41 0.06,-0.63l0.69 -1.26 0.05 -1.11 -0.26 -1.02 1.74 -1.74 0.13 0.24c0.03,0.05 0,0.83 -0.01,1.34 -0.01,0.2 -0.02,0.36 -0.02,0.42l0 0.16 2.16 0.92 0 0.66c-1.02,0.04 -1.84,0.86 -1.89,1.88zm3.8 0.88l0.51 0.17 1.29 0.44 0.64 -0.01c-0.13,0.39 0.2,1.16 0.43,1.42 0.03,0.04 0.07,0.07 0.09,0.1l-0.24 1.31 1.16 0.44 0.07 0.36 -0.81 0.36c-0.15,-0.04 -0.48,-0.14 -0.51,-0.22 -0.14,-0.37 -2.03,-0.31 -2.39,-0.3 -0.25,-0.24 -0.5,-0.49 -0.68,-0.67l0 0 0 0c-0.13,-0.14 -0.22,-0.24 -0.24,-0.27 -0.02,-0.04 -0.06,-0.1 -0.1,-0.17 -0.12,-0.18 -0.3,-0.47 -0.26,-0.64 0.11,-0.49 0.22,-0.98 0.33,-1.47 0.31,-0.21 0.56,-0.51 0.71,-0.85zm0.13 -0.46c0.02,-0.11 0.03,-0.21 0.03,-0.32 0,-0.34 -0.1,-0.68 -0.25,-0.96l0.95 -1.01 0.09 -0.03 0.96 -0.02c0.19,0.13 0.78,0.51 0.78,0.63 0,0.38 0.9,0.68 1.26,0.78l0.04 0.22c-0.08,0.2 -0.33,0.79 -0.38,0.8 -0.19,0.04 -0.71,0.36 -0.89,0.48l-0.11 0 -0.73 0.02 -1.75 -0.59zm-0.5 -1.66c-0.28,-0.3 -0.65,-0.52 -1.05,-0.6l0 -1.01 -2.1 -0.9c0,-0.17 0.03,-0.71 0.33,-0.9 0.44,-0.29 0.45,-0.53 0.45,-0.76 0,-0.04 0,-0.09 0.01,-0.12 0.01,-0.03 0.02,-0.04 0.06,-0.05 0.08,-0.03 0.21,-0.08 0.39,-0.18 0.48,-0.27 0.62,-0.38 0.62,-0.38l0.02 -0.02 0.27 -0.5 1.23 1.23 0.07 0.02c0,0 1.85,0.37 1.84,0.38 -0.12,0.14 -0.27,0.34 -0.41,0.53 -0.2,0.26 -0.38,0.51 -0.45,0.61 -0.13,0.2 -0.35,1.42 -0.39,1.67l-0.89 0.98zm-7.03 8.88c-0.66,-0.79 -1.21,-1.69 -1.65,-2.63l0.21 -0.05c0.21,-0.06 0.44,-0.13 0.66,-0.17 0.08,-0.02 0.15,-0.03 0.21,-0.04l0.12 -0.02 0.04 0c0.16,-0.02 0.24,-0.04 0.45,-0.12 0.21,-0.09 0.36,-0.25 0.53,-0.45l0.03 -0.03c0.06,-0.06 0.12,-0.14 0.19,-0.2 0.07,-0.07 0.15,-0.14 0.23,-0.21l0.08 -0.06c-0.06,0.12 -0.12,0.24 -0.15,0.31 -0.05,0.12 -0.06,0.26 -0.04,0.4 0.03,0.17 0.09,0.34 0.13,0.45l0.04 0.09c0.06,0.18 0.13,0.37 0.39,0.53 0.03,0.04 0.02,0.18 0,0.35 -0.02,0.21 -0.08,0.43 -0.15,0.56l-1.05 0.29 -0.08 0.77 -0.19 0.23zm-1.85 -3.08c-0.25,-0.6 -0.46,-1.21 -0.61,-1.82 0.15,0.04 0.3,0.06 0.41,0.09 0.09,0.01 0.15,0.02 0.18,0.03 0.09,0.02 0.71,0.97 1.02,1.45l-0.03 0.01c-0.2,0.04 -0.45,0.11 -0.69,0.17 -0.09,0.02 -0.19,0.05 -0.28,0.07z" />
                <g transform="matrix(1.0055 0 0 1 579.138 162.743)">
                    <path className="fil4" d="M76.23 62.27c-0.86,0 -1.62,-0.1 -2.28,-0.3 -0.66,-0.19 -1.25,-0.47 -1.79,-0.83 -0.53,-0.35 -1.05,-0.75 -1.53,-1.2l1.52 -1.77c0.62,0.58 1.25,1.03 1.89,1.35 0.63,0.32 1.35,0.48 2.14,0.48 0.88,0 1.63,-0.15 2.24,-0.44 0.61,-0.29 1.07,-0.69 1.39,-1.2 0.32,-0.52 0.48,-1.11 0.48,-1.78l0.03 -3.14 0.23 0.5c-0.34,0.81 -0.95,1.48 -1.84,2.03 -0.88,0.55 -1.95,0.83 -3.21,0.83 -1.07,0 -2.05,-0.27 -2.94,-0.81 -0.9,-0.54 -1.61,-1.28 -2.15,-2.2 -0.53,-0.93 -0.8,-1.97 -0.8,-3.13 0,-1.21 0.28,-2.28 0.85,-3.21 0.56,-0.92 1.3,-1.65 2.22,-2.2 0.92,-0.54 1.93,-0.81 3.02,-0.81 1.03,0 1.98,0.21 2.83,0.63 0.86,0.42 1.48,0.96 1.87,1.61l-0.14 0.48 0.29 -2.24 2.39 0 0 11.68c0,1.05 -0.27,2 -0.82,2.86 -0.54,0.86 -1.31,1.54 -2.31,2.05 -0.99,0.5 -2.19,0.76 -3.58,0.76zm-4 -11.66c0,0.74 0.18,1.43 0.54,2.04 0.36,0.62 0.84,1.11 1.45,1.46 0.61,0.35 1.29,0.53 2.04,0.53 0.7,0 1.32,-0.12 1.88,-0.38 0.55,-0.25 1.02,-0.59 1.39,-1.03 0.38,-0.44 0.64,-0.95 0.79,-1.53l0 -2.3c-0.17,-0.56 -0.45,-1.05 -0.85,-1.47 -0.39,-0.42 -0.86,-0.75 -1.4,-0.98 -0.55,-0.23 -1.15,-0.35 -1.81,-0.35 -0.75,0 -1.43,0.17 -2.04,0.5 -0.61,0.34 -1.09,0.81 -1.45,1.42 -0.36,0.61 -0.54,1.3 -0.54,2.09z" />
                    <path id="_1" className="fil4" d="M92.32 56.8c-1.08,0 -2.08,-0.23 -2.97,-0.7 -0.89,-0.47 -1.6,-1.15 -2.11,-2.06 -0.52,-0.91 -0.78,-2.01 -0.78,-3.32 0,-1.29 0.28,-2.41 0.82,-3.35 0.55,-0.94 1.27,-1.67 2.18,-2.17 0.92,-0.51 1.92,-0.76 3.01,-0.76 1.09,0 2.01,0.25 2.76,0.74 0.75,0.5 1.32,1.08 1.72,1.76l-0.17 0.44 0.25 -2.46 2.42 0 0 11.6 -2.62 0 0 -3.03 0.29 0.68c-0.08,0.18 -0.24,0.42 -0.5,0.71 -0.25,0.29 -0.59,0.58 -1.01,0.88 -0.43,0.3 -0.91,0.55 -1.45,0.75 -0.55,0.19 -1.16,0.29 -1.84,0.29zm0.71 -2.16c0.66,0 1.25,-0.12 1.77,-0.36 0.53,-0.24 0.97,-0.59 1.31,-1.02 0.35,-0.44 0.59,-0.97 0.72,-1.59l0 -2.27c-0.15,-0.56 -0.41,-1.05 -0.79,-1.47 -0.37,-0.42 -0.82,-0.75 -1.35,-0.98 -0.52,-0.23 -1.11,-0.35 -1.75,-0.35 -0.69,0 -1.33,0.17 -1.91,0.5 -0.58,0.34 -1.05,0.81 -1.4,1.4 -0.34,0.6 -0.52,1.3 -0.52,2.11 0,0.74 0.18,1.43 0.54,2.04 0.35,0.62 0.83,1.11 1.43,1.46 0.61,0.35 1.25,0.53 1.95,0.53z" />
                    <path id="_2" className="fil4" d="M106.33 44.92l0.23 2.6 -0.12 -0.22c0.43,-0.88 1.05,-1.57 1.85,-2.07 0.8,-0.51 1.71,-0.76 2.75,-0.76 0.65,0 1.24,0.1 1.74,0.31 0.51,0.2 0.93,0.5 1.26,0.88 0.33,0.38 0.54,0.86 0.63,1.42l-0.14 0.08c0.45,-0.84 1.08,-1.5 1.87,-1.98 0.8,-0.47 1.64,-0.71 2.53,-0.71 1.14,0 2.05,0.32 2.72,0.97 0.66,0.64 1.01,1.48 1.02,2.5l0 8.58 -2.62 0 0 -7.65c-0.02,-0.6 -0.16,-1.1 -0.43,-1.5 -0.28,-0.4 -0.75,-0.62 -1.43,-0.66 -0.67,0 -1.28,0.21 -1.81,0.62 -0.54,0.41 -0.96,0.94 -1.26,1.58 -0.3,0.65 -0.46,1.34 -0.48,2.09l0 5.52 -2.62 0 0 -7.65c-0.02,-0.6 -0.17,-1.1 -0.46,-1.5 -0.29,-0.4 -0.78,-0.62 -1.45,-0.66 -0.7,0 -1.31,0.21 -1.84,0.62 -0.52,0.41 -0.93,0.94 -1.22,1.6 -0.29,0.65 -0.44,1.35 -0.44,2.1l0 5.49 -2.62 0 0 -11.6 2.34 0z" />
                    <path id="_3" className="fil4" d="M132.65 56.8c-1.33,0 -2.48,-0.27 -3.44,-0.8 -0.96,-0.53 -1.69,-1.26 -2.21,-2.18 -0.52,-0.93 -0.78,-1.99 -0.78,-3.19 0,-1.13 0.3,-2.17 0.88,-3.11 0.58,-0.93 1.36,-1.68 2.34,-2.24 0.97,-0.56 2.06,-0.84 3.27,-0.84 1.54,0 2.81,0.45 3.83,1.35 1.01,0.89 1.7,2.13 2.06,3.7l-9.61 3.36 -0.62 -1.54 7.89 -2.86 -0.57 0.36c-0.22,-0.61 -0.6,-1.15 -1.12,-1.61 -0.53,-0.46 -1.22,-0.68 -2.06,-0.68 -0.72,0 -1.35,0.17 -1.92,0.51 -0.56,0.35 -1,0.82 -1.32,1.42 -0.32,0.6 -0.48,1.28 -0.48,2.04 0,0.81 0.17,1.51 0.51,2.12 0.33,0.61 0.8,1.08 1.39,1.43 0.59,0.35 1.26,0.52 2.02,0.52 0.5,0 1,-0.1 1.48,-0.28 0.47,-0.19 0.92,-0.43 1.33,-0.73l1.22 1.93c-0.59,0.4 -1.24,0.71 -1.96,0.96 -0.73,0.24 -1.44,0.36 -2.13,0.36z" />
                </g>
            </g>
        </g>
        </svg >
    )
}

export default Svg