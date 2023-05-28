import axios from "axios";
import { ICart } from "../models";
import { useEffect, useState } from "react";

const useCarts = () => {
  const [carts, setCarts] = useState<ICart[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function fetchCarts() {
    try {
      setLoading(true);
      setError(false);
      const response = await axios.get<ICart[]>(
        "https://fakestoreapi.com/carts"
      );
      setCarts(response.data);
    } catch (e: unknown) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchCarts();
  }, []);

  return {
    carts,
    loading,
    error,
  };
};

export default useCarts;
