import { Monster } from '../../App';

import Card from '../card/card.component';
import './card-list.style.scss';

type CardList = {
	monsters: Monster[];
};

const CardList = ({ monsters }: CardList) => {
	return (
		<div className="card-list">
			{monsters.map(monster => {
				return <Card key={monster.id} monster={monster} />;
			})}
		</div>
	);
};

export default CardList;
