import { PageWrapper } from '../components/layout/PageWrapper.jsx';
import { PageHeading } from '../components/layout/PageHeading.jsx';
import { Highlighter } from '../components/fonts/Highlighters.jsx';
import { Reel } from '../components/layout/Reel.jsx';
import { Footer } from '../components/layout/Footer.jsx';
import {
	DesktopMainNav,
	DesktopSideNav,
} from '../components/layout/Navigation.jsx';

export default function Tools() {
	return (
		<>
			<PageWrapper>
				<DesktopMainNav />
				<PageHeading>
					Under<Highlighter>Construction</Highlighter>
				</PageHeading>
				<DesktopSideNav />
				<Reel></Reel>
				<Footer />
			</PageWrapper>
		</>
	);
}
