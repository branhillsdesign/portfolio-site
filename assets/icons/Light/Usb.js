import * as React from "react";

const SvgUsb = ({ title, titleId, ...props }) => (
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
    <path d="M12 19.5V4" stroke="#555770" strokeWidth={1.2} />
    <path
      d="m12 17-.354.354.854.853V17H12Zm0-3.5-.325-.38-.175.15v.23h.5Zm-3.207.293-.354.353.354-.353ZM8 10v3.086h1V10H8Zm.44 4.146 3.206 3.208.708-.708-3.208-3.207-.707.707ZM12.5 17v-3.5h-1V17h1Zm-.175-3.12 3.151-2.701-.65-.76-3.151 2.701.65.76ZM16 10.04V7h-1v3.04h1Zm-.524 1.139A1.5 1.5 0 0 0 16 10.04h-1a.5.5 0 0 1-.175.38l.651.759ZM8 13.086c0 .398.158.78.44 1.06l.706-.707A.5.5 0 0 1 9 13.086H8Z"
      fill="#555770"
    />
    <mask id="USB_svg__a" fill="#fff">
      <path d="M14 21a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM10 9.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM17 5h-3v3h3V5ZM14 4h-4l2-3 2 3Z" />
    </mask>
    <path
      d="M14 5V3.8h-1.2V5H14Zm3 0h1.2V3.8H17V5Zm-3 3h-1.2v1.2H14V8Zm3 0v1.2h1.2V8H17Zm-7-4-.998-.666L7.758 5.2H10V4Zm4 0v1.2h2.242l-1.244-1.866L14 4Zm-2-3 .998-.666L12-1.163 11.002.334 12 1Zm.8 20a.8.8 0 0 1-.8.8v2.4a3.2 3.2 0 0 0 3.2-3.2h-2.4Zm-.8.8a.8.8 0 0 1-.8-.8H8.8a3.2 3.2 0 0 0 3.2 3.2v-2.4Zm-.8-.8a.8.8 0 0 1 .8-.8v-2.4A3.2 3.2 0 0 0 8.8 21h2.4Zm.8-.8a.8.8 0 0 1 .8.8h2.4a3.2 3.2 0 0 0-3.2-3.2v2.4ZM8.8 9.5a.3.3 0 0 1-.3.3v2.4a2.7 2.7 0 0 0 2.7-2.7H8.8Zm-.3.3a.3.3 0 0 1-.3-.3H5.8a2.7 2.7 0 0 0 2.7 2.7V9.8Zm-.3-.3a.3.3 0 0 1 .3-.3V6.8a2.7 2.7 0 0 0-2.7 2.7h2.4Zm.3-.3a.3.3 0 0 1 .3.3h2.4a2.7 2.7 0 0 0-2.7-2.7v2.4Zm5.5-3h3V3.8h-3v2.4ZM12.8 5v3h2.4V5h-2.4Zm5.4 3V5h-2.4v3h2.4ZM14 9.2h3V6.8h-3v2.4Zm-4-4h4V2.8h-4v2.4Zm4.998-1.866-2-3-1.996 1.332 2 3 1.996-1.332Zm-3.996-3-2 3 1.996 1.332 2-3L11.002.334Z"
      fill="#555770"
      mask="url(#USB_svg__a)"
    />
  </svg>
);

export default SvgUsb;
