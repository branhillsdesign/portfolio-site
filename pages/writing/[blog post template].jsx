import { PageWrapper } from '../../components/layout/PageWrapper.jsx';
import { PageHeading } from '../../components/layout/PageHeading.jsx';
import { Highlighter } from '../../components/fonts/Highlighters.jsx';
import { Reel } from '../../components/layout/Reel.jsx';
import { Footer } from '../../components/layout/Footer.jsx';
import {
	DesktopMainNav,
	DesktopSideNav,
} from '../../components/layout/Navigation.jsx';
import { ArticleJsonLd } from 'next-seo';

export default function BlogTemplate() {
	return (
    <>
			<PageWrapper>
				<DesktopMainNav />
				<PageHeading>
					<Highlighter>Read</Highlighter> these books.
        </PageHeading>
        <ArticleJsonLd
          type='Blog'
          url='https://branhills.com/writing/blog-template'
          title='Blog Headline'
          images={[
            'https://branhills.com/assets/img/blog-cover.jpg',

          ]}
          datePublished='2019-01-01'
          dateModified='2019-01-01'
          authorName='Bran Hills'
          description='This is a description of the blog post.'
        />
				<DesktopSideNav />
				<Reel>
				</Reel>
				<Footer />
			</PageWrapper>
		</>
	);
}
