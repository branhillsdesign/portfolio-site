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
import golfClubs from '../api/golfclubs.json';
import { CardSurface } from '../../components/surfaces/CardSurface.jsx';
import { FlexBox } from '../../components/utils/FlexBox.jsx';
import { theme } from '../../components/utils/ThemeConfig.jsx';
import {
	H1,
	H2,
	H3,
	H4,
	H5,
	H6,
	LabelMedium,
	LabelSmall,
	Small,
	P1,
} from '../../components/fonts/TypeStyles.jsx';
import { ContentBlock } from '../../components/layout/ContentBlock.jsx';
import { Spacer } from '../../components/utils/Spacer.jsx';

export default function Golf() {
	return (
		<>
				<DesktopMainNav />
			<PageWrapper>
				<PageHeading>
					The more I practice, the <Highlighter>luckier</Highlighter> I get.
				</PageHeading>
				<DesktopSideNav />
				<Reel>
					<ContentBlock gridRow='span 4'>
						<H2 color={theme.dark.vivid}>Golf Club Stock Distances</H2>
						<Spacer />
						<P1 color={theme.dark.vivid}>
							<ul>
								<li>
									Distances vary wildly with contact and ball compression.
								</li>
								<li>Keep your head still.</li>
								<li>Plant your feet, leave the left heel on the ground.</li>
								<li>Start the backswing from your legs.</li>
								<li>Don&apos;t rotate the lead shoulder upwards.</li>
							</ul>
						</P1>
					</ContentBlock>

					{Object.entries(golfClubs).map(([key, clubData]) => {
						return (
							<>
								<CardSurface key={key} padding='0.5rem 1rem'>
									<FlexBox justifyContent='space-between' alignItems='center'>
										<H6 color={theme.dark.maindim} textTransform='capitalize'>
											{clubData.type}
										</H6>
										<Small color={theme.dark.dim}>{clubData.loft}°</Small>
									</FlexBox>
									<LabelSmall
										color={theme.dark.vivid}
										textTransform='capitalize'>
										{clubData.brand}
									</LabelSmall>
									<H5 color={theme.dark.vivid} textAlign='right'>
										{clubData.carry} yds
									</H5>
									{/* <H5 color={theme.dark.vivid} textAlign='right'>
										{clubData.actual} yds
									</H5> */}
									<Small color={theme.dark.vivid} textTransform='capitalize'>
										{clubData.name}
									</Small>
								</CardSurface>
							</>
						);
					})}
				</Reel>
				<Footer />
			</PageWrapper>
		</>
	);
}
