import styles from "./index.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.content}>
        <div>
          <a href="https://fakku.net/contact">contact</a>
          <a href="https://fakku.net/jobs">jobs</a>
          <a href="https://fakku.net/support">support</a>
          <a href="https://fakku.net/privacy">privacy</a>
          <a href="https://fakku.net/store">store</a>
        </div>
        <div>
          <a href="https://twitter.com/fakku">twitter</a>
          <a href="https://discord.gg/kqntSzc">discord</a>
        </div>
        <div>
          <p>FAKKU, LLC 2021</p>
        </div>
      </div>
    </div>
  );
}
