import styled from 'styled-components';

export const FlexBox = styled.div`
	display: ${(props) => props.display || 'flex'};
	flex-direction: ${(props) => props.flexDirection || 'row'};
	justify-content: ${(props) => props.justifyContent || 'flex-start'};
	align-items: ${(props) => props.alignItems || 'flex-start'};
	gap: ${(props) => props.gap || '1rem'};
	background-color: ${(props) => props.backgroundColor || 'transparent'};
	flex-grow: ${(props) => props.flexGrow || '1'};
	flex-shrink: ${(props) => props.flexShrink || '0'};
	flex-basis: ${(props) => props.flexBasis || 'auto'};
	min-width: ${(props) => props.minWidth || 'auto'};
	background-color: ${(props) => props.bg || 'transparent'};
	padding: ${(props) => props.padding || '0'};
	max-width: ${(props) => props.maxWidth || 'null'};
  width: ${(props) => props.width || 'auto'};
  height: ${(props) => props.height || 'auto'};
	flex-wrap: ${(props) => props.flexWrap || 'nowrap'};
	box-sizing: ${(props) => props.boxSizing || 'inherit'};
  border-radius: ${(props) => props.borderRadius || '0'};

	> * & {
		margin-block: 0;
	}

	> * + * & {
		margin-block-start: ${(props) => props.gap || 'null'};
	}
`;
