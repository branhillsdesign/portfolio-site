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
			<PageWrapper>
				<DesktopMainNav />
				<PageHeading>
					{`🚧 `} Under<Highlighter> Construction</Highlighter>
				</PageHeading>
				<DesktopSideNav />
				<Reel>
					<BodyCopy>{`Yo, I'm Bran. Welcome to my brain.`}</BodyCopy>
					<BodyCopy>
            {`I'm a staff designer crafting our brand at`}
						<InlineLink
							href='https://www.bizlibrary.com/'
							alt='Link to BizLibrary company website'
							target='_blank'>
							{` BizLibrary`}
						</InlineLink>, an EdTech company in St. Louis.
					</BodyCopy>
					<BodyCopy>
						{`This website is my brain. It's where I track my work, thoughts, ideas, and life experiences. It's also where I'm learning and experimenting with new things.`}
					</BodyCopy>
					<WorkHistory />
					<ContentBlock gap='1.5rem'>
						<NextImageWrapper>
							<Image src={chicagoTrip} layout='fill' alt='' objectFit='cover' />
						</NextImageWrapper>
						<NextImageWrapper>
							<Image
								src={laurenBranHillsChicagoPier}
								layout='fill'
								alt=''
								objectFit='cover'
							/>
						</NextImageWrapper>
					</ContentBlock>
					<NextImageWrapper>
						<Image src={harrison} layout='fill' alt='' objectFit='cover' />
					</NextImageWrapper>
					<NextImageWrapper>
						<Image src={barrett} layout='fill' alt='' objectFit='cover' />
					</NextImageWrapper>
					<ContentBlock gap='1.5rem'>
						<NextImageWrapper>
							<Image
								src={branHarryFish}
								layout='fill'
								alt=''
								objectFit='cover'
							/>
						</NextImageWrapper>
						<NextImageWrapper>
							<Image src={laurenBarry} layout='fill' alt='' objectFit='cover' />
						</NextImageWrapper>
					</ContentBlock>
					<Spacer width='1.5rem' />
				</Reel>
				<Footer />
			</PageWrapper>
		</>
	);
}
