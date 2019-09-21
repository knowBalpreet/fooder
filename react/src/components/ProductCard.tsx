import React, { FunctionComponent, useState } from 'react';
import { RestaurantList } from './types';
import { Card, Icon, Row, Col } from 'antd';

interface Props {
	data: RestaurantList;
}
interface Rating {
	rating: string;
}

const RatingIcon: FunctionComponent<Rating> = ({ rating }) => {
	console.log('rating', rating);
	if (rating.length) {
		return (
			<div
				style={{
					backgroundColor: '#42c578',
					color: 'white',
					margin: '5px',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Icon theme="filled" style={{ color: 'white' }} type="star" key="star" /> {'  '} {rating}
			</div>
		);
	}
	return (
		<div>
			<Icon style={{ color: 'black' }} theme="filled" type="star" key="star" /> _ _
		</div>
	);
};

const ProductCard: FunctionComponent<Props> = ({ data }) => {
	const [isHover, setHover] = useState(false);
	return (
		<div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} style={{ marginBottom: '10%' }}>
			<Card
				hoverable={true}
				actions={isHover ? [<b key="quick">QUICK VIEW</b>] : []}
				style={{ margin: '5%', marginLeft: 0 }}
				cover={<img alt="example" src={data.image} style={{ height: '200px' }} />}
				bodyStyle={{
					padding: '5%',
					height: '150px',
					display: 'flex',
					justifyContent: 'center',
					flexDirection: 'column',
				}}
			>
				<b>{data.name}</b>

				<p>{data.food_types.join(', ')}</p>
				<Row type="flex" align="middle">
					<Col span={5}>
						<RatingIcon rating={data.ratings} />
					</Col>
					<Col span={5} offset={1}>
						<p style={{ marginBottom: 0 }}>{data.delivery_time}</p>
					</Col>
					<Col span={12} offset={1}>
						<p style={{ marginBottom: 0 }}>&#8377; {`${data.price_for_two} FOR TWO`}</p>
					</Col>
				</Row>
			</Card>
		</div>
	);
};

export default ProductCard;
