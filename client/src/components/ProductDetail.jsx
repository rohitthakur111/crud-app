import { Link } from "react-router-dom";
import { BASE_URI } from "../api";

const ProductDetails = ({ product, onDelete }) => {
  const { _id: id, imageUrl, title, price, description, category } = product;
  return (
    <div className="flex bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
      {/* Left side: Product image */}
      <div className="w-1/2">
        <img
          src={BASE_URI + "/" + imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right side: Product details */}
      <div className="w-1/2 p-6">
        <h2 className="text-2xl font-semibold mb-2">{title}</h2>
        <p className="text-xl font-bold text-blue-600 mb-4">${price}</p>
        <p className="text-gray-700 mb-4">{description}</p>
        <p className="text-sm text-gray-500 mb-6">Category: {category}</p>

        {/* Action buttons */}
        <div className="flex space-x-4">
          <Link
            to={`/product/${id}/edit`}
            className="bg-yellow-500 text-white px-4 py-2 rounded-lg"
          >
            Edit
          </Link>
          <button
            onClick={onDelete}
            className="bg-red-500 text-white px-4 py-2 rounded-lg"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
