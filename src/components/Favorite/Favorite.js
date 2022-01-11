import { useSelector } from 'react-redux';
import styles from './Favorite.module.scss';
import Card from '../Card/Card.js';
import { getFilteredFavoriteCards } from '../../redux/store.js'

const Favorite = () => {
    const cards = useSelector(state => getFilteredFavoriteCards(state));
    return (
        <div className={styles.favorite}>
            <article className={styles.column}>
                <ul className={styles.card}>
                {cards.map(card => <Card key={card.id} cardId={card.id} title={card.title} />)}
                </ul>
            </article>
        </div>
    )
}

export default Favorite;