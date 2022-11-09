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
import { ContentBlock } from '../../components/layout/ContentBlock.jsx';
import { H4, P1 } from '../../components/fonts/TypeStyles.jsx';

export default function apps() {
	return (
		<>
			<DesktopMainNav />
			<PageWrapper>
				<PageHeading>
					<Highlighter>Great</Highlighter> apps and websites.
				</PageHeading>
				<DesktopSideNav />
				<Reel>
					<ContentBlock>
						{Object.entries(bookmarks).map(([key, bookmark]) => {
							if (bookmark.tags.includes('Apps')) {
								return (
									<>
										<H4 key={key}>{bookmark.name}</H4>
										<P1 key={key}>{bookmark.link}</P1>
									</>
								);
							}
						})}
					</ContentBlock>
				</Reel>
				<Footer />
			</PageWrapper>
		</>
	);
}
