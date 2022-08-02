import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { theme } from '../utils/ThemeConfig.jsx';
import GoogleAnalytics from '@bradgarropy/next-google-analytics';

const GlobalStyle = createGlobalStyle`
*, *::before, *::after {
    box-sizing: border-box;
  }
  * {
    margin: 0;
    line-height: calc(1em + 0.5rem);
  }
  html, body, #__next {
    height: 100%;
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    background: ${theme.dark.bg00}
  }
  body {
    -webkit-font-smoothing: antialiased;
  }
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }
  input, button, textarea, select {
    font: inherit;
  }
  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }
  #root, #__next {
    isolation: isolate;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;

function MyApp({ Component, pageProps }) {
	return (
		<>
			<GoogleAnalytics
				measurementId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}
			/>
			<GlobalStyle />
			<ThemeProvider theme={theme}>
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	);
}

export default MyApp;
