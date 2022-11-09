/** @format */

import Head from 'next/head';

import { H1 } from '../components/fonts/TypeStyles.jsx';

import { Center } from '../components/layout/Center.jsx';

export default function Home() {
	return (
		<>
			<Head>
				<title>BranHills.com - About</title>
				<meta
					name='description'
					content="My name’s Bran. I'm a designer and life-long learner with a
							need to create. I'm currently the staff designer crafting our brand BizLibrary, an EdTech saas company in St. Louis."
				/>
				<link rel='canonical' href='http://branhills.com/' />
				<meta name='robots' content='index, follow' />
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
			</Head>
			<Center>
				<H1>🚧</H1>
			</Center>
		</>
	);
}
