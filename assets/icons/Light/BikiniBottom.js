import * as React from "react";

const SvgBikiniBottom = ({ title, titleId, ...props }) => (
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
      d="m3 7 .07-.596-.67-.078V7H3Zm0 2h-.6v.524l.52.07L3 9Zm18-2h.6v-.674l-.67.078L21 7Zm0 2.011.08.595.52-.07V9.01H21Zm-8 7.887-.6-.007.6.008Zm-2 0-.6.008.6-.008ZM2.4 7v2h1.2V7H2.4Zm.52 2.595c1.26.17 3.14.75 4.699 1.921 1.54 1.158 2.75 2.88 2.78 5.39l1.2-.015c-.034-2.954-1.485-5-3.259-6.334-1.756-1.32-3.842-1.959-5.26-2.152l-.16 1.19Zm.01-2c.69.082 4.525.505 9.07.505V6.9c-4.48 0-8.263-.418-8.93-.496l-.14 1.192Zm17.47-.595v2.011h1.2V7h-1.2Zm.52 1.417c-1.417.192-3.503.828-5.26 2.145-1.774 1.331-3.225 3.374-3.26 6.33l1.2.014c.03-2.51 1.24-4.229 2.78-5.384 1.559-1.169 3.44-1.745 4.7-1.916l-.16-1.19Zm.01-2.013c-.667.078-4.45.496-8.93.496v1.2c4.545 0 8.38-.423 9.07-.504l-.14-1.192ZM11.1 17.6h1.8v-1.2h-1.8v1.2Zm1.3-.709a.498.498 0 0 1 .5-.491v1.2c.4 0 .696-.327.7-.694l-1.2-.015Zm-2 .015c.004.367.3.694.7.694v-1.2c.29 0 .496.235.5.491l-1.2.015Z"
      fill="#555770"
    />
  </svg>
);

export default SvgBikiniBottom;
