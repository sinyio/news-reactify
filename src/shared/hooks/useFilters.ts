import { useState } from "react";
import { IFilters } from "../interfaces";

export const useFilters = (initialFilters: IFilters) => {
  const [filters, setFilters] = useState(initialFilters);

  const changeFilters = (key: string, value: string | number | null) => {
    setFilters((prev) => {
      return {
        ...prev,
        [key]: value,
      };
    });
  };

  return {
    filters,
    changeFilters,
  };
};
