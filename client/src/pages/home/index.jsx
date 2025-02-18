import Loading from "../../components/Loading";
import ProductCard from "../../components/ProductCard";

const products = [
  {
    id: 1,
    image: "/images/product-01.webp",
    title: "Product 1",
    price: "29.99",
  },
  {
    id: 2,
    image: "/images/product-01.webp",
    title: "Product 2",
    price: "39.99",
  },
  {
    id: 3,
    image: "/images/product-01.webp",
    title: "Product 3",
    price: "49.99",
  },
  {
    id: 4,
    image: "/images/product-01.webp",
    title: "Product 4",
    price: "59.99",
  },
];

const HomePage = () => {
  //   return <Loading />;
  return (
    <main className="flex-grow max-w-7xl mx-auto py-8 px-4">
      <h2 className="text-3xl font-bold mb-6 text-center">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
          />
        ))}
      </div>
    </main>
  );
};

export default HomePage;
