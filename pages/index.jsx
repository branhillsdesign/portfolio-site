/** @format */

import { PageWrapper } from '../components/layout/PageWrapper.jsx';
import { PageHeading } from '../components/layout/PageHeading.jsx';
import { Highlighter } from '../components/fonts/Highlighters.jsx';
import { Reel } from '../components/layout/Reel.jsx';
import { ContentBlock } from '../components/layout/ContentBlock.jsx';

import { WorkHistory } from '../components/layout/WorkHistory.jsx';
import { Footer } from '../components/layout/Footer.jsx';
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
import { theme } from '../components/utils/ThemeConfig';
import { ImageContainer } from '../components/utils/ImageContainer.jsx';
import { P1, P2 } from '../components/fonts/TypeStyles.jsx';
import { Spacer } from '../components/utils/Spacer.jsx';

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
			<DesktopMainNav />
			<PageWrapper>
				<PageHeading>
					Thanks for being <Highlighter>here.</Highlighter>
				</PageHeading>
				<DesktopSideNav />
				<Reel>
					<ContentBlock gap='1.5rem' gridRow='span 4'>
						<P1>{`Yo, I'm Bran. Welcome to my brain. This website scrolls horizintally with your mouse wheel for now. Updates coming soon.`}</P1>
						<P1>
							{`I'm a staff designer crafting our brand at `}
							<InlineLink
								href='https://www.bizlibrary.com/'
								alt='Link to BizLibrary company website'
								target='_blank'>
								<Highlighter
									textDecoration='underline'
									color={theme.dark.mainsubtle}>{`BizLibrary`}</Highlighter>
							</InlineLink>
							, an EdTech company in St. Louis.
						</P1>
						<P1>
							{`This website is where I track my work, thoughts, ideas, and life experiences. It's also where I'm learning and experimenting with new things, so take a look around and chat with me about stuff on Twitter @branhillsdesign.`}
						</P1>
						
						<WorkHistory />
					</ContentBlock>
					<ImageContainer
						src={laurenBarry}
						gridRow='span 2'
						gridColumn='span 2'
					/>
					<ImageContainer src={laurenBranHillsChicagoPier} gridRow='span 2' />
					<ImageContainer src={harrison} gridRow='span 4' />
					<ImageContainer src={barrett} gridRow='span 4' />
					<ImageContainer src={branHarryFish} gridRow='span 2' />
					<ImageContainer src={chicagoTrip} gridRow='span 4' />
				</Reel>
				<Footer />
			</PageWrapper>
		</>
	);
}
