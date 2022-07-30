import styled from 'styled-components';
import ScrollHorizontal from '../../utils/HorizontalScroll';

const StyledReel = styled.main`
	grid-area: 3/3/4/4;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	max-height: 100%;
	gap: 1.5rem;
	& > div {
		width: clamp(424px, 20vw, 66ch);
	}
	/* Subgrid Below */
	/* display: grid;
	grid-template-rows: minmax(0, 1fr);
	grid-auto-flow: column dense;
	grid-auto-columns: 424px; 
	gap: 1.5rem; */
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
