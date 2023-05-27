import axios from "axios";
import { IProduct } from "../models";
import { useEffect, useState } from "react";

const useProducts = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  function addProduct (product: IProduct) {
    setProducts(prev=> [...prev, product])
  }

  async function fetchProduct() {
    try {
      setLoading(true);
      setError(false);
      const response = await axios.get<IProduct[]>(
        "https://fakestoreapi.com/products"
      );
      setProducts(response.data);
    } catch (e: unknown) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProduct();
  }, []);

  return {
    products,
    loading,
    error,
    addProduct
  };
};

export default useProducts;
