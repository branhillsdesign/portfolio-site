import { ContentBlock } from '../components/layout/ContentBlock';
import { MainNav } from '../components/layout/MainNav';
import { PageHeading } from '../components/layout/PageHeading';
import { Reel } from '../components/layout/Reel';
import { SideNav } from '../components/layout/SideNav';
import { Highlighter } from '../components/fonts/Highlighters';
import { FlexBox } from '../components/utils/FlexBox';
import { BodyCopy } from '../components/fonts/BodyCopy';
import { WorkHistory } from '../components/layout/WorkHistory';
import { Spacer } from '../components/utils/Spacer';
import Image from 'next/image';
import laurenBranHills from '../assets/img/lauren-bran-hills.jpg';
import laurenBranChicagoWillis from '../assets/img/lauren-bran-hills-chicago-trip.jpg';
import harry from '../assets/img/harrison.jpg';
import barry from '../assets/img/barrett.jpg';
import ScrollHorizontal from '../utils/ScrollHorizontal';
import laurenBranHillsChicagoPier from '../assets/img/IMG_5303.jpg';
import branHarryFish from '../assets/img/IMG_5299.jpg';
import laurenBarry from '../assets/img/IMG_5300.jpg';
import { Footer } from '../components/layout/Footer';
import styled from 'styled-components';
import { NextImageWrapper } from '../components/utils/NextImageWrapper';

export default function About() {
	return (
		<>
			<MainNav />
			<PageHeading>
				Thank you for being <Highlighter>here.</Highlighter>
			</PageHeading>
			<FlexBox gap='1.5rem'>
				<SideNav />
				<ScrollHorizontal reverseScroll='true'>
					<Reel>
						<ContentBlock>
							<BodyCopy>
								{`My name’s Bran. I'm a designer and life-long learner with a
							need to create. I'm currently the staff designer crafting the brand at the EdTech SaaS, BizLibrary.`}
							</BodyCopy>
							<BodyCopy>
								{`Aside from my passion of design, I'm a huge Dune fan, a pretty rad
							dad of two baby boys, and an avid golfer. I grew up on a farm in
							southeast Missouri and worked in the construction and retail
							industries until I went back to university for design at age 30.`}
							</BodyCopy>
							<Spacer height='2.675rem' />
							<WorkHistory />
						</ContentBlock>
						<ContentBlock>
							<Image src={laurenBranHills} alt='' />
							<Image
								src={laurenBranChicagoWillis}
								layout='intrinsic'
								alt=''
								objectFit='cover'
							/>
						</ContentBlock>
						<ContentBlock>
							<BodyCopy>
								{`Aside from my passion of design, I'm a huge Dune fan, a pretty rad
							dad of two baby boys, and an avid golfer. I grew up on a farm in
							southeast Missouri and worked in the construction and retail
							industries until I went back to university for design at age 30.`}
							</BodyCopy>
						</ContentBlock>
						<BodyCopy>
							{`Aside from my passion of design, I'm a huge Dune fan, a pretty rad
							dad of two baby boys, and an avid golfer. I grew up on a farm in
							southeast Missouri and worked in the construction and retail
							industries until I went back to university for design at age 30.`}
						</BodyCopy>
						<BodyCopy>
							{`Aside from my passion of design, I'm a huge Dune fan, a pretty rad
							dad of two baby boys, and an avid golfer. I grew up on a farm in
							southeast Missouri and worked in the construction and retail
							industries until I went back to university for design at age 30.`}
						</BodyCopy>
						<BodyCopy>
							{`Aside from my passion of design, I'm a huge Dune fan, a pretty rad
							dad of two baby boys, and an avid golfer. I grew up on a farm in
							southeast Missouri and worked in the construction and retail
							industries until I went back to university for design at age 30.`}
						</BodyCopy>
						<BodyCopy>
							{`Aside from my passion of design, I'm a huge Dune fan, a pretty rad
							dad of two baby boys, and an avid golfer. I grew up on a farm in
							southeast Missouri and worked in the construction and retail
							industries until I went back to university for design at age 30.`}
						</BodyCopy>
						<BodyCopy>
							{`Aside from my passion of design, I'm a huge Dune fan, a pretty rad
							dad of two baby boys, and an avid golfer. I grew up on a farm in
							southeast Missouri and worked in the construction and retail
							industries until I went back to university for design at age 30.`}
						</BodyCopy>
						<NextImageWrapper>
								<Image src={harry} layout='fill' alt='' objectFit='cover' />
						</NextImageWrapper>
						<NextImageWrapper>
							<ContentBlock>
								<Image src={barry} layout='fill' alt='' objectFit='cover' />
							</ContentBlock>
						</NextImageWrapper>
						<NextImageWrapper>
							<ContentBlock>
								<Image
									src={laurenBranHillsChicagoPier}
									layout='fill'
									alt=''
									objectFit='cover'
								/>
							</ContentBlock>
						</NextImageWrapper>
						<NextImageWrapper>
							<ContentBlock>
								<Image
									src={branHarryFish}
									layout='fill'
									alt=''
									objectFit='cover'
								/>
								<Image
									src={laurenBarry}
									layout='fill'
									alt=''
									objectFit='cover'
								/>
							</ContentBlock>
						</NextImageWrapper>
						<NextImageWrapper>
							<ContentBlock>
								<Image src={harry} layout='fill' alt='' objectFit='cover' />
							</ContentBlock>
						</NextImageWrapper>
						<NextImageWrapper>
							<ContentBlock>
								<Image src={harry} layout='fill' alt='' objectFit='cover' />
							</ContentBlock>
						</NextImageWrapper>
					</Reel>
				</ScrollHorizontal>
			</FlexBox>
			<Footer />
		</>
	);
}
