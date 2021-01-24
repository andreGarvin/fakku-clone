import Book from "@components/Book";

import styles from "./index.module.css";

function BookSection({ books }) {
  return (
    <div className={styles["book-section-content"]}>
      <div className={styles["book-section-header"]}>
        <h2>hentai books</h2>
        <select defaultValue="newest">
          <option value="newest">newest</option>
          <option value="oldest">oldest</option>
          <option value="popular">popular</option>
        </select>
      </div>
      <div className={styles["book-section-list"]}>
        {books.map((book) => {
          return <Book book={book} key={book.title} />;
        })}
      </div>
    </div>
  );
}

export default BookSection;
