import React, { FunctionComponent } from 'react';
import { List } from 'antd';
import { Data } from './types';

interface Props {
	data: Data[];
	activeCategory: string;
	setActiveCategory: (category: string) => void;
}

const Sidebar: FunctionComponent<Props> = ({ data = [], activeCategory, setActiveCategory }) => {
	return (
		<List
			itemLayout="horizontal"
			dataSource={data}
			style={{ border: '1px solid #e8e8e8', boxShadow: '0 .5rem 1rem rgba(0,0,0,.15)' }}
			renderItem={(item: Data) => (
				<List.Item
					style={{
						backgroundColor: activeCategory === item.category ? 'orange' : 'white',
						padding: '8px',
						cursor: 'pointer',
					}}
					onClick={() => setActiveCategory(item.category)}
				>
					<List.Item.Meta
						style={{
							textTransform: 'capitalize',
						}}
						title={item.category}
						description={`${item.restaurantList.length} OPTIONS`}
					/>
				</List.Item>
			)}
		/>
	);
};

export default Sidebar;
