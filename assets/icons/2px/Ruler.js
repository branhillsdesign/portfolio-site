import * as React from "react";

const SvgRuler = ({ title, titleId, ...props }) => (
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
      d="m2 17-.707-.707L.586 17l.707.707L2 17ZM17 2l.707-.707L17 .586l-.707.707L17 2Zm5 5 .707.707.707-.707-.707-.707L22 7ZM7 22l-.707.707.707.707.707-.707L7 22Zm2.143-2.143.707.707-.707-.707Zm-6.436-2.15 15-15-1.414-1.414-15 15 1.414 1.414Zm13.586-15 5 5 1.414-1.414-5-5-1.414 1.414ZM7.707 21.293l-5-5-1.414 1.414 5 5 1.414-1.414Zm.729-2.143-2.143 2.143 1.414 1.414 2.143-2.143-1.414-1.414Zm1.414 0-2.857-2.857-1.414 1.414 2.857 2.857L9.85 19.15Zm.729-2.143L8.436 19.15l1.414 1.414 2.143-2.143-1.414-1.414Zm1.414 0-1.786-1.786-1.414 1.415 1.786 1.785 1.414-1.414Zm.729-2.143-2.143 2.143 1.414 1.414 2.143-2.142-1.414-1.415Zm1.414 0-2.857-2.857-1.415 1.414 2.857 2.858 1.415-1.415Zm.728-2.143-2.143 2.143 1.415 1.415 2.143-2.143-1.415-1.414Zm1.415 0-1.786-1.785-1.414 1.414 1.785 1.786 1.415-1.414Zm.728-2.142-2.143 2.143 1.415 1.414 2.142-2.143-1.414-1.414Zm1.414 0L15.564 7.72 14.15 9.136l2.857 2.857 1.414-1.414Zm2.872-4.286L19.15 8.436l1.414 1.414 2.143-2.143-1.414-1.414ZM19.15 8.436l-2.143 2.143 1.414 1.414 2.143-2.143-1.414-1.414Zm1.414 0L18.78 6.65l-1.415 1.414L19.15 9.85l1.414-1.414Z"
      fill="#555770"
    />
  </svg>
);

export default SvgRuler;
