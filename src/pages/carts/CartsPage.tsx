import Cart from "../../components/Cart/Cart";
// import { useContext } from "react";
// import { ICart } from "../../models";
import useCarts from "../../hooks/cardsFetch";
import Loading from "../../components/Loader/Loader";
import ErrorPage from "../../components/ErrorPage/ErrorPage";

const CardPage = () => {
  const { carts, loading, error } = useCarts();
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
        {loading && <Loading/>}
        {error && <ErrorPage error={error}/>}
        <Cart cart={carts} />
      </div>
    </>
  );
};

export default CardPage;
