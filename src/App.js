import { useEffect, useState } from 'react';

import SearchBox from './components/search-box/search-box.component';
import CardList from './components/card-list/card-list.component';
import './components/card-list/card-list.component';
import './App.css';

const App = () => {
	const [searchField, setSearchField] = useState('');
	const [monsters, setMonsters] = useState([]);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(response => setMonsters(response));
	}, []);

	const onChangeHandler = event => {
		setSearchField(event.target.value);
	};

	const filterMoster = () => {
		const filterArray = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
		return filterArray;
	};

	return (
		<div className="App">
			<h1 className="title">Monster Rolodex</h1>
			<SearchBox onChangeHandler={onChangeHandler} />
			<CardList monsters={filterMoster()} />
		</div>
	);
};

export default App;
