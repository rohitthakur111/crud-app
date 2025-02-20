import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProduct, upDateProduct } from "../../utils/product";
import Loading from "../../components/Loading";
import ProductForm from "../../components/ProductForm";
import { BASE_URI } from "../../api";

const EditPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
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
      const response = await upDateProduct(id, formData);
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
      alert("Product updated successfully");
      navigate("/");
    } catch (err) {
      setError("Product in not added");
    }
  };

  useEffect(() => {
    if (!id) return;
    const getSingleProduct = async () => {
      try {
        const response = await getProduct(id);
        if (response.status === true) {
          setProduct(response.product);
          setFormData((prev) => ({
            ...response.product,
            image: response.product.imageUrl,
          }));
          setPreview(BASE_URI + "/" + response.product.imageUrl);
        }
      } catch (err) {
        console.log("Error : ", err);
      }
    };
    getSingleProduct();
  }, []);

  if (product === null) return <Loading />;
  return (
    <>
      <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Edit Product
        </h2>
        <ProductForm
          formData={formData}
          handleSubmit={handleSubmit}
          handleImageChange={handleImageChange}
          handleChange={handleChange}
          preview={preview}
          error={error}
          required={false}
        />
      </div>
    </>
  );
};

export default EditPage;
