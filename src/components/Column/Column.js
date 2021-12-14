import styles from './Column.module.scss'
import Card from '../Card/Card';

const Column = props => {
    return (
        <article className={styles.column}>
            <ul className={styles.cards}>
                {props.cards.map(card => <li key={card.id}>{card.title}</li>)}
            </ul>
            <ul className={styles.cards}>
                {props.cards.map(card => <Card key={card.id} title={card.title} />)}
            </ul>
    
            <CardForm columnId={props.id} action={column.id} />
            {props.action.map(column => <Column key={column.id} title={column.title} />)}
            <h2 className={styles.title}><span className={styles.icon + ' fa fa-' + props.icon}></span>{props.title}</h2>
        </article>
    );
};

export default Column;