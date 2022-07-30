import * as React from "react";

const SvgPen = ({ title, titleId, ...props }) => (
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
      d="m8.085 6.424.085-.594-.489-.069-.162.466.566.197ZM3 21l-.567-.198-.409 1.174 1.174-.41L3 21ZM15.509 4.356l.424-.424-.424.424Zm-.645-.644-.48-.36-.312.416.368.368.424-.424Zm2.712 12.203.197.566.466-.162-.07-.489-.593.085Zm2.712-6.78-.424.425.368.368.416-.312-.36-.48Zm-6.526 2.966a1.318 1.318 0 0 1-1.863 0l-.849.849a2.518 2.518 0 0 0 3.56 0l-.848-.849Zm-1.863 0a1.318 1.318 0 0 1 0-1.863l-.849-.849a2.518 2.518 0 0 0 0 3.56l.849-.848Zm0-1.863a1.318 1.318 0 0 1 1.863 0l.849-.849a2.518 2.518 0 0 0-3.56 0l.848.849Zm1.863 0a1.318 1.318 0 0 1 0 1.863l.849.849a2.518 2.518 0 0 0 0-3.56l-.849.848ZM7.52 6.227 2.433 20.802l1.134.396L8.652 6.622l-1.133-.395ZM3.424 21.424 11.9 12.95l-.849-.849-8.474 8.475.848.848ZM15.13 3.892a8.978 8.978 0 0 1-6.96 1.938l-.168 1.188c2.746.39 5.623-.341 7.888-2.198l-.76-.928Zm.215.18 2.034-2.712-.96-.72-2.034 2.712.96.72Zm-.904.064.645.645.848-.849-.644-.644-.849.848Zm2.938 11.212L2.802 20.433l.396 1.134 14.575-5.086-.395-1.133Zm1.802-7.237a10.178 10.178 0 0 0-2.198 7.888l1.188-.169a8.978 8.978 0 0 1 1.938-6.959l-.928-.76Zm1.468 1.505 2.712-2.034-.72-.96-2.712 2.034.72.96Zm.064-.905-.644-.644-.849.848.645.645.848-.849Zm-5.627-3.93 4.134 4.134.849-.848-4.135-4.135-.848.849Z"
      fill="#555770"
    />
  </svg>
);

export default SvgPen;
