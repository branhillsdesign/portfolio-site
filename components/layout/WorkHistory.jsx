import styled from 'styled-components';
import { theme } from '../../utils/ThemeConfig';
import { Highlighter } from '../fonts/Highlighters';
import { Spacer } from '../utils/Spacer';
import Link from 'next/link';
import { StyledLink } from '../primitives/Link';

const NavTitle = styled.div`
	font: ${theme.text.h5};
	color: ${theme.dark.highContrast};
	display: flex;
	flex-direction: row;
	align-items: center;
	margin-bottom: 1rem;
	white-space: nowrap;
	&:after {
		margin-left: 1rem;
		content: '';
		display: block;
		min-width: 3rem;
		width: 100%;
		background-color: ${theme.dark.main};
		height: 0.125rem;
	}
`;

const WorkItem = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	font: ${theme.text.labelmedium};
	justify-content: space-between;
	white-space: nowrap;
	gap: 0.5rem;
`;

const DottedLine = styled.div`
	content: '';
	display: block;
	width: 100%;
	height: 0.125rem;
	border-bottom: 2px dotted ${theme.dark.subtle};
`;

const BeenPromoted = styled.div`
	display: flex;
	justify-content: flex-end;
	gap: 0.5rem;
`;

const WorkHistoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WorkHistory = (props) => {
	return (
		<WorkHistoryWrapper>
			<NavTitle>Work History</NavTitle>

			{/* Current Role at BizLibrary */}
			<WorkItem>
				<Highlighter>
					<Link href='https://www.bizlibrary.com/'>BizLibrary</Link>
				</Highlighter>
				<DottedLine />
				<Highlighter font={theme.text.small} color={theme.dark.highContrast}>
					Staff Designer
				</Highlighter>
				<Highlighter font={theme.text.small} color={theme.dark.subtle}>
					Current
				</Highlighter>
			</WorkItem>

			{/* Promotion to Marketing Graphic Designer */}
			<BeenPromoted>
				<Highlighter font={theme.text.small} color={theme.dark.dim}>
					Marketing Graphic Designer
				</Highlighter>
				<Highlighter font={theme.text.small} color={theme.dark.subtle}>
					2020-22
				</Highlighter>
			</BeenPromoted>

			{/* Motion Designer */}
			<BeenPromoted>
				<Highlighter font={theme.text.small} color={theme.dark.dim}>
					Motion Graphic Designer
				</Highlighter>
				<Highlighter font={theme.text.small} color={theme.dark.subtle}>
					2019-20
				</Highlighter>
			</BeenPromoted>
			<Spacer />

			{/* Previous Job */}
			<WorkItem>
				<Highlighter>Brandon Hills Design Co. </Highlighter>
				<DottedLine />
				<Highlighter font={theme.text.small} color={theme.dark.highContrast}>
					Designer
				</Highlighter>
				<Highlighter font={theme.text.small} color={theme.dark.subtle}>
					2018-19
				</Highlighter>
			</WorkItem>
			<Spacer />

			{/* Previous Job */}
			<WorkItem>
				<Highlighter>
					<StyledLink href='http://www.signaturesigns-stl.com/'>Signature Signs</StyledLink>
				</Highlighter>
				<DottedLine />
				<Highlighter font={theme.text.small} color={theme.dark.highContrast}>
					Designer
				</Highlighter>
				<Highlighter font={theme.text.small} color={theme.dark.subtle}>
					2015-18
				</Highlighter>
			</WorkItem>
			<Spacer />

			{/* Previous Job */}
			<WorkItem>
				<Highlighter>{`Champion's`}</Highlighter>
				<DottedLine />
				<Highlighter font={theme.text.small} color={theme.dark.highContrast}>
					Marketing Manager
				</Highlighter>
				<Highlighter font={theme.text.small} color={theme.dark.subtle}>
					2006-15
				</Highlighter>
			</WorkItem>
			<Spacer />

			{/* Previous Job */}
			<WorkItem>
				<Highlighter>{`US Army`}</Highlighter>
				<DottedLine />
				<Highlighter font={theme.text.small} color={theme.dark.highContrast}>
					{`Helicopter Mechanic(15B)`}
				</Highlighter>
				<Highlighter font={theme.text.small} color={theme.dark.subtle}>
					2007-13
				</Highlighter>
			</WorkItem>
		</WorkHistoryWrapper>
	);
};
