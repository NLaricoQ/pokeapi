import { useState } from "react";

export const usePagination = (list, quantityPerPage, pagesToShow) => {
  const [pageNumber, setPageNumber] = useState(1);

  const lowerLimit = quantityPerPage * (pageNumber - 1);

  const upperLimit = quantityPerPage * pageNumber - 1;

  const totalPages = Math.ceil(list.length / quantityPerPage);

  const listSlice = list.slice(lowerLimit, upperLimit + 1);

  const changePageTo = (page) => {
    if (page > totalPages) setPageNumber(totalPages);
    else if (page < 1) setPageNumber(1);
    else setPageNumber(page);
  };
  const visiblePages = Array.from({ length: pagesToShow }, (_, i) => i + 1);
  const lastVisiblePage = Math.min(
    visiblePages[visiblePages.length - 1],
    totalPages
  );

  return [
    pageNumber,
    totalPages,
    listSlice,
    changePageTo,
    lastVisiblePage,
    visiblePages,
  ];
};
