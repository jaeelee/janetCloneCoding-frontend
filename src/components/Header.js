import React from "react";
import styles from "./Header.module.css";

function Header() {
  return (
    <header styles={styles.header}>
      <a href="/" className={`${styles.logo}`}>
        <img
          src="https://janet.co.kr/html_demo/img/common/logo.png"
          alt="자격증넷"
          title
        />
      </a>

      <form className={`${styles.searchForm}`}>
        <div className={`${styles.searchTitle}`}>통합검색</div>
        <input
          type="text"
          placeholder="자격증 꿀팁 보러가기 #취준 #취뽀"
          className={`${styles.searchInput}`}
        />
        <button type="submit" value="검색">
          <img
            className={`${styles.searchBtn}`}
            src="https://janet.co.kr/html_demo/img/common/mainSrchBtn.png"
            alt="검색"
          />
        </button>
      </form>
    </header>
  );
}

export default Header;
