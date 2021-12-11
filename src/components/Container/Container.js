import styles from './Container.module.scss';

  const Container = props => {
    return (<container className={styles.container}>{props.children}</container>);
};

  export default Container;