import * as React from "react";

const SvgMotorsports = ({ title, titleId, ...props }) => (
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
      d="m14 19-.021.6H14V19Zm-10.07-.002v-.6.6Zm-.967-.93-.6.006.6-.006Zm8.776-8.74.298-.52-.01-.006-.287.526ZM20.4 12a6.4 6.4 0 0 1-6.4 6.4v1.2a7.6 7.6 0 0 0 7.6-7.6h-1.2ZM14 5.6a6.4 6.4 0 0 1 6.4 6.4h1.2A7.6 7.6 0 0 0 14 4.4v1.2Zm.021 12.8c-.382-.013-6.412-.007-10.091-.002l.002 1.2c3.704-.005 9.695-.01 10.047.002l.042-1.2ZM3.93 18.398c-.218 0-.365-.162-.367-.336l-1.2.012c.009.877.736 1.526 1.569 1.524l-.002-1.2ZM12.4 11.5a1.9 1.9 0 0 1-1.9 1.9v1.2a3.1 3.1 0 0 0 3.1-3.1h-1.2ZM7.865 7.483C9.352 6.346 11.34 5.6 14 5.6V4.4c-2.899 0-5.15.819-6.864 2.13l.729.953Zm3.577 2.366A1.9 1.9 0 0 1 12.4 11.5h1.2a3.1 3.1 0 0 0-1.563-2.692l-.595 1.041Zm-4.23-2.316 4.24 2.322.576-1.053-4.24-2.322-.576 1.053Zm-3.649 10.53a17.418 17.418 0 0 1 .418-3.931l-1.17-.264a18.619 18.619 0 0 0-.448 4.206l1.2-.012Zm.418-3.931c.562-2.495 1.74-5.01 3.884-6.649l-.73-.953c-2.446 1.871-3.728 4.686-4.324 7.338l1.17.264Zm6.52-.732H3.395v1.2H10.5v-1.2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgMotorsports;
