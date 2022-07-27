import Link from 'next/link';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
	&:hover {
		color: ${(props) => props.color || 'inherit'};
		border-bottom: 1px solid ${(props) => props.color || 'inherit'};
	}
`;
