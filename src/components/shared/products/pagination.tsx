import React from "react";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  showProductLimit: number;
  sortByKeyword: string;
  paginationHandler: (page: number) => void;
}

const SidebarPagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,

  paginationHandler,
}) => {
  const getPageNumbers = () => {
    const pages = [];
    const maxPagesToShow = 5;
    let startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

    if (endPage - startPage < maxPagesToShow - 1) {
      startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  };

  return (
    <div className="mt-8">
      <nav className="flex justify-center">
        <ul className="flex gap-2">
          {/* Previous Button */}
          <li>
            <button
              className={`px-3 py-2 rounded-lg ${
                currentPage === 1
                  ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
              onClick={() => paginationHandler(currentPage - 1)}
              disabled={currentPage <= 1}
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </li>

          {/* Page Numbers */}
          {getPageNumbers().map((page) => (
            <li key={page}>
              <button
                onClick={() => paginationHandler(page)}
                className={`px-3 py-2 rounded-lg ${
                  currentPage === page
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:bg-gray-200"
                }`}
                disabled={currentPage === page}
              >
                {page}
              </button>
            </li>
          ))}

          {/* Ellipsis if there are more pages */}
          {totalPages > 5 && currentPage < totalPages - 2 && (
            <li>
              <span className="px-3 py-2 text-gray-700">...</span>
            </li>
          )}

          {/* Last Page */}
          {totalPages > 5 && currentPage < totalPages - 1 && (
            <li>
              <button
                onClick={() => paginationHandler(totalPages)}
                className="px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-200"
              >
                {totalPages}
              </button>
            </li>
          )}

          {/* Next Button */}
          <li>
            <button
              onClick={() => paginationHandler(currentPage + 1)}
              className={`px-3 py-2 rounded-lg ${
               ( currentPage === totalPages || totalPages === 0)
                  ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
              disabled={currentPage === totalPages || totalPages === 0}
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SidebarPagination;