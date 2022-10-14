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
import { BookmarkContainer } from '../components/primitives/BookmarkContainer.jsx';

export default function Keeps() {
	return (
		<>
			<DesktopMainNav />
			<PageWrapper>
				<PageHeading>
					All my <Highlighter>bookmarks</Highlighter>.
				</PageHeading>
				<DesktopSideNav />
				<Reel>
					<BookmarkContainer>Bookmark</BookmarkContainer>
					{Object.entries(bookmarks).map(([key, bookmark]) => {
						return (
							<>
								<h4 key={key}>{bookmark.name}</h4>
								<p key={key}>{bookmark.link}</p>
								<p key={key}>{bookmark.tags}</p>
							</>
						);
					})}
				</Reel>
				<Footer />
			</PageWrapper>
		</>
	);
}
