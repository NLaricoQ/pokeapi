const Pagination = ({ totalPages, onChangePage, onBack, onNext }) => {
  const pagesArray = Array(totalPages)
    .fill()
    .map((_, i) => i + 1);
  return (
    <div className="flex flex-wrap gap-1">
      <button
        className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        onClick={() => onBack()}
      >
        Back
      </button>
      {pagesArray.map((page) => (
        <button
          key={page}
          onClick={() => onChangePage(page)}
          className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          {page}
        </button>
      ))}
      <button
        className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        onClick={() => onNext()}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
