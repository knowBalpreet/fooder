import React, { useState, useEffect } from 'react';
import { Row, Col } from 'antd';
import data from '../../../assets/data.json';
import Sidebar from '../../components/Sidebar';
import CategoryPanel from '../../components/CategoryPanel';
import AllPanel from '../../components/AllPanel';
import { RestaurantList } from '../../components/types.js';

const images = [
	'https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=500&q=60',
	'https://images.unsplash.com/photo-1521305916504-4a1121188589?auto=format&fit=crop&w=500&q=60',
	'https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?auto=format&fit=crop&w=500&q=60',
	'https://images.unsplash.com/photo-1506084868230-bb9d95c24759?auto=format&fit=crop&w=500&q=60',
	'https://images.unsplash.com/photo-1429554513019-6c61c19ffb7e?auto=format&fit=crop&w=500&q=60',
	'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=500&q=60',
	'https://images.unsplash.com/photo-1496412705862-e0088f16f791?auto=format&fit=crop&w=500&q=60',
	'https://images.unsplash.com/photo-1432139509613-5c4255815697?auto=format&fit=crop&w=500&q=60',
	'https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?auto=format&fit=crop&w=500&q=60',
	'https://images.unsplash.com/photo-1484980972926-edee96e0960d?auto=format&fit=crop&w=500&q=60',
	'https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?auto=format&fit=crop&w=500&q=60',
];

const getRandomInt = max => {
	return Math.floor(Math.random() * Math.floor(max));
};

const App = () => {
	const [activeCategory, setActiveCategory] = useState(data[0].category);
	const [restaurantData, setRestaurantData] = useState(data);
	useEffect(() => {
		const swiggyRestaurants: RestaurantList[] = [];
		data.forEach(restaurants =>
			swiggyRestaurants.push(...restaurants.restaurantList.filter(restaurant => restaurant.isExlusive))
		);
		const seeAllRestaurants: RestaurantList[] = [];
		data.forEach(restaurants => seeAllRestaurants.push(...restaurants.restaurantList));
		data.push({ category: 'Only on swiggy', restaurantList: swiggyRestaurants });
		data.push({ category: 'see all', restaurantList: seeAllRestaurants });
		const finalData = data.map(category =>
			category.restaurantList.map((restaurant: RestaurantList) => {
				restaurant.image = images[getRandomInt(images.length)];
				return restaurant;
			})
		);
		console.log('final data', finalData);
		setRestaurantData([...data]);
	}, []);

	console.log('data', data);

	const changeCategory = activeCategory => {
		if (activeCategory !== 'see more') {
			const element = document.getElementById(activeCategory);
			if (element) {
				window.scrollTo({ top: element.offsetTop + 70, behavior: 'smooth' });
			}
		}
		setActiveCategory(activeCategory);
	};

	return (
		<Row type="flex" justify="center" style={{ marginTop: '5%' }}>
			<Col span={4} offset={1}>
				<Sidebar data={restaurantData} activeCategory={activeCategory} setActiveCategory={changeCategory} />
			</Col>
			<Col span={17} offset={1}>
				{activeCategory !== 'see all' ? (
					<CategoryPanel data={restaurantData.filter(restaurants => restaurants.category !== 'see all')} />
				) : (
					<AllPanel data={restaurantData.filter(restaurants => restaurants.category === 'see all')} />
				)}
			</Col>
		</Row>
	);
};
export default App;
