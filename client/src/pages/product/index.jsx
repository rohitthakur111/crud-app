import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deleteProduct, getProduct } from "../../utils/product";
import ProductDetails from "../../components/ProductDetail";
import Loading from "../../components/Loading";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    if (!id) return;
    const getSingleProduct = async () => {
      try {
        const response = await getProduct(id);
        if (response.status === true) setProduct(response.product);
      } catch (err) {
        console.log("Error : ", err);
      }
    };
    getSingleProduct();
  }, []);

  const onDelete = async () => {
    try {
      const response = await deleteProduct(id);
      if (response.status === true) {
        navigate("/");
        alert("Prodcut deletd successfully");
      }
    } catch (err) {
      console.log("Error : ", err);
    }
  };
  if (product === null) return <Loading />;
  return (
    <div>
      <ProductDetails product={product} onDelete={onDelete} />
    </div>
  );
};

export default ProductPage;
