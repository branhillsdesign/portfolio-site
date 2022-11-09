/** @format */

import { PageWrapper } from '../components/layout/PageWrapper.jsx';
import { PageHeading } from '../components/layout/PageHeading.jsx';
import { Highlighter } from '../components/fonts/Highlighters.jsx';
import { Reel } from '../components/layout/Reel.jsx';
import { Footer } from '../components/layout/Footer.jsx';
import {
	DesktopMainNav,
	DesktopSideNav,
} from '../components/layout/Navigation.jsx';
import bookmarks from './api/bookmarks.json';
import { ContentBlock } from '../components/layout/ContentBlock.jsx';
import { H4, P1 } from '../components/fonts/TypeStyles.jsx';
// import { BookmarkContainer } from '../components/primitives/BookmarkContainer.jsx';

export default function Keeps() {
	return (
		<>
			<DesktopMainNav />
			<PageWrapper>
				<PageHeading>
					All my <Highlighter>bookmarks</Highlighter>
				</PageHeading>
				<DesktopSideNav />
				<Reel>
					<ContentBlock>
						{/* <BookmarkContainer>Bookmark</BookmarkContainer> */}
						{Object.entries(bookmarks).map(([key, bookmark]) => {
							return (
								<>
									<H4 key={key}>{bookmark.name}</H4>
									<P1 key={key}>{bookmark.link}</P1>
									<P1 key={key}>{bookmark.tags}</P1>
								</>
							);
						})}
					</ContentBlock>
				</Reel>
				<Footer />
			</PageWrapper>
		</>
	);
}
