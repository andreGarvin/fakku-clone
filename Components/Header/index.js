import { RiNotification2Fill } from "react-icons/ri";
import { AiFillCaretDown } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";

import styles from "./index.module.css";

function Logo() {
  return (
    <Link href="/">
      <img
        alt="FAKKU!"
        className={styles["header-logo"]}
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAABgCAMAAAAEhNRTAAAC9FBMVEUAAAD////////////////////////+/v7////+/v7////+/v7////+/v7+/v7////////////+/v7+/v7////+/v7+/v7+/v7////+/v7+/v7+/v7+/v7+/v7////+/v7////+/v7////+/v7+/v7+/v7+/v7+/v7////+/v7+/v7+/v7+/v7+/v7+/v7+/v7////+/v7+/v7////+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7////+/v7+/v7+/v7////+/v7+/v7+/v7////+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7////+/v7+/v7+/v7+/v7////+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7////+/v7+/v7+/v7+/v7+/v7////+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7////+/v7+/v7+/v7+/v7+/v7+/v7+/v7////+/v7+/v7+/v7+/v7+/v7+/v7////+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7////+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7////+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7////+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7////+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7////+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7////g93cCAAAA+3RSTlMAAQIDBAUGBwgJCgsMDQ4PEBESExQVFhcYGRobHB0eHyAhIiMkJSYnKCkqKywtLi8wMTIzNDU2Nzg5Ojs8PT4/QEFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFla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"
      />
    </Link>
  );
}

const TabSectionDivider = () => (
  <div className={styles["tab-section-divider"]}></div>
);

function Tabs() {
  return (
    <div className={styles.tabs}>
      <div className={styles["tab-section"]}>
        <a className={styles.tab} href="https://www.fakku.net/hentai">
          new releases
        </a>
      </div>
      <TabSectionDivider />
      <div className={styles["tab-section"]}>
        <a className={styles.tab} href="https://www.fakku.net/anime">
          anime
        </a>
        <a className={styles.tab} href="https://www.fakku.net/doujin">
          doujin
        </a>
        <a className={styles.tab} href="https://www.fakku.net/games">
          games
        </a>
        <a
          className={`${styles.tab} ${styles["tab-active"]}`}
          href="https://www.fakku.net/manga"
        >
          manga
        </a>
      </div>
      <TabSectionDivider />
      <div className={styles["tab-section"]}>
        <a className={styles.tab} href="https://www.fakku.net/tags">
          tags
        </a>
        <a className={styles.tab} href="https://www.fakku.net/forum">
          forums
        </a>
      </div>
    </div>
  );
}

function Account() {
  return (
    <div className={styles.account}>
      <p>my account</p>
      <AiFillCaretDown />
    </div>
  );
}

function Notification() {
  return (
    <div className={styles["header-notification"]}>
      <RiNotification2Fill />
    </div>
  );
}

function Search() {
  return (
    <div className={styles["header-search"]}>
      {/* <input type="text" /> */}
      <FaSearch className={styles["header-search-icon"]} height="20px" />
    </div>
  );
}

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.content}>
        <Logo />
        <Tabs />
        <div className={styles["header-right"]}>
          <Search />
          <Notification />
          <Account />
        </div>
      </div>
    </div>
  );
}
