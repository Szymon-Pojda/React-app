import styles from './Column.module.scss'
import Card from '../Card/Card';
import ColumnForm from '../ColumnForm/ColumnForm';

const Column = props => {
    return (
        <article className={styles.column}>
            
            <ul className={styles.cards}>
                {props.cards.map(card => <Card key={card.id} title={card.title} Column={Column.id} />)}
            </ul>

            <h2 className={styles.title}><span className={styles.icon + ' fa fa-' + props.icon}></span>{props.title}</h2>
        </article>
    );
};

export default Column;