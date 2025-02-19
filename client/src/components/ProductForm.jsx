import { productCategory } from "../utils/data";

const ProductForm = ({
  formData,
  handleSubmit,
  handleImageChange,
  handleChange,
  preview,
  error,
}) => {
  return (
    <div className="max-w-lg mx-auto p-5 border rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Product Form</h2>
      {error && (
        <p className="py-4 px-2 text-lg bg-red-200 rounded mb-2 ">{error}</p>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        {/* Description */}
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        {/* Price */}
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        {/* Category */}
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        >
          <option value="">Select Category</option>
          {productCategory?.map((item) => (
            <option value={item.value}>{item.title}</option>
          ))}
        </select>

        {/* Image Upload */}
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="w-full p-2 border rounded"
          required
        />

        {/* Image Preview */}
        {preview && (
          <div className="mt-3">
            <p className="text-sm text-gray-500">Image Preview:</p>
            <img
              src={preview}
              alt="Preview"
              className="w-full h-40 object-cover border rounded"
            />
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
