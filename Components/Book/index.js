import { FaCartPlus } from "react-icons/fa";

import styles from "./index.module.css";

export default function Book({ book }) {
  return (
    <div className={styles["book-card"]}>
      <div className={styles["book-card-poster"]}>
        <div className={styles["book-card-image"]}>
          <a href={book.linkUrl}>
            <img src={book.coverPhoto} alt={book.title} />
          </a>
        </div>
        <div className={styles["book-card-price-container"]}>
          <div className={styles["book-card-price"]}>
            <p>{book.price}</p>
          </div>
          <div className={styles["book-card-cart-icon"]}>
            <FaCartPlus height="16px" />
          </div>
        </div>
      </div>
      <div className={styles["book-card-text"]}>
        <a className={styles["book-card-text-title"]} href={book.linkUrl}>
          {book.title}
        </a>
        <a
          className={styles["book-card-text-author"]}
          href={`https://www.fakku.net/artists/${book.author
            .toLowerCase()
            .split(" ")
            .join("-")}`}
        >
          {book.author}
        </a>
      </div>
    </div>
  );
}
