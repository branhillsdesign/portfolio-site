import { ContentBlock } from '../components/layout/ContentBlock.jsx';
import { MainNav } from '../components/layout/MainNav.jsx';
import { PageHeading } from '../components/layout/PageHeading.jsx';
import { Reel } from '../components/layout/Reel.jsx';
import { SideNav } from '../components/layout/SideNav.jsx';
import { Highlighter } from '../components/fonts/Highlighters.jsx';
import { FlexBox } from '../components/utils/FlexBox.jsx';
import ScrollHorizontal from '../utils/ScrollHorizontal.jsx';
import { Footer } from '../components/layout/Footer.jsx';

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
