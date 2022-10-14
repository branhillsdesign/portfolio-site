import styled from 'styled-components';
import Image from 'next/image';
import { theme } from './ThemeConfig';

const StyledImageWrapper = styled.div`
	border-radius: ${(props) => props.borderRadius || '6px'};
	position: relative !important;
	overflow: hidden;
	display: flex;
	align-items: center;
	justify-content: center;
	grid-row: ${(props) => props.gridRow || 'span 4'};
	grid-column: ${(props) => props.gridColumn || 'span 2'};
  ${theme.breakpoints.lg} {
    
  }
`;

export const ImageContainer = (props) => {
	return (
		<>
			<StyledImageWrapper gridRow={props.gridRow} gridColumn={props.gridColumn}>
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
