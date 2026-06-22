import React from 'react';

type LogoDarkProps = React.SVGProps<SVGSVGElement>;

export function LogoDark({ width = 380, height = 100, ...props }: LogoDarkProps) {
  return (
    <svg
      viewBox="0 0 380 100"
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <style>
          {`@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500&display=swap');`}
        </style>
      </defs>
      <rect width="380" height="100" fill="#3c3c39" />
      <g transform="translate(10,10) scale(0.8)">
        <rect width="100" height="100" rx="20" fill="#222220" />
        <polyline
          points="31,32 17,50 31,68"
          fill="none"
          stroke="#bb9476"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line x1="41" y1="70" x2="59" y2="30" stroke="#e7dacf" strokeWidth="7" strokeLinecap="round" />
        <polyline
          points="69,32 83,50 69,68"
          fill="none"
          stroke="#bb9476"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <text
        x="108"
        y="47"
        fontFamily="Montserrat, sans-serif"
        fontWeight="500"
        fontSize="20"
        letterSpacing="4"
        fill="#f7f2ee"
      >
        CLAIRE MERLIN
      </text>
      <text
        x="110"
        y="66"
        fontFamily="Montserrat, sans-serif"
        fontWeight="300"
        fontSize="10"
        letterSpacing="3"
        fill="#bb9476"
      >
        DEV WEB & MOBILE
      </text>
    </svg>
  );
}
