import * as React from "react";

const SvgEmoticonDevil = ({ title, titleId, ...props }) => (
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
      d="m4 2 .894-.447-.62-1.241-.981.98L4 2Zm.118 5.651.875.484.36-.651-.52-.532-.715.7Zm2.312-2.72-.707.706.628.629.698-.55-.62-.786ZM20 2l.707-.707-.981-.981-.62 1.24L20 2Zm-.119 5.651-.714-.7-.521.532.36.652.875-.484Zm-2.311-2.72-.62.784.698.55.629-.628-.707-.707ZM12 20a8 8 0 0 1-8-8H2c0 5.523 4.477 10 10 10v-2ZM3.293 1.293c-1.914 1.913-1.865 5.042.11 7.058l1.43-1.4C3.571 5.666 3.62 3.795 4.706 2.708L3.293 1.293Zm-.188 1.154c.531 1.062.957 1.655 1.42 2.117.219.219.435.398.62.553.19.16.371.314.578.52l1.414-1.414c-.27-.27-.507-.47-.706-.638-.204-.171-.347-.29-.492-.435-.264-.264-.575-.659-1.045-1.597l-1.789.894ZM7.05 5.715A7.962 7.962 0 0 1 12 4V2A9.962 9.962 0 0 0 5.81 4.145l1.24 1.57ZM4 12c0-1.404.361-2.72.994-3.865l-1.75-.967A9.96 9.96 0 0 0 2 12h2Zm8 10c5.524 0 10-4.477 10-10h-2a8 8 0 0 1-8 8v2Zm7.294-19.293c1.086 1.087 1.135 2.958-.126 4.245l1.428 1.4c1.977-2.017 2.025-5.146.112-7.06l-1.414 1.415Zm-.188-1.154c-.469.939-.78 1.333-1.045 1.597-.144.145-.288.264-.492.435-.199.167-.435.367-.706.638l1.415 1.414c.206-.206.387-.36.577-.52.185-.155.402-.334.62-.553.463-.462.89-1.056 1.42-2.117l-1.789-.894Zm-.916 2.592A9.962 9.962 0 0 0 11.999 2v2c1.871 0 3.59.64 4.951 1.715l1.239-1.57ZM21.999 12c0-1.75-.45-3.4-1.242-4.832l-1.75.967A7.96 7.96 0 0 1 20 12h2Z"
      fill="#555770"
    />
    <path
      d="M7 14c.998 1.793 2.863 3 5 3 2.136 0 4.002-1.207 5-3M9 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgEmoticonDevil;
