import { PageWrapper } from '../../components/layout/PageWrapper.jsx';
import { PageHeading } from '../../components/layout/PageHeading.jsx';
import { Highlighter } from '../../components/fonts/Highlighters.jsx';
import { Reel } from '../../components/layout/Reel.jsx';
import { Footer } from '../../components/layout/Footer.jsx';
import {
	DesktopMainNav,
	DesktopSideNav,
} from '../../components/layout/Navigation.jsx';
import golfClubs from '../api/golfclubs.json'

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
					{Object.entries(golfClubs).map(([key, clubData]) => {
						return (
							<>
								<h4 key={key}>{clubData.type}</h4>
								<p key={key}>{clubData.brand}</p>
								<p key={key}>{clubData.loft}</p>
								<p key={key}>{clubData.carry}</p>
								<p key={key}>{clubData.actual}</p>
								<p key={key}>{clubData.name}</p>
							</>
						);
					})}
				</Reel>
				<Footer />
			</PageWrapper>
		</>
	);
}
