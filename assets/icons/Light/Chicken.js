import * as React from "react";

const SvgChicken = ({ title, titleId, ...props }) => (
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
      d="m5.151 16.58-.414-.433.414.433Zm-.745 3.12h.6v-.6h-.6v.6Zm3.265-.712-.414-.433.414.433ZM8.5 10.5l.575.172L8.5 10.5Zm6.931-7.187.21.563-.21-.563Zm6.322 5.751-.567-.197.567.197ZM14 16l.148.581L14 16Zm6.588-11.65.414-.434-.414.434ZM3.444 19.1c-.492 0-.844-.374-.844-.78H1.4c0 1.12.941 1.98 2.044 1.98v-1.2Zm-.844-.78c0-.405.352-.779.844-.779v-1.2c-1.103 0-2.044.86-2.044 1.98h1.2Zm4.094 2.3c0 .405-.352.78-.844.78v1.2c1.103 0 2.044-.861 2.044-1.98h-1.2Zm-.844.78c-.492 0-.844-.374-.844-.78h-1.2c0 1.119.941 1.98 2.044 1.98v-1.2Zm-.284-4.386 2.991-2.859-.829-.867-2.991 2.858.829.868ZM3.444 20.3h.962v-1.2h-.962v1.2Zm.362-.6v.92h1.2v-.92h-1.2Zm4.28-.278 2.991-2.858-.829-.868-2.991 2.859.829.867Zm-.358-5.267 2.52 2.409.83-.868-2.52-2.408-.83.867Zm6.124 1.264c-1.169.297-1.905.335-3.081.12l-.216 1.181c1.358.248 2.269.199 3.593-.139l-.296-1.162Zm7.334-6.552c-.367 1.053-1.567 2.539-3.062 3.875-1.493 1.333-3.133 2.386-4.272 2.677l.296 1.162c1.426-.363 3.242-1.575 4.775-2.944 1.53-1.366 2.924-3.021 3.396-4.375l-1.133-.395Zm-1.013-4.084C21.3 5.86 21.684 7.44 21.186 8.867l1.133.395c.657-1.883.14-3.954-1.317-5.346l-.829.867ZM9.075 10.672c.304-1.018 1.361-2.51 2.698-3.891 1.334-1.378 2.817-2.515 3.867-2.905l-.418-1.125c-1.307.486-2.942 1.78-4.311 3.195-1.365 1.411-2.595 3.075-2.986 4.382l1.15.344Zm6.565-6.796c1.571-.584 3.351-.222 4.533.907l.83-.867c-1.522-1.454-3.788-1.906-5.78-1.165l.417 1.125ZM7.894 20.62c0-.313-.008-.56.026-.79.032-.22.092-.337.166-.408l-.83-.867c-.343.328-.472.745-.524 1.1-.05.344-.038.713-.038.965h1.2Zm.837-7.016c-.21-1.048-.01-1.746.344-2.932l-1.15-.344c-.353 1.182-.644 2.14-.37 3.511l1.176-.235Zm-5.287 3.937c.267 0 .646.011.998-.036.36-.048.784-.166 1.124-.49l-.83-.869c-.077.075-.21.137-.453.17-.25.033-.516.025-.84.025v1.2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgChicken;
