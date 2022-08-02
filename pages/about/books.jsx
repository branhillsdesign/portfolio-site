import { PageWrapper } from '../../components/layout/PageWrapper.jsx';
import { PageHeading } from '../../components/layout/PageHeading.jsx';
import { Highlighter } from '../../components/fonts/Highlighters.jsx';
import { Reel } from '../../components/layout/Reel.jsx';
import { ContentBlock } from '../../components/layout/ContentBlock.jsx';
import { BodyCopy } from '../../components/fonts/BodyCopy.jsx';
import { WorkHistory } from '../../components/layout/WorkHistory.jsx';
import Image from 'next/image';
import { Footer } from '../../components/layout/Footer.jsx';
import { NextImageWrapper } from '../../components/utils/NextImageWrapper.jsx';
import { Spacer } from '../../components/utils/Spacer.jsx';
import { DesktopMainNav, DesktopSideNav } from '../../components/layout/Navigation.jsx';

export default function Books() {
	return (
		<>
			<PageWrapper>
				<DesktopMainNav />
				<PageHeading>
					<Highlighter>Read</Highlighter> these books.
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
					<NextImageWrapper>
						<Image
							src='https://covers.openlibrary.org/b/isbn/0450050882.jpg'
							layout='fill'
							alt='Dune: Messiah Book Cover'
							quality={100}
						/>
					</NextImageWrapper>
					<NextImageWrapper>
						<Image
							src='https://covers.openlibrary.org/b/isbn/0593098242.jpg'
							layout='fill'
							alt='Children of Dune Book Cover'
							quality={100}
						/>
					</NextImageWrapper>
					<NextImageWrapper>
						<Image
							src='https://covers.openlibrary.org/b/isbn/0399125930.jpg'
							layout='fill'
							alt='God Emperor of Dune Book Cover'
							quality={100}
						/>
					</NextImageWrapper>
					<NextImageWrapper>
						<Image
							src='https://covers.openlibrary.org/b/isbn/0099560437.jpg'
							layout='fill'
							alt='Ready Player One Book Cover'
							quality={100}
						/>
					</NextImageWrapper>
				</Reel>
				<Footer />
			</PageWrapper>
		</>
	);
}
