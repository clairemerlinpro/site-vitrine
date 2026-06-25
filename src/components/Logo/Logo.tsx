import React from 'react';

type LogoProps = React.SVGProps<SVGSVGElement>;

export function Logo({ height, width, className, style, ...props }: LogoProps) {
  return (
    <svg
      viewBox="0 0 480 110"
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      width={width}
      className={className}
      style={style}
      {...props}
    >
      <rect width="480" height="110" fill="var(--color-grey)" />
      <g transform="translate(12,12) scale(0.8)">
        <rect width="100" height="100" rx="20" fill="#222220" />
        <polyline
          points="31,32 17,50 31,68"
          fill="none"
          stroke="#bb9476"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line
          x1="41"
          y1="70"
          x2="59"
          y2="30"
          stroke="#e7dacf"
          strokeWidth="7"
          strokeLinecap="round"
        />
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
        y="50"
        fontFamily="Montserrat, sans-serif"
        fontWeight="500"
        fontSize="28"
        letterSpacing="5"
        fill="#f7f2ee"
      >
        CLAIRE MERLIN
      </text>
      <text
        x="111"
        y="80"
        fontFamily="Montserrat, sans-serif"
        fontWeight="300"
        fontSize="18"
        letterSpacing="3.5"
        fill="#bb9476"
      >
        DEV WEB & MOBILE
      </text>
    </svg>
  );
}
