import * as React from "react";

const SvgClapboardCrossed = ({ title, titleId, ...props }) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g clipPath="url(#Clapboard_Crossed_svg__a)">
      <mask
        id="Clapboard_Crossed_svg__b"
        style={{
          maskType: "alpha",
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={24}
        height={24}
      >
        <path
          d="M22.003 22 0 0v24h24V0H1.938l20.668 20.668L22.003 22Z"
          fill="#fff"
        />
      </mask>
      <g mask="url(#Clapboard_Crossed_svg__b)">
        <path d="M2.164 3 20.08 20.917" stroke="#555770" strokeWidth={1.2} />
        <path
          d="m5.678 7.872-.537.267.006.012.007.013.524-.292ZM20 18.4H4v1.2h16v-1.2Zm.4-10.02v9.655h1.2V8.379h-1.2Zm0-2.414v2.413h1.2V5.966h-1.2Zm-9.727 1.813H6.559v1.2h4.114v-1.2Zm4.876 0h-4.876v1.2h4.876v-1.2Zm5.451 0h-.583v1.2H21v-1.2Zm-.583 0h-4.869v1.2h4.87v-1.2Zm-4.326.343-1.604-3.38-1.084.515 1.603 3.38 1.085-.515ZM13.945 4.4H9.092v1.2h4.853V4.4Zm-4.853 0H4.25v1.2h4.843V4.4ZM20 4.4h-1.198v1.2H20V4.4Zm-1.198 0h-4.857v1.2h4.857V4.4Zm2.156 3.72-1.615-3.379-1.083.518 1.616 3.38 1.082-.518ZM8.548 5.255l1.581 3.38 1.087-.509-1.58-3.38-1.087.51Zm13.052.712c0-.885-.736-1.566-1.6-1.566v1.2c.24 0 .4.183.4.366h1.2ZM5.154 8.164c.284.509.827.815 1.405.815v-1.2a.406.406 0 0 1-.357-.2l-1.048.585ZM4 18.4c-.24 0-.4-.183-.4-.365H2.4c0 .884.736 1.565 1.6 1.565v-1.2Zm16 1.2c.864 0 1.6-.681 1.6-1.566h-1.2c0 .183-.16.366-.4.366v1.2ZM3.6 18.034V6.449H2.4v11.587h1.2ZM4.25 4.4c-.06 0-.506 0-.953.265-.497.295-.897.859-.897 1.783h1.2c0-.278.057-.446.112-.547a.527.527 0 0 1 .197-.204.723.723 0 0 1 .335-.097h.005V4.4Zm1.966 3.204-1.43-2.871-1.074.534 1.43 2.872 1.074-.535Z"
          fill="#555770"
        />
      </g>
    </g>
    <defs>
      <clipPath id="Clapboard_Crossed_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgClapboardCrossed;
