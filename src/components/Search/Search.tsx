import { useTheme } from "../../context/ThemeContext";
import styles from "./styles.module.css";

interface Props {
  keywords: string;
  setKeywords: (keywords: string) => void;
}

const Search = ({ keywords, setKeywords }: Props) => {
  const { isDark } = useTheme();
  return (
    <div className={`${styles.search} ${isDark ? styles.dark : styles.light}`}>
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
