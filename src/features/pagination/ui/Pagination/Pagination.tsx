import { ReactNode } from "react";
import PaginationButtons from "../PaginationButtons/PaginationButtons";
import { IPaginationButtonsProps } from "../../model/types";

interface Props extends IPaginationButtonsProps {
  children: ReactNode;
  top?: boolean;
  bottom?: boolean;
}

const Pagination = ({ top, bottom, children, ...paginationProps }: Props) => {
  return (
    <>
      {top && <PaginationButtons {...paginationProps} />}
      {children}
      {bottom && <PaginationButtons {...paginationProps} />}
    </>
  );
};

export default Pagination;
