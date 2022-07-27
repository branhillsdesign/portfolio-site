import * as React from "react";

const SvgFins = ({ title, titleId, ...props }) => (
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
      d="m3.885 14.103.433.415.03-.031.025-.035-.488-.35Zm5.676 5.928-.372-.47-.032.025-.03.03.434.415ZM15.64 3.245l.273-.535-.273.535Zm4.257 4.446.544-.254-.544.254Zm-5.632-5.51.208-.562-.208.563Zm6.522 6.812.57-.189-.57.19Zm-17.61 5.85.433.416-.433-.415Zm5.676 5.93-.434-.416.434.415Zm11.474-9.24.371.471.007-.005-.378-.466Zm.671-1.441-.598.047.598-.047Zm-8.902-7.476-.481-.359-.007.01.488.349ZM13.115 2l-.02-.6.02.6Zm-5.89 16.633-.424-.424.425.424Zm-2.06-2.06-.425-.425.425.424Zm1.438-1.44-.424-.424.424.424Zm-2.994.126.71-.741-.867-.83-.71.741.867.83Zm.764-.807 8.21-11.487-.976-.698-8.21 11.487.976.698Zm15.58-3.39L9.19 19.56l.744.942 10.764-8.498-.743-.942ZM9.129 19.616l-.71.741.867.83.71-.74-.867-.83ZM15.366 3.78c1.035.528 1.567.486 2.478 1.437l.867-.83c-1.096-1.144-2.087-1.312-2.8-1.676l-.545 1.07Zm2.478 1.437c.913.953 1.03 1.704 1.509 2.73l1.087-.51c-.374-.799-.634-1.906-1.729-3.05l-.867.83Zm-4.267 8.454 6.7-5.516-.762-.926-6.7 5.516.762.926ZM15.16 2.883 9.88 9.882l.957.723 5.282-6.999-.958-.723ZM13.136 2.6c.255-.01.579.018.92.144l.416-1.125a3.625 3.625 0 0 0-1.378-.219l.042 1.2Zm.92.144c.24.089.375.21.533.379.15.16.394.46.777.656l.546-1.069c-.15-.076-.227-.173-.447-.408a2.463 2.463 0 0 0-.993-.683l-.415 1.125Zm5.297 5.201c.185.397.425.627.574.785.135.143.221.246.29.453l1.139-.379a2.261 2.261 0 0 0-.557-.9c-.173-.182-.27-.275-.36-.467l-1.086.508Zm.864 1.238c.105.315.158.654.182.956l1.196-.095a5.315 5.315 0 0 0-.24-1.24l-1.138.379ZM3.609 20.357c-1.345-1.405-1.345-3.693 0-5.098l-.867-.83c-1.79 1.87-1.79 4.89 0 6.758l.867-.83Zm-.867.83a4.494 4.494 0 0 0 6.543 0l-.867-.83a3.294 3.294 0 0 1-4.81 0l-.866.83ZM20.704 12c.548-.446.955-1.147.891-1.955l-1.196.095c.026.33-.138.673-.452.929l.757.93Zm-8.128-9.024c.195-.262.397-.37.56-.375l-.042-1.2c-.666.023-1.167.437-1.48.857l.962.718ZM6.179 14.709 4.74 16.15l.849.848 1.439-1.44-.849-.848Zm1.47 4.349 1.44-1.44-.849-.848-1.439 1.44.849.848Zm.591-3.5a.857.857 0 0 1 0 1.212l.849.849a2.057 2.057 0 0 0 0-2.91l-.849.849Zm-3.5 3.5a2.057 2.057 0 0 0 2.91 0l-.849-.849a.858.858 0 0 1-1.212 0l-.849.849Zm0-2.91a2.057 2.057 0 0 0 0 2.91l.849-.849a.857.857 0 0 1 0-1.212l-.849-.849Zm2.288-.59a.858.858 0 0 1 1.212 0l.849-.849a2.057 2.057 0 0 0-2.91 0l.849.849Z"
      fill="#555770"
    />
  </svg>
);

export default SvgFins;
