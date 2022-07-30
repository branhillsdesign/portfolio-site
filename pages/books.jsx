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
import ScrollHorizontal from '../utils/ScrollHorizontal';
import { Footer } from '../components/layout/Footer';
import { NextImageWrapper } from '../components/utils/NextImageWrapper';

export default function About() {
	return (
		<>
			<MainNav />
			<PageHeading>
				Thank you for being <Highlighter>here.</Highlighter>
			</PageHeading>
			<FlexBox gap='1.5rem'>
				<SideNav />
				<ScrollHorizontal reverseScroll='true'>
					<Reel></Reel>
				</ScrollHorizontal>
			</FlexBox>
			<Footer />
		</>
	);
}
