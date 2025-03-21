import { ReactNode } from "react";
import Pagination from "../Pagination/Pagination";
import { IPaginationProps } from "../../interfaces";

interface Props extends IPaginationProps {
  children: ReactNode;
  top?: boolean;
  bottom?: boolean;
}

const PaginationWrapper = ({
  top,
  bottom,
  children,
  ...paginationProps
}: Props) => {
  return (
    <>
      {top && <Pagination {...paginationProps} />}
      {children}
      {bottom && <Pagination {...paginationProps} />}
    </>
  );
};

export default PaginationWrapper;
