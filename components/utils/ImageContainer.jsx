/** @format */

import styled from 'styled-components';
import Image from 'next/image';
import { theme } from './ThemeConfig';

const StyledImageWrapper = styled.div`
	border-radius: ${(props) => props.borderRadius || '6px'};
	position: relative !important;
	overflow: hidden;
	width: ${(props) => props.width || 'auto'};
	height: ${(props) => props.height || '40rem'};
	align-items: center;
	justify-content: center;
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
