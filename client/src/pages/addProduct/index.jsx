import { useState, useEffect } from "react";
import ProductForm from "../../components/ProductForm";
import { addProduct } from "../../utils/product";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    image: null,
  });
  const [preview, setPreview] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (error) setError("");
    setFormData({ ...formData, [name]: value });
  };

  // Handle image selection and create a preview URL
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, image: file });

      const imageUrl = URL.createObjectURL(file);
      setPreview(imageUrl);
    }
  };

  useEffect(() => {
    return () => {
      if (preview) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [preview]);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const productData = new FormData();
    Object.keys(formData)?.forEach((key) => {
      productData.append(key, formData[key]);
    });
    try {
      const response = await addProduct(formData);
      if (response.status === true) {
        setFormData({
          title: "",
          description: "",
          price: "",
          category: "",
          image: null,
        });
      }
      setPreview(null);
      navigate("/");
    } catch (err) {
      setError("Product in not added");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Add Product
      </h2>
      <ProductForm
        formData={formData}
        handleSubmit={handleSubmit}
        handleImageChange={handleImageChange}
        handleChange={handleChange}
        preview={preview}
        error={error}
      />
    </div>
  );
};

export default AddProduct;
