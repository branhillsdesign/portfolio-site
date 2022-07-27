import * as React from "react";

const SvgTram = ({ title, titleId, ...props }) => (
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
    <path
      d="M6.996 21.304a1 1 0 0 0 1.436 1.392l-1.436-1.392Zm8.572 1.392a1 1 0 1 0 1.436-1.392l-1.436 1.392ZM6 7.78c1 0 1 .001 1 .003v.003a1.317 1.317 0 0 1-.005.085.541.541 0 0 1-.023.107l-.006.013.01-.016a.467.467 0 0 1 .043-.047c.042-.042.117-.104.241-.178C7.781 7.44 9.066 7 12 7V5c-3.066 0-4.781.449-5.76 1.03-.505.3-.827.642-1.018.982-.094.167-.15.323-.182.457a1.465 1.465 0 0 0-.04.297v.01c0 .002 0 .004 1 .004Zm12 0c1 0 1-.002 1-.004v-.024a.926.926 0 0 0-.008-.104 1.473 1.473 0 0 0-.032-.179 1.797 1.797 0 0 0-.182-.457c-.191-.34-.513-.683-1.018-.982C16.781 5.449 15.066 5 12 5v2c2.934 0 4.219.44 4.74.75.124.074.199.136.24.178a.466.466 0 0 1 .054.063l-.005-.013A.531.531 0 0 1 17 7.793L17 7.786v-.003c0-.002 0-.003 1-.003ZM7 9.5V7.78H5V9.5h2Zm12 0V7.78h-2V9.5h2Zm0 7.848v-3.23h-2v3.23h2Zm-12 0v-3.23H5v3.23h2Zm11-4.23H6v2h12v-2Zm-10 7.23h2.286v-2H8v2Zm2.286 0h3.428v-2h-3.428v2Zm3.428 0H16v-2h-2.286v2Zm-4.146-1.696-2.572 2.652 1.436 1.392 2.572-2.652-1.436-1.392Zm7.436 2.652-2.572-2.652-1.436 1.392 2.572 2.652 1.436-1.392ZM7 3.5h5.5v-2H7v2Zm5.5 0H17v-2h-4.5v2Zm-.99-1.141-.5 3.5 1.98.282.5-3.5-1.98-.282ZM7 14.119V9.5H5v4.619h2Zm12 0V9.5h-2v4.619h2ZM6 10.5h12v-2H6v2Zm11 6.848a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3h-2Zm-12 0a3 3 0 0 0 3 3v-2a1 1 0 0 1-1-1H5Z"
      fill="#555770"
    />
    <circle cx={12} cy={16.75} r={1.25} fill="#555770" />
  </svg>
);

export default SvgTram;
