/** @format */

import { PageWrapper } from '../../components/layout/PageWrapper.jsx';
import { PageHeading } from '../../components/layout/PageHeading.jsx';
import { Highlighter } from '../../components/fonts/Highlighters.jsx';
import { Reel } from '../../components/layout/Reel.jsx';
import { Footer } from '../../components/layout/Footer.jsx';
import {
	DesktopMainNav,
	DesktopSideNav,
} from '../../components/layout/Navigation.jsx';
import bookmarks from '../api/bookmarks.json';

export default function portfolios() {
	return (
		<>
			<PageWrapper>
				<DesktopMainNav />
				<PageHeading>
					<Highlighter>Great</Highlighter> portfolio sites.
				</PageHeading>
				<DesktopSideNav />
				<Reel>
					{Object.entries(bookmarks).map(([key, bookmark]) => {
						if (bookmark.tags.includes('Portfolio')) {
							return (
								<>
									<h4 key={key}>{bookmark.name}</h4>
									<p key={key}>{bookmark.link}</p>
								</>
							);
						}
					})}
				</Reel>
				<Footer />
			</PageWrapper>
		</>
	);
}
