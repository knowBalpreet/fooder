import React, { FunctionComponent } from 'react';
import { Data } from './types';
import { Divider, Row, Col } from 'antd';
import ProductCard from './ProductCard';

interface Props {
	data: Data[];
}

const AllPanel: FunctionComponent<Props> = ({ data }) => {
	return (
		<div>
			{data.map((restaurant, index) => (
				<div key={index} id={restaurant.category}>
					<Row>
						{restaurant.restaurantList.map((item, index) => (
							<Col key={index} span={8}>
								<ProductCard data={item} />
							</Col>
						))}
					</Row>
					<Divider />
				</div>
			))}
		</div>
	);
};
export default AllPanel;
