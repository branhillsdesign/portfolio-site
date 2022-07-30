import * as React from "react";

const SvgBowling = ({ title, titleId, ...props }) => (
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
      d="m9.401 6.5.526-.289L9.92 6.2l-.519.3Zm-.648 5.879.558.22-.558-.22Zm-.255 5.967-.57.187.57-.187Zm.75 2.09.555-.227-.555.227ZM14.598 6.5l-.519-.3-.006.011.526.289Zm.648 5.879-.557.22.557-.22Zm.255 5.967.57.187-.57-.187Zm-.75 2.09-.555-.227.555.227ZM9.6 5A2.4 2.4 0 0 1 12 2.6V1.4A3.6 3.6 0 0 0 8.4 5h1.2Zm.32 1.2A2.386 2.386 0 0 1 9.6 5H8.4c0 .655.175 1.27.482 1.8l1.038-.6Zm-1.045.589c.355.645.42 1.413.27 2.33-.152.924-.513 1.938-.95 3.038l1.116.443c.438-1.105.844-2.224 1.018-3.286.176-1.07.128-2.138-.402-3.103l-1.052.578Zm-.947 11.744c.219.667.5 1.485.765 2.131l1.11-.455a32.47 32.47 0 0 1-.734-2.05l-1.14.374Zm.765 2.131c.245.596.825.936 1.425.936v-1.2c-.157 0-.271-.086-.315-.191l-1.11.455Zm-.497-8.507a9.738 9.738 0 0 0-.697 3.592h1.2c0-1.076.213-2.143.612-3.15l-1.115-.442ZM15.6 5A3.6 3.6 0 0 0 12 1.4v1.2A2.4 2.4 0 0 1 14.4 5h1.2Zm-.482 1.8c.307-.53.482-1.145.482-1.8h-1.2c0 .438-.117.847-.32 1.2l1.038.6Zm-1.045-.589c-.53.965-.578 2.034-.402 3.103.174 1.062.58 2.181 1.018 3.286l1.115-.443c-.437-1.1-.797-2.114-.95-3.038-.15-.917-.084-1.685.27-2.33l-1.051-.578Zm.858 11.948c-.216.66-.487 1.446-.735 2.05l1.11.455a33.58 33.58 0 0 0 .766-2.131l-1.14-.374Zm-.735 2.05c-.043.105-.157.191-.314.191v1.2c.6 0 1.18-.34 1.425-.936l-1.11-.455ZM10.118 21.6h3.764v-1.2h-3.764v1.2Zm4.57-9c.314.788.512 1.614.583 2.45l1.196-.1a9.835 9.835 0 0 0-.663-2.793l-1.115.443Zm.583 2.45c.02.233.03.465.03.699h1.2c0-.268-.011-.535-.034-.8l-1.195.102ZM8.1 15.6h7.77v-1.2H8.1v1.2Zm-.6.149c0 .81.099 1.622.317 2.41l1.156-.319A7.856 7.856 0 0 1 8.7 15.75h-1.2Zm.317 2.41c.034.126.072.25.112.374l1.14-.374a7.05 7.05 0 0 1-.096-.319l-1.156.32Zm7.485-2.41c0 .712-.087 1.416-.274 2.091l1.157.32a9.055 9.055 0 0 0 .317-2.411h-1.2Zm-.274 2.091c-.03.107-.061.214-.096.32l1.14.373c.041-.124.079-.248.113-.373l-1.157-.32Zm-6.633.76h7.212v-1.2H8.394v1.2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgBowling;
