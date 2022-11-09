import { PageWrapper } from '../../components/layout/PageWrapper.jsx';
import { PageHeading } from '../../components/layout/PageHeading.jsx';
import { Highlighter } from '../../components/fonts/Highlighters.jsx';
import { Reel } from '../../components/layout/Reel.jsx';
import { Footer } from '../../components/layout/Footer.jsx';
import { DesktopMainNav, DesktopSideNav } from '../../components/layout/Navigation.jsx';
import books from '../api/books.json'
import { H4, P1 } from '../../components/fonts/TypeStyles.jsx';
import { ContentBlock } from '../../components/layout/ContentBlock.jsx';



export default function Books() {
  
	return (
		<>
			<DesktopMainNav />
			<PageWrapper>
				<PageHeading>
					My <Highlighter>growing</Highlighter> goodreads library.
				</PageHeading>
				<DesktopSideNav />
				<Reel>
					<ContentBlock>
						{Object.entries(books).map(([key, bookItem]) => {
							return (
								<>
									<H4 key={key}>{bookItem.Title}</H4>
									<P1 key={key}>{bookItem.ISBN13}</P1>
									<P1 key={key}>{bookItem['Read Count']}</P1>
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
