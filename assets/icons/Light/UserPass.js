import * as React from "react";

const SvgUserPass = ({ title, titleId, ...props }) => (
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
      d="M11.4 4.5a.6.6 0 1 0 1.2 0h-1.2ZM6 21.6h12v-1.2H6v1.2ZM19.6 20V4h-1.2v16h1.2ZM4.4 4v16h1.2V4H4.4ZM18 2.4h-6v1.2h6V2.4Zm-6 0H6v1.2h6V2.4Zm.6.6V0h-1.2v3h1.2Zm-1.2 0v1.5h1.2V3h-1.2Zm8.2 1A1.6 1.6 0 0 0 18 2.4v1.2c.22 0 .4.18.4.4h1.2ZM18 21.6a1.6 1.6 0 0 0 1.6-1.6h-1.2a.4.4 0 0 1-.4.4v1.2ZM6 20.4a.4.4 0 0 1-.4-.4H4.4A1.6 1.6 0 0 0 6 21.6v-1.2ZM5.6 4c0-.22.18-.4.4-.4V2.4A1.6 1.6 0 0 0 4.4 4h1.2ZM13.622 10.2c0 .876-.72 1.598-1.622 1.598v1.2c1.553 0 2.822-1.247 2.822-2.799h-1.2ZM12 11.797a1.61 1.61 0 0 1-1.622-1.599h-1.2c0 1.552 1.27 2.8 2.822 2.8v-1.2ZM10.378 10.2c0-.877.72-1.599 1.622-1.599V7.4c-1.553 0-2.822 1.247-2.822 2.8h1.2ZM12 8.6a1.61 1.61 0 0 1 1.622 1.6h1.2c0-1.553-1.27-2.8-2.822-2.8v1.2Zm-3.425 9.072c.465-1.554 1.837-2.65 3.425-2.65v-1.2c-2.166 0-3.972 1.49-4.575 3.506l1.15.344ZM12 15.022c1.588 0 2.96 1.096 3.425 2.65l1.15-.344c-.603-2.015-2.41-3.507-4.575-3.507v1.2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgUserPass;
