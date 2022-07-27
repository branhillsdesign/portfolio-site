import * as React from "react";

const SvgVectorCurve = ({ title, titleId, ...props }) => (
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
      d="M10.5 7v-.6h-.6V7h.6Zm3 0h.6v-.6h-.6V7Zm0 3v.6h.6V10h-.6Zm-3 0h-.6v.6h.6V10ZM4.4 8.5a.9.9 0 0 1-.9.9v1.2a2.1 2.1 0 0 0 2.1-2.1H4.4Zm-.9.9a.9.9 0 0 1-.9-.9H1.4c0 1.16.94 2.1 2.1 2.1V9.4Zm-.9-.9a.9.9 0 0 1 .9-.9V6.4a2.1 2.1 0 0 0-2.1 2.1h1.2Zm.9-.9a.9.9 0 0 1 .9.9h1.2a2.1 2.1 0 0 0-2.1-2.1v1.2Zm17.9.9a.9.9 0 0 1-.9.9v1.2a2.1 2.1 0 0 0 2.1-2.1h-1.2Zm-.9.9a.9.9 0 0 1-.9-.9h-1.2c0 1.16.94 2.1 2.1 2.1V9.4Zm-.9-.9a.9.9 0 0 1 .9-.9V6.4a2.1 2.1 0 0 0-2.1 2.1h1.2Zm.9-.9a.9.9 0 0 1 .9.9h1.2a2.1 2.1 0 0 0-2.1-2.1v1.2Zm-1.6 7.9a.9.9 0 0 1-.9.9v1.2a2.1 2.1 0 0 0 2.1-2.1h-1.2Zm-.9.9a.9.9 0 0 1-.9-.9h-1.2c0 1.16.94 2.1 2.1 2.1v-1.2Zm0-1.8a.9.9 0 0 1 .9.9h1.2a2.1 2.1 0 0 0-2.1-2.1v1.2Zm-11.1.9a.9.9 0 0 1-.9.9v1.2a2.1 2.1 0 0 0 2.1-2.1H6.9Zm-.9.9a.9.9 0 0 1-.9-.9H3.9c0 1.16.94 2.1 2.1 2.1v-1.2Zm-.9-.9a.9.9 0 0 1 .9-.9v-1.2a2.1 2.1 0 0 0-2.1 2.1h1.2Zm5.4-7.9h3V6.4h-3v1.2Zm3 1.8h-3v1.2h3V9.4Zm3.6 6.1a.9.9 0 0 1 .887-.9l-.016-1.2a2.1 2.1 0 0 0-2.071 2.1h1.2Zm.887-.9H18v-1.2h-.029l.017 1.2ZM6 14.6h.012l.017-1.2H6v1.2Zm.012 0a.9.9 0 0 1 .888.9h1.2a2.1 2.1 0 0 0-2.071-2.1l-.017 1.2ZM11.1 8.5V7H9.9v1.5h1.2Zm0 1.5V8.689H9.9V10h1.2Zm0-1.311V8.5H9.9v.189h1.2Zm-4.481 5.36a5.404 5.404 0 0 1 4.03-4.779l-.299-1.162a6.604 6.604 0 0 0-4.927 5.843l1.196.098ZM13.35 9.27a5.404 5.404 0 0 1 4.031 4.78l1.196-.1a6.604 6.604 0 0 0-4.927-5.842l-.3 1.162Zm-.45-.581V10h1.2V8.689h-1.2ZM12.9 7v1.5h1.2V7h-1.2Zm0 1.5v.189h1.2V8.5h-1.2Zm6.1-.6h-5.5v1.2H19V7.9Zm-8.5 0H5v1.2h5.5V7.9Z"
      fill="#555770"
    />
  </svg>
);

export default SvgVectorCurve;
