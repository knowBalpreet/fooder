import React, { FunctionComponent } from 'react';
interface Props {
	diff: number;
	increaseCount: () => void;
}
const NumberCard: FunctionComponent<Props> = ({ diff, increaseCount }) => {
	return (
		<div>
			<div
				style={{ margin: '5%', marginLeft: 0, height: '352px', border: '1px solid orange', cursor: 'pointer' }}
				onClick={() => increaseCount()}
			>
				<h1
					style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', color: 'orange' }}
				>
					+{diff} MORE
				</h1>
			</div>
		</div>
	);
};
export default NumberCard;
