import styled from 'styled-components';
import ScrollHorizontal from '../../utils/HorizontalScroll.jsx';
import { theme } from '../utils/ThemeConfig';

export const StyledReel = styled.main`
	grid-area: 3/2/4/3;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	max-height: 100%;
	gap: 1.5rem;
	& > div {
		max-width: 400px;
    min-width: 320px;
	} 
  ${theme.breakpoints.lg} {
    display: none;
  }
`;

export const MobileReel = styled.main`
	grid-area: 3/1/4/2;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 1.5rem;
	${theme.breakpoints.ultra} {
		display: none;
	}
	${theme.breakpoints.xl} {
		display: none;
	}
  ${theme.breakpoints.lg} {
    display: block;
  }
`;

export const Reel = (props) => {
	return (
		<>
			<ScrollHorizontal reverseScroll={true}>
				<StyledReel>{props.children}</StyledReel>
      </ScrollHorizontal>
      <MobileReel>{props.children}</MobileReel>
		</>
	);
};
