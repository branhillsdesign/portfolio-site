import { MainNav } from '../components/layout/MainNav';
import { PageWrapper } from '../components/layout/PageWrapper';
import { PageHeading } from '../components/layout/PageHeading';
import { Highlighter } from '../components/fonts/Highlighters';
import { SideNav } from '../components/layout/SideNav';
import { Reel } from '../components/layout/Reel';
import { ContentBlock } from '../components/layout/ContentBlock';
import { BodyCopy } from '../components/fonts/BodyCopy';
import { WorkHistory } from '../components/layout/WorkHistory';
import Image from 'next/image';
import * as Img from '../assets/img/index';
import { Footer } from '../components/layout/Footer';
import { NextImageWrapper } from '../components/utils/NextImageWrapper';
import { Spacer } from '../components/utils/Spacer';

export default function Home() {
	return (
		<>
			<PageWrapper>
				<MainNav />
				<PageHeading>
					Thank you for being <Highlighter>here.</Highlighter>
				</PageHeading>
				<SideNav />
				<Reel>
					<BodyCopy>
						{`My name’s Bran. I'm a designer and life-long learner with a
							need to create. I'm currently the staff designer crafting the brand at the EdTech SaaS, BizLibrary.`}
					</BodyCopy>
					<BodyCopy>
						{`Aside from my passion of design, I'm a huge Dune fan, a pretty rad
							dad of two baby boys, and an avid golfer. I grew up on a farm in
							southeast Missouri and worked in the construction and retail
							industries until I went back to university for design at age 30.`}
					</BodyCopy>
					<WorkHistory />
					<ContentBlock gap='1.5rem'>
						<NextImageWrapper>
							<Image
								src={Img.chicagoTrip}
								layout='fill'
								alt=''
								objectFit='cover'
							/>
						</NextImageWrapper>
						<NextImageWrapper>
							<Image
								src={Img.laurenBranHillsChicagoPier}
								layout='fill'
								alt=''
								objectFit='cover'
							/>
						</NextImageWrapper>
					</ContentBlock>
					<NextImageWrapper>
						<Image src={Img.harrison} layout='fill' alt='' objectFit='cover' />
					</NextImageWrapper>
					<NextImageWrapper>
						<Image src={Img.barrett} layout='fill' alt='' objectFit='cover' />
					</NextImageWrapper>
					<ContentBlock gap='1.5rem'>
						<NextImageWrapper>
							<Image
								src={Img.branHarryFish}
								layout='fill'
								alt=''
								objectFit='cover'
							/>
						</NextImageWrapper>
						<NextImageWrapper>
							<Image
								src={Img.laurenBarry}
								layout='fill'
								alt=''
								objectFit='cover'
							/>
						</NextImageWrapper>
          </ContentBlock>
          <Spacer width='1.5rem' />
				</Reel>
				<Footer />
			</PageWrapper>
		</>
	);
}
