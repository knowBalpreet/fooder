import React, { FunctionComponent, useState, useEffect } from 'react';
import { Data } from './types';
import { Divider, Row, Col } from 'antd';
import ProductCard from './ProductCard';
import NumberCard from './NumberCard';
import BCLS from '../../assets/css/bootstrap.css.json';

interface Props {
	data: Data[];
}

const CategoryPanel: FunctionComponent<Props> = ({ data }) => {
	const [categoryLimit, setCategoryLimit] = useState({});
	useEffect(() => {
		data.forEach(restaurant => (categoryLimit[restaurant.category] = 5));
		setCategoryLimit(categoryLimit);
	}, []);

	const increaseCount = (category, categoryLimit) => {
		categoryLimit[category] += 5;
		setCategoryLimit({ ...categoryLimit });
	};

	return (
		<div>
			{data.map((restaurant, index) => (
				<div key={index} id={restaurant.category}>
					<h5 style={{ textTransform: 'capitalize', fontWeight: 600 }}>{restaurant.category}</h5>
					{/* <Row> */}
					<div className="row">
						{restaurant.restaurantList.slice(0, categoryLimit[restaurant.category]).map((item, index) => (
							<div className="col-md-4" key={index}>
								<ProductCard data={item} />
							</div>
						))}
						{restaurant.restaurantList.length - categoryLimit[restaurant.category] > 0 && (
							<div className="col-md-4" key={index}>
								<NumberCard
									diff={restaurant.restaurantList.length - categoryLimit[restaurant.category]}
									increaseCount={() => increaseCount(restaurant.category, categoryLimit)}
								/>
							</div>
						)}
					</div>
					{/* </Row> */}
					<Divider />
				</div>
			))}
		</div>
	);
};
export default CategoryPanel;
