import * as React from "react";

const SvgBoat = ({ title, titleId, ...props }) => (
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
      d="M10 2v-.6h-.6V2h.6ZM4.5 18l-.582.145.114.455H4.5V18ZM8 15.5l.469-.375L8 14.54l-.469.585L8 15.5ZM8 21l.268-.537-.311-.155-.29.193L8 21Zm6-19h.6v-.6H14V2Zm5.5 16v.6h.468l.114-.455L19.5 18ZM16 15.5l.468-.375L16 14.54l-.469.585.469.375Zm0 5.5.333-.5-.29-.192-.311.155L16 21ZM11.968 9.01l.19.57-.19-.57Zm.064 0-.19.57.19-.57Zm-8.944 2.96-.19-.569.19.57Zm-.066.12.583-.146-.583.146Zm17.89-.12.19-.569-.19.57Zm.066.12-.583-.146.582.146ZM9.4 2v3h1.2V2H9.4Zm.6 2.4H6v1.2h4V4.4ZM4.4 6v5.333h1.2V6H4.4Zm-1.122 6.54 1.912-.637-.38-1.139-1.912.638.38 1.138Zm1.912-.637 6.968-2.323-.38-1.139-6.968 2.323.38 1.139Zm-2.75.332 1.478 5.91 1.164-.29-1.477-5.91-1.165.29ZM4.5 18.6c.53 0 1.046-.216 1.484-.474a7.682 7.682 0 0 0 1.232-.932 12.907 12.907 0 0 0 1.245-1.31l.005-.006a.036.036 0 0 0 .002-.003L8 15.5l-.468-.375-.004.005-.015.018a10.845 10.845 0 0 1-.295.342c-.202.224-.484.52-.81.816-.326.297-.683.58-1.033.786-.359.212-.655.308-.875.308v1.2ZM8 15.5l-.468.375v.001l.002.002.006.008a4.329 4.329 0 0 0 .094.112 10.732 10.732 0 0 0 1.232 1.213c.77.641 1.91 1.389 3.134 1.389v-1.2c-.777 0-1.636-.502-2.366-1.11a9.534 9.534 0 0 1-1.149-1.144c-.006-.008-.01-.014-.014-.017l-.002-.004L8 15.5Zm4 5.9c-.91 0-1.84-.23-2.56-.47a11.208 11.208 0 0 1-1.156-.459l-.013-.006-.003-.002L8 21l-.268.537.003.001.006.003a1.405 1.405 0 0 0 .095.046 12.357 12.357 0 0 0 1.224.482c.78.26 1.85.531 2.94.531v-1.2ZM8 21l-.333-.5s.001 0 0 0v.001l-.01.006a7.03 7.03 0 0 1-.839.445C6.29 21.187 5.63 21.4 5 21.4v1.2c.87 0 1.71-.287 2.306-.552a8.236 8.236 0 0 0 1.026-.548L8 21Zm-3 .4H2v1.2h3v-1.2ZM13.4 2v3h1.2V2h-1.2Zm.6 3.6h4V4.4h-4v1.2Zm4.4.4v5.333h1.2V6h-1.2Zm2.702 5.402-1.912-.638-.38 1.139 1.912.637.38-1.138Zm-1.912-.638L12.22 8.441l-.38 1.139 6.97 2.322.379-1.138Zm1.205 1.18-1.477 5.91 1.164.291 1.478-5.91-1.165-.29ZM19.5 17.4c-.22 0-.516-.096-.875-.308a6.496 6.496 0 0 1-1.034-.786 11.67 11.67 0 0 1-1.104-1.158l-.015-.018-.003-.004v-.001L16 15.5l-.468.375c0 .002.001.002.002.003l.005.007a3.503 3.503 0 0 0 .091.11 12.901 12.901 0 0 0 1.154 1.2c.36.327.785.669 1.232.931.438.258.954.474 1.484.474v-1.2ZM16 15.5l-.468-.375-.003.004-.014.017-.06.07a9.528 9.528 0 0 1-1.089 1.072c-.73.61-1.59 1.112-2.366 1.112v1.2c1.223 0 2.364-.748 3.134-1.39a10.738 10.738 0 0 0 1.305-1.3.317.317 0 0 0 .026-.032l.002-.002h.001L16 15.5Zm-4 7.1c1.09 0 2.16-.27 2.94-.53a12.357 12.357 0 0 0 1.298-.519 1.253 1.253 0 0 0 .03-.014L16 21l-.268-.537-.003.002-.013.006a11.208 11.208 0 0 1-1.155.46c-.72.24-1.652.469-2.561.469v1.2Zm4-1.6a126.26 126.26 0 0 0-.332.5l.002.001.005.003a1.222 1.222 0 0 0 .075.048 8.234 8.234 0 0 0 .943.496c.597.265 1.436.552 2.307.552v-1.2c-.63 0-1.29-.213-1.819-.448a7.031 7.031 0 0 1-.838-.445l-.01-.006c-.001 0 0 0 0 0L16 21Zm3 1.6h3v-1.2h-3v1.2ZM14 1.4h-4v1.2h4V1.4Zm-4 4.2h4V4.4h-4v1.2Zm8 0c.22 0 .4.18.4.4h1.2A1.6 1.6 0 0 0 18 4.4v1.2Zm-5.842 3.98a.5.5 0 0 1-.316 0l.38-1.139a.7.7 0 0 0-.443 0l.38 1.139Zm-9.26 1.822a.7.7 0 0 0-.458.833l1.165-.29a.5.5 0 0 1-.327.595l-.38-1.138Zm17.824 1.138a.5.5 0 0 1-.327-.596l1.165.291a.7.7 0 0 0-.458-.833l-.38 1.138ZM6 4.4A1.6 1.6 0 0 0 4.4 6h1.2c0-.22.18-.4.4-.4V4.4Z"
      fill="#555770"
    />
  </svg>
);

export default SvgBoat;
