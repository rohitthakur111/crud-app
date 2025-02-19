import { BASE_URI } from "../api";

const ProductCard = ({ imageUrl, title, price }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
      <img
        src={BASE_URI + "/" + imageUrl}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-xl font-bold text-blue-600">${price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
