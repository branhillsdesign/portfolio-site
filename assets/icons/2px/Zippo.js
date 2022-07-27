import * as React from "react";

const SvgZippo = ({ title, titleId, ...props }) => (
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
      d="M3 12v-1H2v1h1Zm1.163 10v1-1Zm7.835 0v-1 1Zm6.445-19 .496-.869-.858-.49-.5.853.862.506Zm-.67 10.1-.86-.51.86.51Zm-1.59.415.49-.872-.02-.011-.021-.011-.448.894Zm5.235-8.818-.495.869.006.003.49-.872Zm.426 1.545.86.51-.86-.51ZM4.524 12v1-1Zm0-.5v-1h-1v1h1Zm7.113 0h1v-1h-1v1Zm.525.5v8.869h2V12h-2Zm-.164 9H4.163v2h7.835v-2ZM4 20.869V12H2v8.869h2Zm.163.131C4.047 21 4 20.915 4 20.869H2C2 22.072 2.995 23 4.163 23v-2Zm7.999-.131c0 .046-.047.131-.164.131v2c1.169 0 2.164-.928 2.164-2.131h-2Zm1.862-8.363 5.282-9-1.725-1.012-5.282 9 1.725 1.012Zm3.924-8.637 2.975 1.697.99-1.738-2.974-1.697-.991 1.738Zm3.036 1.863-4.071 6.858 1.72 1.021 4.07-6.858-1.719-1.021Zm-4.352 6.889-3.022-1.515-.896 1.788 3.022 1.515.896-1.788Zm.28-.03a.157.157 0 0 1-.098.07.188.188 0 0 1-.14-.018l-.98 1.744c1.019.572 2.334.243 2.939-.776l-1.72-1.02Zm4.017-7.022c.04.023.06.053.067.08a.101.101 0 0 1-.012.083l1.72 1.02a2.115 2.115 0 0 0-.796-2.927l-.98 1.744ZM3 13h1.524v-2H3v2Zm2.524-1v-.5h-2v.5h2Zm-1 1h7.113v-2H4.524v2Zm7.113 0h1.525v-2h-1.525v2Zm-1-1.5v.5h2v-.5h-2Zm-6.113 1H5.54v-2H4.524v2Zm2.016-1V8.1h-2v3.4h2ZM5.642 9h4.878V7H5.642v2Zm-.102 3.5h5.081v-2h-5.08v2Zm5.081 0h1.016v-2h-1.016v2Zm-1-4.4v3.4h2V8.1h-2Zm.899.9a.9.9 0 0 1-.899-.9h2A1.1 1.1 0 0 0 10.52 7v2Zm-3.98-.9a.9.9 0 0 1-.898.9V7A1.1 1.1 0 0 0 4.54 8.1h2Zm-1-.1a.028.028 0 0 1-.01-.002.019.019 0 0 1-.007-.004c-.001-.001 0-.001 0 0l.001.004V8h-2c0 1.12.918 2 2.016 2V8Zm-.016 0v.002l-.001.004c0 .001-.001.001 0 0a.019.019 0 0 1 .006-.004A.028.028 0 0 1 5.54 8V6c-1.098 0-2.016.88-2.016 2h2Zm.016 0c.007 0 .01.001.012.002a.019.019 0 0 1 .006.004c.001.001 0 .001 0 0l-.001-.004V8h2c0-1.12-.918-2-2.017-2v2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgZippo;
