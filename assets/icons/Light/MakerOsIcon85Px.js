import * as React from "react";

const SvgMakerOsIcon85Px = ({ title, titleId, ...props }) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 13 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="M10.165 7.16a.5.5 0 0 0 .707.706l-.707-.707Zm.707-3.006a.5.5 0 1 0-.707.707l.707-.707Zm0 3.712.089-.088-.707-.707-.089.088.707.707Zm.089-3.624-.089-.088-.707.707.089.089.707-.708Zm0 3.536a2.5 2.5 0 0 0 0-3.536l-.707.708a1.5 1.5 0 0 1 0 2.12l.707.708ZM1.856 4.861a.5.5 0 0 0-.707-.707l.707.707ZM1.15 7.866a.5.5 0 0 0 .707-.707l-.707.707Zm0-3.712-.088.088.707.708.088-.089-.707-.707Zm-.088 3.624.088.088.707-.707-.088-.088-.707.707Zm0-3.536a2.5 2.5 0 0 0 0 3.536l.707-.707a1.5 1.5 0 0 1 0-2.121l-.707-.708ZM7.16 1.856a.5.5 0 0 0 .707-.707l-.707.707ZM4.155 1.15a.5.5 0 1 0 .707.707l-.707-.707Zm3.712 0-.088-.088-.708.707.089.088.707-.707Zm-3.624-.088-.088.088.707.707.088-.088-.707-.707Zm3.536 0a2.5 2.5 0 0 0-3.536 0l.707.707a1.5 1.5 0 0 1 2.121 0l.708-.707ZM4.862 10.165a.5.5 0 0 0-.707.707l.707-.707Zm3.005.707a.5.5 0 1 0-.707-.707l.707.707Zm-3.712 0 .088.088.707-.707-.088-.088-.707.707Zm3.624.088.088-.088-.707-.707-.089.088.708.707Zm-3.536 0a2.5 2.5 0 0 0 3.536 0l-.708-.707a1.5 1.5 0 0 1-2.12 0l-.708.707Z"
      fill="currentColor"
    />
    <circle
      cx={6.011}
      cy={6.011}
      r={1.625}
      transform="rotate(45 6.01 6.01)"
      stroke="#555770"
    />
  </svg>
);

export default SvgMakerOsIcon85Px;
