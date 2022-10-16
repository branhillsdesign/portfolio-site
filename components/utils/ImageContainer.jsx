/** @format */

import styled from 'styled-components';
import Image from 'next/image';
import { theme } from './ThemeConfig';

const StyledImageWrapper = styled.div`
	border-radius: ${(props) => props.borderRadius || '6px'};
	position: relative !important;
	overflow: hidden;
	width: ${(props) => props.width || '100%'};
	height: ${(props) => props.height};
	align-items: center;
	justify-content: center;
	aspect-ratio: 2/1;
	${theme.breakpoints.lg} {
		min-height: ${(props) => props.height || ''};
	}
`;

export const ImageContainer = (props) => {
	return (
		<>
			<StyledImageWrapper height={props.height}>
				<Image
					alt={(props) => props.alt || 'Image on branhills.com'}
					src={props.src}
					layout='fill'
          objectFit='cover'
				/>
			</StyledImageWrapper>
		</>
	);
};
