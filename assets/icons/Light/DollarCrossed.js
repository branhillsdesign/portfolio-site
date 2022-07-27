import * as React from "react";

const SvgDollarCrossed = ({ title, titleId, ...props }) => (
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
    <g clipPath="url(#Dollar_Crossed_svg__a)">
      <mask
        id="Dollar_Crossed_svg__b"
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
      <g mask="url(#Dollar_Crossed_svg__b)">
        <path d="m4.095 4.942 15.5 15.5" stroke="#555770" strokeWidth={1.2} />
        <path
          d="M8.6 8.85C8.6 7.567 9.98 6.3 12 6.3V5.1c-2.399 0-4.6 1.553-4.6 3.75h1.2ZM12 6.3c2.02 0 3.4 1.267 3.4 2.55h1.2c0-2.197-2.201-3.75-4.6-3.75v1.2Zm3.4 8.85c0 1.283-1.38 2.55-3.4 2.55v1.2c2.399 0 4.6-1.553 4.6-3.75h-1.2ZM12 17.7c-2.02 0-3.4-1.267-3.4-2.55H7.4c0 2.197 2.201 3.75 4.6 3.75v-1.2Zm.6-12V3h-1.2v2.7h1.2Zm-1.2 12.6V21h1.2v-2.7h-1.2Z"
          fill="#555770"
        />
      </g>
    </g>
    <defs>
      <clipPath id="Dollar_Crossed_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgDollarCrossed;
