/** @format */

import Document from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App) => (props) =>
						sheet.collectStyles(<App {...props}></App>),
				});

			const initialProps = await Document.getInitialProps(ctx);

			return {
				...initialProps,
				styles: (
					<>
						<link rel='preconnect' href='https://fonts.googleapis.com' />
						<link
							rel='preconnect'
							href='https://fonts.gstatic.com'
							crossOrigin
						/>
						<link
							href='https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap'
							rel='stylesheet'
						/>

						<link
							rel='icon'
							href='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🐳</text></svg>'></link>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				),
			};
		} finally {
			sheet.seal();
		}
	}
}
