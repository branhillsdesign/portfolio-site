import { ContentBlock } from '../components/layout/ContentBlock';
import { MainNav } from '../components/layout/MainNav';
import { PageHeading } from '../components/layout/PageHeading';
import { Reel } from '../components/layout/Reel';
import { SideNav } from '../components/layout/SideNav';
import { Highlighter } from '../components/fonts/Highlighters';
import { FlexBox } from '../components/utils/FlexBox';
import ScrollHorizontal from '../utils/ScrollHorizontal';
import { Footer } from '../components/layout/Footer';

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
