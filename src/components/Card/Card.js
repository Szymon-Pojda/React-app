import { useDispatch, useSelector } from 'react-redux';
import styles from './Card.module.scss';
import { getToggleCardFavorite } from '../../redux/store';
import clsx from 'clsx';

const Card = props => {
    const cardId = props.cardId;
    const dispatch = useDispatch();
    const clickingFavorite = (e) => {
        e.preventDefault();
        dispatch(getToggleCardFavorite(cardId))
    }
    const card = useSelector(state => state.cards.filter(card => card.id === cardId));
    const isFavorite = card[0].isFavorite;
    return (
        <li className={styles.card}>{props.title}
            <button className={styles.buttonFavorite} onClick={clickingFavorite}>
                <span className={clsx(styles.icon, { [styles.active]: isFavorite }) + ' fa fa-star-o'}>

                </span>
            </button>
        </li>

    );
};


export default Card;