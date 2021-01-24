import styles from "./index.module.css";

const renderFiltersItems = (items) => {
  return items.map((item) => {
    return (
      <div className={styles.filter} key={item}>
        <input className={styles["filter-checkbox"]} type="checkbox" />
        <a
          className={styles["filter-title"]}
          href={`https://www.fakku.net/tags/${item}`}
        >
          {item}
        </a>
      </div>
    );
  });
};

const Filter = ({ filter }) => {
  return (
    <div className={styles.section} key={filter.title}>
      <p className={`${styles.header} ${styles["section-header"]}`}>
        {filter.title}
      </p>
      <div className={styles["section-content"]}>
        {renderFiltersItems(filter.items)}
      </div>
    </div>
  );
};

export default function Sidepanel(props) {
  return (
    <div className={styles.sidepanel}>
      <h3 className={styles.header}>filters</h3>
      {props.filters.map((filter) => {
        return <Filter filter={filter} key={filter.title} />;
      })}
    </div>
  );
}
