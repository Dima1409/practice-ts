import Cart from "../../components/Cart/Cart";
// import { useContext } from "react";
// import { ICart } from "../../models";
import useCarts from "../../hooks/cardsFetch";

const CardPage = () => {
  const { carts } = useCarts();
  return (
    <>
      <div
        style={{
          width: "300px",
          border: "4px solid",
          margin: "4px auto",
          padding: "2px",
          textAlign: "center",
        }}
      >
        Carts
      </div>
      <div
        style={{
          display: "grid",
          justifyItems: "center",
          marginLeft: "auto",
          marginRight: "auto",
          gridGap: "4px",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          marginBottom: "20px",
        }}
      >
        <Cart cart={carts} />
      </div>
    </>
  );
};

export default CardPage;
