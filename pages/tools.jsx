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

export default function Tools() {
	return (
		<>
			<PageWrapper>
				<DesktopMainNav />
				<PageHeading>
					Tools for <Highlighter>creation</Highlighter>.
				</PageHeading>
				<DesktopSideNav />
				<Reel>
					{Object.entries(bookmarks).map(([key, bookmark]) => {
            if (
							bookmark.tags.some(
								(tag) =>
									tag === 'Apps' ||
									tag === 'Figma Plugin' ||
									tag === 'Figma File' ||
                  tag === 'Framework' ||
                  tag === 'Extension' ||
                  tag === 'Icons'
							)
						) {
							return (
								<>
									<p key={key}>{bookmark.name}</p>
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
