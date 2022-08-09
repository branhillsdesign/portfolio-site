import { PageWrapper } from '../components/layout/PageWrapper.jsx';
import { PageHeading } from '../components/layout/PageHeading.jsx';
import { Highlighter } from '../components/fonts/Highlighters.jsx';
import { Reel } from '../components/layout/Reel.jsx';
import { ContentBlock } from '../components/layout/ContentBlock.jsx';
import { BodyCopy } from '../components/fonts/BodyCopy.jsx';
import { WorkHistory } from '../components/layout/WorkHistory.jsx';
import Image from 'next/image';
import { Footer } from '../components/layout/Footer.jsx';
import { NextImageWrapper } from '../components/utils/NextImageWrapper.jsx';
import { Spacer } from '../components/utils/Spacer.jsx';
import chicagoTrip from '../assets/img/laurenbranchicago.jpg';
import laurenBranHillsChicagoPier from '../assets/img/laurenbranhills.jpg';
import harrison from '../assets/img/harrison.jpg';
import barrett from '../assets/img/barrett.jpg';
import branHarryFish from '../assets/img/branharryfish.jpg';
import laurenBarry from '../assets/img/laurenbarry.jpg';
import {
	DesktopMainNav,
	DesktopSideNav,
} from '../components/layout/Navigation.jsx';
import Head from 'next/head';
import { InlineLink } from '../components/fonts/InlineLink.jsx';
import { PortfolioPageWrapper } from '../components/layout/PortfolioPageWrapper.jsx';

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
			<PortfolioPageWrapper>
				<Spacer height='3rem' />

				<PageHeading>
					{`👋 `} Thanks for being<Highlighter> here.</Highlighter>
					<Spacer height='3rem' />
				</PageHeading>
				<NextImageWrapper>
					<Image
						objectFit='cover'
						src={laurenBranHillsChicagoPier}
						alt='bran hills chicago'
					/>
				</NextImageWrapper>
				<Spacer height='3rem' />

				<BodyCopy>
					{`My name’s Bran. I'm a designer and life-long learner with a need to create. I'm currently the staff designer crafting the brand at the EdTech SaaS, `}
					<InlineLink
						href='https://www.bizlibrary.com/'
						alt='Link to BizLibrary company website'
						target='_blank'>
						{`BizLibrary.`}
					</InlineLink>
				</BodyCopy>
				<Spacer />
				<BodyCopy>
					{`Aside from my passion of design, I'm a huge Dune fan, a pretty rad dad of two baby boys, and an avid golfer. I grew up on a farm in southeast Missouri, joined the US Army and worked on helicopters with a great bunch of soldiers.`}
				</BodyCopy>
				
				<Spacer height='3rem' />
				<WorkHistory />
				<Spacer height='3rem' />

				<Footer />
			</PortfolioPageWrapper>
		</>
	);
}
