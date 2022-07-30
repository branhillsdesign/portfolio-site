import * as React from "react";

const SvgPalm = ({ title, titleId, ...props }) => (
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
      d="M4.929 1V.25H3.105l1.296 1.283L4.93 1Zm0 14h-.75v1.798l1.278-1.265L4.929 15Zm4.714-7v.75V8Zm-4.714 4.667h-.75.75ZM2 8l-.528-.533L.176 8.75H2V8Zm8.333-1.65-.527.533.527-.533Zm-6.666 0-.528-.533.528.533ZM19.07 1l.528.533L20.895.25H19.07V1Zm0 14-.528.533 1.278 1.265V15h-.75Zm-4.714-7v.75V8Zm4.714 4.667h.75-.75ZM22 8v.75h1.824l-1.296-1.283L22 8Zm-8.333-1.65.527.533-.527-.533Zm6.666 0 .528-.533-.528.533ZM10.5 9.485l-.528-.533.528.533ZM4.401 1.533l7.071 7 1.056-1.066-7.071-7L4.4 1.533ZM12.75 8V5.667h-1.5V8h1.5ZM7.286.25H4.929v1.5h2.357V.25Zm5.464 5.417C12.75 2.668 10.296.25 7.286.25v1.5c2.196 0 3.964 1.76 3.964 3.917h1.5ZM12 7.25H9.643v1.5H12v-1.5Zm-7.821 5.417V15h1.5v-2.333h-1.5ZM9.643 7.25c-3.01 0-5.464 2.418-5.464 5.417h1.5c0-2.156 1.768-3.917 3.964-3.917v-1.5ZM2 8.75h10v-1.5H2v1.5Zm10.528-1.283-1.667-1.65-1.055 1.066 1.666 1.65 1.056-1.066Zm-9.389-1.65-1.667 1.65 1.056 1.066 1.666-1.65L3.14 5.817Zm7.722 0a5.498 5.498 0 0 0-7.722 0l1.055 1.066a3.998 3.998 0 0 1 5.612 0l1.055-1.066Zm7.682-5.35-7.07 7 1.055 1.066 7.07-7L18.544.467ZM16.714 1.75h2.357V.25h-2.357v1.5ZM12.75 5.667c0-2.156 1.768-3.917 3.964-3.917V.25c-3.01 0-5.464 2.418-5.464 5.417h1.5ZM12 8.75h2.357v-1.5H12v1.5Zm6.321 3.917V15h1.5v-2.333h-1.5ZM14.357 8.75c2.196 0 3.964 1.76 3.964 3.917h1.5c0-2.999-2.453-5.417-5.464-5.417v1.5ZM22 7.25H12v1.5h10v-1.5Zm-9.472 1.283 1.666-1.65-1.055-1.066-1.667 1.65 1.056 1.066Zm7.278-1.65 1.666 1.65 1.056-1.066-1.667-1.65-1.055 1.066Zm-5.612 0a3.998 3.998 0 0 1 5.612 0l1.055-1.066a5.498 5.498 0 0 0-7.722 0l1.055 1.066Zm-8.737 8.65 5.57-5.515-1.055-1.066-5.57 5.515 1.055 1.066Zm5.57-5.515 1.5-1.485-1.055-1.066-1.5 1.485 1.056 1.066ZM9.75 9.485V23h1.5V9.485h-1.5Zm9.849 4.982-5.571-5.515-1.056 1.066 5.571 5.515 1.056-1.066Zm-5.571-5.515-1.5-1.485-1.056 1.066 1.5 1.485 1.056-1.066Zm-1.278.533V23h1.5V9.485h-1.5ZM6 23.75h12v-1.5H6v1.5Z"
      fill="#555770"
    />
  </svg>
);

export default SvgPalm;
