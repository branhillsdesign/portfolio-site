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
import laurenBranChicagoWillis from '../assets/img/lauren-bran-hills-chicago-trip.jpg';
import harry from '../assets/img/harrison.jpg';
import barry from '../assets/img/barrett.jpg';
import ScrollHorizontal from '../utils/ScrollHorizontal';
import laurenBranHillsChicagoPier from '../assets/img/IMG_5303.jpg';
import branHarryFish from '../assets/img/IMG_5299.jpg';
import laurenBarry from '../assets/img/IMG_5300.jpg';

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
					<ScrollHorizontal reverseScroll='true'>
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
							<Image
								src={laurenBranHills}
  							alt=''
								objectFit='cover'
							/>
							<Image
								src={laurenBranChicagoWillis}
								layout='intrinsic'
								alt=''
								objectFit='cover'
							/>
						</ContentBlock>
						<ContentBlock>
							<Image src={harry} layout='intrinsic' alt='' objectFit='cover' />
						</ContentBlock>
						<ContentBlock>
							<Image src={barry} layout='intrinsic' alt='' objectFit='cover' />
						</ContentBlock>
						<ContentBlock>
							<Image
								src={laurenBranHillsChicagoPier}
								layout='intrinsic'
								alt=''
								objectFit='cover'
							/>
						</ContentBlock>
						<ContentBlock>
							<Image
								src={branHarryFish}
								layout='intrinsic'
								alt=''
								objectFit='cover'
							/>
							<Image src={laurenBarry} layout='intrinsic' alt='' objectFit='cover' />
						</ContentBlock>
						<ContentBlock>
							<Image src={harry} layout='intrinsic' alt='' objectFit='cover' />
						</ContentBlock>
						<ContentBlock>
							<Image src={harry} layout='intrinsic' alt='' objectFit='cover' />
						</ContentBlock>
					</ScrollHorizontal>
				</Reel>
			</FlexBox>
		</>
	);
}
