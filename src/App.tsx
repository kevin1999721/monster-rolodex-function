import { useEffect, useState, ChangeEvent } from 'react';

import { getData } from './utils/data.utils';

import SearchBox from './components/search-box/search-box.component';
import CardList from './components/card-list/card-list.component';
import './components/card-list/card-list.component';
import './App.css';

export type Monster = {
	id: string;
	name: string;
	email: string;
};

const App = () => {
	const [searchField, setSearchField] = useState<string>('');
	const [monsters, setMonsters] = useState<Monster[]>([]);

	useEffect(() => {
		const fetchUsers = async () => {
			const users = await getData<Monster[]>('https://jsonplaceholder.typicode.com/users');
			setMonsters(users);
		};

		fetchUsers();
	}, []);

	const onChangeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
		setSearchField(event.target.value);
	};

	const filterMoster = (): Monster[] => {
		const filterArray = monsters.filter(monster =>
			monster.name.toLowerCase().includes(searchField.toLowerCase())
		);
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
