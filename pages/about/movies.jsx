import { PageWrapper } from '../../components/layout/PageWrapper.jsx';
import { PageHeading } from '../../components/layout/PageHeading.jsx';
import { Highlighter } from '../../components/fonts/Highlighters.jsx';
import { Reel } from '../../components/layout/Reel.jsx';
import { Footer } from '../../components/layout/Footer.jsx';
import {
	DesktopMainNav,
	DesktopSideNav,
} from '../../components/layout/Navigation.jsx';
import movies from '../api/movies.json'

export default function Movies() {
	return (
		<>
			<PageWrapper>
				<DesktopMainNav />
				<PageHeading>
					My <Highlighter>Top Ten</Highlighter> of all time.
				</PageHeading>
				<DesktopSideNav />
				<Reel>
					{Object.entries(movies).map(([key, movieItem]) => {
						return (
							<>
								<h4 key={key}>{movieItem.Title}</h4>
								<p key={key}>{movieItem.URL}</p>
								<p key={key}>{movieItem['Release Date']}</p>
							</>
						);
					})}
				</Reel>
				<Footer />
			</PageWrapper>
		</>
	);
}
