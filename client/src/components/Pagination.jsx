const Paginations = () => {
  return (
    <nav aria-label="Page navigation">
      <ul className="inline-flex items-center space-x-1 text-lg">
        {/* Previous Button */}
        <li>
          <a
            href="#"
            className="px-4 py-2 border border-gray-300 rounded-l-md text-gray-700 bg-white hover:bg-gray-200"
          >
            Previous
          </a>
        </li>

        {/* Page Numbers */}
        {[1, 2, 3, 4, 5].map((number) => (
          <li key={number}>
            <a
              href="#"
              className={`px-4 py-2 border border-gray-300 ${
                number === 3
                  ? "bg-blue-500 text-white font-semibold"
                  : "text-gray-700 bg-white hover:bg-gray-200"
              }`}
            >
              {number}
            </a>
          </li>
        ))}

        {/* Next Button */}
        <li>
          <a
            href="#"
            className="px-4 py-2 border border-gray-300 rounded-r-md text-gray-700 bg-white hover:bg-gray-200"
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Paginations;
