import * as React from "react";

const SvgTheatre = ({ title, titleId, ...props }) => (
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
      d="m3 3 .6-.8A1 1 0 0 0 2 3h1Zm18 0h1a1 1 0 0 0-1.6-.8l.6.8Zm-1 10a8 8 0 0 1-8 8v2c5.523 0 10-4.477 10-10h-2Zm-8 8a8 8 0 0 1-8-8H2c0 5.523 4.477 10 10 10v-2Zm-8-8V3H2v10h2ZM20 3v10h2V3h-2ZM3 3l-.6.8h.001l.002.002.004.003a2.478 2.478 0 0 0 .055.04l.153.108c.13.09.32.216.56.365.482.3 1.175.695 2.03 1.09C6.91 6.194 9.308 7 12 7V5c-2.307 0-4.41-.694-5.956-1.408a16.899 16.899 0 0 1-1.814-.973 12.226 12.226 0 0 1-.63-.42h-.001S3.6 2.2 3 3Zm9 4c2.693 0 5.09-.806 6.794-1.592.856-.395 1.549-.79 2.03-1.09a14.212 14.212 0 0 0 .77-.513l.003-.003.002-.001S21.6 3.8 21 3l-.6-.8h.001c0-.001 0 0 0 0l-.005.003-.026.02a12.198 12.198 0 0 1-.6.397c-.425.263-1.045.617-1.814.972C16.41 4.306 14.306 5 12 5v2Z"
      fill="#555770"
    />
    <path
      d="m16.302 16 .758.652A1 1 0 0 0 16.302 15v1Zm-8.605 0v-1a1 1 0 0 0-.758 1.652L7.697 16Zm7.847-.652C14.664 16.369 13.4 17 12 17v2c2.02 0 3.826-.915 5.06-2.348l-1.516-1.305ZM12 17c-1.4 0-2.665-.63-3.545-1.652L6.94 16.651C8.173 18.085 9.98 19 12 19v-2Zm4.302-2H7.697v2h8.605v-2Z"
      fill="currentColor"
    />
    <path
      d="M9 12a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
      stroke="currentColor"
      strokeWidth={2}
    />
  </svg>
);

export default SvgTheatre;
