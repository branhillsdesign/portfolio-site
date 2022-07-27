import * as React from "react";

const SvgBloodTransfusion = ({ title, titleId, ...props }) => (
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
    <g clipPath="url(#Blood_Transfusion_svg__a)">
      <path
        d="m9.4 11.136.441-.407-.441-.48-.441.48.441.407ZM3.8 4.719h5.6v-1.2H3.8v1.2Zm5.6 0H15v-1.2H9.4v1.2Zm.6-.6V1H8.8v3.119H10ZM9.4.4H4.6v1.2h4.8V.4Zm0 1.2H16V.4H9.4v1.2Zm11 4.4v18h1.2V6h-1.2Zm-7 13.892h-4v1.2h4v-1.2Zm-4 0h-4v1.2h4v-1.2Zm-.6.6V24H10v-3.509H8.8Zm-5.2-2.34V8.018H2.4v10.136h1.2Zm0-10.135V4.898H2.4v3.119h1.2Zm11.6-3.119v3.119h1.2V4.898h-1.2Zm0 3.119v10.136h1.2V8.017h-1.2Zm-12.2.6h12.8v-1.2H3v1.2Zm2.4 11.274c-1.009 0-1.8-.792-1.8-1.738H2.4c0 1.637 1.358 2.939 3 2.939v-1.2Zm8 1.2c1.642 0 3-1.3 3-2.938h-1.2c0 .946-.791 1.739-1.8 1.739v1.2ZM15 4.72c.125 0 .2.095.2.18h1.2c0-.777-.641-1.38-1.4-1.38v1.2Zm-11.2-1.2c-.759 0-1.4.603-1.4 1.38h1.2c0-.085.075-.18.2-.18v-1.2Zm7.4 11.515c0 .946-.791 1.739-1.8 1.739v1.2c1.642 0 3-1.301 3-2.94h-1.2Zm-1.8 1.739c-1.009 0-1.8-.793-1.8-1.74H6.4c0 1.639 1.358 2.94 3 2.94v-1.2Zm-1.8-1.74c0-.168.09-.464.306-.873a9.93 9.93 0 0 1 .777-1.203 18.962 18.962 0 0 1 1.135-1.389l.018-.02.004-.005h.001v-.001a244.235 244.235 0 0 1-.883-.813v.001l-.002.002-.006.007a20.176 20.176 0 0 0-1.233 1.506c-.309.418-.628.892-.873 1.355-.234.443-.444.957-.444 1.434h1.2Zm1.8-3.897-.441.406v.001l.005.005.018.02a12.107 12.107 0 0 1 .336.384c.22.257.51.612.8 1.005.29.394.571.814.776 1.203.216.41.306.705.306.874h1.2c0-.477-.21-.991-.444-1.434a11.116 11.116 0 0 0-.873-1.356A20.178 20.178 0 0 0 9.85 10.74l-.006-.007a.028.028 0 0 1-.002-.002l-.442.406ZM16 1.6A4.4 4.4 0 0 1 20.4 6h1.2A5.6 5.6 0 0 0 16 .4v1.2Z"
        fill="#555770"
      />
    </g>
    <defs>
      <clipPath id="Blood_Transfusion_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgBloodTransfusion;
