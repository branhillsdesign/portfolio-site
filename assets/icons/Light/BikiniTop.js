import * as React from "react";

const SvgBikiniTop = ({ title, titleId, ...props }) => (
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
      d="m3.5 18-.492.344.156.222.27.03L3.5 18Zm17 0 .066.596.27-.03.156-.222L20.5 18ZM7.515 4.647c-.557.765-1.256 2.034-1.833 3.652l1.13.402c.545-1.526 1.194-2.689 1.673-3.348l-.97-.706ZM5.933 9.011c.969.596 3.222 2.702 3.981 6.12l1.172-.261c-.841-3.783-3.324-6.143-4.524-6.881L5.933 9.01Zm-.036-.998c-1.1.792-2.568 2.242-3.4 4.049-.844 1.836-1.037 4.07.511 6.282l.983-.688c-1.251-1.788-1.112-3.553-.403-5.093.722-1.568 2.027-2.868 3.01-3.576l-.701-.974ZM3.434 18.596c1.605.179 5.374-.195 7.554-3.247l-.976-.698C8.192 17.2 4.96 17.56 3.566 17.404l-.132 1.192Zm6.642-3.172c.281.282.968.676 1.924.676v-1.2c-.316 0-.572-.066-.76-.143a1.44 1.44 0 0 1-.291-.16.416.416 0 0 1-.019-.016l-.006-.005-.848.848Zm5.439-10.071c.48.66 1.128 1.822 1.672 3.348l1.13-.402c-.576-1.618-1.275-2.887-1.832-3.652l-.97.706Zm1.923 2.636c-1.2.738-3.683 3.098-4.524 6.88l1.172.261c.76-3.417 3.012-5.523 3.98-6.119l-.628-1.022Zm-.036.998c.982.708 2.288 2.008 3.01 3.576.709 1.54.848 3.305-.403 5.093l.983.688c1.548-2.212 1.355-4.447.51-6.282-.831-1.807-2.299-3.257-3.399-4.049l-.701.974Zm3.032 8.417c-1.394.155-4.625-.204-6.446-2.753l-.976.698c2.18 3.052 5.949 3.426 7.554 3.247l-.132-1.192Zm-7.358-2.828-.006.005a.873.873 0 0 1-.084.06 1.44 1.44 0 0 1-.226.116 2.003 2.003 0 0 1-.76.143v1.2c.956 0 1.643-.394 1.924-.676l-.848-.848Z"
      fill="#555770"
    />
  </svg>
);

export default SvgBikiniTop;
