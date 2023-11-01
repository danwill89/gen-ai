import styles from '../styles/card.module.scss';

interface CardProps {
    name: string;
    age: number;
}

const API_KEY = "ab4b4brjhbfsufd7ba87as7by7bsdf";

const Card = ({ name, age }: CardProps) => {
    return (
        <section className={styles.card}>
            <p>{name}</p>
            <p>{age}</p>
        </section>
    )
}

export default Card;