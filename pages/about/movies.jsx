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
import movies from '../api/movies.json';
import { H4, P1 } from '../../components/fonts/TypeStyles.jsx';

export default function Movies() {
	return (
		<>
				<DesktopMainNav />
			<PageWrapper>
				<PageHeading>
					My <Highlighter>Top Ten</Highlighter> of all time.
				</PageHeading>
				<DesktopSideNav />
				<Reel>
					{Object.entries(movies).map(([key, movieItem]) => {
						return (
							<>
								<H4 key={key}>{movieItem.Title}</H4>
								<P1 key={key}>{movieItem.URL}</P1>
								<P1 key={key}>{movieItem['Release Date']}</P1>
							</>
						);
					})}
				</Reel>
				<Footer />
			</PageWrapper>
		</>
	);
}
