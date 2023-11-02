import React from "react";
import styles from "../styles/card.module.scss";

interface CardProps {
  name: string;
  age: number;
}

const API_KEY = "ab4b4brjhbfsufd7ba87as7by7bsdf";

const Card = ({ name, age }: CardProps) => {
  const getNameLength = (name: string) => name.length;

  return (
    <section className={styles.card}>
      <div className={styles.iconPlaceholder}></div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Name Length: {getNameLength(name)}</p>
    </section>
  );
};

export default Card;
