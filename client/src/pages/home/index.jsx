import { useCallback, useEffect, useState } from "react";
import Loading from "../../components/Loading";
import ProductCard from "../../components/ProductCard";
import axios from "axios";
import { debounce, getProducts } from "../../utils/product";
import { productCategory } from "../../utils/data";
import Paginations from "../../components/Pagination";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [totalProducts, setTotalProducts] = useState("");
  const [category, setCategory] = useState("");
  const [keyword, setKeyword] = useState("");

  // Pagination
  const [pagination, setPagination] = useState({
    currentPage: 1,
    pageSize: 4,
    totalPages: 1,
  });

  const setPage = (page) =>
    setPagination((prev) => ({ ...prev, currentPage: page }));

  const getProductsList = async () => {
    try {
      const { currentPage, pageSize } = pagination;
      const query = `currentpage=${currentPage}&pagesize=${pageSize}&search=${keyword}&category=${category}`;
      const response = await getProducts(query);
      if (response.status === true) {
        setProducts(response.products);
        setTotalProducts(response.totalProducts);
        setPagination((prev) => ({
          ...prev,
          totalPages: response?.totalPages,
          currentPage: response.currentpage,
        }));
      }
    } catch (err) {
      throw new Error(err);
    }
  };

  const debouncedGetProductsList = useCallback(debounce(getProductsList, 500), [
    keyword,
    category,
    pagination.currentPage,
  ]);

  useEffect(() => {
    debouncedGetProductsList();
  }, [keyword, category, pagination.currentPage]);

  return (
    <main className="flex-grow">
      <div className="flex justify-between item-start mb-4">
        <h2 className="text-3xl font-medium mb-6">
          Total Products : {totalProducts}
        </h2>
        <div className="flex item-start">
          <select
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full border rounded"
            required
          >
            <option value="">Select Category</option>
            {productCategory?.map((item, i) => (
              <option key={i} value={item.value}>
                {item.title}
              </option>
            ))}
          </select>
          <input
            className="ms-2 border"
            type="text"
            name="keyword"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product, i) => (
          <Link to={`/product/${product._id}`} key={i}>
            <ProductCard
              key={product._id}
              imageUrl={product.imageUrl}
              title={product.title}
              price={product.price}
            />
          </Link>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        {products?.length > 0 && (
          <Paginations pagination={pagination} setPage={setPage} />
        )}
      </div>
    </main>
  );
};

export default HomePage;
