import { PageWrapper } from '../../components/layout/PageWrapper.jsx';
import { PageHeading } from '../../components/layout/PageHeading.jsx';
import { Highlighter } from '../../components/fonts/Highlighters.jsx';
import { Reel } from '../../components/layout/Reel.jsx';
import { Footer } from '../../components/layout/Footer.jsx';
import { DesktopMainNav, DesktopSideNav } from '../../components/layout/Navigation.jsx';
import books from '../api/books.json'



export default function Books() {
  
	return (
		<>
			<PageWrapper>
				<DesktopMainNav />
				<PageHeading>
					My <Highlighter>growing</Highlighter> goodreads library.
				</PageHeading>
				<DesktopSideNav />
        <Reel>
          {Object.entries(books).map(([key, bookItem]) => {
            return (
							<>
								<h4 key={key}>{bookItem.Title}</h4>
								<p key={key}>{bookItem.ISBN13}</p>
								<p key={key}>{bookItem['Read Count']}</p>
							</>
						);
          })}
					{/* {Object.entries(sideNavMenu[curSection]).map(([key, sideNavItem]) => {
						return (
							<SideNavLink key={key} href={sideNavItem.href}>
								{sideNavItem.title}
							</SideNavLink>
						);
					})} */}
				</Reel>
				<Footer />
			</PageWrapper>
		</>
	);
}
