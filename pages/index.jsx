import { ContentBlock } from '../components/layout/ContentBlock';
import { MainNav } from '../components/layout/MainNav';
import { PageHeading } from '../components/layout/PageHeading';
import { Reel } from '../components/layout/Reel';
import { SideNav } from '../components/layout/SideNav';
import { Highlighter } from '../components/fonts/Highlighters';
import { FlexBox } from '../components/utils/FlexBox';
import { BodyCopy } from '../components/fonts/BodyCopy';
import { WorkHistory } from '../components/layout/WorkHistory';
import { Spacer } from '../components/utils/Spacer';
import Image from 'next/image';
import laurenBranHills from '../assets/img/lauren-bran-hills.jpg';
import branBoys from '../assets/img/bran-with-boys.jpg';
import harry from '../assets/img/harrison.jpg';
import barry from '../assets/img/barrett.jpg';
import { NextImageWrapper } from '../components/utils/NextImageWrapper';

export default function Home() {
	return (
		<>
			<MainNav />
			<PageHeading>
				Thank you for being <Highlighter>here.</Highlighter>
			</PageHeading>
			<FlexBox gap='1.5rem'>
				<SideNav />
				<Reel>
					<ContentBlock>
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
						<Spacer height='2.675rem' />
						<WorkHistory />
					</ContentBlock>
					<ContentBlock gap='1.5rem'>
						<NextImageWrapper borderRadius='6px'>
							<Image
                src={laurenBranHills}
                width='100%'
                height='100%'
								alt=''
								layout='fill'
							/>
						</NextImageWrapper>
						<NextImageWrapper borderRadius='6px'>
							<Image src={branBoys} alt='' layout='responsive' />
						</NextImageWrapper>
					</ContentBlock>
					<ContentBlock>
						<NextImageWrapper borderRadius='6px'>
							<Image src={harry} alt='' layout='responsive' />
						</NextImageWrapper>
					</ContentBlock>
					<ContentBlock>
						<NextImageWrapper borderRadius='6px'>
							<Image
								src={barry}
								alt=''
								layout='intrinsic'
								objectFit='contain'
							/>
						</NextImageWrapper>
					</ContentBlock>
					<ContentBlock />
				</Reel>
			</FlexBox>
		</>
	);
}
