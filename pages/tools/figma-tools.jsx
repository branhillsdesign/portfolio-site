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
import { ImageContainer } from '../../components/utils/ImageContainer.jsx';
import { BookmarkGallery } from '../../components/layout/BookmarkGallery.jsx';

export default function figmaTools() {
	return (
		<>
			<DesktopMainNav />
			<PageWrapper>
				<PageHeading>
					Tools for the <Highlighter>Figma</Highlighter> user.
				</PageHeading>
				<DesktopSideNav />
				<Reel>
					<BookmarkGallery>
						{Object.entries(bookmarks).map(([key, bookmark]) => {
							if (bookmark.tags.includes('Figma Plugin' || 'Figma File')) {
								return (
									<>
										<a href={bookmark.link} target='_blank' rel='noreferrer'>
											<ImageContainer
												key={key}
												src={bookmark.img}
												height='100%'
											/>
										</a>
									</>
								);
							}
						})}
					</BookmarkGallery>
				</Reel>
				<Footer />
			</PageWrapper>
		</>
	);
}
