import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { theme } from '../components/utils/ThemeConfig.jsx';
import GoogleAnalytics from '@bradgarropy/next-google-analytics';
import { DefaultSeo } from 'next-seo';

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
  }
  body {
    -webkit-font-smoothing: antialiased;
     background: ${theme.dark.bg00};
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
			<DefaultSeo
				openGraph={{
					type: 'website',
					locale: 'en_US',
					url: 'https://branhills.com/',
					site_name: 'BranHills.com',
					title: `Bran Hills, designer and tinker of things`,
					description:
						'My name’s Bran. I’m a designer and life-long learner with a need to create. I’m currently the staff designer crafting our brand at BizLibrary, an EdTech saas company in St. Louis.',
					images: [
						{
							url: 'https://branhills.com/static/images/og-image.jpg',
							width: 1200,
							height: 630,
							alt: 'BranHills.com',
						},
						{
							url: 'https://branhills.com/static/images/og-image.jpg',
							width: 1200,
							height: 630,
							alt: 'BranHills.com',
						},
					],
				}}
				twitter={{
					handle: '@branhillsdesign',
					site: '@branhillsdesign',
					cardType: 'summary_large_image',
				}}
			/>
			<GoogleAnalytics
				measurementId={process.env.REACT_APP_NEXT_PUBLIC_GOOGLE_ANALYTICS}
			/>
			<GlobalStyle />
			<ThemeProvider theme={theme}>
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	);
}

export default MyApp;
