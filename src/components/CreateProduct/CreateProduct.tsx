import { useState } from "react";
import axios from "axios";

import { IProduct } from "../../models";

interface OnCreateProps {
  onCreate: (prod:IProduct) => void;
}

const productData: IProduct = {
  id: Math.random(),
  title: "",
  price: 100,
  description: "some desc",
  category: "wear",
  image: "https://i.pravatar.cc",
  rating: {
    rate: 8.8,
    count: 125,
  },
};

const CreateProduct = ({ onCreate }: OnCreateProps) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handlerSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    productData.title = value;
    if (value.trim().length === 0) {
      setError("Please enter valid title");
      return;
    }
    const response = await axios.post<IProduct>(
      "https://fakestoreapi.com/products",
      productData
    );
    console.log(response.data)
    onCreate(response.data);
    setValue("");
  };

  return (
    <form onSubmit={handlerSubmit}>
      <label>
        Title
        <input type="text" value={value} onChange={handleChange} />
      </label>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button type="submit">Create product</button>
    </form>
  );
};

export default CreateProduct;
