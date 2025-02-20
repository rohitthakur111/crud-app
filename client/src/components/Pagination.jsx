const Paginations = ({ pagination, setPage }) => {
  const { currentPage, totalPages } = pagination;

  return (
    <nav aria-label="Page navigation">
      <ul className="inline-flex items-center space-x-1 text-lg">
        {/* Previous Button */}
        <li>
          <button
            href="#"
            className="cursor-pointer px-4 py-2 border border-gray-300 rounded-l-md text-gray-700 bg-white hover:bg-gray-200"
            onClick={() => setPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
        </li>

        {/* Page Numbers */}
        {[...Array(totalPages).keys()].map((number) => (
          <li key={number}>
            <button
              onClick={() => setPage(number + 1)}
              className={`px-4 py-2 border border-gray-300 ${
                number + 1 === currentPage
                  ? "bg-blue-500 text-white font-semibold"
                  : "text-gray-700 bg-white hover:bg-gray-200"
              }`}
            >
              {number + 1}
            </button>
          </li>
        ))}

        {/* Next Button */}
        <li>
          <button
            className="cursor-pointer px-4 py-2 border border-gray-300 rounded-r-md text-gray-700 bg-white hover:bg-gray-200"
            onClick={() => setPage(currentPage + 1)}
            disabled={currentPage >= totalPages}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Paginations;
