import Pagination from "@/features/pagination/ui/Pagination/Pagination";
import { TOTAL_PAGES } from "@/shared/constants/constants";
import { NewsList } from "@/widgets/news";
import { IFilters } from "@/shared/interfaces";
import { INews } from "@/entities/news";
import { usePaginationNews } from "../../utils/hooks/usePaginationNews";

interface Props {
  filters: IFilters;
  news: INews[];
  isLoading: boolean;
}

const NewsListWithPagination = ({ filters, news, isLoading }: Props) => {
  const { handleNextPage, handlePageClick, handlePreviousPage } =
    usePaginationNews(filters);

  return (
    <Pagination
      top
      bottom
      handleNextPage={handleNextPage}
      handlePreviousPage={handlePreviousPage}
      handlePageClick={handlePageClick}
      currentPage={filters.page_number}
      totalPages={TOTAL_PAGES}
    >
      <NewsList
        type="item"
        direction="column"
        isLoading={isLoading}
        news={news}
      />
    </Pagination>
  );
};

export default NewsListWithPagination;
