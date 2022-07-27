import * as React from "react";

const SvgPhoneRinging02 = ({ title, titleId, ...props }) => (
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
      d="m19.146 6.065.547-.247-.156-.346-.38-.007-.01.6ZM6.065 19.146l-.6.012.007.38.346.155.247-.547Zm4.052-3.404-.004-.6.004.6Zm.07.028.424-.424-.425.425Zm5.555-5.653-.6-.004.6.004Zm.028.07-.424.424.425-.425ZM6 15.868l.6-.012-.6.012Zm.097-.1.004.6-.004-.6ZM15.869 6l-.012.6.012-.6Zm-.1.097.6.004-.6-.004Zm3.389-.632L15.88 5.4l-.024 1.2 3.277.065.024-1.2Zm-3.988.628-.028 4.02 1.2.008.028-4.02-1.2-.008Zm3.429.218a9.227 9.227 0 0 1 .143 7.183l1.115.443c1.041-2.617.99-5.558-.164-8.119l-1.094.493Zm.143 7.183a9.352 9.352 0 0 1-2.086 3.162l.849.849a10.555 10.555 0 0 0 2.352-3.568l-1.115-.443Zm-3.396-2.883 3.53 3.529.848-.849-3.53-3.529-.848.849Zm-8.681 8.523L6.6 15.857l-1.2.024.065 3.277 1.2-.024ZM6.1 16.37l4.02-.028-.008-1.2-4.02.028.008 1.2Zm-.283 3.323a10.427 10.427 0 0 0 8.12.164l-.444-1.115A9.227 9.227 0 0 1 6.31 18.6l-.493 1.094Zm8.12.164a10.555 10.555 0 0 0 3.567-2.352l-.849-.849a9.352 9.352 0 0 1-3.162 2.086l.443 1.115Zm-4.176-3.662 3.53 3.529.848-.849-3.53-3.529-.848.849Zm.359.147a.503.503 0 0 1-.359-.147l.849-.849a.698.698 0 0 0-.498-.204l.008 1.2Zm5.021-6.23a.698.698 0 0 0 .204.499l.849-.849a.503.503 0 0 1 .147.359l-1.2-.008ZM6.6 15.858a.503.503 0 0 1-.5.513l-.007-1.2a.697.697 0 0 0-.693.71l1.2-.023ZM15.88 5.4a.697.697 0 0 0-.71.693l1.2.008a.503.503 0 0 1-.513.499l.024-1.2Z"
      fill="#555770"
    />
    <path
      d="M8 13a5 5 0 0 1 5-5M4 13a9 9 0 0 1 9-9"
      stroke="#555770"
      strokeWidth={1.2}
    />
  </svg>
);

export default SvgPhoneRinging02;
