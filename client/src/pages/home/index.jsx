import { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import ProductCard from "../../components/ProductCard";
import axios from "axios";
import { getProducts } from "../../utils/product";
import { productCategory } from "../../utils/data";
import Paginations from "../../components/Pagination";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("");
  const [keyword, setKeyword] = useState("");
  useEffect(() => {
    const getProductsList = async () => {
      try {
        const response = await getProducts();
        if (response.status === true) {
          setProducts(response.products);
        }
      } catch (err) {
        throw new Error(err);
      }
    };
    getProductsList();
  }, []);
  return (
    <main className="flex-grow">
      <div className="flex justify-between item-start mb-4">
        <h2 className="text-3xl font-medium mb-6">Total Products : </h2>
        <div className="flex item-start">
          <select
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full border rounded"
            required
          >
            <option value="">Select Category</option>
            {productCategory?.map((item) => (
              <option value={item.value}>{item.title}</option>
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
        {products.map((product) => (
          <ProductCard
            key={product._id}
            imageUrl={product.imageUrl}
            title={product.title}
            price={product.price}
          />
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <Paginations />
      </div>
    </main>
  );
};

export default HomePage;
