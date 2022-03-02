import React from "react";
import styles from "./gamecard.module.css";

export default function GameCard({ title, img, tags }) {
  return (
    <div className={styles.card}>
      <img src={img} alt={title} />
      <h6>{title.replaceAll("-", " ")}</h6>
      <div className={styles.tags}>
        {tags.map((tag) => (
          <span key={tag} className={styles.tag}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
