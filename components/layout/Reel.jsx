import styled from 'styled-components';
import ScrollHorizontal from '../../utils/HorizontalScroll.jsx';
import { theme } from '../../utils/ThemeConfig';

const StyledReel = styled.main`
	grid-area: 3/2/4/3;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	max-height: 100%;
	gap: 1.5rem;
	& > div {
		width: clamp(424px, 20vw, 66ch);
	} 
  ${theme.breakpoints.lg} {
    grid-area: 3/1/4/2;
    
  }
`;

export const Reel = (props) => {
	return (
		<>
			<ScrollHorizontal reverseScroll={true}>
				<StyledReel>{props.children}</StyledReel>
			</ScrollHorizontal>
		</>
	);
};
