import styles from "./styles.module.css";

const Search = ({ keywords, setKeywords }) => {
  return (
    <div className={styles.search}>
      <input
        value={keywords}
        className={styles.input}
        onChange={(e) => setKeywords(e.target.value)}
        placeholder="JavaScript"
      />
    </div>
  );
};

export default Search;
