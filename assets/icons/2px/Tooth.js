import * as React from "react";

const SvgTooth = ({ title, titleId, ...props }) => (
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
      d="m5.168 3.973-.863-.505.863.505ZM4.51 5.1l-.863-.505.863.505Zm1.417 8.764.944.33-.944-.33Zm-.1.285-.944-.33.944.33Zm.106 3.443.922-.388-.922.388Zm1.173 2.784.921-.388-.921.388Zm.716.594.23-.973-.23.973ZM5 9.495l-.736.678.736-.678Zm13.83-5.522.864-.505-.863.505Zm.66 1.127-.863.505.863-.505Zm-1.417 8.764-.944.33.944-.33Zm.1.285.944-.33-.944.33Zm-.106 3.443-.922-.388.922.388Zm-1.173 2.784.922.388-.922-.388Zm-.716.594-.23-.973.23.973ZM19 9.495l.736.678-.736-.678Zm-4.115 10.45-.998-.07.998.07Zm.01-.229-.999.05.999-.05Zm-5.788 0 .999.05-.999-.05ZM4.305 3.468l-.66 1.127 1.727 1.01.66-1.127-1.727-1.01Zm.677 10.065-.1.285 1.887.662.1-.285-1.887-.662Zm.029 4.447 1.172 2.784 1.843-.776-1.172-2.784-1.843.776Zm2.579 3.963c1.29.306 2.621-.674 2.524-2.068l-1.995.14c-.001-.01.001-.023.005-.03.003-.006.004-.005-.003 0a.067.067 0 0 1-.026.013.092.092 0 0 1-.043-.001l-.462 1.946Zm-1.407-1.179a2.03 2.03 0 0 0 1.407 1.179l.462-1.946a.065.065 0 0 1-.026-.012c-.004-.003-.002-.003 0 .003l-1.843.776Zm-1.3-6.946a5.772 5.772 0 0 0 .128 4.162l1.843-.776a3.772 3.772 0 0 1-.085-2.724l-1.887-.662Zm-.618-3.645c.858.93 1.122 2.207.717 3.36l1.888.662c.654-1.866.214-3.915-1.134-5.377l-1.47 1.355Zm-.62-5.578c-1.053 1.802-.797 4.04.62 5.578l1.471-1.355c-.83-.902-.967-2.181-.364-3.213l-1.726-1.01ZM6.91 2c-1.061 0-2.065.546-2.604 1.468l1.726 1.01c.164-.28.493-.478.878-.478V2Zm11.06 2.478.659 1.127 1.726-1.01-.659-1.127-1.726 1.01Zm-.839 9.717.1.285 1.888-.662-.1-.285-1.888.662Zm.016 3.01-1.172 2.783 1.843.776 1.172-2.784-1.843-.776Zm-1.198 2.792a.092.092 0 0 1-.043.001.067.067 0 0 1-.026-.012c-.007-.006-.006-.007-.003-.001.004.008.006.02.006.03l-1.996-.14c-.097 1.394 1.235 2.374 2.524 2.068l-.462-1.946Zm.026-.01c.002-.005.004-.005 0-.002a.065.065 0 0 1-.026.012l.462 1.946a2.03 2.03 0 0 0 1.407-1.179l-1.843-.776Zm1.257-5.507a3.772 3.772 0 0 1-.085 2.724l1.843.776a5.773 5.773 0 0 0 .129-4.162l-1.887.662Zm1.033-5.662c-1.348 1.462-1.788 3.511-1.134 5.377l1.888-.662c-.405-1.153-.141-2.43.717-3.36l-1.471-1.355Zm.364-3.213c.604 1.032.466 2.311-.364 3.213l1.47 1.355c1.418-1.539 1.674-3.776.62-5.578l-1.726 1.01ZM17.09 4c.385 0 .714.199.878.478l1.726-1.01C19.156 2.546 18.152 2 17.091 2v2Zm0-2H6.91v2H17.09V2Zm-6.986 17.765c.055-1.12.257-2.726.673-4.021.21-.652.452-1.155.705-1.476.245-.312.415-.353.517-.353v-2c-.925 0-1.616.516-2.088 1.114-.464.59-.795 1.348-1.038 2.103-.489 1.521-.707 3.316-.767 4.535l1.998.098ZM12 13.915c.102 0 .272.041.517.353.253.32.495.824.705 1.476.416 1.295.618 2.9.673 4.021l1.998-.098c-.06-1.22-.278-3.014-.767-4.535-.243-.755-.574-1.514-1.038-2.103-.472-.598-1.163-1.114-2.088-1.114v2Zm3.882 6.1c.001-.024.018-.193.01-.348l-1.997.098c0-.012 0-.013-.001.007l-.003.04-.005.063 1.996.14Zm-5.768-.14-.005-.064a2.414 2.414 0 0 1-.003-.04c-.001-.019 0-.018-.001-.006l-1.998-.098c-.007.155.01.323.012.348l1.995-.14Z"
      fill="#555770"
    />
  </svg>
);

export default SvgTooth;
