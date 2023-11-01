import styles from '../styles/card.module.scss';

interface CardProps {
    name: string;
}

const API_KEY = "ab4b4brjhbfsufd7ba87as7by7bsdf";

const Card = ({ name}: CardProps) => {
    return (
        <section className={styles.card}>
            <p>{name}</p>
        </section>
    )
}

export default Card;