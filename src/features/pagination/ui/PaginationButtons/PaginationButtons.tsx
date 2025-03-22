import { useTheme } from "../../../../app/providers/ThemeProvider";
import { IPaginationButtonsProps } from "../../model/types";
import styles from "./styles.module.css";

const PaginationButtons = ({
  totalPages,
  handleNextPage,
  handlePreviousPage,
  handlePageClick,
  currentPage,
}: IPaginationButtonsProps) => {
  const { isDark } = useTheme();

  return (
    <div
      className={`${styles.pagination} ${isDark ? styles.dark : styles.light}`}
    >
      <button
        onClick={handlePreviousPage}
        className={styles.arrow}
        disabled={currentPage === 1}
      >
        {"<"}
      </button>
      <div className={styles.list}>
        {[...Array(totalPages)].map((_, index) => (
          <button
            onClick={() => handlePageClick(index + 1)}
            className={styles.pageNumber}
            disabled={index + 1 === currentPage}
            key={index}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <button
        onClick={handleNextPage}
        className={styles.arrow}
        disabled={currentPage === 10}
      >
        {">"}
      </button>
    </div>
  );
};

export default PaginationButtons;
