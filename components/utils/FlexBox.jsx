import styled from 'styled-components';

export const FlexBox = styled.div`
	display: flex;
	flex-direction: ${(props) => props.flexDirection};
  flex-wrap: ${(props) => props.flexWrap};
	justify-content: ${(props) => props.justifyContent};
	align-items: ${(props) => props.alignItems};
	gap: ${(props) => props.gap || '1rem'};
	color: ${(props) => props.color || 'inherit'};
	background-color: ${(props) => props.backgroundColor || 'transparent'};
	flex-grow: ${(props) => props.flexGrow};
	flex-shrink: ${(props) => props.flexShrink};
	flex-basis: ${(props) => props.flexBasis};
	min-width: ${(props) => props.minWidth};
	background-color: ${(props) => props.bg};
	padding: ${(props) => props.padding};
	max-width: ${(props) => props.maxWidth};
	min-width: ${(props) => props.minWidth};
	width: ${(props) => props.width};
	height: ${(props) => props.height};
	box-sizing: ${(props) => props.boxSizing || 'inherit'};
	border-radius: ${(props) => props.borderRadius};

	> * & {
		margin-block: 0;
	}

	> * + * & {
		margin-block-start: ${(props) => props.gap};
	}
`;
