import * as React from "react";

const SvgShake = ({ title, titleId, ...props }) => (
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
      d="M6 9h-.6v.023l.002.023L6 9Zm.385 5-.599.046.599-.046Zm.544 7.077-.598.046.598-.046Zm10.142 0 .598.046-.598-.046Zm-.997.323H7.926v1.2h8.148v-1.2ZM6.6 9A5.4 5.4 0 0 1 12 3.6V2.4A6.6 6.6 0 0 0 5.4 9h1.2ZM12 3.6A5.4 5.4 0 0 1 17.4 9h1.2A6.6 6.6 0 0 0 12 2.4v1.2Zm-6 6h6V8.4H6v1.2Zm6 0h6V8.4h-6v1.2ZM11.4 0v9h1.2V0h-1.2ZM6.675 9.954l-.077-1-1.196.092.077 1 1.196-.092ZM6 10.6h.077V9.4H6v1.2Zm11.402-1.646-.077 1 1.196.092.077-1-1.196-.092ZM18 9.4h-.077v1.2H18V9.4Zm-.077 0H6.077v1.2h11.846V9.4Zm-.598.554-.308 4 1.197.092.307-4-1.196-.092Zm-.308 4-.544 7.077 1.196.092.545-7.077-1.197-.092Zm-9.49 7.077-.544-7.077-1.197.092.545 7.077 1.196-.092Zm-.544-7.077-.308-4-1.196.092.307 4 1.197-.092Zm10.632-.554H12v1.2h5.615v-1.2ZM12 13.4H6.385v1.2H12v-1.2ZM11.4 9v5h1.2V9h-1.2Zm6.5.5a.1.1 0 0 1 .1-.1v1.2a1.1 1.1 0 0 0 1.1-1.1h-1.2Zm.1.1a.1.1 0 0 1-.1-.1h1.2A1.1 1.1 0 0 0 18 8.4v1.2ZM4.9 9.5A1.1 1.1 0 0 0 6 10.6V9.4a.1.1 0 0 1 .1.1H4.9Zm3.026 11.9a.4.4 0 0 1-.399-.37l-1.196.093A1.6 1.6 0 0 0 7.926 22.6v-1.2ZM6 8.4a1.1 1.1 0 0 0-1.1 1.1h1.2a.1.1 0 0 1-.1.1V8.4Zm10.074 14.2a1.6 1.6 0 0 0 1.595-1.477l-1.196-.092a.4.4 0 0 1-.399.369v1.2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgShake;
