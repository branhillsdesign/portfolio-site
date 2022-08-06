import { PageWrapper } from '../../components/layout/PageWrapper.jsx';
import { PageHeading } from '../../components/layout/PageHeading.jsx';
import { Highlighter } from '../../components/fonts/Highlighters.jsx';
import { Reel } from '../../components/layout/Reel.jsx';
import Image from 'next/image';
import { Footer } from '../../components/layout/Footer.jsx';
import { NextImageWrapper } from '../../components/utils/NextImageWrapper.jsx';
import {
	DesktopMainNav,
	DesktopSideNav,
} from '../../components/layout/Navigation.jsx';

export default function Golf() {
	return (
		<>
			<PageWrapper>
				<DesktopMainNav />
				<PageHeading>
					The more I practice, the <Highlighter>luckier</Highlighter> I get.
				</PageHeading>
				<DesktopSideNav />
				<Reel>
					<NextImageWrapper>
						<Image
							src='https://covers.openlibrary.org/b/isbn/059309932X.jpg'
							layout='fill'
							alt='Dune book Cover'
							quality={100}
						/>
					</NextImageWrapper>
				</Reel>
				<Footer />
			</PageWrapper>
		</>
	);
}
