import * as React from "react";

const SvgBug = ({ title, titleId, ...props }) => (
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
      d="m8.876 3.876.522.854-.522-.854Zm6.248 0-.522.854.522-.854ZM12 22a5 5 0 0 1-5-5H5a7 7 0 0 0 7 7v-2Zm5-5a5 5 0 0 1-5 5v2a7 7 0 0 0 7-7h-2Zm1-3h4v-2h-4v2Zm-1-5v4h2V9h-2Zm0 4v4h2v-4h-2ZM2 14h4v-2H2v2Zm5 3v-4H5v4h2Zm0-4V9H5v4h2Zm11 5h4v-2h-4v2ZM6 16H2v2h4v-2Zm0-8H2v2h4V8Zm12 2h4V8h-4v2ZM5.293 1.707l2.876 2.876L9.583 3.17 6.707.293 5.293 1.707ZM12 2a6.972 6.972 0 0 0-3.645 1.023L9.398 4.73A4.972 4.972 0 0 1 12 4V2ZM8.355 3.023A6.996 6.996 0 0 0 5 9h2c0-1.807.958-3.39 2.398-4.27L8.355 3.023Zm7.476 1.56 2.876-2.876L17.293.293l-2.876 2.876 1.414 1.414ZM12 4c.955 0 1.845.267 2.602.73l1.043-1.707A6.972 6.972 0 0 0 12 2v2Zm2.602.73A4.997 4.997 0 0 1 17 9h2a6.997 6.997 0 0 0-3.355-5.977L14.602 4.73Z"
      fill="#555770"
    />
  </svg>
);

export default SvgBug;
